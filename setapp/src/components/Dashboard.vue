<template>
    <div class="panel panel-default">
        <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                v-model="filterText">
        <div class="panel-body records"
             v-for="record in filterData">
            <p>{{record.name}}</p>
            <img :src="record.img" alt="">
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                filterText: '',
            }
        },
        created() {
          this.$store.dispatch('fetchAlbums');
          },

        computed: {
            ...mapGetters([
                'getData',
            ]),
            filterData() {
                return this.getData.filter((element) => {
                    return (element.name.match(this.filterText));
                });
            }
        },
    }
</script>

<style scoped>
    .panel {
        background-color: #f0f0f0;
    }
    .records:hover {
        background-color: #e0e0e0;
    }
</style>