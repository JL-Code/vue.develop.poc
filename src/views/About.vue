<template>
  <div>
    <div v-if="visible" class="popup">
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
          <li>占位列表项</li>
        </ul>
      </div>
    </div>
    <van-button @click="open">打开弹层</van-button>
    <van-button @click="$router.back()">返回</van-button>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      visible: false
    };
  },
  mounted() {},
  methods: {
    open() {
      this.visible = true;
      this.initScroll();
    },
    initScroll() {
      this.$nextTick(() => {
        let element = this.$refs.wrapper;
        let scroll = new BScroll(element);
      });
    }
  }
};
</script>
<style lang="less">
.wrapper {
  height: 100vh;
  // overflow: auto;
}
.content {
  list-style: none;
  li {
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
  }
}
.popup {
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // z-index: 100;
  // overflow: auto;
  // background-color: #ffffff;
}
</style>
