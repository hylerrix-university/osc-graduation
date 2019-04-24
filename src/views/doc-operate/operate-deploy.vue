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
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'OperateDeploy',
    components: {},
  })
  export default class OperateDeploy extends Vue {
      public search: string = ''
  }
</script>

<style scoped>
</style>
