import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Lottie from "vue3-lottie";
import App from "./App.vue";

const app = createApp(App);

app.use(Vue3Lottie);
app.use(createPinia());

app.mount("#app");
