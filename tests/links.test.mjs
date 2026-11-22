import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
// Compile the real helper in isolation; fixtures never enter site content.
const exports = {};
const code = ts.transpileModule(readFileSync(new URL('../src/lib/links.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
vm.runInNewContext(code, { exports, URL, Intl, require: () => ({ business: {} }) });
const { mapsUrl, whatsappUrl, phoneUrl, safeExternal, currency } = exports;

test('missing business data creates no external contact or map', () => {
  assert.equal(mapsUrl({city:'Nova Fátima',state:'PR'}),undefined);
  assert.equal(whatsappUrl(),undefined);
  assert.equal(phoneUrl(),undefined);
});
test('invalid or executable protocols never become external links', () => {
  for (const url of ['javascript:alert(1)','data:text/html,test','http://example.com','not a url']) assert.equal(safeExternal(url),undefined);
  assert.equal(safeExternal('https://example.com/'), 'https://example.com/');
});
test('phone links normalize punctuation and reject incomplete values', () => {
  assert.equal(phoneUrl('+55 (00) 00000-0000'),'tel:+5500000000000');
  assert.match(whatsappUrl('+55 (00) 00000-0000'),/^https:\/\/wa.me\/5500000000000\?text=/);
  assert.equal(whatsappUrl('123'),undefined);
  assert.equal(phoneUrl('a confirmar'),undefined);
});
test('coordinates including zero work; out-of-range coordinates do not', () => {
  assert.match(mapsUrl({coordinates:{latitude:0,longitude:0}}),/destination=0%2C0$/);
  assert.equal(mapsUrl({coordinates:{latitude:91,longitude:0}}),undefined);
  assert.equal(mapsUrl({coordinates:{latitude:0,longitude:Infinity}}),undefined);
});
test('explicit HTTPS map overrides coordinates and address', () => {
  assert.equal(mapsUrl({mapUrl:'https://maps.google.com/',address:'fixture'}),'https://maps.google.com/');
});
test('a confirmed address is URL encoded with city, state and country', () => {
  const link=mapsUrl({address:'Endereço de teste & validação',city:'Cidade de teste',state:'PR'});
  assert.equal(new URL(link).searchParams.get('destination'),'Endereço de teste & validação, Cidade de teste, PR, Brasil');
});
test('currency renders zero without treating it as missing', () => {
  assert.match(currency(0),/0,00/);
  assert.match(currency(12.5),/12,50/);
});
