<!-- 关于我 -->
<template>
  <div class="tcommonBox">
    <header>
      <h1>
        关于我
      </h1>
    </header>
    <section>
      <div class="content">
        <h2>简介:</h2>
        <h2>
          &emsp;&emsp;我是90后，91年9月出生，快奔3了，老了啊，感觉没有年轻时的精力，老家是在宿迁，10年考上河南理工大学，计算机学院下信息管理与信息系统专业，转眼4年过去，想想自己学到了啥，哈哈，上课，逃课，开黑LOL，快乐和烦恼并存，14年6月毕业离开大学，有些茫然，来到上海这个魔都，找了第一份软件测试工作，开始了新的人生<br>
          &emsp;&emsp;测试工作大部分都是手工起家，然后精益求精，钻研一些新的知识新的方向，对于我这个萌新是在同事的引导下，学了python这个脚本语言，比java简单，后来自己尝试做起了自动化测试，大概在APP自动化做了2年后，走到了金融风控行业，工作中学习了前端vue和后端django，参与了部门平台化的开发和搭建、部署。<br>
          &emsp;&emsp;时间匆匆，工作快到6年，人的工作成长一方面靠自己的努力，另一方面要靠接触的人群，需要有人指引打开天窗，然后自己去开阔新的视野。当人有个一定的认识，有了自己的技术知识，就可以实现自己想做的事情。在这忙忙碌碌的工作中，找到属于自己的一片天吧。
        </h2>
        <p>
          <img src="static/img/owner/dahai.jpg" alt="" class="aboutmeImg">
        </p>
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
    components: { //定义组件

    },
    created() { //生命周期函数

    }
  }
</script>

<style>

  .aboutmeImg {
    padding-top: 20px;
    max-width: 100%;
  }

  .tcommonBox p a {
    color: #01AAED !important;
  }

  .tcommonBox p a:hover {
    color: #48456d !important;
  }

  .tcommonBox p i {
    font-style: italic;
  }

  .tcommonBox p b {
    font-weight: bold;
  }
</style>
