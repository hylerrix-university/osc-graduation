<template>
  <v-app dark>
    <app-navbar></app-navbar>
    <v-content class="mx-4 mb-4">
      <v-container>
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
