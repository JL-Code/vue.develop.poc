<template>
  <div style="height:calc(100% - 46px)">
    <template v-if="custom">
      <scroll ref="scroll" @pullingDown="_onPullingDown" @pullingUp="_onPullingUp">
        <!-- 滚动的内容 -->
        <ul class="list-view">
          <li v-for="(item,index) in items" :key="index">{{item.title}}</li>
        </ul>
      </scroll>
    </template>
    <template v-else>
      <!-- <van-popup v-model="visible" get-container="body" style="height:100vh;width:100vw"> -->
      <div v-if="visible" class="popup weui-animate-slide-up">
        <scroll ref="scroll" @pullingDown="_onPullingDown" @pullingUp="_onPullingUp">
          <!-- 滚动的内容 -->
          <ul class="list-view">
            <li v-for="(item,index) in items" :key="index">{{item.title}}</li>
          </ul>
        </scroll>
      </div>
      <!-- </van-popup> -->
      <van-button @click="openPopup">打开弹层</van-button>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import Scroll from "vue-slim-better-scroll";

export default {
  name: "HelloWorld",
  props: {
    custom: Boolean
  },
  components: { Scroll },
  data() {
    return {
      visible: false,
      mode: "",
      innerPage: 1,
      limit: 15,
      total: 0,
      items: []
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.limit);
    }
  },
  mounted() {
    console.log("HelloWord mounted");
    if (this.custom) {
      this.$nextTick(() => {
        this._onPullingDown();
        // this.$refs.scroll.refresh();
      });
    }
  },
  methods: {
    request(params = {}) {
      axios({
        url: `/api/values?page=${params.page ||
          this.page}&limit=${params.limit || this.limit}`
      }).then(res => {
        res = res.data;
        this.total = res.total;
        if (this.mode === "pullDownRefresh") {
          this.items = res.items || [];
          this.$refs.scroll.update(false);
        } else {
          if (this.limit != res.items.length) {
            this.$refs.scroll.update(false);
          }
          this.items = this.items.concat(res.items);
          this.$refs.scroll.update(false);
        }
      });
    },
    openPopup() {
      this.visible = true;
      this._onPullingDown();
    },
    _onPullingUp() {
      this.mode = "pullUpLoad";
      // TODO: 判断待优化 应改为首次加载不做赋值操作，从第二次开始赋值
      console.log("pullUpLoad");
      if (this.innerPage > this.pageCount) {
        // 当分页下标大于总页数时则没有更多数据了。
        this.$refs.scroll.update(true);
        return;
      } else {
        this.innerPage++;
      }
      this.request({ page: this.innerPage });
    },
    _onPullingDown() {
      console.log("pullDownRefresh");
      this.mode = "pullDownRefresh";
      this.innerPage = 1;
      this.noMore = false;
      this.request({ page: this.innerPage });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
ul {
  list-style: none;
}
li {
  padding: 15px;
  border-bottom: 1px solid #eeeeee;
}
.popup {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5000;
  background-color: #fff;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  backface-visibility: hidden;
  // transform: translate(0, 100%);
  transition: transform 0.3s;
}
.weui-animate-slide-up {
  animation: slideUp ease 0.3s forwards;
}
</style>
