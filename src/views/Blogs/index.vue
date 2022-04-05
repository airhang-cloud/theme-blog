<script setup>
import { AttachIcon } from 'tdesign-icons-vue-next'
import { ref } from 'vue'
let falg = ref(false)
const openDialog = () => {
    falg.value = true
}
</script>

<template>
    <div class="card-container">
        <t-layout class="main-box">
            <t-row :gutter="16">
                <t-col
                    :xs="12"
                    :sm="4"
                    :md="4"
                    :lg="4"
                    :xl="4"
                    @click="openDialog"
                >
                    <div class="card-item">
                        <div role="header" class="flex-row">
                            <p role="title">
                                <AttachIcon />
                                蝙蝠侠的博文
                            </p>
                            <p role="date">
                                2022-03.13
                            </p>
                        </div>
                        <div class="content">
                            <p>
                                this is a blog, a blog of my live, u can read
                                some nice、interesting things
                            </p>
                        </div>
                    </div>
                </t-col>
            </t-row>
            <BaseDialog :visable="falg" />
        </t-layout>
    </div>
</template>

<style scoped>
.card-item {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 0 16px #e0e0e0;
    margin: 0 0 16px 0;
    cursor: pointer;
}
.flex-row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d8d8d8;
}
.content {
    flex: 1;
    height: 200px;
    /* background-color: #e0e0e0; */
    box-sizing: border-box;
    padding: 8px 0;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
