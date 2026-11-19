# Milki Remate · Catálogo digital

Catálogo web para **Milki Remate**, un emprendimiento de venta de productos de temporada con delivery. Las clientas ven los productos por categoría, arman su carrito y **envían el pedido directo por WhatsApp**, con el detalle y el total ya calculados.

## Funcionalidades

- **Catálogo con 50+ productos reales**, cada uno con su foto, número, descripción y precio en pesos chilenos
- **Filtro por categoría**: Accesorios, Belleza, Casa, Cocina, Librería, Mascotas y Vestuario
- **Vista ampliada con zoom**: al tocar un producto se abre su foto y se puede explorar con zoom, con mouse o con el dedo
- **Carrito de compras**: agregar, sumar o restar unidades, quitar productos y ver el total
- **Pedido por WhatsApp**: genera un mensaje con cada producto, su cantidad y el total, y abre el chat del negocio (`wa.me`) para coordinar disponibilidad y delivery
- Diseño adaptado a celular, que es donde se comparte y usa el catálogo

## Tecnologías

- **React 19** + **TypeScript**
- **TanStack Start / TanStack Router** sobre **Vite**
- **Tailwind CSS** y componentes **shadcn/ui** (Radix UI)
- Prototipado con **[Lovable](https://lovable.dev)**

## Mi trabajo

La base de la interfaz se generó con Lovable. Sobre esa base, yo:

- definí la estructura del catálogo (categorías, campos de cada producto, numeración)
- cargué los productos reales del negocio con sus precios y **fotos reales**, ordenadas por categoría
- adapté el flujo de pedido para que el mensaje de WhatsApp salga listo para confirmar
- ajusté textos, metadatos para compartir el enlace (Open Graph) y la información del sitio

La vista ampliada con zoom la desarrolló Lorena Uribe.

## Estructura

```
src/
├── data/products.ts     Catálogo: categorías y productos (nombre, precio, foto…)
├── routes/index.tsx     Página principal: filtro, tarjetas, carrito y envío por WhatsApp
├── routes/__root.tsx    Layout, fuentes y metadatos del sitio
└── components/ui/       Componentes de interfaz (shadcn/ui)
public/Productos/        Fotos de los productos, una carpeta por categoría
```

## Cómo ejecutarlo

```bash
git clone https://github.com/idkferr/milki-wsp-catalogo.git
cd milki-wsp-catalogo
npm install
npm run dev
```

Para agregar o cambiar productos, edita `src/data/products.ts` y deja la foto en `public/Productos/<Categoría>/`.
