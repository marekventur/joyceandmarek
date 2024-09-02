import "../assets/main.css";
import "../assets/pub.css";

import { createApp } from "vue";
import PubApp from "./PubApp.vue";

const app = createApp(PubApp);

app.mount("#app");
