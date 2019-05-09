<template>
  <v-app dark>
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
  import AppBreadcrumbs from '@/components/app-breadcrumbs.vue'
  import AppDashboard from '@/views/app-dashboard/index.vue'

  @Component({
    components: {
      AppNavbar,
      AppDashboard,
      AppBreadcrumbs,
    },
  })
  export default class App extends Vue {
  }
</script>

<style>
  p {
    margin: 0;
    padding: 0;
  }
</style>
