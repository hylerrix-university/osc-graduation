<template>
  <v-app>
    <app-navbar></app-navbar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import AppNavbar from '@/components/app-navbar.vue'
  import AppDashboard from '@/views/app-dashboard/index.vue'

  @Component({
    components: {
      AppNavbar,
      AppDashboard,
    },
  })
  export default class App extends Vue {
  }
</script>

<style scoped>

</style>
