<template>
  <div>
    <br><br><br><br><br><br>
    index page
    <br>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut est magnam maiores natus ut veniam! Dicta
    impedit minima neque perspiciatis vitae? Ad culpa hic illum omnis, sed voluptatem voluptatibus.

    <ul v-for="product in sampleProducts">
      <Product :product="product" />
    </ul>

  </div>
</template>

<script setup>
const {sayHello} = useUtils();
sayHello();

const { data: products } = await useFetch('https://dummyjson.com/products/category/womens-dresses')
const sampleProducts = toRaw(products.value)
</script>

<style lang="scss" scoped>

</style>
