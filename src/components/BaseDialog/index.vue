<script>
import { ref, watch } from 'vue'
export default {
    props: {
        visable: {
            type: Boolean,
            default: false,
        },
    },
    name: 'BaseDialog',
    setup(props, ctx) {
        let falg = ref(false)
        watch(
            () => props.visable,
            (val) => {
                falg.value = val
            },
            { immediate: true }
        )
        return {
            falg,
        }
    },
}
</script>

<template>
    <div class="tilt-in-tr" v-if="falg"></div>
</template>

<style src="./index.css"></style>
