<template>
  <div>
    <h1>{{ props.title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.7em;
  margin: 24px 0;
}
</style>
