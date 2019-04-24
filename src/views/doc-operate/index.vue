<template>
  <v-card class="window-card">
    <v-window v-model="window">
      <v-btn
        v-for="(i, index) in windowList" :key="index"
        :color="index === window ? 'primary' : ''"
        @click="window = index"
        flat
      >
        {{ i.title }}
      </v-btn>
      <v-window-item v-for="(i, index) in windowList" :key="index + '-item'" lazy :value="index">
        <component :is="i.comp"></component>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import OperateList from './operate-list.vue'
  import OperateDeploy from './operate-deploy.vue'

  @Component({
    name: 'DocOperate',
    components: {},
  })
  export default class DocOperate extends Vue {
    public window = 0
    public windowList = [
      { title: '日志列表', comp: OperateList },
      { title: '日志配置', comp: OperateDeploy },
    ]
  }
</script>

<style scoped>

</style>
