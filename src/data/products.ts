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
  { id: "1", numero_producto: "#001", nombre: "Bolsa al vacío", descripcion: "Ideal para organizar y ahorrar espacio000.", precio: 2000, categoria: "Casa", imagen_url: "/Productos/Casa/Bolsa_al_vacío.jpeg" },
  { id: "2", numero_producto: "#002", nombre: "Maleta lápices 180 piezas", descripcion: "Completo set de arte con 180 piezas.", precio: 9990, categoria: "Libreria", imagen_url: "/Productos/Libreria/Maleta_lapices.jpeg" },
  { id: "3", numero_producto: "#003", nombre: "Set tintura", descripcion: "Set completo de 4 piezas para aplicar tintura.", precio: 1200, categoria: "Belleza", imagen_url: "/Productos/Belleza/Set_tintura_4_pcs.jpeg" },
  { id: "4", numero_producto: "#004", nombre: "Espejo Flor 3 piezas", descripcion: "Set de 3 hermosos espejos decorativos en forma de flor.", precio: 9990, categoria: "Casa", imagen_url: "/Productos/Casa/Set_espejos_3flor.jpeg" },
  { id: "5", numero_producto: "#005", nombre: "Espejo Mariposa 3 piezas", descripcion: "Set de 3 espejos decorativos de mariposas.", precio: 12990, categoria: "Casa", imagen_url: "/Productos/Casa/Set_espejos_mariposas_3piezas.jpeg" },
  { id: "6", numero_producto: "#006", nombre: "Espejo Trébol 3 piezas", descripcion: "Set de 3 espejos decorativos en forma de trébol.", precio: 12990, categoria: "Casa", imagen_url: "/Productos/Casa/Set_3_espejos_trebol.jpeg" },
  { id: "7", numero_producto: "#007", nombre: "Espejo curvo", descripcion: "Espejo decorativo curvo y elegante.", precio: 9990, categoria: "Casa", imagen_url: "/Productos/Casa/Espejo_curvo.jpeg" },
  { id: "8", numero_producto: "#008", nombre: "Espejo sol", descripcion: "Lindo espejo redondo con diseño de sol.", precio: 4500, categoria: "Casa", imagen_url: "/Productos/Casa/Espejo_sol.jpeg" },
  { id: "9", numero_producto: "#009", nombre: "Pinches Flores", descripcion: "Pinches para el cabello con diseño de flores.", precio: 600, categoria: "Accesorios", imagen_url: "/Productos/Accesorios/pinza_2flor.jpeg" },
  { id: "10", numero_producto: "#010", nombre: "Ositos Rosados Llavero", descripcion: "Tierno llavero de osito rosado.", precio: 1990, categoria: "Accesorios", imagen_url: "/Productos/Libreria/Osito_llavero.jpeg" },
  { id: "11", numero_producto: "#011", nombre: "Masa mágica", descripcion: "Masa moldeable mágica y divertida.", precio: 990, categoria: "Libreria", imagen_url: "/Productos/Libreria/Masa_magica.jpeg" },
  { id: "12", numero_producto: "#012", nombre: "Pijama Polar ", descripcion: "Pijama súper suave y abrigadito  talla standar.", precio: 5500, categoria: "Vestuario", imagen_url: "/Productos/Vestuario/Pijama.jpeg" },
  { id: "13", numero_producto: "#013", nombre: "Maxibufanda animal print", descripcion: "Bufanda grande con diseño animal print.", precio: 4600, categoria: "Vestuario", imagen_url: "/Productos/Vestuario/Maxibufandas_animal_print.jpeg" },
  { id: "14", numero_producto: "#014", nombre: "Maxibufanda gruesa", descripcion: "Bufanda gruesa ideal para el invierno.", precio: 3000, categoria: "Vestuario", imagen_url: "/Productos/Vestuario/Maxibufandas.jpeg" },
  { id: "15", numero_producto: "#015", nombre: "Maxibufanda unicolor", descripcion: "Bufanda delgada y cómoda para temporada.", precio: 3600, categoria: "Vestuario", imagen_url: "/Productos/Vestuario/Maxibufanda_delgada.jpeg" },
  { id: "16", numero_producto: "#016", nombre: "Espanta moscas", descripcion: "Práctico espanta moscas para el hogar.", precio: 5000, categoria: "Casa", imagen_url: "/Productos/Casa/Espanta_moscas.jpeg" },
  { id: "17", numero_producto: "#017", nombre: "Set servicio niño", descripcion: "Set de cubiertos divertidos para niños.", precio: 1600, categoria: "Cocina", imagen_url: "/Productos/Cocina/Set_servicio_niño.jpeg" },
  { id: "18", numero_producto: "#018", nombre: "Inciensos surtidos", descripcion: "Varitas aromáticas para relajar tus espacios.", precio: 700, categoria: "Casa", imagen_url: "/Productos/Casa/Inciensos.jpeg" },
  { id: "19", numero_producto: "#019", nombre: "Mini Perfume de bolsillo", descripcion: "Perfume formato mini. Lovali, Hello! Next, May We, Viole, VIP Night, Female, Rose&Lin, Yara, Je t'aime, Lara, CC029, Extreme, entre otros", precio: 2000, categoria: "Belleza", imagen_url: "/Productos/Belleza/Perfume_De_Bolsillo_variedades.jpeg" },
  { id: "20", numero_producto: "#020", nombre: "2 Espejos Mariposas", descripcion: "Set de dos lindos espejos decorativos.", precio: 9990, categoria: "Casa", imagen_url: "/Productos/Casa/Espejos_decorativos_2_Mariposas.jpeg" },
  { id: "21", numero_producto: "#021", nombre: "Creming gato (Snack)", descripcion: "Snack cremoso y delicioso para tu gatito.", precio: 1500, categoria: "Mascotas", imagen_url: "/Productos/Mascotas/Snack_para_gatos.jpeg" },
  { id: "22", numero_producto: "#022", nombre: "Chaleco mascota ", descripcion: "Chaleco abrigadito para tu mascota ( valores van dependiendo de la talla desde $2200).", precio:2200, categoria: "Mascotas", imagen_url: "/Productos/Mascotas/chaleco_mascota.jpeg" },
  { id: "23", numero_producto: "#023", nombre: "Zapatos plataforma", descripcion: "Zapatos super calentitos, con chiporro dentro desde la talla 35.", precio: 7990, categoria: "Vestuario", imagen_url: "/Productos/Vestuario/Zapatos.jpeg" },
  { id: "24", numero_producto: "#024", nombre: "Mascarillas cara Flamenco", descripcion: "Mascarilla facial hidratante y blanqueadora.", precio: 500, categoria: "Belleza", imagen_url: "/Productos/Belleza/Mascarilla_manos.jpeg" },
  { id: "25", numero_producto: "#025", nombre: "Mascarilla pie", descripcion: "Mascarilla especial para el cuidado de tus pies.", precio: 990, categoria: "Belleza", imagen_url: "/Productos/Belleza/Mascarilla_para_pies.jpeg" },
  { id: "26", numero_producto: "#026", nombre: "Gel caracol", descripcion: "Gel regenerador con baba de caracol.", precio: 2000, categoria: "Belleza", imagen_url: "/Productos/Belleza/Gel_Regeneradora_Baba_De_Caracol.jpeg" },
  { id: "27", numero_producto: "#027", nombre: "Gel Aloe vera", descripcion: "Gel hidratante y calmante de aloe vera natural.", precio: 2000, categoria: "Belleza", imagen_url: "/Productos/Belleza/Gel_Regeneradora_Aloe_Vera.jpeg" },
  { id: "28", numero_producto: "#028", nombre: "Rallador blanco", descripcion: "Práctico rallador plástico para tu cocina.", precio: 600, categoria: "Cocina", imagen_url: "/Productos/Cocina/Rallador_plastico.jpeg" },
  { id: "29", numero_producto: "#029", nombre: "Pelapapas", descripcion: "Pelapapas ergonómico y fácil de usar.", precio: 600, categoria: "Cocina", imagen_url: "/Productos/Cocina/Pela_papas.jpeg" },
  { id: "30", numero_producto: "#030", nombre: "Mezquino y brocha", descripcion: "Set de espátula de silicona y brocha.", precio: 600, categoria: "Cocina", imagen_url: "/Productos/Cocina/Espátula_Brocha.jpeg" },
  { id: "31", numero_producto: "#031", nombre: "Panera", descripcion: "Panera de diseño clásico para tu mesa.", precio: 1800, categoria: "Cocina", imagen_url: "/Productos/Cocina/Panera.jpeg" },
  { id: "32", numero_producto: "#032", nombre: "Pinzas cocina", descripcion: "Pinzas resistentes para cocinar con seguridad.", precio: 600, categoria: "Cocina", imagen_url: "/Productos/Cocina/Pinza_Cocina.jpeg" },
  { id: "33", numero_producto: "#033", nombre: "Rejilla lavaplato", descripcion: "Filtro de rejilla para mantener tu lavaplatos destapado.", precio: 300, categoria: "Cocina", imagen_url: "/Productos/Cocina/Filtro_Rejilla.jpeg" },
  { id: "34", numero_producto: "#034", nombre: "Reglas niño", descripcion: "Reglas plegables con diseños divertidos.", precio: 400, categoria: "Libreria", imagen_url: "/Productos/Libreria/Reglas_Plegables.jpeg" },
  { id: "35", numero_producto: "#035", nombre: "Banano niña", descripcion: "Banano colorido y súper cómodo para niñas.", precio: 1200, categoria: "Accesorios", imagen_url: "/Productos/Accesorios/Banano_niña.jpeg" },
  { id: "36", numero_producto: "#036", nombre: "Set 3 botellas", descripcion: "Set de botellas para mantenerte siempre hidratada.", precio: 3600, categoria: "Casa", imagen_url: "/Productos/Casa/Set_3_botellas.jpeg" },
  { id: "37", numero_producto: "#037", nombre: "Vasos con bombilla", descripcion: "Vaso de vidrio ondulado con tapa de bambú.", precio: 1600, categoria: "Cocina", imagen_url: "/Productos/Cocina/Vaso_con_bombilla.jpeg" },
  { id: "38", numero_producto: "#038", nombre: "Espejos cartera", descripcion: "Espejo pequeño, perfecto para la cartera.", precio: 990, categoria: "Accesorios", imagen_url: "/Productos/Accesorios/Espejo_cartera.jpeg" },
  { id: "39", numero_producto: "#039", nombre: "Libros para colorear", descripcion: "Libros de colorear para desarrollar la creatividad. 3 unidades por $1000", precio: 1000, categoria: "Libreria", imagen_url: "/Productos/Libreria/Libros_para_colorear.jpeg" },
  { id: "40", numero_producto: "#040", nombre: "Guateros Kawaii", descripcion: "Guatero eléctrico de peluche, recargable y calientito.", precio: 5000, categoria: "Casa", imagen_url: "/Productos/Casa/Guatero_kawai.jpeg" },
  { id: "41", numero_producto: "#041", nombre: "Colador cocina malla fina", descripcion: "Colador de malla fina, práctico para colar líquidos y alimentos.", precio: 990, categoria: "Cocina", imagen_url: "/Productos/Cocina/Colador_cocina_malla_fina.jpeg" },
  { id: "42", numero_producto: "#042", nombre: "Guatero eléctrico", descripcion: "Guatero eléctrico recargable, sin peluche, calientito y práctico.", precio: 1200, categoria: "Casa", imagen_url: "/Productos/Casa/Guatero_electrico.jpeg" },
  { id: "43", numero_producto: "#043", nombre: "Inciensos 700", descripcion: "Set de inciensos aromáticos para relajar y perfumar tus espacios.", precio: 700, categoria: "Casa", imagen_url: "/Productos/Casa/Inciensos_700.jpeg" },
  { id: "44", numero_producto: "#044", nombre: "Lápices Hello Kitty 12 unidades", descripcion: "Set de 12 lápices con diseño de Hello Kitty.", precio: 1600, categoria: "Libreria", imagen_url: "/Productos/Libreria/Lapiz_hello_kitty.jpeg" },
  { id: "45", numero_producto: "#045", nombre: "Lápices Mickey 12 unidades", descripcion: "Set de 12 lápices con diseño de Mickey.", precio: 1600, categoria: "Libreria", imagen_url: "/Productos/Libreria/Lapiz_mickey.jpeg" },
  { id: "46", numero_producto: "#046", nombre: "Llavero completo", descripcion: "Llavero completo con lindos accesorios.", precio: 1200, categoria: "Accesorios", imagen_url: "/Productos/Libreria/Llavero_completo.jpeg" },
  { id: "47", numero_producto: "#047", nombre: "Llavero hamburguesa", descripcion: "Divertido llavero con forma de hamburguesa.", precio: 1200, categoria: "Accesorios", imagen_url: "/Productos/Libreria/Llavero_hamburguesa.jpeg" },
  { id: "48", numero_producto: "#048", nombre: "Llavero perrito", descripcion: "Tierno llavero con diseño de perrito.", precio: 1990, categoria: "Accesorios", imagen_url: "/Productos/Libreria/Llavero_perrito.jpeg" },
  { id: "49", numero_producto: "#049", nombre: "Llavero perrito con lentes", descripcion: "Adorable llavero de perrito con lentes.", precio: 1990, categoria: "Accesorios", imagen_url: "/Productos/Libreria/Llavero_perrito_con_lentes.jpeg" },
  { id: "50", numero_producto: "#050", nombre: "Pinza flor", descripcion: "Pinza para el cabello con diseño de flor. Promo 2x$1000.", precio: 600, categoria: "Accesorios", imagen_url: "/Productos/Accesorios/Pinza_flor.jpeg" },
  { id: "51", numero_producto: "#051", nombre: "Mascarillas Flamenco variedades", descripcion: "Variedades de mascarillas faciales Flamenco. Promo 3x$1000.", precio: 500, categoria: "Belleza", imagen_url: "/Productos/Belleza/Variedades_mascarillas_Flamenco.jpeg" }
];

export function formatCLP(n: number): string {
  return "$" + n.toLocaleString("es-CL");
}