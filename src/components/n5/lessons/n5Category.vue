<template>
    <div class="category">
        <div v-for="(lesson,index) in lessons" :key="index" >
            <div @click="clickCat(lesson)" class="lesson pointer" :class="{active: lesson == currentLesson}">
                {{ lesson }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        props: ['currentLesson'],
        setup(props, context) {
            let lessons = ref([
                'Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Lesson 6', 'Lesson 7', 'Lesson 8', 'Lesson 9', 'Lesson 10', 'Lesson 11', 'Lesson 12', 'Lesson 13', 'Lesson 14', 'Lesson 15', 'Lesson 16', 'Lesson 17', 'Lesson 18', 'Lesson 19', 'Lesson 20', 'Lesson 21', 'Lesson 22', 'Lesson 23', 'Lesson 24', 'Lesson 25'
            ]);

            let clickCat = (lesson) => {
                context.emit('lesson', lesson)
            }

            return {lessons, clickCat}
        }
    }
</script>

<style scoped>
    .category {
        background: #ffd49b;
        border-radius: 7px;
        height: 400px;
        overflow: hidden;
        overflow-y: scroll;
    }

    .lesson {
        border-bottom: 1px solid #cd3109;
        padding: 10px 0px 5px 10px;
        transition: .3s ease;
    }
    .lesson:hover {
        background: #cd3109;
        color: #fff;
        transform: scale(1.05);
    }

    .active {
        background: #cd3109;
        color: #fff;
    }
</style>
