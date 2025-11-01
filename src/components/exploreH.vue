<template>
  <div class="push">
    <footer class="c2">
      <div class="items">
        <div class="box">Teams</div>
        <div class="item">Eng&Product</div>
        <div class="item">Design</div>
        <div class="item">Marketing</div>
        <div class="item">IT</div>
      </div>
      <div class="items">
        <div class="box">Team size</div>
        <div class="item">Startups</div>
        <div class="item">SMBs</div>
        <div class="item">Enterprise</div>
        <div class="item">Eduction</div>
      </div>
      <div class="items">
        <div class="box">Learn</div>
        <div class="item">Healthcare</div>
        <div class="item">Finance</div>
        <div class="item">Real Estate</div>
        <div class="item">Transportation</div>
      </div>
      <div class="items">
        <div class="box">Build</div>
        <div class="item">API</div>
        <div class="item">Technology</div>
        <div class="item">Security</div>
        <div class="item">Consulting</div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>
<style scoped>
.push {
  width: 100vw;
  height: 18vw;
  display: flex;
}

.c1 {
  width: 100%;
  height: 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
}

.c2 {
  width: 85%;
  height: 15vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  flex-wrap: wrap;
  border-bottom: 1px solid #000;
  padding-left: 2vw;
}
.box {
  margin-bottom: 1rem;
  color: aquamarine;
}
.item {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.item:hover {
  cursor: pointer;
  color: #000;
  text-decoration: underline;
}
* {
  overflow: hidden;
}
</style>
