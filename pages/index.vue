<script setup>
const {sayHello} = useUtils();
sayHello();

const {data: products} = await useFetch('https://dummyjson.com/products/category/womens-dresses')
const sampleProducts = toRaw(products.value)
</script>

<template>
  <div class="page-content">
    <div class="container">
      <Hero />
    </div>
  </div>

</template>


<style lang="scss" scoped>
.page-content {

}
</style>
