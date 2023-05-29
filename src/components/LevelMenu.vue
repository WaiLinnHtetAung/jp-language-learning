<template>
    <div class="title">
        <router-link to="/n5/lessons" class="pointer" :class="{active: currentMenu == 'lessons'}" @click="currentMenu = 'lessons'">LESSONS</router-link>
        <a class="pointer" :class="{active: currentMenu == 'grammer'}" @click="currentMenu = 'grammer'">GRAMMER</a>
        <a class="pointer" :class="{active: currentMenu == 'listening'}" @click="currentMenu = 'listening'">LISTENING</a>
        <a class="pointer" :class="{active: currentMenu == 'kotoba'}" @click="currentMenu = 'kotoba'">KOTOBA</a>
        <a class="pointer" :class="{active: currentMenu == 'kanji'}" @click="currentMenu = 'kanji'">KANJI</a>
        <hr class="text-dark mt-2">
    </div>
</template>

<script>
    export default {
        props: ['currentMenu'],
        setup() {
        
        }
    }
</script>

<style  scoped>
    .title {
        margin: 40px auto 5px;
        text-align: center;
        padding: 10px 9%;
    }
    .title a {
        margin-left: 20px;
        text-decoration: none;
        color: #000;
        font-weight: bold;
        font-size: 14px;
    }
    .title a:hover {
        color: #cd3109;
    }
    .active {
        color: #cd3109 !important;
    }
</style>
