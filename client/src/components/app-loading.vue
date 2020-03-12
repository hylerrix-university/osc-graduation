<template>
    <v-card>
        <v-card-text>
            <v-progress-linear :indeterminate="true"></v-progress-linear>
            <v-subheader>
                <slot>加载中...</slot>
            </v-subheader>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from 'vue-property-decorator'

    @Component({
        name: 'AppLoading',
        components: {},
    })
    export default class AppLoading extends Vue {
    }
</script>

<style scoped>
</style>
