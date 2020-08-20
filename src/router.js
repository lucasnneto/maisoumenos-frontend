import HelloWorld from "./components/HelloWorld";
import Tela2 from "./components/Tela2";
import Tela3 from "./components/Tela3";

export default [
  {
    name: "home",
    path: "/",
    component: HelloWorld,
  },
  {
    name: "tela2",
    path: "/tela2",
    component: Tela2,
  },
  {
    name: "tela3",
    path: "/tela3",
    component: Tela3,
  },
];
