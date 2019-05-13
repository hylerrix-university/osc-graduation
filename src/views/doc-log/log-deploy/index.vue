<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="搜索..."
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  @Component({
    name: 'LogDeploy',
    components: {},
  })
  export default class LogDeploy extends Vue {
    public search: string = ''
  }
</script>

<style scoped>
</style>


