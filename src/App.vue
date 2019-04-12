<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import NavBar from '@/components/NavBar.vue'
import Dashboard from '@/views/Dashboard.vue'
@Component({
  components: {
    NavBar,
    Dashboard,
  },
})
export default class App extends Vue {
}
</script>
