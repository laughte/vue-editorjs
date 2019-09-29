<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <el-button @click="save">Save & Log</el-button>
    <el-button @click="load">Load</el-button>
    <el-button @click="loadData">Load Example</el-button>

    <v-app dark>asdfasdfasdf</v-app>
    <v-btn text>readmore</v-btn>
    <editor
      :autofocus="true"
      :init-data="initData"
      ref="editor"
      @save="onSave"
      @ready="onReady"
      @change="onChange"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import { Editor } from 'vue-editor-js'
export default {
  name: "home",
  components: {
    // Editor,HelloWorld
  },
  data() {
    return {
      initData: {},
      savedData: {}
    };
  },
  methods: {
    save() {
      this.$refs.editor.save();
    },
    load() {
      this.initData = this.savedData;
    },
    loadData() {
      this.initData = JSON.parse(
        '{"time":1558356864490,"blocks":[{"type":"paragraph","data":{"text":"First text"}},{"type":"paragraph","data":{"text":"Second text"}}],"version":"2.13"}'
      );
    },
    onSave(response) {
      console.log(JSON.stringify(response));
      this.savedData = response;
      this.$store.state.initData = response;
    },
    onReady() {
      console.log("ready");
    },
    onChange() {
      console.log("changed");
    }
  }
};
</script>
