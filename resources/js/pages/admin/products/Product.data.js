// data of form where "productAdd"
export const PRODUCT_FORM_ADD = {
    title: "Agrega un nuevo producto",
    url: "/api/product/add",
    button: "Agregar Producto",
    inputs: [
      { icon: "fa-solid fa-font", name: "name", type: "text", placeholder: "Ej: Zapatillas Negras", label: "Nombre del Producto", col: "col-lg-4" },
      { icon: "fas fa-dollar", name: "price", type: "number", placeholder: "Ej: 3400", label: "Precio", col: "col-lg-4" },
      { icon: "fa-solid fa-tags", name: "in_discount", type: "select", col: "col-lg-4", options: [{id:0, name:"Si"}, {id:1, name:"No"}], label: "Esta en descuento?" },
      { icon: "fa-solid fa-percent", name: "discount", type: "number", placeholder: "Ej: 40", label: "Descuento", col: "col-lg-3" },
      { icon: "fa-solid fa-cart-flatbed", name: "stock", type: "number", placeholder: "Ej: 30", col: "col-lg-2", label: "Stock" },
      { icon: "fas fa-border-all", name: "category", type: "select", col: "col-lg-4", options: [{id:0, name:"Gratis"}, {id:1, name:"Pago"}], label: "Categoria" },
      { icon: "fa-solid fa-truck-ramp-box", name: "shipment", type: "select", col: "col-lg-3", options: [{id:0, name:"Gratis"}, {id:1, name:"Pago"}], label: "Envio" },
      { icon: "fa-solid fa-image", name: "image", type: "file", label: "Imagen", col: "col-lg-4" },
      { icon: "fa-solid fa-rectangle-list", name: "description", type: "textarea", placeholder: "Hola", label: "Detalles del Producto", col: "col-lg-12" },
  ]
};


