<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  // import {namespace} from 'vuex-class'
  // const Nav = namespace('nav')

  @Component({
    name: 'NavShow',
    components: {},
  })
  export default class NavShow extends Vue {
    public headers = [
      { text: 'name', sortable: true, value: '节点名称' },
      { text: 'path', sortable: true, value: '节点路径' },
      { text: 'code', sortable: true, value: '节点编号' },
    ]
    public desserts = [
      {
        name: 'Frozen Yogurt',
        path: 159,
        code: 6.0,
      },
    ]
  }
</script>

<style scoped>
</style>
