<template>
    <div class="img">
        <img src="../assets/img/猫咪.svg" alt="">

    </div>
    <div class="text"><span>Sorry,that page cannot be found</span></div>
</template>

<script setup>

</script>

<style scoped>
img {
    width: 100%;
    height: 37vw;
    object-fit: contain
}

.img {
    width: 100%;
    height: 34vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    margin-top: 6vw;
}

.text {
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15vw;
}

span {
    font-size: 2.5rem;
    font-weight: 800;
    color: #000;
    text-align: center;
}
</style>