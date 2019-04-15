<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">凝果</span>
        <span>社区</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
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

    <v-navigation-drawer v-model="drawer" app class="primary" width="230px" temporary>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img :src="avatar" alt="myavatar">
          </v-avatar>
          <p class="white--text subheading mt-1">AqingCyan，您好！</p>
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
              <v-list-tile v-for="j in getChildNav(i.id)" :key="j.name" :to="j.path">
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
  </nav>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import {namespace} from 'vuex-class'
  import Dashboard from '@/views/Dashboard.vue'
  import AppLoading from '@/components/app-loading.vue'
  import { openLink } from '@/commons/util'
  import { NavItem } from '@/model/nav'

  const Nav = namespace('nav')

  @Component({
    name: 'AppNavbar',
    components: { AppLoading },
  })
  export default class AppNavbar extends Vue {
    @Nav.State('loading') public navLoading!: boolean
    @Nav.Getter public nav1!: NavItem[]
    @Nav.Getter public nav2!: NavItem[]
    @Nav.Action public getNavList!: any

    public avatar: string =  'https://img2.woyaogexing.com/2019/04/11/1434ade0198c4cb89d90eafd618c8301!400x400.jpeg'
    public drawer: boolean = true
    // platform 集合凝果屋的各个系统，点击后跳转至相应系统中并实现单点登录
    public paltform: any = [{
      title: '凝果社区 - 内容管理系统',
      link: 'https://gitlab.com/ningowood',
    }]

    public created() {
      this.getNavList().then()
    }
    public openLink(url: string, param: string) {
      openLink(url, param)
    }
    public getChildNav(id: string) {
      return this.nav2.filter((i) => i.pid === id)
    }
  }
</script>