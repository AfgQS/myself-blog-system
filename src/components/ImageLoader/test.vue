<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" :duration="2000"  @loaded="handleLoaded"
    ></ImageLoader>
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods:{
    handleLoaded() {
      console.log("事件已经触发，图片已经加载完成！");
    }
  }
};
</script>
<style lang="less" scoped>
.test-container{
  width: 500px;
  height: 400px;
  border: 1px solid;
  margin: 20px auto;
}
</style>
