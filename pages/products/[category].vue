<template>
  <div>
    products list with category specified in router
    product {{ this.$route.params.category }}

    <NuxtLink to="/offer/1233">Test product link</NuxtLink>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

</style>
