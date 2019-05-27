<template>
  <v-card>
    <!-- <v-layout>
      <v-flex xs4>
        <v-img
          :src="person.avatar"
          height="100px"
          contain
        ></v-img>
      </v-flex>
      <v-flex xs8> -->
        <v-card-title>
          {{ person.username }} - {{ person.role ? person.role.name : '暂未分配角色' }}
        </v-card-title>
        <v-card-text>
          <p>昵称：{{ person.nickname }}</p>
          <!-- <p>密码：******</p> -->
          <p>邮箱：{{ person.email }}</p>
          <p>性别：{{ person.sex ? '男' : '女' }}</p>
          <p>电话：{{ person.phone }}</p>
          <p>Github：{{ person.github }}</p>
          <p>封禁状态：{{ person.status ? '可用': '已封' }}</p>
        </v-card-text>
      <!-- </v-flex>
    </v-layout> -->
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { PersonItem } from '@/model/person'

  @Component({
    name: 'PersonCard',
    components: {},
  })
  export default class PersonCard extends Vue {
    @Prop() public person!: PersonItem
  }
</script>

<style scoped>
</style>
