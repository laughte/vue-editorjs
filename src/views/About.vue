<template>
  <div class="about">
    <v-btn @click="save">Save & Log</v-btn>
    <v-btn @click="load">Load</v-btn>
    <v-btn @click="loadData">backUp</v-btn>
    <editor
      autofocus
      ref="about"
      :init-data="initData"
      @save="onSave"
      @ready="onReady"
      @change="onChange"
    />
  </div>
</template>


<script>
// import { Editor } from 'vue-editor-js'
export default {
  // components:{Editor},
  data() {
    return {
      initData: {},
      savedData: {}
    };
  },
  methods: {
    save() {
      this.$refs.about.save();
    },
    onSave(response) {
      console.log(JSON.stringify(response));
      this.savedData = response;
      this.$store.state.initData = response;
    },
    load() {
      this.initData = this.savedData;
    },
    loadData() {
      this.initData = this.$store.state.initData;
    },
    onReady() {
      console.log("ready");
      this.initData = this.$store.state.initData;
    },
    onChange() {
      console.log("changed");
    }
  }
};
</script>

<style>
</style>