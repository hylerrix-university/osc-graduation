<template>
    <v-menu
        :close-on-content-click="false"
        v-model="opened"
    >
        <!-- 删除按钮 -->
        <slot slot="activator"></slot>

        <v-card>
            <v-subheader>
                确认清空 [{{name}}] ？
            </v-subheader>
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-switch v-model="isDelete" color="error" :readonly="loading"></v-switch>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-btn
                            :loading="loading"
                            :disabled="!isDelete"
                            color="error"
                            @click="removeItem"
                        >
                            <v-icon>delete</v-icon>
                            清空
                        </v-btn>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
    </v-menu>
</template>
<script lang="ts">
    import {Component, Vue, Emit, Prop, Watch} from 'vue-property-decorator'

    @Component({
        name: 'DeleteMenuItem',
        components: {},
    })
    export default class DeleteMenu extends Vue {
        @Prop() removeFn!: (item: any) => void
        @Prop() item!: any
        @Prop() name!: string
        opened = false
        isDelete = false
        loading = false
        async removeItem() {
            await this.removeFn(this.item)
            console.log(this.item)
            this.opened = false
        }
    }
</script>
<style scoped>

</style>
