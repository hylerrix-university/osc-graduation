<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <test></test>
    <dashboard-view></dashboard-view>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import DashboardView from '@/components/dashboard/index.vue' // @ is an alias to /src

@Component({
  components: {
    DashboardView,
  },
})
export default class Home extends Vue {
}
</script>

<style scoped>
</style>
