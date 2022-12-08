import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index.js";
import store from "./store/index.js";
/*
Import thư viện icon fontawesome
*/
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//createApp(App).use(store).use(router).mount("#app");
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();
const app = createApp(App); //Khởi tạo app vue
app.use(router); //sử dụng router
app.use(store); //sử dụng store vuex
app.component("font-awesome-icon", FontAwesomeIcon); //Khai báo sử dụng component global
app.mount("#app");
