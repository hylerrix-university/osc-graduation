<template>
  <v-tooltip top lazy>
    <template slot="activator">
      <v-chip small label>
        <span>{{ username }}</span>
      </v-chip>
    </template>
    <!-- <span v-if="admin">{{ admin.name }}<br>{{ admin.email }}</span> -->
    <!-- <span v-else>系统没有查到该成员<br>该成员信息可能已被删除</span> -->
  </v-tooltip>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { AdminItem } from '@/model/admin'

  import { namespace } from 'vuex-class'
  const Admin = namespace('admin')
  
  @Component({
    name: 'UsernameTooltip',
    components: {},
  })
  export default class UsernameTooltip extends Vue {
    @Prop() public username!: string
    @Admin.State('list') public adminList!: AdminItem[]

    get admin() {
      const u = this.adminList.find((admin) => admin.username === this.username)
      return u ? u : undefined
    }
  }
</script>

<style scoped>

</style>
