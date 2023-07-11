export default {
  profile: {
    name: "Edgar Silva",
    image: "/image/picture.jpg",
    onClick() {
      console.log("PERIL");
    },
  },

  items: [
    {
      id: 0,
      title: "Home",
      icon: "fa-house",
      link: "/",
      onClick() {
        console.log("HOME");
      },
    },
    {
      id: 1,
      title: "Tags",
      icon: "fa-tag",
      link: "tags",
    },
    {
      id: 2,
      title: "Tablero",
      icon: "fa-square-poll-vertical",
      link: "square",
    },
    {
      id: 3,
      title: "Pagar Cuenta",
      icon: "fa-money-bills",
      link: "bill",
    },
    {
      id: 4,
      title: "Canal de Noticias",
      icon: "fa-rss",
      link: "rss",
    },

    {
      id: 2,
      title: "About",
      icon: "fa-fire",
      link: "about",
      onClick() {
        console.log("About");
      },
    },
  ],
};
