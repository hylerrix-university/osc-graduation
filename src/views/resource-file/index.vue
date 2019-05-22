<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>线上文件管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="uploadFile()">上传文件</v-btn>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="fileList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.path }}</td>
        <td>
          <v-icon small class="mr-2" @click="downloadFile(props.item)">
            cloud_download
          </v-icon>
          <v-icon small @click="deleteFile(props.item)">
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { getFileList } from '@/api/file'

  import { FileItem } from '@/model/file'

  @Component({
    name: 'ResourceFile',
    components: {},
  })
  export default class ResourceFile extends Vue {
    public fileList: FileItem[] = []
    public headers = [
      { text: '赞助编号', sortable: true, value: 'id' },
      { text: '文件地址', sortable: true, value: 'path' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getFileList().then()
    }

    public async getFileList() {
      const { data } = await getFileList()
      this.fileList = data
    }

    public uploadFile() {
      console.log('upload')
    }

    public async downloadFile() {
      console.log('download')
    }

    public async deleteFile(item: any) {
      console.log('delete')
      // const isDelete = confirm(`确认删除 ${ item.name }？`)
      // if (!isDelete) { return }
      // try {
      //   const { data } = await deleteFile(item.id)
      //   await this.getFileList().then(() => {
      //     this.dialog = false
      //   })
      // } catch {
      //   alert('删除失败，请联系管理员！')
      // }
    }
  }
</script>

<style scoped>
</style>

