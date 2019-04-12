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

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img :src="avatar" alt="myavatar">
          </v-avatar>
          <p class="white--text subheading mt-1">AqingCyan，您好！</p>
        </v-flex>
      </v-layout>
      <v-list v-if="!value">
        <v-list-tile v-for="nav in navList" :key="nav.title" router :to="nav.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ nav.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ nav.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <app-loading v-else></app-loading>
    </v-navigation-drawer>
  </nav>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import Dashboard from '@/views/Dashboard.vue'
  import AppLoading from '@/components/app-loading.vue'
  import { openLink } from '@/commons/util'
  import { NavItem } from '@/model/nav'
  import { getNavList } from '@/api/nav';

  @Component({
    name: 'AppNavbar',
    components: { AppLoading },
  })
  export default class AppNavbar extends Vue {
    @Prop() public value!: boolean
    public avatar: string =  'https://img2.woyaogexing.com/2019/04/11/1434ade0198c4cb89d90eafd618c8301!400x400.jpeg'
    public drawer: boolean = true
    // platform 集合凝果屋的各个系统，点击后跳转至相应系统中并实现单点登录
    public paltform: any = [{
      title: '凝果社区 - 内容管理系统',
      link: 'https://gitlab.com/ningowood',
    }]
    public navList: NavItem[] = []

    public created() {
      this.getNavList()
    }

    public async getNavList() {
      this.navList = await getNavList()
    }

    public openLink(url: string, param: string) {
      openLink(url, param)
    }
  }
</script>