<template>
  <v-card>
    <v-card-title primary-title>
      群聊名称：{{ chat.name }}
    </v-card-title>
    <v-card-text>
      群聊类型：{{ chat.type }}
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
