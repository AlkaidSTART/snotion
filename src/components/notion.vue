<template>
    <div class="pop" @mouseleave="ifEnter">
        <div class="head">
            <div class="head-box">Features</div>
            <div class="head-box">Get started</div>
        </div>
        <div class="items">
            <div class="item">
                <div class="item-box">
                    <div class="text">Motion AI</div>
                    <span>Bulid,Write,automate</span>
                </div>
                <div class="item-box">
                    <div class="text">Docs</div>
                    <span>simple&powerful</span>
                </div>
                <div class="item-box">
                    <div class="text">Wikis</div>
                    <span>centralize your knowledge</span>
                </div>
                <div class="item-box">
                    <div class="text">Projects</div>
                    <span>Manage your projects</span>
                </div>
            </div>
            <div class="item">
                <div class="item-box">
                    <div class="text">Enterprise Search</div>
                    <span>Find answers fast</span>
                </div>
                <div class="item-box">
                    <div class="text">AI Meeting Notes</div>
                    <span>Perfectly synchronized meeting notes</span>
                </div>
                <div class="item-box">
                    <div class="text">Forms</div>
                    <span>Response and requests</span>
                </div>
                <div class="item-box">
                    <div class="text">Sites</div>
                    <span>Publish your sites</span>
                </div>
            </div>
            <div class="item">
                <div class="item-box">
                    <div class="text">Browse marketplace</div>
                    <span>Templates for everything</span>
                </div>
                <div class="item-box">
                    <div class="text">View in Notion</div>
                    <span>connect your app with Notion</span>
                </div>
                <div class="item-box">
                    <div class="text">Download web clipper</div>
                    <span>Save from the web into nation</span>
                </div>
                <div class="item-box">
                    <div class="text"></div>
                    <span></span>
                </div>
            </div>
        </div>
        <footer class="footer-box">
            <div class="footer-left">
                <span>Try the notion desktop app for a faster experience</span>
                <button>Download app</button>
            </div>
            <div class="footer-right">
                <img src="../assets/img/aseprite.png" alt="">
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const inf=ref('none')
const isleave=ref(false)
const emit=defineEmits(['isleave'])

function ifEnter() {
  const pop = document.querySelector('.items');
  const notionElement = document.querySelector('.pop');

  if (!pop || !notionElement) return;

  pop.removeEventListener('mouseleave', Isleave);
  pop.addEventListener('mouseleave', Isleave);
}
  function Isleave(e) {
    if(e.relatedTarget && e.relatedTarget.closest('.pop')) {
      return; // 鼠标仍在 .notion 元素内，忽略事件
    }
    else{
      inf.value='block'
    }   
    isleave.value=true
    emit('isleave',isleave.value)
  }


</script>
<style scoped>
* {
    overflow-y: hidden;
}

.head {
    width: 87%;
    display: flex;
    justify-content: space-between;
    margin-left: 7vw;
    padding: 1rem 10vw 0 0.5vw;
    align-items: center;
}

.head-box {
    font-size: 1.2rem;
    font-weight: 600;
    color: #eee;
    text-align: center;
}

.head-box:hover {
    cursor: pointer;
    color: #000;
}

.items {
    width: 76vw;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-left: 7vw;
    padding: 1rem 10vw 0 0.5vw;
    align-items: center;
    flex-wrap: wrap;
    z-index: 9999;
    margin-top: -2vh;
    /* position: absolute;
    top: -4vh; */
}

.item-box {
    width: 18vw;
    height: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
}

.item {
    width: 18vw;
    height: 24vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index: 9999;
}

.item-box:hover {
    cursor: pointer;
    background-color: antiquewhite;
}

.text {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
}

.text~span {
    font-size: 0.8rem;
    font-weight: 400;
    color: pink;
}

.footer-box {
    display: flex;
    align-items: center;
    /* position: absolute;
    bottom: 0vw; */
    width: 50vw;
    margin-left: 7vw;
    background-color: bisque;
    padding: 1rem 1rem;
    border-radius: 0.3rem;  
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.footer-left {
    width: 28vw;
    height: 9vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

.footer-right {
    width: 8vw;
    height: 8vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 6vw;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

button {
    width: 26vw;
    height: 3vw;
    background-color: skyblue;
    color: #fff;
    border-radius: 0.5rem;

}

.pop {
    height: auto;
    position: relative;
    padding-bottom: 2rem;
}
</style>