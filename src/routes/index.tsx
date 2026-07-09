import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CATEGORIES, formatCLP, products, type Product } from "@/data/products";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "56974701705";

type CartItem = { product: Product; qty: number };

function Index() {
  const [category, setCategory] = useState<string>("Todos");
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(
    () => (category === "Todos" ? products : products.filter((p) => p.categoria === category)),
    [category]
  );

  const cartItems = Object.values(cart);
  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.qty * i.product.precio, 0);

  const addToCart = (p: Product) => {
    setCart((c) => ({ ...c, [p.id]: { product: p, qty: (c[p.id]?.qty ?? 0) + 1 } }));
  };
  const decrement = (id: string) => {
    setCart((c) => {
      const item = c[id];
      if (!item) return c;
      if (item.qty <= 1) {
        const { [id]: _, ...rest } = c;
        return rest;
      }
      return { ...c, [id]: { ...item, qty: item.qty - 1 } };
    });
  };
  const remove = (id: string) => setCart((c) => {
    const { [id]: _, ...rest } = c;
    return rest;
  });

  const sendWhatsapp = () => {
    if (cartItems.length === 0) return;
    const lines = cartItems.map(
      (i) => `• ${i.qty}x ${i.product.numero_producto} ${i.product.nombre} — ${formatCLP(i.product.precio * i.qty)}`
    );
    const message = [
      "¡Hola Milki Remate! 🌸",
      "Me gustaría hacer el siguiente pedido:",
      "",
      ...lines,
      "",
      `*Total: ${formatCLP(totalPrice)}*`,
      "",
      "¿Podrían confirmarme disponibilidad y coordinar el delivery? 🚚 ¡Gracias!",
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-[color:var(--blush)] opacity-70 blur-2xl" />
          <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-[color:var(--sky-pastel)] opacity-70 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[color:var(--mint)] opacity-60 blur-2xl" />
        </div>
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-8 text-center sm:pt-16">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Edición · Catálogo Digital</p>
          <h1 className="font-display text-5xl font-black leading-none sm:text-7xl">
            Milki <span className="italic text-primary">Remate</span>
          </h1>
          <div className="mx-auto mt-4 flex max-w-sm items-center justify-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Lindas cositas</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
            Descubre nuestra selección de productos con cariño para tu día a día.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-5 py-2 shadow-sm backdrop-blur">
            <span className="text-lg">🚚</span>
            <span className="text-sm font-semibold text-primary">Realizamos Delivery</span>
          </div>
        </div>
      </header>

      {/* Category tabs */}
      <nav className="sticky top-0 z-30 border-y border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl overflow-x-auto">
          <div className="flex gap-2 px-4 py-3">
            {CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={
                    "shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition " +
                    (active
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-white/70 text-foreground hover:bg-white")
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Grid */}
      <main className="mx-auto max-w-6xl px-4 pb-32 pt-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-[color:var(--muted)]">
                <img
                  src={p.imagen_url}
                  alt={p.nombre}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-bold text-primary shadow">
                  {p.numero_producto}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-3">
                <h3 className="font-display text-base font-bold leading-tight">{p.nombre}</h3>
                <p className="line-clamp-2 text-xs text-muted-foreground">{p.descripcion}</p>
                <div className="mt-auto flex items-end justify-between gap-2 pt-1">
                  <span className="text-lg font-black text-primary">{formatCLP(p.precio)}</span>
                </div>
                <button
                  onClick={() => addToCart(p)}
                  className="mt-1 w-full rounded-full bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition hover:opacity-90"
                >
                  Agregar al pedido
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-white/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Milki Remate · Hecho con 🌸
      </footer>

      {/* Floating cart button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground shadow-xl transition hover:scale-105"
        aria-label="Ver carrito"
      >
        <span className="text-lg">🛍️</span>
        <span className="text-sm">Pedido</span>
        {totalItems > 0 && (
          <span className="ml-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-xs font-black text-primary">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-display text-2xl font-bold">Tu pedido</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted"
                aria-label="Cerrar"
              >✕</button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cartItems.length === 0 ? (
                <div className="mt-16 text-center text-muted-foreground">
                  <div className="text-5xl">🌷</div>
                  <p className="mt-3 text-sm">Aún no has agregado productos.</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {cartItems.map(({ product: p, qty }) => (
                    <li key={p.id} className="flex gap-3 rounded-xl border border-border/60 bg-card p-3">
                      <img src={p.imagen_url} alt={p.nombre} className="h-16 w-16 shrink-0 rounded-lg object-cover" />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold">{p.nombre}</p>
                            <p className="text-[11px] text-muted-foreground">{p.numero_producto}</p>
                          </div>
                          <button onClick={() => remove(p.id)} className="text-xs text-muted-foreground hover:text-destructive">Quitar</button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="inline-flex items-center rounded-full border border-border">
                            <button onClick={() => decrement(p.id)} className="px-2 py-0.5 text-sm">−</button>
                            <span className="min-w-6 text-center text-sm font-bold">{qty}</span>
                            <button onClick={() => addToCart(p)} className="px-2 py-0.5 text-sm">+</button>
                          </div>
                          <span className="text-sm font-black text-primary">{formatCLP(p.precio * qty)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-border bg-card px-5 py-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-display text-2xl font-black text-primary">{formatCLP(totalPrice)}</span>
              </div>
              <button
                onClick={sendWhatsapp}
                disabled={cartItems.length === 0}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[oklch(0.6_0.18_150)] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>Enviar pedido por WhatsApp</span>
                <span>🚚</span>
              </button>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">Realizamos delivery a domicilio</p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
