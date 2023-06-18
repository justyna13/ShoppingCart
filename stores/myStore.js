import defineStore from "@pinia/nuxt";

export const useCartStore = defineStore("cartContent", () => {
  const products = ref([])
  const paymentCurrency = ref("PLN")
  const price = computed(() => {
    let toPay = 0;
    products.value.map(product => {toPay += product.price})
    return toPay
  })
  function addProductToCart(product) {
    products.value.push(product)
  }
})
