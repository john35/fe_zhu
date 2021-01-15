<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view></router-view> -->
    <div class="header">
      <div class="header-box">
        <img src="./assets/images/logo.jpg" alt class="logo" />

        <div class="nav clearfix">
          <router-link to="/query">查猪价</router-link>

          <router-link to="/about">行情咨询</router-link>

          <router-link to="/comment">每日猪评</router-link>

          <router-link to="/b">生猪价格</router-link>

          <router-link to="/c">饲料行情</router-link>
        </div>
        <div class="input">
          <input type="text" placeholder="输入区号/地区/拼音" />
          <img src="./assets/images/search.jpg" alt />
        </div>

        <div class="sign" v-if="$store.state.isLogin">
          <!-- <router-link to="/signIn">登录</router-link> -->
          <router-link to="/login">{{$store.state.userName}}</router-link>
        </div>
        <div class="sign" v-else>
          <!-- <router-link to="/signIn">登录</router-link> -->
          <router-link to="/login">登录</router-link>
          <span>|</span>
          <router-link to="/register">注册</router-link>
        </div> 
        
      </div>
    </div>
    <router-view />
  </div>
</template>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  a {
    color: #666;
  }
  text-align: center;
  color: #666;
  .header {
    height: 63px;

    border-bottom: 1px solid #dbdbdc;
    .header-box {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      .logo {
        display: block;
        width: 186px;
        height: auto;
      }
      .nav {
        margin-left: 25px;

        a {
          display: block;
          line-height: 63px;
          padding: 0px 10px 0 10px;
          font-size: 16px;
          float: left;
          margin-right: 8px;
          &.router-link-active {
            border-bottom: 2px solid #179df2;
            color: #179df2;
          }
        }
      }
      .input {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        input {
          height: 29px;
          width: 192px;
          box-sizing: border-box;
          outline: 0;
          border: 1px solid #dbdbdc;
          border-right: 0;
          padding-left: 10px;
          border-radius: 3px 0 0 3px;
        }
        img {
          height: 29px;
          border-radius: 0 3px 3px 0;
          cursor: pointer;
        }
      }
      .sign {
        margin-left: 35px;
        font-size: 14px;
        color: #666;
        span {
          margin: 0 10px 0 10px;
        }
        a {
          color: #666;
        }
      }
    }
  }
}
</style>