<template>
    <div class="images">
        <div class="row">
            <div class="col-lg-9 m-0 p-0">
                <div class="row">
                    <div class="col-lg-5 m-0 p-1 img-container">
                        <img class="img" src="../assets/images/img1.jpg" alt="">
                    </div>
                    <div class="col-lg-7 m-0 p-1 img-container">
                        <img class="img" src="../assets/images/img2.jpg" alt="">
                    </div>
                    <div class="col-lg-5 m-0 p-1 img-container">
                        <img class="img" src="../assets/images/img4.jpg" alt="">
                    </div>
                    <div class="col-lg-7 m-0 p-1 img-container">
                        <img class="img" src="../assets/images/img5.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-3 m-0 ps-3 pt-1 img-container">
                <img class="img-lg" src="../assets/images/img3.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .images {
        padding: 0 9% 30px;
    }
    .img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center;
        transition: .5s ease;
    }
    .img-lg {
        height: 507px;
        object-fit: cover;
        object-position: center;
        transition: .5s ease;
    }
    .img-container {
        overflow: hidden;
    }
    img:hover {
        transform: scale(1.06);
    }
</style>
