<template>
  <v-dialog
    v-model="value"
    lazy
    attach
    hide-overlay
  >
    <v-card>
      123
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  @Component({
    name: 'AppDialog',
    components: {},
  })
  export default class AppDialog extends Vue {
    @Prop() public value!: boolean
  }
</script>

<style scoped>
</style>
