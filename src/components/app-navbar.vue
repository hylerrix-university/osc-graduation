<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer.open"
      :fixed="drawer.fixed"
      :clipped="drawer.clipped"
      :permanent="drawer.permanent"
      :mini-variant.sync="drawer.mini"
      app
      hide-overlay
      width="116"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <!-- <v-avatar size="80">
            <img :src="avatar" alt="我的头像">
          </v-avatar> -->
          <p class="white--text subheading mt-1">欢迎回来！</p>
        </v-flex>
      </v-layout>
      <v-list v-if="!navLoading">
        <template v-for="i in nav1">
          <v-menu
            v-if="i.isParent"
            :key="i.id"
            open-on-hover
            nudge-right="100"
            transition="slide-x-transition"
            style="display: block"
            class="white--text"
          >
            <v-list-tile :key="i.id" slot="activator">
              <v-list-tile-content>{{ i.name }}</v-list-tile-content>
            </v-list-tile>
            <v-list dense class="deepDark grey--text">
              <v-list-tile v-for="j in getChildNav(i.code)" :key="j.name" :to="j.path">
                <v-list-tile-content>{{ j.name }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-list-tile v-else :key="i.id" :to="i.path">
            <v-list-tile-content>{{ i.name }}</v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <app-loading v-else></app-loading>
    </v-navigation-drawer>
    
    <v-toolbar
      app
      :fixed="toolbar.fixed"
      :clipped-left="toolbar.clippedLeft"
    >
      <v-toolbar-side-icon
        class="grey--text"
        @click.stop="toggleDrawer"
      ></v-toolbar-side-icon>
        <router-link 
          tag="v-toolbar-title"
          class="grey--text link-title"
          to="/"
        >
          <span>凝果社区 - 后台管理系统</span>
          <span class="sub-title"> v0.0.1</span>
        </router-link>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on" color="grey">
            <v-icon>expand_more</v-icon>
            <span>平台</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="p in paltform" :key="p.title" router @click="openLink(p.link)">
            <v-list-tile-title>{{ p.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat color="grey">
        <span>注销</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import Dashboard from '@/views/Dashboard.vue'
  import AppLoading from '@/components/app-loading.vue'
  import { openLink } from '@/commons/util'
  import { NavItem } from '@/model/nav'

  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'AppNavbar',
    components: { AppLoading },
  })
  export default class AppNavbar extends Vue {
    @Nav.State('loading') public navLoading!: boolean
    @Nav.Getter public nav1!: NavItem[]
    @Nav.Getter public nav2!: NavItem[]
    @Nav.Action public setNavList!: any

    public avatar: string = 'https://avatars0.githubusercontent.com/u/19285461?s=460&v=4'
    public drawer: any = {
      open: true,
      clipped: false,
      fixed: false,
      permanent: true,
      mini: false,
    }
    public toolbar: any =  {
      fixed: true,
      clippedLeft: false,
    }
    // platform 集合凝果屋的各个系统，点击后跳转至相应系统中并实现单点登录
    public paltform: any = [{
      title: '凝果社区 - 内容管理系统',
      link: 'https://gitlab.com/ningowood',
    }]

    public created() {
      this.setNavList().then()
    }
    public openLink(url: string, param: string) {
      openLink(url, param)
    }
    public getChildNav(code: string) {
      return this.nav2.filter((i) => i.pid === code)
    }
    public toggleDrawer() {
      this.drawer.permanent = !this.drawer.permanent
      this.drawer.clipped = !this.drawer.clipped
      this.toolbar.clippedLeft = !this.toolbar.clippedLeft
    }
  }
</script>

<style scoped>
  .link-title {
    cursor: pointer;
  }

  .sub-title {
    font-size: 60%;
  }
</style>
