<template>
    <div class="register">
        <div class="stone_register_center stone_body_cover">
            <div class="stone_body_main">
                <div id="register">
                    <div class="stone_body_line">
                        <input class="width_full input_error" id="user" type="text" placeholder="昵称" v-model="user">
                        <div v-bind:class="userObject" >{{userErr}}</div>
                    </div>
                     <div class="stone_body_line">
                        <input class="width_full input_error" id="email" type="text" placeholder="邮箱" v-model="email">
                        <div v-bind:class="emailObject" >{{emailErr}}</div>
                    </div>
                    <div class="stone_body_line">
                        <input type="text" class="width_full" id="pwd" placeholder="密码" v-model="pwd">
                        <div v-bind:class="{stone_line_error:isPwdActive}">{{pwdErr}}</div>
                    </div>
                    <div class="stone_body_line">
                        <input type="text" class="width_full" id="repwd" placeholder="验证密码" v-model="repwd">
                        <div v-bind:class="{stone_line_error:isPActive}">{{rpwdErr}}</div>
                    </div>

                    <button class="stone_btn stone_btn_submit width_full" style="background-color: crimson" v-on:click="regist">注册</button>
                    <div class="isgologin">已有账号，<a href="http://www.iplaystone.com/static/web/login.html?lang=cn&amp;history=http%3A%2F%2Fwww.iplaystone.com%2F&amp;sso=">立即登录</a></div>
                </div>

                <div id="success">
                    <div class="stone_line_success">注册成功！</div>
                    <a id="login" class="stone_btn stone_btn_submit">立即登录</a>
                </div>
            </div>
        </div>

        <div id="success">
          <div class="stone_line_success">注册成功！</div>
          <a id="login" class="stone_btn stone_btn_submit">立即登录</a>
        </div>
      </div>
</template>
<script>
export default {
    data(){
        return {
            user:"",
            email:"",
            pwd:"",
            repwd:"",
            userErr:"",
            emailErr:"",
            isUserActive:true,
            isEmailActive:true,
            isPwdActive:true,
            isPActive:true,
            pwdErr:"",
            rpwdErr:"",
        };
    },
    computed:{
        userObject: function(){
          return {
            stone_line_err:this.isUserActive
          }
        },
        emailObject: function(){
          return {
            stone_line_err:this.isEmailActive
          }
        }
    },
    methods:{
            regist(){
                alert("hi");
                this.checkUser();
                this.checkEmail();
                this.checkPwd();
                this.checkRepwd();
                console.log(this.isUserActive);
                console.log(this.isEmailActive);
                console.log(this.isPwdActive);
                console.log(this.isPActive);
                if (this.isUserActive==true &&this.isPwdActive==true&&this.isPActive==true&&this.isEmailActive==true){
                  alert("hhh");
                  this.$store
                    .dispatch("regist_", {
                        user:this.user,
                        email:this.email,
                        pwd:this.pwd,
                    }).then(res => {
                        console.log(res)
                    });
                }
            },
            checkEmail(){
              var email = this.email;
              var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
              if(reg.test(email)){
                this.isEmailActive = true
                this.emailErr=""
              }else{
                this.isEmailActive = false
                this.emailErr = "邮箱格式不正确";
              }
            },
            checkUser(){
                    this.isUserActive = true
                    this.userErr = ""
                // var emailRe = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
                // phoneRe = /^1(3|4|5|7|8|6|9)\d{9}$/,
                // userVal = this.user;

                // if(userVal){
                //   if(emailRe.test(userVal) || phoneRe.test(userVal)){                    
                //       // return true;
                //       this.isUserActive = true
                //       this.userErr = ""
                //   }else{
                //       this.isUserActive = false
                //       this.userErr = "请输入正确的邮箱"
                //   }
                // }else{
                // this.isUserActive = false
                // this.userErr = "注册邮箱不能为空"
                // }
              },
            checkPwd(){
                  var pwdVal = this.pwd
                  if(pwdVal){
                    if(pwdVal.length >= 6 && pwdVal.length <= 20){
                      this.isPwdActive = true
                    }else{
                      this.isPwdActive = false
                      this.pwdErr = "密码长度必须为6-20位数字或字符"
                    }
                  }else{
                    this.isPwdActive = false
                      this.pwdErr = "密码长度必须为6-20位数字或字符"
                  }
              },
          checkRepwd(){
              var pwdVal = this.pwd,
                repwdVal =  this.repwd;
              if(pwdVal){
                if(pwdVal === repwdVal){
                  this.isPActive = true
                  this.rpwdErr = ""
                }else{
                  this.rpwdErr = "密码不一致"
                  this.isPActive = false
                }
              }else{
                this.rpwdErr="请确认密码"
                this.isPActive = false
              }
          }
    }
}

// var management = function(){
//   var _this = this,
//     lang = 'cn',
//     $user = $('#user'),
//     user,
//     $code = $('#code'),
//     $pwd = $('#pwd'),
//     pwd,
//     $repwd = $('#repwd'),
//     $order = $('#order'),
//     inputError = 'input_error',
//     inputPass = 'input_pass',
//     checked = {
//       user: false,
//       code: false,
//       pwd: false,
//       repwd: false,
//       order: false
//     },
//     registerUrl = 'https://stoneapi.snail.com/v2/user/register',
//     hadregistUrl = 'https://stoneapi.snail.com/v2/user/register/check-username-avail?username=',
//     loginUrl = 'https://stoneapi.snail.com/v2/user/security/login',
//     sendCodeUrl = 'https://stoneapi.snail.com/v2/user/register/send-code?username=',
    
