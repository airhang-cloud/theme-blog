<script setup>
import InfoMine from './Components/InfoMine'
import CardBoard from './Components/CardBoard.vue'
import BlogsTableVue from './Components/BlogsTable.vue'
</script>

<template>
    <div class="card-container">
        <t-layout class="main-box">
            <t-aside class="aside">
                <InfoMine class="slide-in-fwd-center" />
            </t-aside>
            <t-content class="content">
                <!-- 数据看板 -->
                <CardBoard />
                <!-- 文章列表 -->
                <BlogsTableVue class="slide-in-fwd-center" />
            </t-content>
        </t-layout>
    </div>
</template>

<style scoped>
.aside {
    height: 100%;
    overflow-y: auto;
    width: 30%;
}

.content {
    height: 100%;
    width: 100%;
    background: #fff;
    margin-left: 16px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}
</style>
