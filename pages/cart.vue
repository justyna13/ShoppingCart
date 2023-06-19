<template>
  <div>
    Cart page
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/myStore";
const store = useCartStore();
console.log(store.products)
</script>

<style lang="scss" scoped>

</style>
