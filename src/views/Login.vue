<template>
  <div id="login-wrap">
    <div class="login_container">
      <el-form :rules="rules" :label-position="labelPosition" label-width="80px" :model="data" ref="form1">
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="data.email" size="small"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="pwd">
          <el-input type="pwd" v-model="data.password" size="small"></el-input>
        </el-form-item>
        <el-form-item class="footer-wrap">
          <el-button type="primary" @click="submit" size="small">登录</el-button>
          <router-link to="register"><el-button size="small">去注册</el-button></router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      data: {
        email: '',
        pwd: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur','change'] }],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      isLogin:false,
    };
  },
  methods: {
    submit() {
      this.$refs.form1.validate((valid) => {
        if (valid) {
          this.$store.dispatch("signIn_", this.data).then(res => {
            if (res.code==0){
              alert("登录成功");
              this.$store.commit('set_token',res.data["token"])
              this.$store.commit('set_user',res.data["user_name"]);
              this.$router.push({
                  name:"Query"
              })
            }
        });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}

</script>
<style lang="less" scoped>
#login-wrap{
  height: calc(100vh - 65px);
  overflow-y: auto;
  min-width: 400px;
  .login_container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-form{
      width:350px;
      min-height: 200px;
      .footer-wrap{
        a{
          margin-left: 10px;
        }
      }
    }
  }
}
</style>