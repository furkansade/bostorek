import { createApp } from "vue";
import App from "@/App.vue"

const app = createApp(App);
app.mount('#app');

// const app = createApp({
//     data() {
//         return {
//             name: "sadeSoftware",
//         };
//     },
//     template: `<h2>Our company name is {{name}}!</h2>`,
// });

// app.mount('#app');