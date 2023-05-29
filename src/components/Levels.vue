<template>
    <div class="levels">
        <div class="section-header">
            <h3>Choose your level</h3>
            <p>Grab your level and learn easily 😃</p>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <img src="../assets/images/temple.avif" alt="">
            </div>
            <div class="col-lg-9 ">
                <div class="row">
                    <div class="col-lg-4 col-md-6 p-1 m-0">
                       <div class="n">
                        <img src="../assets/images/n5.png" alt="">
                        <h1>N5</h1>
                        <p>Minnano Nihongo</p>
                        <a href="">Learn <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                       </div>
                    </div>
                    <div class="col-lg-4 col-md-6 p-1 m-0">
                        <div class="n">
                            <img src="../assets/images/n4.png" alt="">
                            <h1>N4</h1>
                            <p>Minnano Nihongo</p>
                            <a href="">Learn <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                       </div>
                    </div>
                    <div class="col-lg-4 col-md-6 p-1 m-0">
                        <div class="n">
                            <img src="../assets/images/n3.png" alt="">
                            <h1>N3</h1>
                            <p>Minnano Nihongo</p>
                            <a href="">Learn <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                       </div>
                    </div>
                    <div class="col-lg-4 col-md-6 p-1 m-0">
                        <div class="n">
                            <img src="../assets/images/n2.png" alt="">
                            <h1>N2</h1>
                            <p>Minnano Nihongo</p>
                            <a href="">Learn <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                       </div>
                    </div>
                    <div class="col-lg-4 col-md-6 p-1 m-0">
                        <div class="n">
                            <img src="../assets/images/n1.png" alt="">
                            <h1>N1</h1>
                            <p>Minnano Nihongo</p>
                            <a href="">Learn <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .levels {
        padding: 30px 9%;
        margin: 40px 0 60px;
    }
    .levels img {
        width: 100%;
        height: 468px;
        margin-top: 3px;
    }

    .n {
        height: 230px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffd6a2;
        border-radius: 7px;
        box-shadow: .3rem .3rem 1rem #ffb5e1;
        transition: .5s ease;
    }

    .n:hover {
        box-shadow: none;
        background: #f0dbc0;
        transform: translateY(5px);
    }

    .n img {
        height: 55px;
        width: 55px;
        margin: 20px 0 10px;
    }
    .n h1 {
        font-size: 48px;
        color: #cd3109;
        font-weight: bolder;
    }

    a {
        text-decoration: none;
        color: #ee6a49;
        font-size: 16px;
    }
    i {
        font-size: 15px;
    }
</style>
