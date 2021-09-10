import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FirstExercise from "../views/FirstExercise.vue";
import SecondExercise from "../views/SecondExercise.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/1",
    name: "1",
    component: FirstExercise,
  },
  {
    path: "/2",
    name: "2",
    component: SecondExercise,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
