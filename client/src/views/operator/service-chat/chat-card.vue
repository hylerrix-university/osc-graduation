<template>
  <v-card>
    <v-card-title primary-title>
      群聊名称：{{ chat.name }}
    </v-card-title>
    <v-card-text>
      <p>群聊类型：{{ chat.type }}</p>
      <p>群聊状态：{{ chat.status ? '已解散' : '已建立' }}</p>
      <p>群聊描述：{{ chat.remark }}</p>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      相关人员：{{ chat.admins.map((admin) => admin.username) }}
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { ChatItem } from '@/model/chat'

  @Component({
    name: 'ChatCard',
    components: {},
  })
  export default class ChatCard extends Vue {
    @Prop() public chat!: ChatItem
  }
</script>

<style scoped>
</style>
