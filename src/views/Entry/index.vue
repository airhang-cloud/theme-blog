<template>
    <div class="tdesign-demo-item--layout">
        <t-layout>
            <t-header>
                <t-head-menu
                    theme="light"
                    :value="active"
                    @change="handlerChange"
                    height="120px"
                >
                    <!-- <template #logo>
                        <img
                            width="136"
                            class="logo"
                            src="https://www.tencent.com/img/index/menu_logo_hover.png"
                            alt="logo"
                        />
                    </template> -->
                    <t-menu-item
                        v-for="el in menus"
                        :key="el.key"
                        :value="el.key"
                    >
                        {{ el.label }}
                    </t-menu-item>
                    <template #operations>
                        <t-icon
                            v-for="el in toolMenus"
                            :key="el.key"
                            class="t-menu__operations-icon"
                            :name="el.key"
                        />
                    </template>
                </t-head-menu>
            </t-header>
            <t-content>
                <router-view class="scale-up-ver-center" />
            </t-content>
            <!-- <t-footer style="text-align: center;">
                Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All
                Rights Reserved
            </t-footer> -->
        </t-layout>
    </div>
</template>

<script>
import Parallax from 'parallax-js'
import router from '../../router'

const path = {
    mine: '/mine',
    blogs: '/blogs',
}
export default {
    name: 'Entry',
    data() {
        return {
            active: 'mine',
            menus: [
                {
                    label: '我的主页',
                    key: 'mine',
                    enable: true,
                },
                {
                    label: '博文中心',
                    key: 'blogs',
                    enable: true,
                },
            ],
            toolMenus: [
                {
                    label: '查找',
                    key: 'search',
                },
                {
                    label: '信息',
                    key: 'mail',
                },
            ],
        }
    },
    watch: {
        $route: {
            handler(val) {
                const { name } = val
                this.active = name
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        handlerChange(val) {
            this.active = val
            router.replace(path[val])
        },
    },
}
</script>

<style></style>