//     historyUrl = '',
//     sso = '',
//     jumpToUrl = 'http://www.iplaystone.com',

//     changePageUrl = 'http://www.iplaystone.com/static/web/register.html?lang=',

//     goLoginUrl = 'http://www.iplaystone.com/static/web/login.html?lang=',

//     setLangUrl = 'https://stoneapi.snail.com/v2/env/change-lang?language=',

//     msg = {
//       cn: {
//         hoder1: '电子邮箱 / 手机号',
//         hoder2: '验证码',
//         hoder3: '设置密码6-20字符',
//         hoder4: '确认密码',
//         tx1: '该用户名已被使用',
//         tx2: '账号已存在',
//         tx3: '请输入正确的邮箱或手机号',
//         tx4: '注册账号不能为空',
//         tx5: '验证码不能为空',
//         tx6: '密码不能为空',
//         tx7: '密码长度必须为6-20位数字或字符',
//         tx8: '密码不一致',
//         tx9: '请确认密码',
//         et1: '获取验证码',
//         et2: '点击注册代表同意',
//         et3: '《Stone用户注册协议》',
//         et4: '注册',
//         et5: '用户注册',
//         et6: '立即登录',
//         et7: '注册成功！',
//         et8: '已有账号',
//         et9: '立即登录',
//       },
//       en: {
//         hoder1: 'E-mail/mobile phone number',
//         hoder2: 'Verification code',
//         hoder3: 'Set the password between 6-20 characters',
//         hoder4: 'Confirm password',
//         tx1: 'The username has been used',
//         tx2: 'Account already exists',
//         tx3: 'Please enter the correct e-mail or mobile phone number',
//         tx4: 'Registered account cannot be empty',
//         tx5: 'Verification code cannot be empty',
//         tx6: 'Password cannot be empty',
//         tx7: 'Password length must be between 6-20 digits or characters',
//         tx8: 'Password inconsistent',
//         tx9: 'Please confirm your password',
//         et1: 'Get verification code',
//         et2: 'Click to consent',
//         et3: '"Stone User Agreement"',
//         et4: 'Register',
//         et5: 'Sign Up',
//         et6: 'Sign in now',
//         et7: 'Successful!',
//         et8: 'Have an account',
//         et9: 'Log in',
//       }
//     };

//   _this.init = function(){
//     getLang();
//     setInterfaceLang();
//     getHistory();
//     addEvent();
//     stoneCommon.setHolder($user, msg[lang].hoder1);
//     stoneCommon.setHolder($code, msg[lang].hoder2);
//     stoneCommon.setHolder($pwd, msg[lang].hoder3);
//     stoneCommon.setHolder($repwd, msg[lang].hoder4);
//     setLang();
//   }

//   function getLang(){
//     lang = stoneCommon.getUrlParams('lang') || 'cn';
//   }

//   function getHistory(){
//     historyUrl = stoneCommon.getUrlParams('history');
//     sso = stoneCommon.getUrlParams('sso');
//   }

//   function setInterfaceLang(){
//     var setLangUrlTemp = setLangUrl + lang;
//     dataGetter.get(setLangUrlTemp, function(res){
//       console.log(res);
//     });
//   }

//   function setLang(){
//     $('.stone_btn_resend > span').text(msg[lang].et1);
//     $('.stone_line_order').text(msg[lang].et2);
//     // $('.stone_line_order + span').text(msg[lang].et3);
//     $('#register .stone_btn_submit').text(msg[lang].et4);
//     $('#success .stone_btn_submit').text(msg[lang].et6);

//     // if(lang == 'en'){
//     //   $('.switch_lang_container > .switch_lang_line').removeClass('switch_lang_cn').addClass('switch_lang_en').text('English');
//     // }

//     $('.switch_lang_lineto').eq(0).attr('href', changePageUrl + 'en&history=' + historyUrl +'&sso=' + sso);

//     var islogin;
//     islogin = goLoginUrl + 'cn&history=' + historyUrl +'&sso=' + sso;

//     if(lang == 'en'){
//       $('.switch_lang_container > .switch_lang_lineto').removeClass('switch_lang_cn_btn').addClass('switch_lang_en_btn');
//       $('.switch_lang_lineto').eq(0).attr('href', changePageUrl + 'cn&history=' + historyUrl +'&sso=' + sso);
//       islogin = goLoginUrl + 'en&history=' + historyUrl +'&sso=' + sso;
//     }

//     $('#text').text(msg[lang].et5);

//     $('#success .stone_line_success').text(msg[lang].et7);

//     $('.switch_lang_selecte > a').eq(0).attr('href', changePageUrl + 'cn&history=' + historyUrl +'&sso=' + sso);
//     $('.switch_lang_selecte > a').eq(1).attr('href', changePageUrl + 'en&history=' + historyUrl +'&sso=' + sso);

//     $('#register .stone_body_line').eq(4).find('a').text(msg[lang].et3);

//     $(".isgologin").html(''+msg[lang].et8+'，<a href="'+islogin+'">'+msg[lang].et9+'</a>');
    
//   }

//   function hadRegist(){
//     hadregistUrlTemp = hadregistUrl + $user.val();
//     dataGetter.get(hadregistUrlTemp, function(res){
//       if(res.code == 200){
//         stoneCommon.hideError($user);
//         checked.user = true;
//         sendCode();
//       }else{ 
//         stoneCommon.showError($user, msg[lang].tx1);
//         checked.user = false;
//       }
//     });
//   }

