<template>
    <div class="info">
        <div class="row">
            <div class="col-lg-6">
                <img src="../assets/images/info.avif" alt="">
            </div>
            <div class="col-lg-6 info-text">
                <div class="d-flex flex-column">
                    <span>GET TO YOU KNOW</span>
                    <h4>GROW YOUR SKILLS LEARN WITH US FROM ANYWHERE</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum nulla alias iste molestiae expedita debitis placeat omnis molestias quidem?</p>
                    <div class="row mt-4">
                        <div class="row mb-4">
                            <div class="col-lg-6">
                                <div class="skills">
                                    <i class="fa-solid fa-book-open me-2"></i>
                                    <span>Reading</span>
                                </div>
                            </div>
                            <div class="col-lg-1">
                                <div class="skills">
                                    <i class="fa-solid fa-pen me-2"></i>
                                    <span>Writing</span>
                                </div>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-lg-6">
                                <div class="skills">
                                    <i class="fa-solid fa-headphones me-2"></i>
                                    <span>Listening</span>
                                </div>
                            </div>
                            <div class="col-lg-4 ">
                                <div class="skills">
                                    <i class="fa-solid fa-circle-question me-2"></i>
                                    <span>Old Question</span>
                                </div>
                            </div>
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
    .info {
        padding: 40px 15%;
        margin: 50px auto 40px;
        background: #f4dcb7;
    }
    .info img {
        width: 100%;
    }
    .info-text {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .info-text span {
        font-size: 12px;
        font-weight: bold;
        color: #CD3109;
    }
    .info-text h4 {
        font-weight: bold;
        margin: 7px 0;
    }
    .info-text p {
        font-size: 13px;
    }

    .info-text .skills {
        display: flex;
        gap: .5rem;
    }
    .skills i {
        color: #CD3109;
        font-size: 22px;
    }
    .skills span {
        color: #000;
        font-size: 14px;
    }
</style>
