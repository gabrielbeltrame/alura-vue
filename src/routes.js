import Cadastro from "./components/cadastro/Cadastro.vue";
import Home from "./components/home/Home.vue";

export const routes = [
  {
    _id: 0,
    path: "",
    component: Home,
    titulo: "Home"
  },
  {
    _id: 1,
    path: "/cadastro",
    component: Cadastro,
    titulo: "Cadastro"
  }
];
