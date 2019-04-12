<template>
  <v-app>
    <app-navbar v-model="navLoading"></app-navbar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import {namespace} from 'vuex-class'
  import AppNavbar from '@/components/app-navbar.vue'
  import AppDashboard from '@/views/app-dashboard/index.vue'

  const Nav = namespace('nav')

  @Component({
    components: {
      AppNavbar,
      AppDashboard,
    },
  })
  export default class App extends Vue {
    @Nav.Action public getNavList!: any
    @Nav.State('loading') public navLoading!: boolean

    public created() {
      this.getNavList().then()
    }
  }
</script>

<style scoped>

</style>
