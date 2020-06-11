<!-- 留言模块 -->
<template>
  <div class="tMSGbox tcommonBox">
    <header>
      <h1>
        留言板
      </h1>
    </header>
    <section>
      <h2>1、博主是个小测试开发，喜欢追求技术性工作</h2>
      <h2>2、博主喜欢使用python语言，研究过scrapy爬虫，从事过web和UI、接口自动化项目</h2>
      <h2>3、博主开发过vue前端、Django后端以及springboot后端</h2>
      <h2>4、如果你感兴趣，给我留言，我们互加微信共同探讨，我等你~</h2>
      <div class="">
        <img src="static/img/other/liuyan.jpg" class="maxW" alt="">
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() { //选项 / 数据
      return {}
    },
    methods: { //事件处理器

    },
    watch: {},
    components: { //定义组件

    },
    created() { //生命周期函数

    }
  }
</script>

<style>
  .tMSGbox section h2 {
    font-weight: bold;
    line-height: 24px;
  }

  .tMSGbox section div {
    margin: 15px 0;
  }
</style>
