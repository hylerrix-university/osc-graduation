<template>
  <v-window v-model="window">
    <v-btn
      v-for="(i, index) in windowList" :key="index"
      :color="index === window ? 'primary' : ''"
      @click="window = index"
      flat
    >
      {{ i.title }}
    </v-btn>
    <v-window-item
      v-for="(i, index) in windowList"
      :key="index + '-item'"
      lazy
      :value="index">
      <component :is="i.comp"></component>
    </v-window-item>
  </v-window>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { AppWindowItem } from '@/model/app.ts'

  @Component({
    name: 'AppWindow',
    components: {},
  })
  export default class AppWindow extends Vue {
    @Prop() public windowList!: AppWindowItem[]
    public window: number = 0
  }
</script>

<style scoped>
</style>
