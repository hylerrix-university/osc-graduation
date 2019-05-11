<template>
  <v-layout>
    正在开发中...
  </v-layout>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  
  @Component({
    name: 'OrgIntro',
    components: {},
  })
  export default class OrgIntro extends Vue {
    // @Prop() public value!: boolean
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
  }
</script>

<style scoped>
</style>
