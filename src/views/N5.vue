<template>
    <div class="n5">
        <div class="img-container">
            <img src="../assets/images/n5-learn1.png" alt="">
            <div class="n5-text">
                <h3>MINNANO NIHONGO</h3>
                <h1>N5</h1>
            </div>
        </div>
        <LevelMenu></LevelMenu>
        <div class="welcome-n5">
            <h3 class="text-center my-5">👆🏾Start Learning👆🏾</h3>
            <img src="../assets/images/hero1.webp" alt="">
        </div>
   
    </div>
</template>

<script>

import LevelMenu from '../components/LevelMenu'
import { ref } from 'vue'
    export default {
        components: {LevelMenu},
        setup() {
         
        }
    }
</script>

<style scoped>
    .n5 {
        padding: 20px 0;
    }

    .n5 .img-container {
        height: 400px;
        position: relative;
    }
    
    .n5 .img-container img {
        position: relative;
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: brightness(.7);
    }

    .n5-text {
        position: absolute;
        top: 60%;
        left: 30%;
        transform: translate(-50%, -50%);
    }
    .n5-text h3, .n5-text h1 {
        color: #fff;
        text-align: center;
    }

    
    .n5 .welcome-n5 {
        width: 30%;
        height: auto;
        margin: 10px auto;
    }

    .n5 .welcome-n5 img {
        width: 100%;
    }
    .n5 .welcome-n5 h3 {
        color: #cd3109;
        animation: animate 3s infinite ease;
    }

    @keyframes animate {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-2rem);
        }
        100% {
            transform: translateY(0);
        }
    }

 
   
</style>
