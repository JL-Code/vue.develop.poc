<template>
  <div>
    <z-popup :visible="visible" fullscreen get-container="body">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="visible=false"
        @click-right="visible=false"
      />
      <HelloWorld custom></HelloWorld>
    </z-popup>
    <van-button @click="visible=true">打开Popup</van-button>
  </div>
</template>

<script>
import ZPopup from "../components/Popup";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "TestPopup",
  data() {
    return {
      visible: false
    };
  },
  components: { ZPopup, HelloWorld }
};
</script>

<style>
</style>
