<template>
    <div class="panel panel-default">
        <div class="panel-body">
            {{getData}}
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                job: '',
                artistData: '',
                img: '',
            }
        },
        computed: {
            ...mapGetters([
                'getData'
            ])
        }
    }
</script>

<style scoped>
    .panel {
        background-color: #f0f0f0;
    }
</style>