import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import store from './store/index';

const app = createApp(App);
app.config.devtools = true;
app.use(router);
app.use(store);

app.mount('#app');
importDirectives();
importComponents();

function importDirectives() {
}

function importComponents() {
}