//   function registerFunc(){
//     dataGetter.post(registerUrl, {
//       username: $user.val(),
//       password: $pwd.val(),
//       tokenCode: $code.val()
//     }, function(res){

//       if(res.code == 200){
//         var $success = $('#success'),
//           $register = $('#register'),
//           $had = $('.stone_had');
//         user = $user.val();
//         pwd = $pwd.val();

//         $register.hide();
//         $success.fadeIn();
//         $had.fadeIn();
//         $('.stone_had').hide();
//       }else if(res.code == 400){
//         stoneCommon.showError($code, res.message);
//       }else if(res.code == 302){
//         stoneCommon.showError($code, msg[lang].tx2);
//       }else{
//         console.log(res.message);
//       }
//     });
//   }

//   function doLogin(){
//     dataGetter.post(loginUrl, {
//       account: user,
//       password: pwd
//     }, function(res){
//       if(res.code == 200){
//         if(historyUrl){
//           jumpToUrl = decodeURIComponent(historyUrl);
//         }
//         if(sso){
//           jumpToUrl = 'http://partner.iplaystone.com/'+ lang +'/index.html?sso=sso';
//         }
//         window.location.href = jumpToUrl;
//       }else{
//         alert('登录失败');
//       }
//     });
//   }

//   function sendCode(){
//     sendCodeUrlTemp = sendCodeUrl + $user.val();
//     dataGetter.get(sendCodeUrlTemp, function(res){
//       stoneCommon.setCountDown($('.stone_btn_resend'));
//       if(res.code != 200){
//         stoneCommon.showError($('#code'), res.message);
//       }
//     });
//   }

//   function addEvent(){
//     var $send = $('.stone_btn_resend_click');
//     // 获取验证码
//     $send.click(function(e){
//       if(checkUser()){
        
//         hadRegist();
//       }
//     });
//     // 失去焦点
//     $user.focus(function(){
//       stoneCommon.hideError($(this));
//       $(this).addClass(inputPass);
//     }).blur(function(){
//       checkUser();
//     });
//     // 失去焦点
//     $code.focus(function(){
//       stoneCommon.hideError($(this));
//       $(this).addClass(inputPass);
//     }).blur(function(){
//       checkCode();
//     });
//     // 失去焦点
//     $pwd.focus(function(){
//       stoneCommon.hideError($(this));~
//       $(this).addClass(inputPass);
//     }).blur(function(){
//       checkPwd();
//     });
//     // 失去焦点
//     $repwd.focus(function(){
//       stoneCommon.hideError($(this));
//       $(this).addClass(inputPass);
//     }).blur(function(){
//       checkRepwd();
//     });

//     $('.stone_btn_submit').click(function(){
//       if(checkUser() &&checkCode() && checkPwd() && checkRepwd()){
//         registerFunc();
//       }
//     });

//     $('#login').click(function(){
//       if($('#success').css('display') != 'none'){
//         doLogin();
//       }
//     });
//   }

//   function checkUser(){
//     var emailRe = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
//       phoneRe = /^1(3|4|5|7|8|6|9)\d{9}$/,
//       userVal = $user.val();

//     if(userVal){
//       if(emailRe.test(userVal) || phoneRe.test(userVal)){
//         stoneCommon.hideError($user);
        
//         return true;
//       }else{
//         stoneCommon.showError($user, msg[lang].tx3);
//         return false;
//       }
//     }else{
//       stoneCommon.showError($user, msg[lang].tx4);
//       return false;
//     }
//   }

//   function checkCode(){
//     var codeVal = $code.val();
//     if(codeVal){
//       stoneCommon.hideError($code);
//       return true;
//     }else{
//       stoneCommon.showError($code, msg[lang].tx5);
//       return false;
//     }
//   }

//   function checkPwd(){
//     var pwdVal = $pwd.val();
//     if(pwdVal){
//       if(pwdVal.length >= 6 && pwdVal.length <= 20){
//         stoneCommon.hideError($pwd);
//         return true;
//       }else{
//         stoneCommon.showError($pwd, msg[lang].tx7);
//         return false;
//       }
      
//     }else{
//       stoneCommon.showError($pwd, msg[lang].tx7);
//       return false;
//     }
//   }

//   function checkRepwd(){
//     var pwdVal = $pwd.val(),
//       repwdVal =  $repwd.val();
//     if(pwdVal){
//       if(pwdVal === repwdVal){
//         stoneCommon.hideError($repwd);
//         return true;
//       }else{
//         stoneCommon.showError($repwd, msg[lang].tx8);
//         return false;
//       }
//     }else{
//       stoneCommon.showError($repwd, msg[lang].tx9);
//       return false;
//     }
//   }

//   function checkOrder(){
//     var orderChecked = $order.prop('checked');
//     if(orderChecked){
//       return true;
//     }else{
//       alert('必需同意本协议');
//       return false;
//     }
//   }

  // function showError($ele, msg){
  //   $ele.removeClass(inputPass).addClass(inputError);
  //   $ele.nextAll('.stone_line_error').text(msg).show();
  // }

  // function hideError($ele){
  //   $ele.removeClass(inputError).removeClass(inputPass);
  //   $ele.nextAll('.stone_line_error').text('').hide();
  // }

// };
</script>
<style>
body{
  background-color: #f5f6f8;
}
/******************æ³¨å†Œå¤´éƒ¨æ ·å¼******************/
.stone_register_header{
  position: relative;
  padding: 65px 0 20px 0;
  line-height: 42px;
  height: 125px;
  /*overflow: hidden;*/
}

