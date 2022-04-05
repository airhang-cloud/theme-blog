<script setup></script>

<template>
    <router-view class="fade-in-fwd cover" />
</template>

<style>
@font-face {
    font-family: 'jianyi-blog';
    src: url('../src/assets/free.ttf');
}
.cover {
    height: 100vh;
}
* {
    margin: 0;
    padding: 0;
    user-select: none;
    font-family: 'jianyi-blog';
}
#scene {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: var(---theme-default-bac); */
    height: 100%;
    background-size: 100%;
    background-image: linear-gradient(
            112.5deg,
            rgb(214, 214, 214) 0%,
            rgb(214, 214, 214) 10%,
            rgb(195, 195, 195) 10%,
            rgb(195, 195, 195) 53%,
            rgb(176, 176, 176) 53%,
            rgb(176, 176, 176) 55%,
            rgb(157, 157, 157) 55%,
            rgb(157, 157, 157) 60%,
            rgb(137, 137, 137) 60%,
            rgb(137, 137, 137) 88%,
            rgb(118, 118, 118) 88%,
            rgb(118, 118, 118) 91%,
            rgb(99, 99, 99) 91%,
            rgb(99, 99, 99) 100%
        ),
        linear-gradient(
            157.5deg,
            rgb(214, 214, 214) 0%,
            rgb(214, 214, 214) 10%,
            rgb(195, 195, 195) 10%,
            rgb(195, 195, 195) 53%,
            rgb(176, 176, 176) 53%,
            rgb(176, 176, 176) 55%,
            rgb(157, 157, 157) 55%,
            rgb(157, 157, 157) 60%,
            rgb(137, 137, 137) 60%,
            rgb(137, 137, 137) 88%,
            rgb(118, 118, 118) 88%,
            rgb(118, 118, 118) 91%,
            rgb(99, 99, 99) 91%,
            rgb(99, 99, 99) 100%
        ),
        linear-gradient(
            135deg,
            rgb(214, 214, 214) 0%,
            rgb(214, 214, 214) 10%,
            rgb(195, 195, 195) 10%,
            rgb(195, 195, 195) 53%,
            rgb(176, 176, 176) 53%,
            rgb(176, 176, 176) 55%,
            rgb(157, 157, 157) 55%,
            rgb(157, 157, 157) 60%,
            rgb(137, 137, 137) 60%,
            rgb(137, 137, 137) 88%,
            rgb(118, 118, 118) 88%,
            rgb(118, 118, 118) 91%,
            rgb(99, 99, 99) 91%,
            rgb(99, 99, 99) 100%
        ),
        linear-gradient(90deg, rgb(195, 195, 195), rgb(228, 228, 228));
    background-blend-mode: overlay, overlay, overlay, normal;
}

.card-container {
    width: 100%;
    height: calc(100vh - 130px);
    overflow-y: auto;
    background: #fff;
}
.main-box {
    background: #f5f5f5;
    box-sizing: border-box;
    padding: 16px;
    height: 100%;
}
</style>
