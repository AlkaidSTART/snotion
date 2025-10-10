<template>
    <div class="box">
        <footer class="left">
            <div class="left-head">
                <div class="l-head"><img src="../assets/img/notion.png" alt=""></div>
                <span>Notion</span>
            </div>
            <div class="know-us">
                <div class="item-"><img src="../assets/img/footer/instagram.png" alt=""></div>
                <div class="item-"><img src="../assets/img/footer/github-fill.png" alt=""></div>
                <div class="item-"><img src="../assets/img/footer/QQ.png" alt=""></div>
                <div class="item-"><img src="../assets/img/footer/Youtube-fill.png" alt=""></div>
                <div class="item-"><img src="../assets/img/footer/bilibili-line.png" alt=""></div>
            </div>
            <div class="language"></div>
            <span class="cookie-settings">Cookie settings</span>
            <span class="copyright">© 2025 Notion Labs, Inc.</span>
        </footer>
        <footer class="right">
            <div class="item">
                <span><a href="">Company</a></span>
                <span><a href="">About us</a></span>
                <span><a href="">Careers</a></span>
                <span><a href="">Security</a></span>
                <span><a href="">Status</a></span>
                <span><a href="">Terms&privacy</a></span>
                <span><a href="">Your privacy right</a></span>
            </div>
            <div class="item">
                <span><a href="">Download</a></span>
                <span><a href="">ios&Android</a></span>
                <span><a href="">Mac&Windows</a></span>
                <span><a href="">Caleender</a></span>
                <span><a href="">web Clipper</a></span>
            </div>
            <div class="item">
                <span><a href="">Resources</a></span>
                <span><a href="">Help center</a></span>
                <span><a href="">Pricing</a></span>
                <span><a href="">Blog</a></span>
                <span><a href="">Community</a></span>
                <span><a href="">intergrations</a></span>
                <span><a href="">Templates</a></span>
                <span><a href="">Affiliates</a></span>
            </div>
            <div class="item">
                <span><a href="">Notion for</a></span>
                <span><a href="">Enterprise</a></span>
                <span><a href="">Small business</a></span>
                <span><a href="">Personal</a></span>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
*{
    overflow-y: hidden;
}
a {
    color: #000;
    text-decoration: none;
}
.item  a:hover {
    text-decoration: underline;
    margin-top: 0.8rem;
}

.left {
    width: 18vw;
    height: 24vw;
    display: flex;
    padding: 0 3vw 2vw 2svw;
    flex-direction: column;
    align-items: flex-start;
}

.left-head {
    width: 13vw;
    height: 4vw;
    display: flex;
    align-items: center;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.l-head {
    width: 3vw;
    height: 4vw;
    margin-left: 3vw;
    margin-right: 0.5vw;
}

span {
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
}

.know-us {
    width: 10vw;
    height: 3vw;
    display: flex;
    align-items: center;
    margin-top: 1vw;
    margin-left: 3vw;
    margin-right: 0.5vw;
    margin-bottom: 3vw;
}

.item- {
    width: 3vw;
    height: 3vw;
    margin-right: 0.5vw;
}

.cookie-settings {
    width: 10vw;
    height: 3vw;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 700;
    color: #000;
    margin-left: 3vw;
    margin-right: 0.5vw;
}

.copyright {
    width: 15vw;
    height: 3vw;
    display: flex;
    align-items: center;
    margin-left: 3vw;
    margin-right: 0.5vw;
    font-size: 0.8rem;
}

.right {
    width: 82vw;
    height: 24vw;
    display: flex;
    padding: 0 3vw 2vw 2svw;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
}

.box {
    width: 100%;
    height: 24vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.item{
    width: 20vw;
    height: 24vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>