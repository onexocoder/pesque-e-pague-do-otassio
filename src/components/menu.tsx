"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { menuCategories, menuItems } from "@/content/menu";
import { currency } from "@/lib/links";
import { Icon } from "./icon";
export function Menu() {
  const categories = [...menuCategories]
    .filter((c) => c.enabled)
    .sort((a, b) => a.order - b.order);
  const [selected, setSelected] = useState(categories[0]?.id ?? "");
  const [search, setSearch] = useState("");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const normalize = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt-BR");
  const items = menuItems.filter(
    (i) =>
      i.categoryId === selected &&
      normalize(`${i.name} ${i.description ?? ""}`).includes(normalize(search)),
  );
  return (
    <div className="menu-content">
      {menuItems.length >= 12 && (
        <label className="search-label">
          Buscar no cardápio
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="O que você procura?"
          />
        </label>
      )}
      <div
        className="menu-tabs"
        role="tablist"
        aria-label="Categorias do cardápio"
      >
        {categories.map((cat, index) => (
          <button
            ref={(el) => {
              tabs.current[index] = el;
            }}
            role="tab"
            key={cat.id}
            id={`tab-${cat.id}`}
            aria-controls={`panel-${cat.id}`}
            aria-selected={selected === cat.id}
            tabIndex={selected === cat.id ? 0 : -1}
            onClick={() => setSelected(cat.id)}
            onKeyDown={(e) => {
              let next = index;
              if (e.key === "ArrowRight")
                next = (index + 1) % categories.length;
              else if (e.key === "ArrowLeft")
                next = (index - 1 + categories.length) % categories.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = categories.length - 1;
              else return;
              e.preventDefault();
              setSelected(categories[next].id);
              tabs.current[next]?.focus();
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>
      {categories.length ? (
        <div
          role="tabpanel"
          id={`panel-${selected}`}
          aria-labelledby={`tab-${selected}`}
          tabIndex={0}
        >
          {items.length ? (
            <div className="menu-items">
              {items.map((item) => (
                <article className="menu-card" key={item.id}>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={480}
                      height={320}
                    />
                  )}
                  <div>
                    <h2>{item.name}</h2>
                    {item.description && <p>{item.description}</p>}
                    {item.price !== undefined && (
                      <strong>{currency(item.price)}</strong>
                    )}
                    {item.available === false && (
                      <span className="availability">
                        Indisponível no momento
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-menu">
              <Icon name="plate" />
              <p className="eyebrow">
                {categories.find((c) => c.id === selected)?.name}
              </p>
              <h2>
                {search
                  ? "Nenhum resultado por aqui."
                  : "Os sabores chegam em breve."}
              </h2>
              <p>
                {search
                  ? "Tente outro termo ou escolha outra categoria."
                  : "O cardápio desta categoria ainda não foi publicado. Itens e valores serão exibidos após confirmação."}
              </p>
              {search && (
                <button className="text-link" onClick={() => setSearch("")}>
                  Limpar busca
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="empty-menu">
          <h2>Cardápio em preparação.</h2>
          <p>As categorias serão publicadas após confirmação.</p>
        </div>
      )}
    </div>
  );
}
