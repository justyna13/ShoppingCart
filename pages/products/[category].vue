<template>
  <div>
    products list with category specified in router
    product <strong style="font-weight: bold;">{{ categoryName }}</strong>



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

</style>
