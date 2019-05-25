<template>
  <v-container fluid class="pa-0 ma-0">
    <nav-show></nav-show>
  </v-container>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import NavShow from './dashboard-card/nav-show.vue'

  // import { namespace } from 'vuex-class'
  // const Nav = namespace('nav')

  @Component({
    name: 'CardWrap',
    components: {
      NavShow,
    },
  })
  export default class CardWrap extends Vue {
    // @Prop() public value!: boolean
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
  }
</script>

<style scoped>
</style>
