<template>
  <v-app dark>
    <app-login v-if="!identity.hasOwnProperty('id')"></app-login>
    <app-cms v-else></app-cms>
  </v-app>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import AppLogin from './app-login.vue'
  import AppCms from './app-cms.vue'

  import { namespace } from 'vuex-class'
  const Auth = namespace('auth')

  @Component({
    components: {
      AppLogin,
      AppCms,
    },
  })
  export default class App extends Vue {
    @Auth.State public identity: any
  }
</script>

<style>
  p {
    margin: 0;
    padding: 0;
  }
</style>
