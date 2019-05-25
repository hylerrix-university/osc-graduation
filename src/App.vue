<template>
  <v-app dark>
    <!-- <app-login></app-login> -->
    <app-cms></app-cms>
  </v-app>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import AppLogin from './app-login.vue'
  import AppCms from './app-cms.vue'

  // import { namespace } from 'vuex-class'
  // const Admin = namespace('admin')

  @Component({
    components: {
      AppLogin,
      AppCms,
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
