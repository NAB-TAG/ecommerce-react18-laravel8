export const CATEGORY_FORM_ADD = {
    title: "Agrega una nueva categoria",
    url: "/api/category/add",
    button: "Agregar Categoria",
    inputs: [
        { icon: "fa-solid fa-font", name: "name", type: "text", placeholder: "Ej: Ropa Hombres", label: "Nombre del Producto", col: "col-lg-6" },
        { icon: "fa-solid fa-font", name: "icon", type: "text", placeholder: "Ej: fas fa-home", label: "Clase del icono", col: "col-lg-6" },
  ]
};

export const CATEGORY_INITIAL_VALUES = {
    name: "Ropa hombre",
    icon: "",
  };
