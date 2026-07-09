export const CATEGORIES = ["Todos", "Accesorios", "Belleza", "Casa", "Cocina", "Libreria", "Mascotas", "Vestuario"] as const;

export type Category = typeof CATEGORIES[number];

export interface Product {
  id: string;
  numero_producto: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen_url: string;
}

export const products: Product[] = [
  { id: "1", numero_producto: "#001", nombre: "Bolsa al vacío", descripcion: "Ideal para organizar y ahorrar espacio.", precio: 2000, categoria: "Casa", imagen_url: "https://i.postimg.cc/Lh5kybB0/Bolsa-al-vacio.jpg" },
  { id: "2", numero_producto: "#002", nombre: "Maleta lápices 180 piezas", descripcion: "Completo set de arte con 180 piezas.", precio: 9990, categoria: "Libreria", imagen_url: "https://i.postimg.cc/TpWVx5sp/Maleta-lapices.jpg" },
  { id: "3", numero_producto: "#003", nombre: "Set tintura", descripcion: "Set completo de 4 piezas para aplicar tintura.", precio: 1200, categoria: "Belleza", imagen_url: "https://i.postimg.cc/MXH0sFb9/Set-tintura-4-pcs.jpg" },
  { id: "4", numero_producto: "#004", nombre: "Espejo Flor 3 piezas", descripcion: "Set de 3 hermosos espejos decorativos en forma de flor.", precio: 9990, categoria: "Casa", imagen_url: "https://i.postimg.cc/s1LYb4TR/Set-espejos-flor-3piezas.jpg" },
  { id: "5", numero_producto: "#005", nombre: "Espejo Mariposa 3 piezas", descripcion: "Set de 3 espejos decorativos de mariposas.", precio: 12990, categoria: "Casa", imagen_url: "https://i.postimg.cc/gr7V1Hgp/Set-espejos-mariposas-3piezas.jpg" },
  { id: "6", numero_producto: "#006", nombre: "Espejo Trébol 3 piezas", descripcion: "Set de 3 espejos decorativos en forma de trébol.", precio: 12990, categoria: "Casa", imagen_url: "https://i.postimg.cc/hhYLN12F/Set-3-espejos-trebol.jpg" },
  { id: "7", numero_producto: "#007", nombre: "Espejo curvo", descripcion: "Espejo decorativo curvo y elegante.", precio: 9990, categoria: "Casa", imagen_url: "https://i.postimg.cc/V5v97VBx/Espejo-curvo.jpg" },
  { id: "8", numero_producto: "#008", nombre: "Espejo sol", descripcion: "Lindo espejo redondo con diseño de sol.", precio: 4500, categoria: "Casa", imagen_url: "https://i.postimg.cc/z3vwdcS6/Espejo-sol.jpg" },
  { id: "9", numero_producto: "#009", nombre: "Pinches Flores", descripcion: "Pinches para el cabello con diseño de flores.", precio: 600, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/4mh6GH07/pinche-flores.jpg" },
  { id: "10", numero_producto: "#010", nombre: "Ositos Rosados Llavero", descripcion: "Tierno llavero de osito rosado.", precio: 1990, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/LnZtSgWJ/Osito-llavero.jpg" },
  { id: "11", numero_producto: "#011", nombre: "Masa mágica", descripcion: "Masa moldeable mágica y divertida.", precio: 990, categoria: "Libreria", imagen_url: "https://i.postimg.cc/cr8RWtzC/Masa-magica.jpg" },
  { id: "12", numero_producto: "#012", nombre: "Pijama Peludo", descripcion: "Pijama súper suave y abrigadito.", precio: 5500, categoria: "Vestuario", imagen_url: "https://i.postimg.cc/mhk3d5NC/Pijama.jpg" },
  { id: "13", numero_producto: "#013", nombre: "Maxibufanda Print", descripcion: "Bufanda grande con diseño animal print.", precio: 4600, categoria: "Vestuario", imagen_url: "https://i.postimg.cc/jC268FQn/Maxibufandas-animal-print.jpg" },
  { id: "14", numero_producto: "#014", nombre: "Bufanda gruesa", descripcion: "Bufanda gruesa ideal para el invierno.", precio: 3000, categoria: "Vestuario", imagen_url: "https://i.postimg.cc/xNXKcX1T/Maxibufandas.jpg" },
  { id: "15", numero_producto: "#015", nombre: "Bufanda Delgada", descripcion: "Bufanda delgada y cómoda para media temporada.", precio: 3600, categoria: "Vestuario", imagen_url: "https://i.postimg.cc/Yj0NXsfQ/Maxibufanda-delgada.jpg" },
  { id: "16", numero_producto: "#016", nombre: "Espanta moscas", descripcion: "Práctico espanta moscas para el hogar.", precio: 5000, categoria: "Casa", imagen_url: "https://i.postimg.cc/mhk3d5NK/Espanta-moscas.jpg" },
  { id: "17", numero_producto: "#017", nombre: "Set servicio niño", descripcion: "Set de cubiertos divertidos para niños.", precio: 1600, categoria: "Cocina", imagen_url: "https://i.postimg.cc/w3rXnQw3/Set-servicio-ninos.jpg" },
  { id: "18", numero_producto: "#018", nombre: "Inciensos surtidos", descripcion: "Varitas aromáticas para relajar tus espacios.", precio: 700, categoria: "Casa", imagen_url: "https://i.postimg.cc/F16ywVDP/Inciensos.jpg" },
  { id: "19", numero_producto: "#019", nombre: "Mini Perfume de bolsillo", descripcion: "Perfume formato mini, llévalo a todas partes.", precio: 2000, categoria: "Belleza", imagen_url: "https://i.postimg.cc/9z0Pxntp/Perfume-De-Bolsillo-variedades.jpg" },
  { id: "20", numero_producto: "#020", nombre: "2 Espejos Mariposas", descripcion: "Set de dos lindos espejos decorativos.", precio: 9990, categoria: "Casa", imagen_url: "https://i.postimg.cc/Wtzm9H6Q/Espejos-decorativos-2-Mariposas.jpg" },
  { id: "21", numero_producto: "#021", nombre: "Creming gato (Snack)", descripcion: "Snack cremoso y delicioso para tu gatito.", precio: 1500, categoria: "Mascotas", imagen_url: "https://i.postimg.cc/bs2xPS52/Snack-para-gatos.jpg" },
  { id: "22", numero_producto: "#022", nombre: "Chaleco mascota morado", descripcion: "Chaleco abrigadito para tu mascota.", precio: 3000, categoria: "Mascotas", imagen_url: "https://i.postimg.cc/vc6ryxK1/chaleco-mascota.jpg" },
  { id: "23", numero_producto: "#023", nombre: "Zapatos Pantuflas", descripcion: "Zapatos tipo pantufla, máxima comodidad.", precio: 7990, categoria: "Vestuario", imagen_url: "https://i.postimg.cc/vDT7PNL6/Zapatos.jpg" },
  { id: "24", numero_producto: "#024", nombre: "Mascarillas cara Flamenco", descripcion: "Mascarilla facial hidratante y blanqueadora.", precio: 500, categoria: "Belleza", imagen_url: "https://i.postimg.cc/Rqh1PDQL/Mascarilla-Flamenco-Manos-Blanqueadora-e-Hidratante-con-Vitamina-C.jpg" },
  { id: "25", numero_producto: "#025", nombre: "Mascarilla pie", descripcion: "Mascarilla especial para el cuidado de tus pies.", precio: 990, categoria: "Belleza", imagen_url: "https://i.postimg.cc/7bh1BWMN/Mascarilla-para-pies.jpg" },
  { id: "26", numero_producto: "#026", nombre: "Gel caracol", descripcion: "Gel regenerador con baba de caracol.", precio: 2000, categoria: "Belleza", imagen_url: "https://i.postimg.cc/Cd5CvQHH/Gel-Regeneradora-Baba-De-Caracol.jpg" },
  { id: "27", numero_producto: "#027", nombre: "Gel Aloe vera", descripcion: "Gel hidratante y calmante de aloe vera natural.", precio: 2000, categoria: "Belleza", imagen_url: "https://i.postimg.cc/vDT7PNL7/Gel-Regeneradora-Aloe-Vera.jpg" },
  { id: "28", numero_producto: "#028", nombre: "Rallador blanco", descripcion: "Práctico rallador plástico para tu cocina.", precio: 600, categoria: "Cocina", imagen_url: "https://i.postimg.cc/vDKrCt0B/Rallador-plastico.jpg" },
  { id: "29", numero_producto: "#029", nombre: "Pelapapas", descripcion: "Pelapapas ergonómico y fácil de usar.", precio: 600, categoria: "Cocina", imagen_url: "https://i.postimg.cc/3WqXzFtJ/Pela-papas.jpg" },
  { id: "30", numero_producto: "#030", nombre: "Mezquino y brocha", descripcion: "Set de espátula de silicona y brocha.", precio: 600, categoria: "Cocina", imagen_url: "https://i.postimg.cc/8sYRxmZD/Espatula-Brocha.jpg" },
  { id: "31", numero_producto: "#031", nombre: "Panera", descripcion: "Panera de diseño clásico para tu mesa.", precio: 1800, categoria: "Cocina", imagen_url: "https://i.postimg.cc/9zkdsYJK/Panera.jpg" },
  { id: "32", numero_producto: "#032", nombre: "Pinzas cocina", descripcion: "Pinzas resistentes para cocinar con seguridad.", precio: 600, categoria: "Cocina", imagen_url: "https://i.postimg.cc/z3QC4Fxv/Pinza-Cocina.jpg" },
  { id: "33", numero_producto: "#033", nombre: "Rejilla lavaplato", descripcion: "Filtro de rejilla para mantener tu lavaplatos destapado.", precio: 300, categoria: "Cocina", imagen_url: "https://i.postimg.cc/t7c38NBX/Filtro-Rejilla.jpg" },
  { id: "34", numero_producto: "#034", nombre: "Reglas niño", descripcion: "Reglas plegables con diseños divertidos.", precio: 400, categoria: "Libreria", imagen_url: "https://i.postimg.cc/9rqd2wkw/Reglas-Plegables.jpg" },
  { id: "35", numero_producto: "#035", nombre: "Banano niña", descripcion: "Banano colorido y súper cómodo para niñas.", precio: 1200, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/grjyMTqv/Bananos-para-ninas.jpg" },
  { id: "36", numero_producto: "#036", nombre: "Set 3 botellas", descripcion: "Set de botellas para mantenerte siempre hidratada.", precio: 3600, categoria: "Casa", imagen_url: "https://i.postimg.cc/QVzQvJ02/Set-3-botellas.jpg" },
  { id: "37", numero_producto: "#037", nombre: "Vasos con bombilla", descripcion: "Vaso de vidrio ondulado con tapa de bambú.", precio: 1600, categoria: "Cocina", imagen_url: "https://i.postimg.cc/NLn6ZkdK/Vaso-de-Vidrio-Ondulado-con-Tapa-de-Bambu-y-Bombilla.jpg" },
  { id: "38", numero_producto: "#038", nombre: "Espejos cartera", descripcion: "Espejo pequeño, perfecto para la cartera.", precio: 990, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/yWxhfbXm/Espejo-cartera.jpg" },
  { id: "39", numero_producto: "#039", nombre: "Libros para colorear", descripcion: "Libros de colorear para desarrollar la creatividad.", precio: 1000, categoria: "Libreria", imagen_url: "https://i.postimg.cc/JGBN8HF7/Libros-para-colorear.jpg" },
  { id: "40", numero_producto: "#040", nombre: "Guateros Kawaii", descripcion: "Guatero eléctrico de peluche, recargable y calientito.", precio: 5000, categoria: "Casa", imagen_url: "https://i.postimg.cc/s1xPnN4d/Guatero-Electrico-Peluche.jpg" },
  { id: "41", numero_producto: "#041", nombre: "Colador cocina malla fina", descripcion: "Colador de malla fina, práctico para colar líquidos y alimentos.", precio: 990, categoria: "Cocina", imagen_url: "https://i.postimg.cc/hhYLN12B/Colador-cocina-malla-fina.jpg" },
  { id: "42", numero_producto: "#042", nombre: "Guatero eléctrico", descripcion: "Guatero eléctrico recargable, sin peluche, calientito y práctico.", precio: 1200, categoria: "Casa", imagen_url: "https://i.postimg.cc/K4j79HDX/Guatero-electrico-sin-peluche.jpg" },
  { id: "43", numero_producto: "#043", nombre: "Inciensos 700", descripcion: "Set de inciensos aromáticos para relajar y perfumar tus espacios.", precio: 700, categoria: "Casa", imagen_url: "https://i.postimg.cc/s1LYb4wL/Inciensos-700.jpg" },
  { id: "44", numero_producto: "#044", nombre: "Lápices Hello Kitty 12 unidades", descripcion: "Set de 12 lápices con diseño de Hello Kitty.", precio: 1600, categoria: "Libreria", imagen_url: "https://i.postimg.cc/56FBJQr4/Lapiz-Hello-Kitty.jpg" },
  { id: "45", numero_producto: "#045", nombre: "Lápices Mickey 12 unidades", descripcion: "Set de 12 lápices con diseño de Mickey.", precio: 1600, categoria: "Libreria", imagen_url: "https://i.postimg.cc/F7Jyvk6h/Lapiz-Mickey.jpg" },
  { id: "46", numero_producto: "#046", nombre: "Llavero completo", descripcion: "Llavero completo con lindos accesorios.", precio: 1200, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/gn6VpL7Y/Llavero-completo.jpg" },
  { id: "47", numero_producto: "#047", nombre: "Llavero hamburguesa", descripcion: "Divertido llavero con forma de hamburguesa.", precio: 1200, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/gn6VpL70/Llavero-hamburguesa.jpg" },
  { id: "48", numero_producto: "#048", nombre: "Llavero perrito", descripcion: "Tierno llavero con diseño de perrito.", precio: 1990, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/SJz64YPs/Llavero-perrito.jpg" },
  { id: "49", numero_producto: "#049", nombre: "Llavero perrito con lentes", descripcion: "Adorable llavero de perrito con lentes.", precio: 1990, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/SJz64YPj/Llavero-perrito-con-lentes.jpg" },
  { id: "50", numero_producto: "#050", nombre: "Pinza flor", descripcion: "Pinza para el cabello con diseño de flor. Promo 2x$1000.", precio: 600, categoria: "Accesorios", imagen_url: "https://i.postimg.cc/F1zbPBgW/Pinza-flor.jpg" },
  { id: "51", numero_producto: "#051", nombre: "Mascarillas Flamenco variedades", descripcion: "Variedades de mascarillas faciales Flamenco. Promo 3x$1000.", precio: 500, categoria: "Belleza", imagen_url: "https://i.postimg.cc/K4j79HrJ/Variedades-mascarillas-Flamenco.jpg" }
];

export function formatCLP(n: number): string {
  return "$" + n.toLocaleString("es-CL");
}
