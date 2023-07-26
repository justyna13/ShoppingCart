<template>
  <div>
    products list with category specified in router
    product <strong style="font-weight: bold;">{{ categoryName }}</strong>

    <div class="products__container">
      <div class="products__row">
        <Product id="1" key="1" />
        <Product id="2" key="2" />
        <Product id="3" key="3" />
        <Product id="4" key="4" />
      </div>
    </div>


    <NuxtLink to="/offer/1233">Test product link</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
const categoryName = ref(route.params.category);
const products = [

]

onMounted(() => {
  console.log('lol', route.params.category)
})
</script>

<style lang="scss" scoped>
.products {
  &__container {
    width: 80%;
    margin: 0 auto;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
  }

}
</style>
