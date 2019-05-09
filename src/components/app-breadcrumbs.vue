<template>
  <v-container fluid class="ma-0 pa-0">
    <v-breadcrumbs
      :items="navBreadList"
      divider=">"
    ></v-breadcrumbs>
  </v-container>
</template>

<script lang='ts'>
  // 待做：面包屑功能尚未实现
  // 参考：https://www.cnblogs.com/minigrasshopper/p/7928311.html
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { ProductTreeItem } from '@/model/common/tree'
  import {namespace} from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'AppBreadcrumbs',
    components: {},
  })
  export default class AppBreadcrumbs extends Vue {
    // @Prop() public value!: boolean
    @Nav.State('list') public navList!: ProductTreeItem[]

    public navBreadList: any[] = [
      {
        text: '通用页面',
        disabled: true,
        href: '/404',
      },
      {
        text: '仪表盘',
        disabled: true,
        href: 'dashboard',
      },
    ]

    public created() {
      console.log(this.$route)
    }

    @Watch('navList')
    public onNavListChange() {
      console.log(this.navList)
    }
  }
</script>

<style scoped>
</style>
