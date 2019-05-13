<template>
  <v-card>
    <!-- {{ lectorInfo }} -->
    <v-layout>
      <v-flex xs4>
        <v-img
          :src="lector.avatar"
          height="100px"
          contain
        ></v-img>
      </v-flex>
      <v-flex xs8>
        <v-card-title primary-title>
          {{ lector.name }}
        </v-card-title>
        <v-card-text>
          Github ID：{{ lector.github }}
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { LectorItem } from '@/model/lector'

  @Component({
    name: 'LectorCard',
    components: {},
  })
  export default class LectorCard extends Vue {
    @Prop() public lector!: LectorItem
  }
</script>

<style scoped>
</style>