.stone_register_header .stone_header_logo{
  width: 135px;
  height: 38px;
  background: url(http://www.iplaystone.com/static/common/images/logo2.png) no-repeat;
  display: inline-block;
  float: left;
}
.stone_register_header #text{
  display: inline-block;
    line-height: 48px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    color: rgb(64, 64, 64);
    font-weight: bold;
}
.stone_register_header .stone_welcome{
  float: left;
  font-size: 18px;
  color: #dddde6;
}

.stone_register_header .stone_had{
  float: right;
  font-size: 14px;
  color: #7a7a80;
}

.stone_register_header .stone_had > a{
  color: #66a6ff;
}

/******************å†…å®¹åŒºæ ·å¼******************/
.stone_register_center{
  width: 900px;
  margin: 0 auto;
}

.stone_body_main{
  padding-top: 70px;
  width: 300px;
  margin: 0 auto;
}

.stone_body_cover{
  background-color: rgba(255, 255, 255, 1);
  height: 560px;
  border-radius: 3px;
}
.stone_btn_submit{
  width: 210px;
  display: block;
  background: url('http://www.iplaystone.com/images/btn_normal.png');
  background-position: 0 0;
  margin: 20px auto 0 auto;
  color: white;
  transition: width .3s ease-in;
}

.stone_btn_submit:hover{
  background-position: 0 -47px;
}
.stone_body_main .stone_body_line{
  width: 100%;
  height: 58px;
  white-space: nowrap;
}
.stone_body_line .linebody{
  height: 38px;
}
/*.stone_body_line input#code{
  float: left;
}*/
.stone_body_line a{
  cursor: pointer;
}
.stone_line_error{
  display: none;
  background: url('http://www.iplaystone.com/images/error.png') left no-repeat;
  padding-left: 15px;
  height: 20px;
  line-height: 21px;
  color: red;
}
.stone_body_main .stone_body_line .stone_line_error{
  display: none;
  background: url('http://www.iplaystone.com/images/error.png') left no-repeat;
  padding-left: 15px;
  height: 20px;
  line-height: 21px;
  color: red;
}

.stone_body_main .stone_body_line .stone_line_order{
  line-height: 41px;
  color: #808080;
  white-space: nowrap;
}

.stone_body_main .stone_line_order > *{
  float: left;
}
/*
.stone_body_main .stone_body_line *{
  cursor: auto;
}*/

.stone_body_main .stone_body_line a{
  color: #5a9ddf;
}

.stone_body_main .stone_body_line .stone_line_deep{
  height: 15px;
  overflow: hidden;
  margin-top: 5px;
  font-size: 12px;

}

.stone_body_main .stone_body_line .stone_line_weak{
  background: url('http://www.iplaystone.com/images/weak.png') center no-repeat;
}

.stone_body_main .stone_body_line  .stone_line_middle{
  background: url('http://www.iplaystone.com/images/middle.png') center no-repeat;
}

.stone_body_main .stone_body_line .stone_line_strong{
  background: url('http://www.iplaystone.com/images/strong.png') center no-repeat;
}

.stone_body_main .stone_body_line .stone_line_deep > span{
  display: inline-block;
  width: 33.33333%;
  text-align: center;
  color: white;
  float: left;
  overflow: hidden;
}

.stone_line_success{
  width: 255px;
  padding-top: 150px;
  background: url(http://www.iplaystone.com/images/done.png) 15px 0 no-repeat;
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #cfcfe5;
}

#success{
  display: none;
}
.isgologin{
  padding-top: 50px;
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(128, 128, 128);
}
.isgologin a{
  text-decoration: underline;
  color:#00aaff;
}




/******************åº•éƒ¨æ ·å¼******************/
.stone_register_footer h1{
  font-size: 14px;
  color: rgba(207, 207, 229, 0.15);
  text-align: center;
  padding-top: 75px
}

.switch_lang{
  top: 80px;
}

#stone_footer{
  background: transparent;
}

html, body{
  margin: 0;
  padding: 0;
  font-size: 14px;
  width: 100%;
  /*height: 100%;*/
  font-family: "Microsoft YaHei";
}

