<template>
  <v-app>
    <app-navbar></app-navbar>
    <v-content class="mx-4 mb-4">
      <!-- 待做：面包屑功能尚未实现 -->
      <!-- <app-breadcrumbs></app-breadcrumbs> -->
      <v-container class="ma-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer fixed inset>
      <v-spacer></v-spacer>
      <span class="caption mx-3">&copy; 2019 - {{ new Date().getFullYear() }}, 凝果屋@ningowood</span>
    </v-footer>
  </v-app>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import AppNavbar from '@/components/app-navbar.vue'
  // import AppBreadcrumbs from '@/components/app-breadcrumbs.vue'

  import { namespace } from 'vuex-class'
  const Admin = namespace('admin')
  const Role = namespace('role')

  @Component({
    name: 'AppCms',
    components: {
      AppNavbar,
      // AppBreadcrumbs,
    },
  })
  export default class AppCms extends Vue {
    @Admin.Action public setAdminList!: any
    @Role.Action public setRoleList!: any

    public created() {
      // 思考：一次加载太多数据会让初始页面很卡，分别加载又有点啰嗦，如何优化？
      // 加载通用数据
      this.setAdminList().then(() => {
        this.setRoleList().then()
      })
    }
  }
</script>

<style>
  p {
    margin: 0;
    padding: 0;
  }
</style>
