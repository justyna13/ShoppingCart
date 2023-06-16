<template>
  <nav>
    <div class="nav-inner">
<!--      logo-->
      <div class="logo" @click="$router.push('/')">
        <img src="~images/nav-logo.jpg" alt="Company logo">
      </div>
<!--      links-->
      <div class="links">
        <a href="#">About Us</a>
        <a href="#">Women</a>
        <a href="#">Men</a>
        <a href="#">Kids</a>
        <a href="#">Accesories</a>
      </div>
<!--      icons-->
      <div class="icons">
        <button @click="$router.push('/cart')">

          <span class="mdi mdi-cart"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>


export default {

}
</script>

<style lang="scss" scoped>
nav {
  height: 100px;
  .nav-inner {
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    height: 50px;
  }
}
</style>
