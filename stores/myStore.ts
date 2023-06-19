interface Product {
  id: number,
  name: string,
  price: number,
  desc: string,
}

export const useCartStore = defineStore("cartContent", () => {
  const products = ref<Product[]>([{id: 1, name: "jeans", price: 12.3, desc: "lorem" }])
  const paymentCurrency = ref<string>("PLN")
  const price = computed(() => {
    let toPay = 0;
    products.value.map(product => {toPay += product.price})
    return toPay
  })
  function addProductToCart(product) {
    products.value.push(product)
  }

  return { products, paymentCurrency, price, addProductToCart }
})
