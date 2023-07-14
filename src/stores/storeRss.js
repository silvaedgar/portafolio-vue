//const { defineStore } = require("pinia");

import { defineStore } from "pinia";

export const feedStore = defineStore({
  id: "feedStore",

  state: () => {
    return {
      //Se almacenan los URL de noticias
      sources: [
        {
          id: crypto.randomUUID(),
          name: "Cnn en Espanol",
          //  url: "https://hacks.mozilla.org/feed",
          url: "https://cnnespanol.cnn.com/feed",
        },
      ],

      // Noticias del feed actual
      current: {
        source: null,
        items: null,
      },
    };
  },

  actions: {
    async loadSource(source) {
      try {
        const resp = await fetch(source.url);
        let text = await resp.text();
        text = text.replace(/content:encoded/g, "content");
        text = text.replace(/content:encoded/g, "content");

        const domParser = new DOMParser();
        let doc = domParser.parseFromString(text, "text/xml");
        const posts = [];

        doc.querySelectorAll("item, entry").forEach((item) => {
          const post = {
            title: item.querySelector("title").textContent ?? "Sin Titulos",
            content: item.querySelector("content").textContent ?? "",
          };

          posts.push(post);
        });
        this.current.items = [...posts];
        this.current.source = source;
      } catch (error) {
        alert("ERROR LEYENDO DATOS");
        console.log(error);
      }
    },
     async registerNewSource(url) {
       console.log("REGS ", url.value)
      try {
        const resp = await fetch(url.value);
        let text = await resp.text();
        const domParser = new DOMParser();
        let doc = domParser.parseFromString(text, "text/xml");
         const title = doc.querySelector("channel title, feed title");
         console.log("CANAL ", title.textContent)
        const source = {
          id: crypto.randomUUID(),
          name: title.textContent,
          url
        };

        this.sources.push(source);
      } catch (error) {
        alert("Error Agregando Canal RSS");
      }
    },
  },
});
