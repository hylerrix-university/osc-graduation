<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Ningo</span>
        <span>Wood</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on" color="grey">
            <v-icon>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img :src="avatar" alt="myavatar">
          </v-avatar>
          <p class="white--text subheading mt-1">AqingCyan</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class NavBar extends Vue {
  // 数据暂时处理这样，后用store管理
  public avatar: string =  'https://img2.woyaogexing.com/2019/04/11/1434ade0198c4cb89d90eafd618c8301!400x400.jpeg'
  public drawer: boolean = true
  public links: any =  [
    {icon: 'dashboard', text: 'Dashboard', route: '/'},
    {icon: 'folder', text: 'My Projects', route: '/projects'},
    {icon: 'person', text: 'Team', route: '/team'},
  ]
}
</script>