<template>
    <div class="n5">
        <div class="img-container">
            <img src="../../assets/images/n5-learn1.png" alt="">
            <div class="n5-text">
                <h3>MINNANO NIHONGO</h3>
                <h1>N5</h1>
            </div>
        </div>
        <LevelMenu :currentMenu="currentMenu"></LevelMenu>
        
        <div class="row lessons">
            <div class="col-lg-2">
                <N5Category></N5Category>
            </div>
            <div class="col-lg-10">
                <N5Lesson1></N5Lesson1>
            </div>
        </div>
   
    </div>
</template>

<script>
    import N5Lesson1 from '../../components/n5/lessons/n5Lesson1'
    import N5Category from '../../components/n5/lessons/n5Category'
    import LevelMenu from '../../components/LevelMenu'
import { ref } from 'vue'
    export default {
        components: {N5Lesson1, N5Category, LevelMenu },
        setup() {
            let currentMenu = ref('lessons');

            return {currentMenu}
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
    .lessons {
        padding: 10px 9%;
    }
</style>
