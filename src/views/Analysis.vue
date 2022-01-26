<template>
    <div>
        <b-container>
           <h1>Análise de dados MyAnimeList</h1>

            <chart-description v-for="analyze in analysis" :key="analyze" :info="analyze"/>

        </b-container>
    </div>
</template>

<script>
import analysis from '../util/data.js'
import ChartDescription from '../components/graphic/ChartDescription.vue'

export default {
    components: {ChartDescription},
    data() {
        return {
            analysis
        }
    },
}

</script>
<style scoped>
    .frame{
        min-width: 100%;
        height: 600px;
        border: 1px rgb(211, 210, 210) solid;
        border-radius: 8px;
    }
</style>