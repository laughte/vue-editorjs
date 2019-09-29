import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Editor from "vue-editor-js"
// import vueEditorJsCommon from "vue-editor-js";

Vue.config.productionTip = false;
Vue.use(Editor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
