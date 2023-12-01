export const AD_FORM_ADD = {
    title: "Agrega un nuevo anuncio",
    url: "/api/ad/add",
    button: "Agregar Anuncio",
    inputs: [
      { icon: "fa-solid fa-font", name: "title", type: "text", placeholder: "Ej: Zapatillas Negras", label: "Titulo del anuncio", col: "col-lg-6" },
      { icon: "fa-solid fa-font", name: "link", type: "text", placeholder: "https://", label: "Link del anuncio", col: "col-lg-6" },
      { icon: "fa-solid fa-image", name: "image", type: "file", label: "Imagen", col: "col-lg-4", id:"image-form-addAd", multiple: false},
  ]
};

export const AD_INITIAL_VALUES = {
    id: null,
    title: "",
    image: null,
    href: "",
  };
