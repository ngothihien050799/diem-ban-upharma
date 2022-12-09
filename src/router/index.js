import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login/index.vue";
import Layer from "@/components/layout/index.vue";
import Dashboard from "@/views/dashboard/index.vue";
import Record from "@/views/record/index.vue";
import Detail from "@/views/jobdetails/index.vue";
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "home",
    redirect: "/thong-ke",
    component: Layer,
  },
  {
    path: "/",
    name: "thong-ke",
    component: Layer,
    children: [
      {
        path: "thong-ke",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/",
    name: "ho-so",
    component: Layer,
    children: [
      {
        path: "ho-so",
        component: Record,
      },
      {
        path: "thong-tin-ho-so/:id",
        component: Detail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
