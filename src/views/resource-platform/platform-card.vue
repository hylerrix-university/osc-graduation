<template>
  <v-card>
    <!-- {{ platformInfo }} -->
    <!-- <v-layout>
      <v-flex xs4>
        <v-img
          :src="platform.avatar"
          height="100px"
          contain
        ></v-img>
      </v-flex>
      <v-flex xs8> -->
        <v-card-title primary-title>
          <p>平台名称：{{ platform.type }}</p>
        </v-card-title>
        <v-card-text>
          <p>备注：{{ platform.remark }}</p>
        </v-card-text>
      <!-- </v-flex>
    </v-layout> -->
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { PlatformItem } from '@/model/platform'

  @Component({
    name: 'PlatformCard',
    components: {},
  })
  export default class PlatformCard extends Vue {
    @Prop() public platform!: PlatformItem
  }
</script>

<style scoped>
</style>
