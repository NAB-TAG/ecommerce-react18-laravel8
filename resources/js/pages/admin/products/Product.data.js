// data of form where "productAdd"
export const PRODUCT_FORM_ADD = {
    title: "Agrega un nuevo producto",
    url: "/api/product/add",
    button: "Agregar Producto",
    inputs: [
      { icon: "fa-solid fa-font", name: "name", type: "text", placeholder: "Ej: Zapatillas Negras", label: "Nombre del Producto", col: "col-lg-4" },
      { icon: "fas fa-dollar", name: "price", type: "number", placeholder: "Ej: 3400", label: "Precio", col: "col-lg-4" },
      { icon: "fa-solid fa-tags", name: "if_discount", type: "select", col: "col-lg-4", options: [{id:0, name:"No"}, {id:1, name:"Si"}], label: "Esta en descuento?" },
      { icon: "fa-solid fa-percent", name: "discount", type: "number", placeholder: "Ej: 40", label: "Descuento", col: "col-lg-3" },
      { icon: "fa-solid fa-cart-flatbed", name: "stock", type: "number", placeholder: "Ej: 30", col: "col-lg-2", label: "Stock" },
      { icon: "fas fa-border-all", name: "category_id", type: "select", col: "col-lg-4", options: [{id:0, name:"Ropa hombre"}, {id:1, name:"Ropa Mujer"}], label: "Categoria" },
      { icon: "fa-solid fa-truck-ramp-box", name: "shipment", type: "select", col: "col-lg-3", options: [{id:0, name:"Gratis"}, {id:1, name:"Pago"}], label: "Envio" },
      { icon: "", name: "colors", type: "color", col: "col-lg-auto", options: PRODUCT_COLORS, label: "Elige los colores" },
      { name: "sizes", type: "size", col: "col-lg-auto", label: "Elige las tallas" },
      { icon: "fa-solid fa-image", name: "image", type: "file", label: "Imagen", col: "col-lg-4", id:"image-form-addProducts", multiple: true},
      { icon: "fa-solid fa-rectangle-list", name: "description", type: "textarea", placeholder: "Hola", label: "Detalles del Producto", col: "col-lg-12" },
  ]
};


// Colors the products

export const PRODUCT_COLORS = [
    { id: 0, name: "red", rgba: "rgba(255, 0, 0, 0.82)", label: "Rojo"},
    { id: 1, name: "green", rgba: "rgba(0, 128, 0, 0.82)", label: "Verde"},
    { id: 2, name: "blue", rgba: "rgba(0, 0, 255, 0.82)", label: "Azul"},
    { id: 3, name: "brown", rgba: "rgba(165, 42, 42, 0.82)", label: "Marron"},
    { id: 4, name: "yellow", rgba: "rgba(255, 255, 0, 0.82)", label: "Amarillo"},
    { id: 5, name: "purble", rgba: "rgba(128, 0, 128, 0.82)", label: "Morado"},
    { id: 6, name: "black", rgba: "rgba(0, 0, 0, 0.82)", label: "Negro"},
]

// Sizes the products

export const PRODUCT_SIZES = [
    { id: 0, name: "XL", value: "XL"},
    { id: 1, name: "XXL", value: "XXL"},
    { id: 2, name: "M", value: "M"},
    { id: 3, name: "S", value: "SXL"},
    { id: 4, name: "L", value:"L"},

];

// Defaults values the products in Formik

export const PRODUCT_INITIAL_VALUES = {
    id: null,
    name: "",
    price: "",
    if_discount: "0",
    discount: "0",
    stock: 1,
    category_id: 0,
    shipment: 0,
    image: null,
    colors: [],
    sizes: [],
    coupons: [],
    status: 0,
    description: " ",
  };
