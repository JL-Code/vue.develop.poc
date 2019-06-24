<template>
  <div class="z-popup" :class="classList" ref="popup">
    <div class="z-popup__mask" v-if="visible"></div>
    <div class="z-popup__content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZPopup",
  props: {
    /**
     * 全屏显示
     */
    fullscreen: {
      type: Boolean,
      default: false
    },
    /**
     * 显示弹层
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * 是否锁定背景滚动
     */
    lockScroll: {
      type: Boolean,
      default: true
    },
    /**
     * 指定挂载的节点，可以传入选择器，【后期支持：返回节点的函数】
     */
    getContainer: {
      type: String,
      default: ""
    }
  },
  watch: {
    visible(val) {
      // TODO: 待解耦优化
      if (val) {
        if (this.lockScroll) {
          document.body.classList.add("z-overflow-hidden");
        }
        this.$emit("open");
      } else {
        if (this.lockScroll) {
          document.body.classList.remove("z-overflow-hidden");
        }
        this.$emit("close");
      }
    }
  },
  computed: {
    classList() {
      return {
        "z-popup_fullscreen": this.fullscreen
      };
    }
  },
  mounted() {
    if (!this.getContainer) {
      document.querySelector(this.getContainer).appendChild(this.$el);
    }
  },
  beforeDestroy() {
    // 在销毁 popup 前将 $el 移动回编译时的父级元素下。
    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  }
};
</script>

<style lang="less">
.z-overflow-hidden {
  overflow: hidden !important;
}
.z-popup_fullscreen {
  .z-popup__content {
    height: 100%;
  }
}
.z-popup__mask {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.z-popup__content {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 5000;
  background-color: #fff;
}
</style>
