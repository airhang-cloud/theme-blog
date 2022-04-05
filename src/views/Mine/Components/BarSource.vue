<template>
    <div id="container" class="source-box"></div>
</template>

<script>
import { Area } from '@antv/g2plot'
export default {
    name: 'BarSource',
    mounted() {
        const data = [
            {
                timePeriod: '2022 Q1',
                value: 1.13,
            },
            {
                timePeriod: '2022 Q2',
                value: 1.71,
            },
            {
                timePeriod: '2022 Q3',
                value: 1.65,
            },
            {
                timePeriod: '2022 Q4',
                value: 1.59,
            },
        ]

        const area = new Area('container', {
            data,
            xField: 'timePeriod',
            yField: 'value',
            xAxis: {
                range: [0, 1],
            },
        })
        area.render()
    },
}
</script>
