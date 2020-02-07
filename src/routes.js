import Cadastro from "./components/cadastro/Cadastro.vue";
import Home from "./components/home/Home.vue";

export const routes = [
  {
    _id: 0,
    path: "",
    name: "home",
    component: Home,
    titulo: "Home",
    menu: true
  },
  {
    _id: 1,
    path: "/cadastro",
    name: "cadastro",
    component: Cadastro,
    titulo: "Cadastro",
    menu: true
  },
  {
    _id: 1,
    path: "/cadastro/:id",
    name: "altera",
    component: Cadastro,
    titulo: "Cadastro",
    menu: false
  },
  {
    path: "*",
    component: Home,
    menu: false
  }
];
