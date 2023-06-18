<template>
  <nav>
    <div class="nav-inner">
<!--      logo-->
      <NuxtLink to="/" class="logo">
        <img src="~images/nav-logo.jpg" alt="Company logo">
      </NuxtLink>
<!--      links-->
      <div class="links">
        <NuxtLink to="/about-us">About Us</NuxtLink>
        <NuxtLink to="/products/women">Women</NuxtLink>
        <NuxtLink to="/products/men">Men</NuxtLink>
        <NuxtLink to="/products/kids">Kids</NuxtLink>
        <NuxtLink to="/products/accessories">Accesories</NuxtLink>
      </div>
<!--      icons-->
      <div class="icons">
        <NuxtLink to="cart">
          <span class="mdi mdi-cart"></span>
        </NuxtLink>
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
