<template>
  <v-card class="little-card">
    <v-layout style="line-height: 100px;">
      <v-flex xs6 justify-center align-center>
        <!-- {{ cardInfo.icon }} -->
        <p class="tx-center">{{ cardInfo.title }}</p>
      </v-flex>
      <v-flex xs6>
        <p class="tx-center">{{ cardInfo.count }} {{ cardInfo.unit }}</p>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  // import {namespace} from 'vuex-class'
  // const Nav = namespace('nav')

  @Component({
    name: 'LittleCard',
    components: {},
  })
  export default class LittleCard extends Vue {
    @Prop() public cardInfo!: any
  }
</script>

<style scoped>
  .little-card {
    width: 100%;
    height: 100px;
  }

  .tx-center {
    text-align: center;
  }
</style>
