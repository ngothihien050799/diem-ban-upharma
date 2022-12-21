import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  createMemoryHistory,
} from "vue-router";
import Login from "@/views/login/index.vue";
import Layer from "@/components/layout/index.vue";
import Dashboard from "@/views/dashboard/index.vue";
import Brief from "@/views/brief/index1.vue";
import Work from "@/views/work/index";
import Detail from "@/views/jobdetails/index.vue";
import NotFound from "@/views/404/index";
import Contact from "@/views/contact/index.vue";
import Area from "@/views/area/index.vue";
import Calender from "@/views/calender/index.vue";
import WareHouse from "@/views/wareHouse/index";
import Setting from "@/views/settingg/index";
import Account from "@/views/account/index";
import Default from "@/views/default/index";
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
    //alias: ["/login"]
  },
  {
    path: "/",
    name: "diem-ban",
    component: Layer,
    children: [
      {
        path: "thong-ke",
        component: Dashboard,
        alias: "/thong-ke",
      },
      {
        path: "ho-so",
        component: Brief,
      },
      {
        path: "cong-viec",
        component: Work,
      },
      {
        path: "thong-tin-ho-so/:id",
        component: Detail,
      },
      {
        path: "khu-vuc",
        component: Area,
      },
      {
        path: "lien-he",
        component: Contact,
      },
      {
        path: "diem-ban",
        component: WareHouse,
      },
      {
        path: "lich-KT",
        component: Calender,
      },
      {
        path: "cai-dat",
        component: Setting,
      },
      {
        path: "tai-khoan",
        component: Account,
      },
      {
        path: "mac-dinh",
        component: Default,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  // {
  //   path: "/",
  //   name: "ho-so",
  //   component: Layer,
  //   children: [
  //     {
  //       path: "ho-so",
  //       component: Record,
  //     },
  //     {
  //       path: "thong-tin-ho-so/:id",
  //       component: Detail,
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "-activeLinkMenu",
});

export default router;
