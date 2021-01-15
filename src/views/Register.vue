<template>
    <div id="register-wrap">
      <div class="content-wrap">
        <el-form :rules="rules" :label-position="labelPosition" label-width="100px" :model="data" ref="form1">
            <el-form-item label="用户名：" prop="name">
                <el-input v-model="data.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="emial">
                <el-input v-model="data.emial" size="small"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input type="password" v-model="data.password" size="small"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="verifyPassword">
              <el-input type="password" v-model="data.verifyPassword" size="small"></el-input>
            </el-form-item>
            <el-form-item class="footer-wrap">
                <el-button type="primary" @click="submit" size="small">立即注册</el-button>
                <router-link to="login"><el-button size="small">已有账号，去登录</el-button></router-link>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.data.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        labelPosition: 'right',
        data: {
          name: null,
          emial: null,
          password: null,
          verifyPassword: null
        },
        rules: {
          name: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
          emial: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur','change'] }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
          verifyPassword: [{ required: true,validator: validatePass2, trigger: 'blur' }]
        }
      };
    },
    methods:{
      submit(){
          this.$refs.form1.validate(async (valid) => {
          if (valid) {
            const res = await this.$store.dispatch("regist_", {
              user:this.data.name,
              email:this.data.email,
              pwd:this.data.password
            })
            const msg = res.stat ? res.msg : '注册成功！'
            this.$message.success(msg);
          }
        });
      }
    }
}
</script>
<style lang="less" scoped>
#register-wrap{
  height: calc(100vh - 63px);
  overflow-y: auto;
  margin: 0 auto;
  min-width: 400px;
  .content-wrap{
    background: #fff;
    height: 100%;
    width: 80%;  display: flex;
    align-items: center;
    justify-content: center;
    margin:0 auto;
    .el-form{
      width: 350px;
      padding-top: 30px;
      padding-bottom: 15px;
      .footer-wrap{
        a{
          margin-left: 10px;
        }
      }
    }
  }
}
</style>