import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { CATEGORIES, formatCLP, products, type Product } from "@/data/products";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "56974701705";
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/H0JsQQwgY5M6HoXvHbvsbr";
type CartItem = { product: Product; qty: number };

// ============================================================================
// 1. COMPONENTE DE IMAGEN CON ZOOM EXPLORABLE (Mantiene la estética suave)
// ============================================================================
function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMove = (clientX: number, clientY: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setPosition({ 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    });
  };

  return (
    <div 
      className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-300 ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
      style={{ touchAction: isZoomed ? "none" : "auto" }}
      onClick={() => {
        setIsZoomed(!isZoomed);
        if (isZoomed) setPosition({ x: 50, y: 50 });
      }}
      onMouseMove={(e) => {
        if (isZoomed) handleMove(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
      }}
      onTouchMove={(e) => {
        if (isZoomed) handleMove(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget.getBoundingClientRect());
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ 
          transformOrigin: `${position.x}% ${position.y}%`,
          transform: isZoomed ? "scale(2.2)" : "scale(1)"
        }}
        className="transition-transform duration-200 ease-out h-full w-full object-contain pointer-events-none p-4"
      />
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none rounded-full bg-primary/20 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-primary shadow-sm transition-opacity duration-300 ${isZoomed ? "opacity-0" : "opacity-100"}`}>
        🌸 Clic para explorar
      </div>
    </div>
  );
}

// ============================================================================
// 2. COMPONENTE DE LA TARJETA (Ajustado al estilo Girly & Pastel)
// ============================================================================
function ProductCard({ p, onAdd }: { p: Product; onAdd: (p: Product) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* --- TARJETA NORMAL --- */}
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <DialogTrigger asChild>
          <div className="flex flex-1 flex-col cursor-pointer">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={p.imagen_url}
                alt={p.nombre}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-primary shadow-sm">
                {p.numero_producto}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-3.5 pb-0">
              <h3 className="font-display text-base font-black leading-tight text-foreground/90">{p.nombre}</h3>
              <p className="line-clamp-2 text-xs text-muted-foreground/90">{p.descripcion}</p>
              <div className="mt-auto flex items-end justify-between gap-2 pt-1">
                <span className="text-lg font-black text-primary">{formatCLP(p.precio)}</span>
              </div>
            </div>
          </div>
        </DialogTrigger>

        {/* Botón de agregar estilizado en coherencia con la marca */}
        <div className="p-3.5 pt-2">
          <button
            onClick={() => onAdd(p)}
            className="w-full rounded-full bg-secondary text-secondary-foreground px-3 py-2 text-xs font-bold transition hover:bg-primary hover:text-primary-foreground shadow-sm"
          >
            Agregar al pedido
          </button>
        </div>
      </article>

      {/* --- TARJETA AMPLIADA (Estilo Romántico, Coherente y con Botón de Cerrar) --- */}
      <DialogContent className="max-w-2xl w-[92vw] p-0 border border-border/60 bg-card shadow-xl rounded-3xl overflow-hidden flex flex-col sm:flex-row gap-0 [&>button]:hidden">
        
        {/* BOTÓN CERRAR DISCRETO Y HERMOSO */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-border/80 text-muted-foreground hover:text-primary shadow-sm transition hover:scale-105"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Mitad Izquierda: FOTO */}
        <div className="relative w-full sm:w-1/2 aspect-square bg-muted border-b sm:border-b-0 sm:border-r border-border/50">
          <span className="absolute left-4 top-4 z-10 pointer-events-none rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow-md">
            {p.numero_producto}
          </span>
          <ZoomableImage src={p.imagen_url} alt={p.nombre} />
        </div>

        {/* Mitad Derecha: DETALLES */}
        <div className="flex w-full sm:w-1/2 flex-col p-6 sm:p-7 bg-card">
          <h2 className="font-display text-2xl font-black leading-tight mb-2.5 text-foreground pr-6">
            {p.nombre}
          </h2>
          
          <div className="flex-1 overflow-y-auto mb-5 text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap pr-1">
            {p.descripcion}
          </div>
          
          <div className="mt-auto pt-4 border-t border-border/40">
            <div className="text-2xl font-black text-primary mb-4">
              {formatCLP(p.precio)}
            </div>
            <button
              onClick={() => onAdd(p)}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:opacity-95 shadow-md shadow-primary/10"
            >
              <span>Agregar al pedido</span>
              <span className="text-base">🌸</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ============================================================================
// 3. PÁGINA PRINCIPAL
// ============================================================================
export function Index() {
  const [category, setCategory] = useState<string>("Todos");
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const filtered = useMemo(
    () => (category === "Todos" ? products : products.filter((p) => p.categoria === category)),
    [category]
  );

  const cartItems = Object.values(cart);
  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.qty * i.product.precio, 0);

  const handleAddToCart = (p: Product) => {
    setCart((c) => ({ ...c, [p.id]: { product: p, qty: (c[p.id]?.qty ?? 0) + 1 } }));
    setToastMsg(`¡${p.nombre} añadido a tu pedido! 🌸`);
  };

  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => setToastMsg(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);
  
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
      
      {/* NOTIFICACIÓN FLOTANTE (TOAST) - Combinando con el tono Blush/Rosa */}
      {toastMsg && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all animate-in slide-in-from-top-10 fade-in duration-300">
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-blush opacity-70 blur-2xl" />
          <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-sky-pastel opacity-70 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-mint opacity-60 blur-2xl" />
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
                      ? "bg-primary text-primary-foreground shadow-sm"
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

      {/* ZONA PRINCIPAL DE PRODUCTOS Y BANNERS */}
      <main className="mx-auto max-w-6xl px-4 pb-32 pt-6">
        
        {/* === BANNER DE WHATSAPP INTEGRADO AL ESTILO PASTEL Y GIRLY === */}
        <a 
          href={WHATSAPP_GROUP_LINK}
          target="_blank" 
          rel="noopener noreferrer"
          className="group mb-8 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-border/60 bg-gradient-to-br from-blush/30 via-lavender/20 to-sky-pastel/20 p-6 sm:p-7 shadow-sm transition-all hover:shadow-md relative overflow-hidden"
        >
          {/* Destellos circulares fluidos de fondo que combinan con tu body CSS */}
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-mint/30 blur-xl transition-all group-hover:scale-110" />
          <div className="absolute left-1/3 -bottom-8 h-20 w-20 rounded-full bg-blush/40 blur-xl" />
          
          <div className="flex items-center gap-4.5 z-10">
            {/* Ícono de WhatsApp dulcificado usando tonos de la paleta */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/95 text-[#25D366] shadow-sm transition-transform group-hover:scale-105 group-hover:rotate-2">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.91 6.556L.044 24l5.586-1.84A12 12 0 0 0 11.944 24c6.627 0 12-5.373 12-12s-5.373-12-12-12Z" />
                <path d="M19.04 16.53c-.34 1.13-1.86 2.05-3.07 2.21-.93.13-2.14-.06-3.87-.72a11.9 11.9 0 0 1-5.11-4.47 5.75 5.75 0 0 1-1.2-3.07c-.03-1.74 1.05-2.6 1.4-2.98.3-.32.74-.4 1.03-.4.26 0 .5.01.72.03.25.02.6-.09.87.56.28.69.96 2.37 1.05 2.55.08.18.14.39.02.62-.12.24-.18.39-.36.6-.17.2-.36.44-.5.58-.17.18-.34.37-.14.71.2.35.89 1.48 1.91 2.39 1.3 1.17 2.41 1.54 2.75 1.69.34.15.54.13.75-.1.21-.24.9-1.05 1.14-1.4.24-.36.48-.3.79-.18.32.11 2.03.96 2.38 1.13.34.17.57.26.65.41.08.15.08.85-.26 1.98Z" fill="#FFF"/>
              </svg>
            </div>
            
            <div className="text-left">
              <h2 className="font-display text-lg sm:text-xl font-black text-foreground/90">Mantente al día ✨</h2>
              <p className="text-xs sm:text-sm text-muted-foreground/90 mt-0.5">
                Únete a nuestro grupo de WhatsApp y entérate de todas las novedades antes que todos.
              </p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto z-10">
            <span className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-transform group-hover:scale-[1.02]">
              <span>Unirme al grupo</span>
              <span className="text-xs"></span>
            </span>
          </div>
        </a>
        {/* ================================ */}

        {/* Grid de Productos */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} onAdd={handleAddToCart} />
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