ul, li{
  list-style: none;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4{
  font-size: 14px;
  font-weight: 100;
  padding: 0;
  margin: 0;
}

a{
  text-decoration: none;
}

input{
  height: 38px;
  outline: none;
  border: 1px solid rgb(240, 241, 242);
  background-color: rgb(240, 241, 242);
  padding: 0 15px;
  color: #8a8a99;
}
input:focus{
  border: 1px solid #66A6FF;
}
.none{
  display: none;
}
/*内容居中*/
.stone_container{
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

/******************头部样式******************/
#stone_header{
  max-height: 70px;
}
#stone_header > *{
  box-sizing: content-box;
}
.stone_header{
  position: fixed;
  height: 70px;
  width: 100%;
  z-index: 9;
  background: url(http://www.iplaystone.com/images/hdbg.jpg) no-repeat center;
  
}

.stone_heder_container{
  height: 100%;
}
.stone_heder_top{
  position: relative;
  top:15px;
  float: right;
  max-width: 200px;
  height: 37px;
  line-height: 37px;
}
.stone_heder_top .stone_heder_top_text{
  font-size: 12px;
  font-family: "Microsoft YaHei";
  color: rgb(100, 103, 122);
}

.stone_heaer_cont{
  float: left;
  width: 1060px;
  height: 70px;
}
.stone_header .stone_header_logo,
.stone_header .stone_header_menu,
.stone_header .stone_header_search,
.stone_header .stone_header_user{
  float: left;
  height: 100%;
}

.stone_header .stone_header_logo{
  position: relative;
  top:-3px;
  display: inline-block;
  width: 175px;
  height: 100%;
  background: url(http://www.iplaystone.com/static/common/images/LOGO.png) no-repeat 0 16px;
}

.stone_header .stone_header_menu{
  position: relative;
  top:1px;
  font-size: 15px;
  font-family: "Microsoft YaHei";
  min-width: 545px;
}

.stone_header .stone_header_menu > li{
  display: inline-block;
  cursor: pointer;
  line-height: 67px;
  padding: 0 20px;
}
.stone_header .stone_header_menu > li.current,
.stone_header .stone_header_menu > li:hover{
  border-bottom: 2px solid #00aaff;
}
.stone_header .stone_header_menu > li > a{
  color: rgb(179, 181, 199);
  display: inline-block;
}
.stone_header .stone_header_menu > li.current a{
  color:#fff;
}
.stone_header .stone_header_menu > li:hover a,
.stone_header .stone_header_menu .stone_menu_current a{
  color: #fff;
}

.stone_header .stone_serch{
  position: relative;
  float: left;
  top:22px;
  width: 180px;
  height: 28px; 
  z-index: 99;
}
.stone_serch_input{
  width: 100%;
  height: 100%;
}
.stone_header .stone_serch .serch_input{
  height: 28px;
  padding:0 30px 0 15px;
  border-radius: 30px;
  border:1px solid #4c4d5c;
  width: 135px;
  background: none;
  font-size: 12px;
  font-family: "Microsoft YaHei";
  color: rgb(133, 135, 148);
  text-align: left;
}
.stone_header .stone_serch .serch_input::-webkit-input-placeholder{
  color: rgb(133, 135, 148);
}
.stone_header .stone_serch .serch_input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: rgb(133, 135, 148);
}
.stone_header .stone_serch .serch_input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: rgb(133, 135, 148);
}
.stone_header .stone_serch .serch_input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgb(133, 135, 148);
}
.stone_header .stone_serch .serch_btn{
  position: absolute;
  width: 20px;
  height: 28px;
  top: 1px;
  right: 8px;
  cursor: pointer;
  background: url(http://www.iplaystone.com/static/common/images/search.png) no-repeat center;
  }
.stone_serch .bor{
  position: absolute;
  top:40px;
  width: 178px;
  min-height: 1px;
  padding:10px 0;
  border:1px solid rgb(204, 204, 204);
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 99;
}
.stone_serch .bor ul{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.stone_serch .bor ul li{
  display: inline-block;
  padding:0 11px;
  width:156px;
  height: 31px;
  line-height: 31px;
}
.stone_serch .bor ul li a{
    text-align: left;
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.stone_serch .bor ul li a i {
    font-style: normal;
}
.stone_serch .bor ul li:hover{
  background-color: rgb(237, 239, 240);
}
.stone_serch .bor ul li .rec_num{
    position: relative;
    top: 9px;
    float: left;
    margin-right: 10px;
    display: inline-block;
    width: 14px;
    text-align: center;
    height: 14px;
    line-height: 14px;
    background-color: rgb(214, 214, 214);
    font-size: 12px;
    font-family: "SimSun";
    color: rgb(245, 246, 247);
}
.stone_serch .bor ul li .rec_text{
    font-size: 12px;
    font-family: "Microsoft YaHei";
    color: #4d4d4d;
    text-align: left;
    display: inline-block;
    width: 130px;
    height: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.stone_serch .bor ul li:first-child .rec_text,
.stone_serch .bor ul li:nth-child(2) .rec_text,
.stone_serch .bor ul li:nth-child(3) .rec_text{
  color: rgb(255, 102, 25);
}
.stone_serch .bor ul li:first-child .rec_num{
  background: url(http://www.iplaystone.com/images/rec_num1.png) no-repeat center;
}
.stone_serch .bor ul li:nth-child(2) .rec_num{
  background: url(http://www.iplaystone.com/images/rec_num2.png) no-repeat center;
}
.stone_serch .bor ul li:nth-child(3) .rec_num{
  background: url(http://www.iplaystone.com/images/rec_num3.png) no-repeat center;
}

.stone_serch .stone_serch_list{
  padding-bottom: 5px;
}
.stone_serch_list h3{
  font-size: 12px;
  font-family: "Microsoft YaHei";
  color: rgb(77, 77, 77);
  font-weight: bold;
  text-align: left;
  height: 20px;
  line-height: 20px;
  padding-left: 11px;
}
.stone_serch_list .serch_line{
  background: #e3e6ed;
  width: 158px;
  height: 1px;
  margin: 5px auto;
}
.stone_serch_list li a{
  color:#4d4d4d;
}
.stone_serch_list li a i{
  color:#ff6619;
}

.serch_mask{
  display: none;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 98;
}





.stone_register_header .stone_had > a {
  color: #66a6ff;
}

.stone_header .stone_header_user{
    width: auto;
    float: right;
    line-height:37px;
    color: rgba(255, 255, 255, 0.5);
    height: 37px;
    /*padding-top: 5px;*/
}

  .stone_header .stone_user_btn,
  .stone_header .stone_user_info{
    display: inline-block;
    float: left;
    height: 37px;
  }

  .stone_header .stone_user_btn{
    position: relative;
    float: right;
    top: 24px;
    right: 0;
  }

    .stone_header .stone_user_btn > span,
    .stone_header .stone_user_btn > a{
      display: inline-block;
      padding: 0 30px;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.5);
    }

    .stone_header .stone_user_btn .stone_btn_cart{
      background: url('http://www.iplaystone.com/static/common/images/shopping.png') no-repeat;
    }

    .stone_header .stone_user_btn .stone_btn_client{
      padding-right:0px;
      background: url(http://www.iplaystone.com/static/common/images/download.png) no-repeat center left;
    }

  .stone_header .stone_user_info{
    position: relative;
  }

.stone_header .stone_user_info .stone_info_logined{
    position: relative;
    /*overflow: hidden;*/
    width: auto;
    height: 100%;
    cursor: pointer;
}
.stone_header .stone_info_logined .stone_nickname{
    font-size: 12px;
    font-family: "Microsoft YaHei";
    color: rgb(100, 103, 122);
    display: inline-block;
    height: 100%;
    padding: 0 3px;
    padding-right: 25px;
    text-align: right;
    line-height: 39px;
    width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.stone_header .stone_info_logined .stone_nickname:hover{
color: rgb(142, 146, 173);
}
.stone_header .stone_user_info .stone_info_logined:hover{
  /*background-color: #1b1b26;*/
}

.stone_header .stone_user_info .stone_info_logined:hover .stone_arrow{
  transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
}

.stone_header .stone_user_info .stone_info_logined:hover .stone_user_dropdown{
  display: block;
}

.stone_header .stone_user_info .stone_arrow{
  position: absolute;
  width: 10px;
  height: 5px;
  top: 17px;
  right: 4px;
  transition: all .1s linear;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  background-image: url('http://www.iplaystone.com/static/common/images/arrow.png');
}

.stone_header .stone_info_logined .stone_user_dropdown{
  position: absolute;
  right: 0;
  display: none; 
  top: 35px;
  width: 135px;
  line-height: 46px;
  background: #fff;
  z-index: 11;
  color: #595959;
  border: 1px solid #999999;
}
.stone_header .stone_info_logined .stone_user_dropdown > .stone_info_img,
.stone_header .stone_info_logined .stone_user_dropdown .stone_info_img > img
{
  display: inline-block;
  width: 36px;
  height: 36px;
  overflow: hidden;
  border-radius: 50%;
  margin:0 auto;
}
.stone_header .stone_info_logined .stone_user_dropdown > .stone_info_img{
  position: relative;
  top: 15px;
  margin-left: 50px;
}
  .stone_header .stone_info_logined .stone_user_dropdown > a,
  .stone_header .stone_info_logined .stone_user_dropdown > div{
    padding: 0 15px;
    display: block;
    width: 135px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    color: #595959;
    box-sizing: border-box;
  }
  .stone_header .stone_info_logined .stone_user_dropdown > .stone_no_hover{
    color: #ff6619;
    border-bottom: 1px solid #e3e6ed;
  }
/*
    .stone_header .stone_info_logined .stone_user_dropdown > a:hover,
    .stone_header .stone_info_logined .stone_user_dropdown > div:hover{
      background-color: #2B293E;
      color: #c2bfc7;
    }*/

.stone_header .stone_user_info .stone_info_unlogined{
/*padding-left: 35px;*/
}

.stone_header .stone_user_info .stone_info_unlogined > span{
  cursor: pointer;
  border-right: 1px solid #3c3f50;
  padding-right: 10px;
}

.stone_header .stone_user_info .stone_info_unlogined > a{
  color: rgba(255, 255, 255, 0.5);
}

.stone_header .stone_user_info .stone_info_nickname{
float: left;
display: block;
max-width: 80px;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;

    }
/*
    .stone_header .stone_user_info .stone_info_img{
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      top: 20px;
      right: 20px;
    }*/

.stone_no_hover:hover{
  /*background-color: #242333!important;*/
  /*color: rgba(198, 198, 209, 0.5)!important;*/
}

/******************登录弹窗样式******************/
.login_pop{
  display: none;
  position: fixed;
  right: 0;
  left: 0;
  top: 220px;
  width: 340px;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  background-color: #f5f6f8;
  z-index: 100;
}
.banner .prev, .banner .next{
  z-index: 8 !important;
}

  .login_pop .login_pop_outer{
    position: relative;
    width: 100%;
    height: 100%;
    padding:40px;
    box-sizing: border-box;
  }

  .login_pop .login_pop_cancle{
    position: absolute;
    top: 15px;
    right: 15px;
    width: 14px;
    height: 14px;
    background: url('http://www.iplaystone.com/images/cancel.png');
    cursor: pointer;
  }

  .login_pop .login_pop_title{
    font-size: 14px;
    color: white;
    text-align: center;
    margin-bottom: 30px;
  }
 .login_pop_title img{
  display: inline-block;
 }
  .login_pop .login_pop_input{
    position: relative;
    width: 100%;
    height: 58px;
  }

    .login_pop .login_pop_input .login_pop_error{
      display: none;
      height: 20px;
      padding-left: 15px;
      color: red;
      background: url('http://www.iplaystone.com/static/common/images/error.png') left no-repeat;
    }

    .login_pop .login_pop_input > input{
      width: 100%;
      height: 38px;
      border: 1px solid rgb(240, 241, 242);
      background-color: rgb(240, 241, 242);
      outline: none;
      padding: 0 15px 0 30px;
      color: rgb(128, 128, 128);
      box-sizing: border-box;
    }
    .login_pop .login_pop_input > input:focus{
      border-color:#00aaff;
    }

    .login_pop .login_pop_input .login_pop_icon{
      position: absolute;
      top: 13px;
      left: 10px;
      width: 13px;
      height: 13px;
    }

    .login_pop .login_pop_input .login_pop_user{
      background: url('http://www.iplaystone.com/images/user.png') no-repeat;
    }

    .login_pop .login_pop_input .login_pop_pwd{
      background: url('http://www.iplaystone.com/images/key.png') no-repeat;
    }

  .login_pop .login_pop_btn{
    width: 100%;
    height: 46px;
    margin: 30px 0 15px 0;
  }

    .login_pop .login_pop_btn > button{
      width: 100%;
      height: 100%;
      text-align: center;
      background-color: white;
      border: none;
      color: white;
      background: url('http://www.iplaystone.com/images/btn_normal.png');
      cursor: pointer;
    }
/*    .login_pop .login_pop_btn > button:hover{
      background: url('http://www.iplaystone.com/images/btn_hover.png');
    }*/

  .login_pop .login_pop_forget,
  .login_pop .login_pop_register {
    font-size: 12px;
  }

  .login_pop .login_pop_forget{
    /*float: left;*/
    color: #808080;
  }

  .login_pop .login_pop_register{
    /*float: right;*/
    color: #5a9ddf;
  }
  .login_pop  .login_pop_box{
    text-align: center;
  }
  .login_pop_box span{
    display: inline-block;
    height: 15px;
    width: 1px;
    background: #999;
    margin: 0 20px;
    position: relative;
    top: 3px;
  }

/******************遮罩样式******************/
.stone_mask{
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.4);
}

/******************底部样式******************/
#stone_footer{
  background-color: #edeef0;
}

.stone_footer{
  max-height: 180px;
}
.stone_footer_container{
  height: 100%;
  padding: 40px 0;
  box-sizing: border-box;
}

.stone_footer_container > h1{
  text-align: center;
  font-size: 12px;
  font-family: "Microsoft YaHei";
  color: rgb(179, 179, 179);
}
.stone_footer_container > h1:first-child{
  font-size: 15px;
}
.stone_footer_container > h1:first-child .stont_footer_item{
  border:none;
  padding: 0;
}
.stont_footer_item{
  display: inline-block;
  position: relative;
  padding: 0 15px;
  height: 18px;
  line-height: 18px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(179, 179, 179);
  border-right: 1px solid rgba(0,0,0, 0.15);
  cursor: pointer;
}


.stont_footer_item:hover{
  color: rgb(128, 128, 128);
}

.stont_footer_item:last-child{
  border-right: none;
}

.stont_footer_weibo{
  background: url('http://www.iplaystone.com/images/wb.png') no-repeat center;
  background-position: 0 0;
}

/*.stont_footer_weibo:hover{
  background-position: 0 -31px;
}*/

.stont_footer_weixin{
  margin-left: 5px;
  background: url('http://www.iplaystone.com/images/wx.png') no-repeat center;
  background-position: 0 0;
}

/*.stont_footer_weixin:hover{
  background-position: 0 -31px
}
*/

.stont_footer_weixin,
.stont_footer_weibo{
  position: relative;
  min-width: 30px;
  height: 19px;
  line-height: 20px;
  padding-left:28px !important; 
}
.stont_footer_weixin > div{
  position: absolute;
  top: -40px;
  right: -126px;
  width: 112px;
  height: 122px;
  display: none;
  background: url(http://www.iplaystone.com/images/weixin_code.png) no-repeat;
  z-index: 2;
}

.stont_footer_weixin:hover div{
  display: block;
}

.stone_footer_container .stone_footer_stone{
  margin-top: 20px;
  text-align: center;
  color: #5e5e71;
}

.stone_footer_container .stone_footer_stone > span{
  color: rgb(179, 179, 179);
  font-size: 14px;
  padding-left: 60px;
  background: url('http://www.iplaystone.com/images/footer_stone_logo.png') no-repeat left;
}

.margin_top_10{
  margin-top: 10px;
  font-size: 12px!important;
}

/******************body样式******************/
.stone_body{
  background-color: #f5f6f8;
  overflow: hidden;
  padding-top:50px;
}

/******************子菜单样式******************/
.stone_subMenu,
.stone_content{
  float: left;
  min-height: 820px;
}

.stone_subMenu{
  width: 150px;
  border-right: 1px solid #363652;
  height: 100%;
}

.stone_content{
  width: 1030px;    /*1180*/
}

/******************按钮样式******************/
.stone_btn{
  font-size: 16px;
  height: 46px;
  line-height: 46px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  text-align: center;
}

.stone_btn_resend{
  position: relative;
  width: 145px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  border: 1px solid #5A9DDF;
  color: #5A9DDF;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  background-color: transparent;
}

.stone_btn_resend .stone_btn_resend_click{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('http://www.iplaystone.com/images/tranparent.png');
  cursor: pointer!important;

}

.stone_btn_resend:hover{
  background-color: rgba(255, 255, 255, 0.1);
}

.stone_btn_resend_pressed{
  background-color: rgba(255, 255, 255, 0.2);
}

.stone_btn_resend_unable{
  cursor: not-allowed;
  background-color: rgba(255, 255, 255, 0.1)!important;
  border: 1px solid #ddd;
  color: #ddd;
}

.stone_btn_resend_unable > div{
  display: none;
}

/**************输入框加提示样式**************/
.stone_line{
  position: relative;
  width: 100%;
  height: 58px;
}

.stone_line .stone_input_icon{
  width: 100%;
  height: 38px;
  padding: 0 10px 0 35px;
}

.stone_line .stone_icon{
  position: absolute;
  top: 13px;
  left: 13px;
  width: 14px;
  height: 14px;
}

.stone_line .stone_user{
  background: url('http://www.iplaystone.com/images/user.png') no-repeat;
}

.stone_line .stone_pwd{
  background: url('http://www.iplaystone.com/images/key.png') no-repeat;
}

.stone_input_error{
  display: none;
  background: url(http://www.iplaystone.com/images/error.png) left no-repeat;
  padding-left: 15px;
  height: 20px;
  line-height: 21px;
  color: red;
  clear: both;
}

/******************通用样式******************/
.margin_top_15{
  margin-top: 15px;
}

.margin_right_50{
  margin-right: 50px;
}

.margin_left_30{
  margin-left: 30px;
}

.margin_left_10{
  margin-left: 10px;
}
.width_full{
  width: 100%;
}

.width_half{
  width: 50%;
}

.width_380{
  width: 380px;
}

.width_320{
  width: 320px;
}
.width_300{
  width: 300px;
}

.width_315{
  width: 300px;
}

.width_290{
  width: 300px;
}

.width_215{
  width: 215px;
}

.width_90{
  width: 90px;
}

.block_center{
  display: block;
  margin: 0 auto;
}

.color_8a8a99{
  color: #8a8a99;
}

.color_5a9ddf{
  color: #5a9ddf;
}

.input_error{
  border: 1px solid red!important;
}

.input_pass{
  border: 1px solid #66A6FF!important;
}

.child_float_left{
  overflow: hidden;
}

.child_float_left > *{
  float: left;
}

/*版本过低提示*/
.stone_version{
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: #292a47;
}

.stone_version .stone_version_container{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1180px;
  height: 600px;
  margin: auto;
  background: url(http://www.iplaystone.com/static/common/images/version.png) ;
}

.stone_version .stone_version_container .stone_IE,
.stone_version .stone_version_container .stone_chrome,
.stone_version .stone_version_container .stone_continue{
  display: inline-block;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  /*border: 1px solid #F5F5F0;*/
}

.stone_version .stone_version_container .stone_IE,
.stone_version .stone_version_container .stone_chrome{
  width: 125px;
  height: 125px;
  top: 275px;
}


.stone_version .stone_version_container .stone_IE{
  right: 385px; 
}

.stone_version .stone_version_container .stone_chrome{
  left: 380px;
}

.stone_version .stone_version_container .stone_continue{
  width: 120px;
  height: 40px;
  left: 540px;
  bottom: 90px;
}

/******************切换语言******************/
.switch_lang{
  position: absolute;
  right: -5px;
  top: 7px;
  width: 110px;
  color: #7a7a80;
}

.switch_lang .switch_lang_container{
  position: relative;
}

.switch_lang_selecte{
  display: none;
  widows: 100%;
  height: 91px;
  padding-top: 10px;
  background: url('http://www.iplaystone.com/static/common/images/login_bg.png') no-repeat center;
}

.switch_lang .switch_lang_container:hover .switch_lang_selecte{
  display: block;
}

.switch_lang_line{
  width: 100%;
  display: block;
  height: 35px;
  line-height: 35px;
  padding-left: 40px;
  background: no-repeat 10px 13px;
  cursor: pointer;
  color: #7a7a80;
}
.switch_lang_lineto{
  display: block;
  width: 26px;
  height: 26px;
  cursor: pointer;
  margin-left: 43px;
  text-align: center;
  margin-bottom: 10px;
}
.switch_lang_en_btn{
  background-image: url(http://www.iplaystone.com/images/enbtn.png);
}

.switch_lang_cn_btn{
  background-image: url(http://www.iplaystone.com/images/zhbtn.png);
}
.switch_lang_cn_btn:hover , .switch_lang_en_btn:hover{
  background-position: 0 -27px;
}
.switch_lang_en{
  background-image: url('http://www.iplaystone.com/static/common/images/en.png');
}

.switch_lang_cn{
  background-image: url('http://www.iplaystone.com/static/common/images/cn.png');
}

.switch_lang_selecte .switch_lang_line:hover{
  color: #acacbf;
  background-color: rgba(255, 255, 255, 0.05);
}

#text{
  display: inline-block;
  font-size: 15px;
  font-family: "Microsoft YaHei";
  /*color: rgb(132, 131, 145);*/
  /*margin-left: 20px;*/
  line-height: 38px;
}


/******************tab切换******************/
.nav_tab{
  position: relative;
  width: 960px;
  height: 40px;
  margin:70px auto 20px;
}
.nav_tab span{
  display: inline-block;
  float: left;
  min-width: 130px;
  padding-left: 125px;
  height: 40px;
  line-height:49px;
  text-align: center;
  font-size: 16px;
  font-family: "Microsoft YaHei";
  color: rgb(64, 64, 64);
  font-weight: bold;
  background: url(http://www.iplaystone.com/images/logo2.png) no-repeat left;
}

/************************客服************************/
.stone_service{
     /* display: none;*/
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      width: 45px;
      background-color: #232437;
      
    }

    .stone_service_contanier{

    }

    .stone_service_item{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 45px;
      height: 45px;
      font-size: 12px;
      color: #abacb3;
      padding-top: 30px;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
      background: no-repeat 13px 8px;
    }

    .stone_service_service{
      background-image: url('http://www.iplaystone.com/images/service.png');
    }

    .stone_back_top{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 45px;
      cursor: pointer;
      background: url('http://www.iplaystone.com/images/top.png') no-repeat center;
      background-color: #578dd9;
    }*{
  box-sizing: border-box;
}
</style>