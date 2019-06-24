<template>
  <div style="height:calc(100vh - 82px)">
    <list-view :url="url" :queryParams="queryParams">
      <!-- 滚动的内容 -->
      <template v-slot="slotProps">
        <ul class="list-view">
          <li v-for="(item,index) in slotProps.items" :key="index">{{item.title}}</li>
        </ul>
      </template>
    </list-view>
  </div>
</template>

<script>
import ListView from "../components/ListView";
export default {
  components: { ListView },
  data() {
    return {
      page: 1,
      limit: 15,
      url: "/api/values"
    };
  },
  computed: {
    queryParams() {
      return {
        page: this.page,
        limit: this.limit
      };
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style>
</style>
