<!-- 友情链接模块 -->
<template>
  <div class="tFriendsBox">
    <div class="timeLine">2020/04/22</div>
    <el-card class="cardContent">
      <h4>1、下载vue套用前端模板</h4>
      <h4>2、修改对应组件</h4>
    </el-card >
    <div class="timeLine">2020/04/26</div>
    <el-card class="cardContent">
      <h4>1、重新编写前端路由和store状态管理</h4>
      <h4>2、开发后端接口服务，采用django</h4>
    </el-card>
    <div class="timeLine">2020/04/30</div>
    <el-card class="cardContent">
      <h4>1、上线部署到nginx，试运行</h4>
      <h4>2、重新接入iconfont css样式</h4>
    </el-card>
  </div>
</template>

<script>
  import {FriendUrlData} from '../utils/server.js'

  export default {
    data() { //选项 / 数据
      return {
        friendslink: ''//友情链接
      }
    },
    methods: { //事件处理器

    },
    components: { //定义组件

    },
    created() { //生命周期函数
      var that = this;
      FriendUrlData(function (msg) {
        // console.log(msg);
        that.friendslink = msg;
      })
    }
  }
</script>

<style>
  .tFriendsBox {
    background: #fff;
    padding: 15px;
    border-left: 1px solid #000000;
  }
  .timeLine{
    font-size: 18px;
    line-height: 30px;
    margin-left: -5px;
    margin-top: 10px;
  }
  .cardContent{
    line-height: 22px;
  }


</style>
