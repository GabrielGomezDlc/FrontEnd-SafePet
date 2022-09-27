import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import './assets/main.css'

import 'primevue/resources/themes/saga-green/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'


import DataTable from "primevue/datatable";
import Column from "primevue/column";

import router from "./router"

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('pv-datatable', DataTable);
app.component('pv-column', Column);

app.mount('#app')
