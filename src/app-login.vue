<template>
  <v-container
    fluid
    align-center
    justify-center
    class="pa-0 ma-0 login-container"
  >
    <v-card class="login-card">
      <v-layout row wrap>
        <!-- 左侧 -->
        <v-flex xs5 class="left-intro">
          <v-card-text class="intro-header">
            <p>立即扫描二维码</p>
            <p>订阅凝果开源社</p>
          </v-card-text>
          <v-card-text class="intro-img">
            <v-img
              :aspect-ratio="16/9"
              height="200"
              width="200"
              class="pa-0"
              style="margin: auto"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            </v-img>
          </v-card-text>
          <v-card-text class="intro-footer">
            <p>技术支持：@ningowood</p>
          </v-card-text>
        </v-flex>
        <!-- 右侧 -->
        <v-flex xs7 class="right-login">
          <v-card-title class="login-title">
            凝果开源社v0.01 @ 开源社区运营管理系统
          </v-card-title>
          <v-card-text>
            <v-form>
            <!-- v-model="valid" -->
              <v-layout row wrap>
                <v-flex xs12 class="mt-5 mx-5">
                  <v-text-field
                    v-model="form.username"
                    :counter="10"
                    label="用户名或邮箱号"
                    required
                  ></v-text-field>
                  <!-- :rules="nameRules" -->
                </v-flex>
                <v-flex xs12 class="mt-5 mx-5">
                  <v-text-field
                    v-model="form.password"
                    :counter="20"
                    label="密码"
                    required
                  ></v-text-field>
                  <!-- :rules="nameRules" -->
                </v-flex>
                <!-- 验证码 -->
              </v-layout>
            </v-form>
          </v-card-text>
          <v-card-actions class="mt-5">
            <v-spacer></v-spacer>
            <v-btn color="primary">登录</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  // import { namespace } from 'vuex-class'
  // const Nav = namespace('nav')

  @Component({
    name: 'AppLogin',
    components: {},
  })
  export default class AppLogin extends Vue {
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
    public form: object = {
      username: '',
      password: '',
    }
  }
</script>

<style scoped>
  .login-container {
    display: flex;
    height: 100vh;
    width: 100%;
  }

  .login-card {
    height: 500px;
    width: 800px;
  }

  /* 左侧 */

  .left-intro {
    height: 500px;
    background-color: #1976d3;
  }
  
  .intro-header {
    margin-top: 20px;
    text-align: center;
  }

  .intro-img {
    margin: 40px auto;
  }
  
  .intro-footer {
    text-align: center;
  }

  /* 右侧 */

  .right-login {
    height: 500px;
    /* background-color: white; */
  }

  .login-title {
    font-size: 20px;
    justify-content: center;
  }
</style>
