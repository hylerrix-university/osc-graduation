<template>
  <div>正在开发中...</div>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  // import { namespace } from 'vuex-class'
  // const Nav = namespace('nav')

  @Component({
    name: 'AppTemplate',
    components: {},
  })
  export default class AppTemplate extends Vue {
    // @Prop() public value!: boolean
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
  }
</script>

<style scoped>
</style>
