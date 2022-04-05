<template>
    <div class="card-box">
        <div class="card-item">
            <p style="margin-bottom: 8px;">季度分析:</p>
            <BarSource />
        </div>
        <div class="card-item">
            <p>博文池:</p>
            <div id="container3" class="source-box"></div>
        </div>
    </div>
</template>

<script>
import { Area, Bar, Liquid } from '@antv/g2plot'
import BarSource from './BarSource.vue'
export default {
    name: 'CardBoard',
    components: {
        BarSource,
    },
    mounted() {
        const liquidPlot = new Liquid('container3', {
            percent: 0.25,
            outline: {
                border: 4,
                distance: 8,
            },
            wave: {
                length: 128,
            },
        })

        // bar.render()
        liquidPlot.render()
    },
}
</script>

<style scoped>
.card-box {
    width: 100%;
    height: 240px;
    /* background-color: yellow; */
    box-sizing: border-box;
    padding: 16px 8px;
    display: flex;
    justify-content: center;
}
.card-item {
    width: 48%;
    height: 100%;
    box-shadow: 0 0 16px #e0e0e0;
    box-sizing: border-box;
    padding: 16px 16px 32px 16px;
    margin: 0 8px;
}
.source-box {
    width: 100%;
    height: 100%;
}
</style>
