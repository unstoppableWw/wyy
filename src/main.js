import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "amfe-flexible"; //rem转化的工具
import { Button, Popup ,Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
const app=createApp(App)
app.use(store);
app.use(router);
app.use(Button);
app.use(Swipe);
app.use(SwipeItem);
app.use(Popup);

app.mount('#app')
