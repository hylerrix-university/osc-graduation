<template>
  <v-container>
    <v-layout>
      <v-spacer></v-spacer>
      <v-flex xs6>
        <v-card>
          <v-toolbar>我的资料</v-toolbar>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field
                class="pa-2"
                box
                hide-details
                label="用户名"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                class="pa-2"
                box
                hide-details
                label="昵称"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                class="pa-2"
                box
                hide-details
                label="账号"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                class="pa-2"
                box
                hide-details
                label="密码"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                class="pa-2"
                box
                hide-details
                label="邮箱"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                class="pa-2"
                box
                hide-details
                label="Github"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                class="pa-2"
                box
                hide-details
                label="头像"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                class="pa-2"
                box
                hide-details
                label="性别"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn>更新</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'AdminProfile',
    components: {},
  })
  export default class AdminProfile extends Vue {
  }
</script>

<style scoped>
</style>
