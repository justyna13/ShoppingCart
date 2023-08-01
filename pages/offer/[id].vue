<script setup>
// Data
const productState = reactive({
  activeTab: 1,
  availableSizes: ["M", "L", "XL", "XXL"],
  soldOutSizes: ["L"],
  availableColors: ["blue", "red", "yellow"],
  soldOutColors: ["red"],
  selectedColor: "blue",
  selectedSize: "M",
});

const relatedProducts = reactive([
  {
    id: "1",
    title: "Tony Hunfinger T-Shirt New York 1",
    image: "//cdn.shopify.com/s/files/1/1047/6452/products/tricko1_70d2887b-ec6a-4bcb-a93b-7fd1783e6445_grande.jpg?v=1447530130",
    price: 800,
    availableSizes: ["M", "L", "XL"],
    availableColors: ["blue", "red", "pink"]
  },
  {
    id: "2",
    title: "Tony Hunfinger T-Shirt New York 2",
    image: "//cdn.shopify.com/s/files/1/1047/6452/products/tricko1_bba77d82-7f85-47af-9a45-f4700bcc04ad_grande.jpg?v=1447530689",
    price: 800,
    availableSizes: ["M", "L", "XL"],
    availableColors: ["blue", "red", "pink"]
  },
  {
    id: "3",
    title: "Tony Hunfinger T-Shirt New York 3",
    image: "//cdn.shopify.com/s/files/1/1047/6452/products/tricko2_6c949188-dba0-4789-9434-c0821b92f3f4_grande.jpg?v=1447530164",
    price: 800,
    availableSizes: ["M", "L", "XL"],
    availableColors: ["blue", "red", "pink"]
  },
  {
    id: "4",
    title: "Tony Hunfinger T-Shirt New York 4",
    image: "//cdn.shopify.com/s/files/1/1047/6452/products/tricko3_fd08d231-654c-4304-81b2-9191e6fd141e_grande.jpg?v=1447530674",
    price: 800,
    availableSizes: ["M", "L", "XL"],
    availableColors: ["blue", "red", "pink"]
  }
])

// Methods
const changeActiveTab = (tabId) => {
  productState.activeTab = tabId;
}

const changeSelectedSize = (size) => {
  if ((productState.soldOutSizes).includes(size)) return;

  productState.selectedSize = size;
}

const changeSelectedColor = (color) => {
  if ((productState.soldOutColors).includes(color)) return;

  productState.selectedColor = color;
}
</script>

<template>
  <section aria-label="Main content" role="main" class="product-detail">
    <div itemscope itemtype="http://schema.org/Product">
      <div class="shadow">
        <div class="_cont detail-top">
          <div class="cols">
            <div class="left-col">
              <div class="thumbs">
                <a class="thumb-image active"
                   href="//cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025"
                   data-index="0">
                  <span><img src="//cdn.shopify.com/s/files/1/1047/6452/products/product_150x150.png?v=1446769025"
                             alt="Tommy Hilfiger T-Shirt New York"></span>
                </a>
                <a class="thumb-image"
                   href="//cdn.shopify.com/s/files/1/1047/6452/products/tricko1_1024x1024.jpg?v=1447104179"
                   data-index="1">
                  <span><img src="//cdn.shopify.com/s/files/1/1047/6452/products/tricko1_150x150.jpg?v=1447104179"
                             alt="Tommy Hilfiger T-Shirt New York"></span>
                </a>
                <a class="thumb-image"
                   href="//cdn.shopify.com/s/files/1/1047/6452/products/tricko2_1024x1024.jpg?v=1447104180"
                   data-index="2">
                  <span><img src="//cdn.shopify.com/s/files/1/1047/6452/products/tricko2_150x150.jpg?v=1447104180"
                             alt="Tommy Hilfiger T-Shirt New York"></span>
                </a>
                <a class="thumb-image"
                   href="//cdn.shopify.com/s/files/1/1047/6452/products/tricko3_1024x1024.jpg?v=1447104182"
                   data-index="3">
                  <span><img src="//cdn.shopify.com/s/files/1/1047/6452/products/tricko3_150x150.jpg?v=1447104182"
                             alt="Tommy Hilfiger T-Shirt New York"></span>
                </a>
              </div>
              <div class="big">
                <span id="big-image" class="img" quickbeam="image"
                      style="background-image: url('//cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025')"
                      data-src="//cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025"></span>
                <div id="banner-gallery" class="swipe">
                  <div class="swipe-wrap">
                    <div
                      style="background-image: url('//cdn.shopify.com/s/files/1/1047/6452/products/product_large.png?v=1446769025')"></div>
                    <div
                      style="background-image: url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko1_large.jpg?v=1447104179')"></div>
                    <div
                      style="background-image: url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko2_large.jpg?v=1447104180')"></div>
                    <div
                      style="background-image: url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko3_large.jpg?v=1447104182')"></div>
                  </div>
                </div>
                <div class="detail-socials">
                  <div class="social-sharing"
                       data-permalink="http://html-koder-test.myshopify.com/products/tommy-hilfiger-t-shirt-new-york">
                    <a target="_blank" class="share-facebook" title="Share"></a>
                    <a target="_blank" class="share-twitter" title="Tweet"></a>
                    <a target="_blank" class="share-pinterest" title="Pin it"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-col">
              <h1 itemprop="name">Tony Hunfinger T-Shirt New York</h1>
              <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                <meta itemprop="priceCurrency" content="USD">
                <link itemprop="availability" href="http://schema.org/InStock">
                <div class="price-shipping">
                  <div class="price" id="price-preview" quickbeam="price" quickbeam-price="800">
                    $800.00
                  </div>
                  <a>Free shipping</a>
                </div>
                <div class="swatches">
                  <div class="swatch clearfix" data-option-index="0">
                    <div class="header">Size</div>
                    <div
                      v-for="(size, index) in productState.availableSizes"
                      class="swatch-element plain m available"
                      @click="() => changeSelectedSize(size)"
                      :class="{'soldout': (productState.soldOutSizes).includes(size)}"
                    >
                      <input
                        :id="'product-' + size"
                        type="radio"
                        :name="'size-option-' + index"
                        :value="size"
                        :checked="(productState.selectedSize === size)"/>
                      <label :for="'product-' + size">
                        {{ size }}
                        <img class="crossed-out"
                             src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886"/>
                      </label>
                    </div>
                  </div>
                  <div class="swatch clearfix" data-option-index="1">
                    <div class="header">Color</div>
                    <div
                      v-for="(color, index) in productState.availableColors"
                      class="swatch-element color available"
                      @click="() => changeSelectedColor(color)"
                      :class="[color, {'soldout': (productState.soldOutColors).includes(color)}]">
                      <div class="tooltip">{{ color.toLowerCase() }}</div>
                      <input
                        type="radio"
                        @change="productState.selectedColor = color"
                        :name="'color-option-' + index"
                        :value="color"
                        :checked="(productState.selectedColor === color)"/>
                      <label :for="'swatch-1-' + color" :style="{borderColor: color}">
                        <img class="crossed-out"
                             src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886"/>
                        <span style="background-color: blue;"></span>
                      </label>
                    </div>
                  </div>
                  <div class="guide">
                    <a>Size guide</a>
                  </div>
                </div>
                <!-- <form method="post" enctype="multipart/form-data" id="AddToCartForm"> -->
                <form id="AddToCartForm">
                  <div class="btn-and-quantity-wrap">
                    <div class="btn-and-quantity">
                      <div class="spinner">
                        <span class="btn minus" data-id="2721888517"></span>
                        <input type="text" id="updates_2721888517" name="quantity" value="1" class="quantity-selector">
                        <input type="hidden" id="product_id" name="product_id" value="2721888517">
                        <span class="q">Qty.</span>
                        <span class="btn plus" data-id="2721888517"></span>
                      </div>
                      <div id="AddToCart">
                        <span id="AddToCartText">Add to Cart</span>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="tabs">
                  <div class="tab-labels">
                    <span
                      @click="() => changeActiveTab(1)"
                      :class="{'active' : (productState.activeTab === 1)}">
                      Info
                    </span>
                    <span
                      @click="() => changeActiveTab(2)"
                      :class="{'active' : (productState.activeTab === 2)}">
                      Brand
                    </span>
                  </div>
                  <div class="tab-slides">
                    <div
                      class="slide"
                      :class="{'active' : (productState.activeTab === 1)}">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur deleniti dolorem
                      doloremque ducimus, eveniet explicabo natus necessitatibus nemo nobis perferendis totam veritatis
                      voluptas. Animi blanditiis hic itaque laborum necessitatibus!
                    </div>
                    <div class="slide" :class="{'active' : (productState.activeTab === 2)}">
                      Tony Hunfinger
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="related">
        <div class="_cont">
          <h2>You might also like</h2>
          <div class="collection-list cols-4" id="collection-list" data-products-per-page="4">
            <Product
              v-for="(item, index) in relatedProducts"
              :id="item.id"
              :key="index" />
          </div>

          <div class="more-products" id="more-products-wrap">
            <span id="more-products">More products</span>
          </div>
        </div>
      </aside>
    </div>

  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cubic-btn {
  width: 10px;
  height: 10px;
  position: absolute;
}

.img.animate {
  transition: all 0ms ease-out 0s;
  -webkit-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0;
}

.img {
  transition: all 600ms ease-out 0s;
  -webkit-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  border-radius: 1px;
  background: transparent no-repeat center center;
  background-size: cover;
  border: 1px solid #e2e2e3;
  display: block;
  height: 0;
  opacity: 1;
}

.product-detail .price-shipping,
.product-detail .btn-and-quantity-wrap,
.product-detail .btn-and-quantity,
.spinner,
.tabs .tab-labels,
.detail-socials,
.detail-socials .social-sharing,
.socials ul,
.swatches,
.swatch {
  display: block
}

.product-detail .price-shipping:after,
.product-detail .btn-and-quantity-wrap:after,
.product-detail .btn-and-quantity:after,
.spinner:after,
.tabs .tab-labels:after,
.detail-socials:after,
.detail-socials .social-sharing:after,
.socials ul:after,
.swatches:after,
.swatch:after {
  clear: both;
  content: "";
  display: block;
  visibility: hidden;
  height: 0
}


img {
  max-width: 100%
}

img.float-left {
  float: left;
  margin: 0 20px 10px 0
}

img.float-right {
  float: right;
  margin: 0 0 10px 20px
}

a {
  color: inherit;
  text-decoration: inherit;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer
}

a:active,
a:focus {
  outline: none
}

._cont {
  margin: 0 auto;
  width: 1110px
}
.more-products {
  padding-top: 40px;
  text-align: center
}

.more-products span {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  font-size: 107.69231%;
  line-height: 121.42857%;
  font-family: "montserratbold", sans-serif;
  -moz-border-radius: 26px;
  -webkit-border-radius: 26px;
  border-radius: 26px;
  -moz-box-shadow: rgba(17, 17, 18, 0.1) 0 2px 4px, rgba(19, 20, 20, 0.07) 0 1px 1px;
  -webkit-box-shadow: rgba(17, 17, 18, 0.1) 0 2px 4px, rgba(19, 20, 20, 0.07) 0 1px 1px;
  box-shadow: rgba(17, 17, 18, 0.1) 0 2px 4px, rgba(19, 20, 20, 0.07) 0 1px 1px;
  background-color: #086fcf;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  padding: 16px 26px
}

.more-products span:hover {
  background-color: #0084ff
}

.more-products.hidden {
  display: none
}

.collection-list {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 18px
}

.collection-list:after {
  content: " ";
  display: block;
  clear: both
}

.collection-list a {
  font-size: 100%;
  line-height: 123.07692%;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: block;
  margin-bottom: 3.44828%;
  position: relative
}

.collection-list a .img {
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
  -webkit-box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
  box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
  background-color: rgba(64, 64, 82, 0.1) !important;
  border: 1px solid rgba(64, 64, 82, 0.1);
  display: block;
  height: 0;
  overflow: hidden;
  padding-bottom: 133%;
  position: relative
}

.collection-list a .img .i {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background: transparent no-repeat center center;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  display: block;
  height: 100%;
  left: 0;
  opacity: 1;
  position: absolute;
  top: 0;
  width: 100%
}

.collection-list a .img .second,
.collection-list a .img .hide {
  opacity: 0
}

.collection-list a .img .show {
  opacity: 1
}

.collection-list a:hover > span {
  background-color: #0d0d1a
}

.collection-list a.hidden {
  display: none
}

.product-detail {
  padding-top: 15px
}

.product-detail .shadow {
  -moz-box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
  -webkit-box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
  box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
  margin-bottom: 2px
}

.product-detail .cols {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 35px 0 58px
}

.product-detail .cols:after {
  content: " ";
  display: block;
  clear: both
}

.product-detail .left-col {
  width: 48.27586%;
  float: left;
  margin-right: 3.44828%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto
}

.product-detail .left-col:after {
  content: " ";
  display: block;
  clear: both
}

.product-detail .left-col .thumbs {
  width: 15.25424%;
  float: left;
  margin-right: 1.69492%
}

.product-detail .left-col .thumbs a {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  border: 1px solid #e2e2e3;
  display: block;
  margin-bottom: 8px;
  position: relative;
  width: 100%
}

.product-detail .left-col .thumbs a.active {
  border-color: #086fcf
}

.product-detail .left-col .thumbs a.active:hover {
  border-color: #086fcf
}

.product-detail .left-col .thumbs a:hover {
  border-color: #b5b6bd
}

.product-detail .left-col .thumbs img {
  display: block;
  width: 100%
}

.product-detail .left-col .big {
  width: 83.05085%;
  float: right;
  margin-right: 0
}

.product-detail .left-col .big .img {
  -moz-transition: all 600ms ease-out 0s;
  -o-transition: all 600ms ease-out 0s;
  -webkit-transition: all 600ms ease-out;
  -webkit-transition-delay: 0s;
  transition: all 600ms ease-out 0s;
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  background: transparent no-repeat center center;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  border: 1px solid #e2e2e3;
  display: block;
  height: 0;
  opacity: 1;
  padding-bottom: 133%
}

.product-detail .left-col .big .img.animate {
  -moz-transition: all 0ms ease-out 0s;
  -o-transition: all 0ms ease-out 0s;
  -webkit-transition: all 0ms ease-out;
  -webkit-transition-delay: 0s;
  transition: all 0ms ease-out 0s;
  -moz-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0
}

.product-detail .left-col .big #banner-gallery {
  display: none
}

.product-detail .right-col {
  width: 48.27586%;
  float: right;
  margin-right: 0
}

.product-detail h1 {
  font-size: 184.61538%;
  line-height: 141.66667%;
  font-family: "montserratregular", sans-serif
}

.product-detail a {
  font-size: 100%;
  line-height: 123.07692%;
  color: #b5b6bd;
  text-decoration: underline
}

.product-detail a:hover {
  color: #086fcf
}

.product-detail .price-shipping {
  border-bottom: 1px solid #edeff2;
  padding-bottom: 14px
}

.product-detail .price-shipping a {
  display: block;
  float: left;
  margin: 19px 0 0 25px
}

.product-detail .price {
  font-size: 369.23077%;
  line-height: 108.33333%;
  font-family: "montserratbold", sans-serif;
  color: #086fcf;
  float: left;
  letter-spacing: -2px
}

.product-detail .price del {
  font-size: 54.16667%;
  line-height: 200%;
  font-family: "montserratregular", sans-serif;
  color: #b5b6bd
}

.product-detail #AddToCartForm {
  margin-top: 40px
}

.product-detail .btn-and-quantity {
  float: left
}

.product-detail #AddToCart {
  font-family: "montserratbold", sans-serif;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  font-size: 107.69231%;
  line-height: 128.57143%;
  background: #086fcf url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDE5IDE4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODYuMDAwMDAwLCAtNDUwLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NjAuMDAwMDAwLCAxNjUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjY5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2LjAwMDAwMCwgMTYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi43NjU0Nzg0LDQuMjc1IEwxNS44NzU4NzQ5LDguNTkzMzYwNzEgTDQuNjk5ODQwNTksOS43MjQwOTgyMSBMMy40NzM5MDMwNCw0LjI3NSBMMTYuNzY1NDc4NCw0LjI3NSBaIE0xNi44MDQ1NDYzLDkuNzI4MDY3ODYgTDE4LjY3MzcyNTEsMy4wNTM1NzE0MyBMMy4xOTkxNTIwNywzLjA1MzU3MTQzIEwyLjUxMjI3NDYzLDAgTDMuMjYzMDc1NzJlLTA1LDAgTDMuMjYzMDc1NzJlLTA1LDEuMjIxNDI4NTcgTDEuNDUzMDgwMjUsMS4yMjE0Mjg1NyBMNC4wNjM1NDA4MywxMi44MjUgTDE2Ljk2ODAyNjQsMTIuODI1IEwxNi45NjgwMjY0LDExLjYwMzU3MTQgTDUuMTIyNzM1MjEsMTEuNjAzNTcxNCBMNC45NzAwMjMyNiwxMC45MjUzNzMyIEwxNi44MDQ1NDYzLDkuNzI4MDY3ODYgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy44MzEzODE3MywxNS4yNjc4NTcxIEM3LjgzMTM4MTczLDE2LjI3OTgxMDcgNi45NTQ5MTk1OSwxNy4xIDUuODczNTM2MywxNy4xIEM0Ljc5MjE1MzAxLDE3LjEgMy45MTU2OTA4NywxNi4yNzk4MTA3IDMuOTE1NjkwODcsMTUuMjY3ODU3MSBDMy45MTU2OTA4NywxNC4yNTU5MDM2IDQuNzkyMTUzMDEsMTMuNDM1NzE0MyA1Ljg3MzUzNjMsMTMuNDM1NzE0MyBDNi45NTQ5MTk1OSwxMy40MzU3MTQzIDcuODMxMzgxNzMsMTQuMjU1OTAzNiA3LjgzMTM4MTczLDE1LjI2Nzg1NzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjY2Mjc2MzUsMTUuMjY3ODU3MSBDMTUuNjYyNzYzNSwxNi4yNzk4MTA3IDE0Ljc4NjMwMTMsMTcuMSAxMy43MDQ5MTgsMTcuMSBDMTIuNjIzNTM0NywxNy4xIDExLjc0NzA3MjYsMTYuMjc5ODEwNyAxMS43NDcwNzI2LDE1LjI2Nzg1NzEgQzExLjc0NzA3MjYsMTQuMjU1OTAzNiAxMi42MjM1MzQ3LDEzLjQzNTcxNDMgMTMuNzA0OTE4LDEzLjQzNTcxNDMgQzE0Ljc4NjMwMTMsMTMuNDM1NzE0MyAxNS42NjI3NjM1LDE0LjI1NTkwMzYgMTUuNjYyNzYzNSwxNS4yNjc4NTcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=') no-repeat 26px center;
  border: 0 none;
  color: #fff;
  float: right;
  height: 50px;
  padding: 14px 26px 14px 53px
}

.product-detail #AddToCart:hover {
  background-color: #0084ff
}

.product-detail .spinner {
  float: right
}

.product-detail .spinner:before {
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAyCAIAAADqed0qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACsSURBVDhP7ZNbEsIgDAC9/2HVSnkUWnAVZhwlBA/Q/QqzhKaQXIrKqUU0ndI+1DmX27IO9Wq980HWx5FJJZC1dcH5jUDQOZNq+DYI2oeN7BoL+mEsv1RjQV/vpkW9jjGZ1bVFr431IcS2+NFUtBj7Lrnx0b2DpkUHLz1y8IcG7fCKVlql3/GlQbsWmFwqaE8CkwedtMOkmYDsYSvCpJFBGwOYDBFoI1g5tUApTxJ40LZNFr4gAAAAAElFTkSuQmCC') no-repeat left top;
  content: "";
  display: block;
  height: 50px;
  left: -6px;
  position: absolute;
  top: 0;
  width: 10px
}

.related {
  background-color: #f7f7fa;
  padding: 40px 0 85px
}

.related h2 {
  font-size: 184.61538%;
  line-height: 150%;
  font-family: "montserratregular", sans-serif;
  text-align: center
}

.related .collection-list {
  margin-top: 26px
}

.swatches .guide {
  float: left;
  margin: 36px 0 0 20px
}

.spinner {
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  border: 1px solid #edeff2;
  height: 50px;
  margin-left: 10px;
  padding: 15px 16px 0;
  position: relative
}

.spinner.is-hidden {
  display: none
}

.spinner .btn {
  cursor: pointer;
  display: block;
  float: left;
  height: 10px;
  margin-top: 4px;
  position: relative;
  width: 10px
}

.spinner .btn:before {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #086fcf;
  content: "";
  display: block;
  height: 2px;
  left: 0;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  width: 100%
}

.spinner .btn.plus:after {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #086fcf;
  bottom: 0;
  content: "";
  display: block;
  height: 100%;
  left: 50%;
  margin-left: -1px;
  position: absolute;
  top: 0;
  width: 2px
}

.spinner .btn:hover:before,
.spinner .btn:hover:after {
  background-color: #0084ff
}

.spinner input {
  font-family: "montserratlight", sans-serif;
  border: 0 none;
  color: #16161a;
  display: block;
  float: left;
  font-size: 14px;
  height: 17px !important;
  line-height: 17px !important;
  margin-left: 1px;
  padding-bottom: 0;
  padding-top: 0;
  text-align: right;
  width: 30px
}

.spinner .q {
  font-size: 107.69231%;
  line-height: 121.42857%;
  display: block;
  float: left;
  margin: 1px 20px 0 3px
}

.tabs {
  margin: 30px 0
}

.tabs .tab-labels {
  position: relative;
  top: 1px;
  z-index: 100
}

.tabs .tab-labels span {
  font-family: "montserratbold", sans-serif;
  font-size: 100%;
  line-height: 123.07692%;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  border: 1px solid #fff;
  border-bottom: 0 none;
  color: #086fcf;
  cursor: pointer;
  display: block;
  float: left;
  padding: 7px 15px 9px;
  text-transform: uppercase
}

.tabs .tab-labels span.active {
  background-color: #fff;
  border-color: #edeff2;
  color: #16161a
}

.tabs .tab-slides {
  font-size: 100%;
  line-height: 184.61538%;
  border-top: 1px solid #edeff2;
  padding-top: 10px;
  position: relative
}

.tabs .tab-slides > div {
  display: none
}

.tabs .tab-slides > div.active {
  display: block
}

.detail-socials .social-sharing {
  float: right;
  margin: 12px 0
}

.detail-socials {
  a {
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: transparent no-repeat center center;
    border: 1px solid #edeff2;
    display: block;
    float: left;
    height: 26px;
    margin-right: 7px;
    width: 26px;
    &:hover {
      border-color: #b5b6bd;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .icon,
  .share-title {
    display: none;
  }

  .share-facebook {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI3cHgiIGhlaWdodD0iMjZweCIgdmlld0JveD0iMCAwIDI3IDI2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NjEuMDAwMDAwLCAtNzY5LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4My4wMDAwMDAsIDE1Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0NS4wMDAwMDAsIDYxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMy40Mjg1NzEsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS4yMTE3OTE2LDE5LjQyNzY0NzUgTDExLjIxMTc5MTYsMTMuMjcyMTY2OCBMOS45NDExNzY0NywxMy4yNzIxNjY4IEw5Ljk0MTE3NjQ3LDExLjE1MDg3MTMgTDExLjIxMTc5MTYsMTEuMTUwODcxMyBMMTEuMjExNzkxNiw5Ljg3NzI1MzEzIEMxMS4yMTE3OTE2LDguMTQ2NzAzNjEgMTEuOTI5MjYwNCw3LjExNzY0NzA2IDEzLjk2NzY3NCw3LjExNzY0NzA2IEwxNS42NjQ3MTA1LDcuMTE3NjQ3MDYgTDE1LjY2NDcxMDUsOS4yMzkxODI4MiBMMTQuNjAzOTQyNiw5LjIzOTE4MjgyIEMxMy44MTA0Mzg3LDkuMjM5MTgyODIgMTMuNzU3OTQ2OSw5LjUzNTYzNTY3IDEzLjc1Nzk0NjksMTAuMDg4OTAyMiBMMTMuNzU1MDY0LDExLjE1MDYzMSBMMTUuNjc2NzIyMywxMS4xNTA2MzEgTDE1LjQ1MTg2MDIsMTMuMjcxOTI2NiBMMTMuNzU1MDY0LDEzLjI3MTkyNjYgTDEzLjc1NTA2NCwxOS40Mjc2NDc1IEwxMS4yMTE3OTE2LDE5LjQyNzY0NzUgWiIgZmlsbD0iI0I1QjdCRCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
  }
  .share-twitter {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2cHgiIGhlaWdodD0iMjZweCIgdmlld0JveD0iMCAwIDI2IDI2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MjguMDAwMDAwLCAtNzY5LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4My4wMDAwMDAsIDE1Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0NS4wMDAwMDAsIDYxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuMDU2NDI4NCw4LjUyNzIxNjk1IEMxMy45ODgxODAyLDguOTE2MDI1MDEgMTMuMzEzMDQ3Myw5LjkxODI4NTggMTMuMzg5OTYxMiwxMS4wMTU1ODg2IEwxMy40MTU1OTkxLDExLjQzODk1NzMgTDEyLjk4ODI5OTgsMTEuMzg3MTE2MyBDMTEuNDMyOTMwNSwxMS4xODgzOTIxIDEwLjA3NDExODcsMTAuNTE0NDU4MiA4LjkyMDQxMDY4LDkuMzgyNTk0NjkgTDguMzU2Mzc1NjMsOC44MjA5ODMwNCBMOC4yMTEwOTM4OCw5LjIzNTcxMTY0IEM3LjkwMzQzODM5LDEwLjE2MDIxMDggOC4wOTk5OTYwNiwxMS4xMzY1NTExIDguNzQwOTQ0OTgsMTEuNzkzMjA0NyBDOS4wODI3ODQ0MSwxMi4xNTYwOTIyIDkuMDA1ODcwNTQsMTIuMjA3OTMzMyA4LjQxNjE5NzUzLDExLjk5MTkyODggQzguMjExMDkzODgsMTEuOTIyODA3NCA4LjAzMTYyODE4LDExLjg3MDk2NjMgOC4wMTQ1MzYyMSwxMS44OTY4ODY4IEM3Ljk1NDcxNDMxLDExLjk1NzM2ODEgOC4xNTk4MTc5NiwxMi43NDM2MjQ0IDguMzIyMTkxNjksMTMuMDU0NjcwOCBDOC41NDQzODczMiwxMy40ODY2Nzk4IDguOTk3MzI0NTUsMTMuOTEwMDQ4NiA5LjQ5Mjk5MTcyLDE0LjE2MDYxMzggTDkuOTExNzQ1MDIsMTQuMzU5MzM3OSBMOS40MTYwNzc4NSwxNC4zNjc5NzgxIEM4LjkzNzUwMjY1LDE0LjM2Nzk3ODEgOC45MjA0MTA2OCwxNC4zNzY2MTgzIDguOTcxNjg2NiwxNC41NTgwNjIgQzkuMTQyNjA2MzEsMTUuMTE5NjczNyA5LjgxNzczOTE3LDE1LjcxNTg0NiAxMC41Njk3ODU5LDE1Ljk3NTA1MTQgTDExLjA5OTYzNywxNi4xNTY0OTUyIEwxMC42MzgxNTM4LDE2LjQzMjk4MDkgQzkuOTU0NDc0OTQsMTYuODMwNDI5MSA5LjE1MTE1MjMsMTcuMDU1MDczOCA4LjM0NzgyOTY1LDE3LjA3MjM1NDIgQzcuOTYzMjYwMjksMTcuMDgwOTk0MyA3LjY0NzA1ODgyLDE3LjExNTU1NTEgNy42NDcwNTg4MiwxNy4xNDE0NzU2IEM3LjY0NzA1ODgyLDE3LjIyNzg3NzQgOC42ODk2NjkwNywxNy43MTE3Mjc0IDkuMjk2NDM0MDUsMTcuOTAxODExNCBDMTEuMTE2NzI5LDE4LjQ2MzQyMyAxMy4yNzg4NjM0LDE4LjIyMTQ5OCAxNC45MDI2MDA2LDE3LjI2MjQzODEgQzE2LjA1NjMwODcsMTYuNTc5ODYzOSAxNy4yMTAwMTY3LDE1LjIyMzM1NTggMTcuNzQ4NDEzOCwxMy45MTAwNDg2IEMxOC4wMzg5Nzc0LDEzLjIxMDE5NDEgMTguMzI5NTQwOSwxMS45MzE0NDc1IDE4LjMyOTU0MDksMTEuMzE3OTk0OCBDMTguMzI5NTQwOSwxMC45MjA1NDY2IDE4LjM1NTE3ODgsMTAuODY4NzA1NSAxOC44MzM3NTQsMTAuMzkzNDk1NyBDMTkuMTE1NzcxNSwxMC4xMTcwMDk5IDE5LjM4MDY5NzEsOS44MTQ2MDM2NSAxOS40MzE5NzMsOS43MjgyMDE4NiBDMTkuNTE3NDMyOSw5LjU2NDAzODQ1IDE5LjUwODg4NjksOS41NjQwMzg0NSAxOS4wNzMwNDE2LDkuNzEwOTIxNSBDMTguMzQ2NjMyOCw5Ljk3MDEyNjg3IDE4LjI0NDA4MSw5LjkzNTU2NjE2IDE4LjYwMzAxMjQsOS41NDY3NTgwOSBDMTguODY3OTM4LDkuMjcwMjcyMzYgMTkuMTg0MTM5NCw4Ljc2OTE0MTk3IDE5LjE4NDEzOTQsOC42MjIyNTg5MiBDMTkuMTg0MTM5NCw4LjU5NjMzODM4IDE5LjA1NTk0OTYsOC42Mzk1MzkyOCAxOC45MTA2Njc5LDguNzE3MzAwODkgQzE4Ljc1Njg0MDEsOC44MDM3MDI2OCAxOC40MTUwMDA3LDguOTMzMzA1MzcgMTguMTU4NjIxMiw5LjAxMTA2Njk4IEwxNy42OTcxMzc5LDkuMTU3OTUwMDMgTDE3LjI3ODM4NDYsOC44NzI4MjQxMiBDMTcuMDQ3NjQzLDguNzE3MzAwODkgMTYuNzIyODk1Niw4LjU0NDQ5NzMxIDE2LjU1MTk3NTksOC40OTI2NTYyMyBDMTYuMTE2MTMwNiw4LjM3MTY5MzczIDE1LjQ0OTU0MzcsOC4zODg5NzQwOCAxNS4wNTY0Mjg0LDguNTI3MjE2OTUgTDE1LjA1NjQyODQsOC41MjcyMTY5NSBaIiBmaWxsPSIjQjVCN0JEIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
  }
  .share-pinterest {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2cHgiIGhlaWdodD0iMjZweCIgdmlld0JveD0iMCAwIDI2IDI2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OTQuMDAwMDAwLCAtNzY5LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4My4wMDAwMDAsIDE1Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0NS4wMDAwMDAsIDYxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ni4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy40MzcwNjg3LDYuMTE3NjQ3MDYgQzkuNzE2MzUwOTQsNi4xMTc2NDcwNiA3Ljg0MDMzNjEzLDguNzg1MjQyODcgNy44NDAzMzYxMywxMS4wMDk3NzYgQzcuODQwMzM2MTMsMTIuMzU2NzA3NSA4LjM1MDI4NDQzLDEzLjU1NDk5NDYgOS40NDQwMjQ4MSwxNC4wMDE1MzY0IEM5LjYyMzM3MjE0LDE0LjA3NDg1ODQgOS43ODQwMTkzMywxNC4wMDQwNTg4IDkuODM2MDMxOCwxMy44MDU0ODk1IEM5Ljg3MjIxNDM4LDEzLjY2ODA2NTIgOS45NTc4MDAxMSwxMy4zMjEzNzM0IDkuOTk1OTgzMTcsMTMuMTc2OTkxIEMxMC4wNDg0MzA1LDEyLjk4MDU5NjEgMTAuMDI4MDc3OCwxMi45MTE3MTAxIDkuODgzMzQ3NDgsMTIuNzQwNTM4NiBDOS41Njc5Njc1NiwxMi4zNjg1MzY0IDkuMzY2NDQxLDExLjg4Njk0MjcgOS4zNjY0NDEsMTEuMjA0Nzc5MiBDOS4zNjY0NDEsOS4yMjU2OTYyNiAxMC44NDcxNDM3LDcuNDUzOTY3MzEgMTMuMjIyMTQ3Niw3LjQ1Mzk2NzMxIEMxNS4zMjUxNzM0LDcuNDUzOTY3MzEgMTYuNDgwNTgwNyw4LjczODk3MDkyIDE2LjQ4MDU4MDcsMTAuNDU1MTIxMyBDMTYuNDgwNTgwNywxMi43MTMxNDA3IDE1LjQ4MTI5NzcsMTQuNjE4OTAxOCAxMy45OTc4MTE4LDE0LjYxODkwMTggQzEzLjE3ODU3MiwxNC42MTg5MDE4IDEyLjU2NTI5NDYsMTMuOTQxMzQ4MSAxMi43NjE4NjM0LDEzLjExMDM2NjQgQzEyLjk5NzIyNDIsMTIuMTE4MzAyNSAxMy40NTMxNTk1LDExLjA0NzYxMTEgMTMuNDUzMTU5NSwxMC4zMzE1MjY1IEMxMy40NTMxNTk1LDkuNjkwNTAzMyAxMy4xMDkwNzcxLDkuMTU1ODUzNDMgMTIuMzk2OTkzNCw5LjE1NTg1MzQzIEMxMS41NTk0ODgzLDkuMTU1ODUzNDMgMTAuODg2NzE4NCwxMC4wMjIyMzUgMTAuODg2NzE4NCwxMS4xODI4NjA5IEMxMC44ODY3MTg0LDExLjkyMjA4MTYgMTEuMTM2NTE3NCwxMi40MjIwMjc1IDExLjEzNjUxNzQsMTIuNDIyMDI3NSBDMTEuMTM2NTE3NCwxMi40MjIwMjc1IDEwLjI3OTQ0MjQsMTYuMDUzNDE5NSAxMC4xMjkyMzI1LDE2LjY4OTM5OCBDOS44MzAwMzAzNiwxNy45NTU5NjI0IDEwLjA4NDI2NTIsMTkuNTA4NTk1NCAxMC4xMDU3NDg2LDE5LjY2NTQxNTUgQzEwLjExODM2MDMsMTkuNzU4MzA3NCAxMC4yMzc3ODAzLDE5Ljc4MDM5OTYgMTAuMjkxODgwMiwxOS43MTAyMDg5IEMxMC4zNjkxMTYxLDE5LjYwOTQwMjEgMTEuMzY2NTcyNSwxOC4zNzc5NzY2IDExLjcwNTY5NzMsMTcuMTQ3NTA3OCBDMTEuODAxNjMzMywxNi43OTkwNzY0IDEyLjI1NjUyNDksMTQuOTk0OTA0OSAxMi4yNTY1MjQ5LDE0Ljk5NDkwNDkgQzEyLjUyODU5MDEsMTUuNTEzODk4OSAxMy4zMjM4MjQyLDE1Ljk3MTA1MTkgMTQuMTY5NTA1MSwxNS45NzEwNTE5IEMxNi42ODY5NzgsMTUuOTcxMDUxOSAxOC4zOTQ5NTI1LDEzLjY3NTk4MDIgMTguMzk0OTUyNSwxMC42MDM5Mzk2IEMxOC4zOTQ5NTI1LDguMjgxMDM1MDggMTYuNDI3NDM3NSw2LjExNzY0NzA2IDEzLjQzNzA2ODcsNi4xMTc2NDcwNiBMMTMuNDM3MDY4Nyw2LjExNzY0NzA2IFoiIGZpbGw9IiNCNUI3QkQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
  }
}

.socials {
  color: #edeff2;

  strong {
    opacity: 0.4
  }
  ul {
    display: inline-block
  }
  li {
    float: left;
    margin-left: 28px
  }
  a {
    background: transparent no-repeat left top;
    display: inline-block;
    opacity: 0.65;
    overflow: hidden;
    position: relative;
    text-indent: 100px;
    top: 12px;

    &:hover {
      opacity: 1
    }
  }
  .tw {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE2IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDQ1LjAwMDAwMCwgLTE1OTEuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgMTI0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0MC4wMDAwMDAsIDE5MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTguMjIyNTA4OSw5Ljc1MDk3NjAxIEMxNi44MjU1Njg5LDEwLjI1OTQxNzMgMTUuOTQyNzAyOSwxMS41NzAwNjYgMTYuMDQzMjgyNiwxMy4wMDUwMDA0IEwxNi4wNzY4MDkxLDEzLjU1ODYzNjUgTDE1LjUxODAzMzEsMTMuNDkwODQ0MyBDMTMuNDg0MDg4NSwxMy4yMzA5NzQzIDExLjcwNzE4MDksMTIuMzQ5Njc2MSAxMC4xOTg0ODU4LDEwLjg2OTU0NjkgTDkuNDYwOTAxNDcsMTAuMTM1MTMxNyBMOS4yNzA5MTc2MywxMC42Nzc0NjkxIEM4Ljg2ODU5ODkyLDExLjg4NjQyOTUgOS4xMjU2MzU4OCwxMy4xNjMxODIyIDkuOTYzNzk5ODUsMTQuMDIxODgzIEMxMC40MTA4MjA2LDE0LjQ5NjQyODMgMTAuMzEwMjQxLDE0LjU2NDIyMDQgOS41MzkxMzAxLDE0LjI4MTc1MyBDOS4yNzA5MTc2MywxNC4xOTEzNjM1IDkuMDM2MjMxNzIsMTQuMTIzNTcxMyA5LjAxMzg4MDY4LDE0LjE1NzQ2NzQgQzguOTM1NjUyMDQsMTQuMjM2NTU4MyA5LjIwMzg2NDUxLDE1LjI2NDczOTYgOS40MTYxOTkzOSwxNS42NzE0OTI2IEM5LjcwNjc2MjksMTYuMjM2NDI3NCAxMC4yOTkwNjU0LDE2Ljc5MDA2MzUgMTAuOTQ3MjQ1NiwxNy4xMTc3MjU3IEwxMS40OTQ4NDYsMTcuMzc3NTk1NyBMMTAuODQ2NjY1OSwxNy4zODg4OTQ0IEMxMC4yMjA4MzY4LDE3LjM4ODg5NDQgMTAuMTk4NDg1OCwxNy40MDAxOTMxIDEwLjI2NTUzODksMTcuNjM3NDY1NyBDMTAuNDg5MDQ5MywxOC4zNzE4ODA5IDExLjM3MTkxNTMsMTkuMTUxNDkxIDEyLjM1NTM2MTEsMTkuNDkwNDUxOCBMMTMuMDQ4MjQzMywxOS43Mjc3MjQ0IEwxMi40NDQ3NjUyLDIwLjA4OTI4MjcgQzExLjU1MDcyMzYsMjAuNjA5MDIyNyAxMC41MDAyMjQ4LDIwLjkwMjc4ODggOS40NDk3MjU5NSwyMC45MjUzODYyIEM4Ljk0NjgyNzU2LDIwLjkzNjY4NDkgOC41MzMzMzMzMywyMC45ODE4Nzk3IDguNTMzMzMzMzMsMjEuMDE1Nzc1OCBDOC41MzMzMzMzMywyMS4xMjg3NjI3IDkuODk2NzQ2NzMsMjEuNzYxNDg5NyAxMC42OTAyMDg2LDIyLjAxMDA2MSBDMTMuMDcwNTk0MywyMi43NDQ0NzYyIDE1Ljg5ODAwMDgsMjIuNDI4MTEyOCAxOC4wMjEzNDk1LDIxLjE3Mzk1NzUgQzE5LjUzMDA0NDcsMjAuMjgxMzYwNSAyMS4wMzg3Mzk4LDE4LjUwNzQ2NTMgMjEuNzQyNzk3NiwxNi43OTAwNjM1IEMyMi4xMjI3NjUzLDE1Ljg3NDg2OTIgMjIuNTAyNzMyOSwxNC4yMDI2NjIyIDIyLjUwMjczMjksMTMuNDAwNDU0OCBDMjIuNTAyNzMyOSwxMi44ODA3MTQ4IDIyLjUzNjI1OTUsMTIuODEyOTIyNiAyMy4xNjIwODg2LDEyLjE5MTQ5NDMgQzIzLjUzMDg4MDcsMTEuODI5OTM2IDIzLjg3NzMyMTgsMTEuNDM0NDgxNyAyMy45NDQzNzUsMTEuMzIxNDk0NyBDMjQuMDU2MTMwMiwxMS4xMDY4MTk1IDI0LjA0NDk1NDYsMTEuMTA2ODE5NSAyMy40NzUwMDMxLDExLjI5ODg5NzMgQzIyLjUyNTA4NCwxMS42Mzc4NTgyIDIyLjM5MDk3NzcsMTEuNTkyNjYzNCAyMi44NjAzNDk2LDExLjA4NDIyMjEgQzIzLjIwNjc5MDcsMTAuNzIyNjYzOSAyMy42MjAyODQ5LDEwLjA2NzMzOTUgMjMuNjIwMjg0OSw5Ljg3NTI2MTY3IEMyMy42MjAyODQ5LDkuODQxMzY1NTggMjMuNDUyNjUyMSw5Ljg5Nzg1OTA2IDIzLjI2MjY2ODMsOS45OTk1NDczMiBDMjMuMDYxNTA4OSwxMC4xMTI1MzQzIDIyLjYxNDQ4ODEsMTAuMjgyMDE0NyAyMi4yNzkyMjI1LDEwLjM4MzcwMyBMMjEuNjc1NzQ0NSwxMC41NzU3ODA4IEwyMS4xMjgxNDQsMTAuMjAyOTIzOCBDMjAuODI2NDA1LDkuOTk5NTQ3MzIgMjAuNDAxNzM1Miw5Ljc3MzU3MzQgMjAuMTc4MjI0OCw5LjcwNTc4MTIzIEMxOS42MDgyNzMzLDkuNTQ3NTk5NDkgMTguNzM2NTgyOCw5LjU3MDE5Njg4IDE4LjIyMjUwODksOS43NTA5NzYwMSBMMTguMjIyNTA4OSw5Ljc1MDk3NjAxIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
    height: 14px;
    top: 10px;
    width: 16px
  }
  .fb {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjlweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgOSAxOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5My4wMDAwMDAsIC0xNTg5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIDEyNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDAuMDAwMDAwLCAxOTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0LjMwNzY5MiwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy43NDE0NDg5LDI0LjcwMzgyNTYgTDEzLjc0MTQ0ODksMTUuOTk5MzIwNiBMMTEuOTQ0NjYzOCwxNS45OTkzMjA2IEwxMS45NDQ2NjM4LDEyLjk5OTU4MjkgTDEzLjc0MTQ0ODksMTIuOTk5NTgyOSBMMTMuNzQxNDQ4OSwxMS4xOTg1NTEyIEMxMy43NDE0NDg5LDguNzUxMzY5OTUgMTQuNzU2MDI2MSw3LjI5NjE3NDQzIDE3LjYzODU2LDcuMjk2MTc0NDMgTDIwLjAzODM1MDIsNy4yOTYxNzQ0MyBMMjAuMDM4MzUwMiwxMC4yOTYyNTE5IEwxOC41MzgzMTE1LDEwLjI5NjI1MTkgQzE3LjQxNjIxMjUsMTAuMjk2MjUxOSAxNy4zNDE5ODM0LDEwLjcxNTQ2NzcgMTcuMzQxOTgzNCwxMS40OTc4NDU1IEwxNy4zMzc5MDY4LDEyLjk5OTI0MzEgTDIwLjA1NTMzNjIsMTIuOTk5MjQzMSBMMTkuNzM3MzU3MiwxNS45OTg5ODA4IEwxNy4zMzc5MDY4LDE1Ljk5ODk4MDggTDE3LjMzNzkwNjgsMjQuNzAzODI1NiBMMTMuNzQxNDQ4OSwyNC43MDM4MjU2IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
    height: 18px;
    width: 9px;
    top: 11px
  }
  .in {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDE3IDE4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTMzLjAwMDAwMCwgLTE1ODkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgMTI0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0MC4wMDAwMDAsIDE5MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguNjE1Mzg1LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4zODQ2MTUsIDcuMzg0NjE1KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjEyNDk5NDcsMTYuNzUxMzgwOCBMMi4xMDU3NzQ1MywxNi43NTEzODA4IEMyLjA3MTE1ODIxLDE2Ljc0NTgwNSAyLjAzNjMwOTU3LDE2LjczOTA2NzYgMi4wMDE2OTMyNSwxNi43MzQ4ODU4IEMxLjI4NTkwMjE1LDE2LjY0Mjg4NTQgMC42ODQxODIyNzMsMTYuMDk2NDU4NyAwLjUyNDgwNzgxOSwxNS4zOTE1ODY4IEMwLjUwNjIyMTg3NywxNS4zMDkzNDQgMC40OTQzNzMzMzksMTUuMjI1OTM5NiAwLjQ3OTUwNDU4NSwxNS4xNDMyMzIyIEwwLjQ3OTUwNDU4NSwyLjA4ODIzNDA0IEMwLjQ4NDg0ODA0MywyLjA1Nzc5OTU2IDAuNDkxMTIwNzk5LDIuMDI3NTk3NDEgMC40OTUzMDI2MzYsMS45OTcxNjI5MyBDMC41OTc5ODk5NjYsMS4yNjY3MzU0IDEuMTMxNDA2NTEsMC42ODYxNTcwMyAxLjg1MjMwODc0LDAuNTIxOTAzNzY2IEMxLjkyOTkwNTA1LDAuNTA0MjQ3MTIgMi4wMDkxMjc2MywwLjQ5MzU2MDIwNCAyLjA4Nzg4NTU2LDAuNDc5Mzg4NDIzIEwxNS4xNDI4ODM3LDAuNDc5Mzg4NDIzIEMxNS4xNzMwODU4LDAuNDg0NzMxODgxIDE1LjIwMzA1NTcsMC40OTE0NjkyODUgMTUuMjMzNzIyNSwwLjQ5NTQxODc5OCBDMTUuOTcyMjgxMywwLjU5NjQ3OTg1OSAxNi41NzM3Njg5LDEuMTYyNDIxOCAxNi43MTYxODM3LDEuODkxNjg3NyBDMTYuNzMwMTIzMSwxLjk2Mjc3ODkzIDE2LjczOTg4MDgsMi4wMzQzMzQ4MSAxNi43NTEyNjQ2LDIuMTA1NjU4MzYgTDE2Ljc1MTI2NDYsMTUuMTI1MTEwOSBDMTYuNzM5NDE2MSwxNS4xOTc1OTYgMTYuNzI5MTkzOCwxNS4yNzEwMTA1IDE2LjcxNTI1NDQsMTUuMzQzMjYzNCBDMTYuNTg1Mzg1MSwxNi4wMTE2NjAzIDE2LjA0MjQ0MzMsMTYuNTY1OTg2IDE1LjM3Nzk5NTgsMTYuNzA3MDA2OSBDMTUuMjk0MzU5MSwxNi43MjUxMjgyIDE1LjIwOTU2MDcsMTYuNzM2OTc2NyAxNS4xMjQ5OTQ3LDE2Ljc1MTM4MDggWiBNMi4yMzk4MjU2Myw3LjA3NzE2NTU4IEwyLjIzOTgyNTYzLDcuMTIxMDc0ODYgQzIuMjM5ODI1NjMsOS41MjkxMTYgMi4yMzk1OTMzMSwxMS45MzcxNTcxIDIuMjQwMDU3OTYsMTQuMzQ1MTk4MyBDMi4yNDAwNTc5NiwxNC42OTE1OTM4IDIuNTM5OTg4NiwxNC45ODk0MzM1IDIuODg2Mzg0MSwxNC45ODk0MzM1IEM2LjcwNDg2NTkyLDE0Ljk4OTY2NTggMTAuNTIzMTE1NCwxNC45ODk2NjU4IDE0LjM0MTU5NzIsMTQuOTg5NDMzNSBDMTQuNjkxMjQ1MywxNC45ODk0MzM1IDE0Ljk4OTU0OTcsMTQuNjkyMDU4NCAxNC45ODk1NDk3LDE0LjM0MzEwNzMgQzE0Ljk4OTc4MiwxMS45Mzc4NTQxIDE0Ljk4OTU0OTcsOS41MzI4MzMxOSAxNC45ODk1NDk3LDcuMTI3ODEyMjcgTDE0Ljk4OTU0OTcsNy4wNzc4NjI1NSBMMTMuNDM2MjI5NSw3LjA3Nzg2MjU1IEMxMy42NTU1NDM3LDcuNzc4Nzg0ODkgMTMuNzIyOTE3Nyw4LjQ5MTc4ODEgMTMuNjM2OTU3Nyw5LjIxODQ5ODQ0IEMxMy41NTA1MzMxLDkuOTQ1NDQxMSAxMy4zMTYzNTAyLDEwLjYyMTk2OTQgMTIuOTM0ODczNywxMS4yNDY2ODk0IEMxMi41NTMxNjUsMTEuODcyMTA2MyAxMi4wNTgzMTQyLDEyLjM5MDE4OTUgMTEuNDUyNDEyNSwxMi44MDI1NjUxIEM5Ljg4MTkwMDQxLDEzLjg3MjE4NiA3LjgxNDIxNDM0LDEzLjk2NjI3NzQgNi4xNDc3NTIzLDEzLjAzMDkzOTggQzUuMzA1MzQ0NDcsMTIuNTU4NjI0NiA0LjY0MzkxNzI2LDExLjg5OTk4NTIgNC4xODI3NTM1NywxMS4wNTEzMDQ3IEMzLjQ5NDg0MTM4LDkuNzg0OTA1MDMgMy4zODQ5NTIsOC40NTU3Nzc4NCAzLjc4ODQ5OTI3LDcuMDc2NzAwOTMgQzMuMjczMjA0MDIsNy4wNzcxNjU1OCAyLjc1OTk5OTY5LDcuMDc3MTY1NTggMi4yMzk4MjU2Myw3LjA3NzE2NTU4IFogTTguNjE1NTAwNzgsNS4zMTgwMDYxNSBDNi44MTA4MDU3OSw1LjMxNjg0NDUzIDUuMzQzNjc3OTgsNi43Njg4NzEyNiA1LjMxODM1NDYzLDguNTY1NDM0OSBDNS4yOTIzMzQzMSwxMC40MTAzMjIgNi43NjkyMTk3NSwxMS44NzI4MDMzIDguNTM5NzYzMDYsMTEuOTEwOTA0NSBDMTAuMzgyMDk0NiwxMS45NTAzOTk2IDExLjg3MjIyMjUsMTAuNDc4MzkzIDExLjkxMTAyMDcsOC42ODgxMDIxMSBDMTEuOTUwNzQ4MSw2Ljg0MTgyMTA4IDEwLjQ2MTU0OTUsNS4zMTY4NDQ1MyA4LjYxNTUwMDc4LDUuMzE4MDA2MTUgWiBNMTMuNTYwMDU4NCw0LjY1NzA0MzU4IEwxMy41NjAwNTg0LDQuNjU0MDIzMzYgQzEzLjgyNzY5NTksNC42NTQwMjMzNiAxNC4wOTYyNjI4LDQuNjU5MTM0NSAxNC4zNjQxMzI3LDQuNjUyNjI5NDIgQzE0LjcwODY2OTYsNC42NDQwMzM0MiAxNC45ODkzMTczLDQuMzQ4NzQ5MjYgMTQuOTg5MzE3Myw0LjAwMzc0NzcxIEMxNC45ODk1NDk3LDMuNDkwMDc4NzMgMTQuOTg5NTQ5NywyLjk3NjE3NzQzIDE0Ljk4OTMxNzMsMi40NjI1MDg0NSBDMTQuOTg5MzE3MywyLjA5NDA0MjE1IDE0LjY5Nzc1MDQsMS44MDA4NDg5MSAxNC4zMjk3NDg3LDEuODAwNjE2NTkgQzEzLjgxNzQ3MzcsMS44MDAzODQyNiAxMy4zMDUxOTg2LDEuODAwMTUxOTQgMTIuNzkyNjkxMywxLjgwMDYxNjU5IEMxMi40MjU2MTg5LDEuODAxMDgxMjQgMTIuMTMzMTIyNywyLjA5NDk3MTQ1IDEyLjEzMjg5MDMsMi40NjM0Mzc3NSBDMTIuMTMyNjU4LDIuOTcyNjkyNTcgMTIuMTMxMjY0MSwzLjQ4MTk0NzM4IDEyLjEzNDc0ODksMy45OTE0MzQ1MiBDMTIuMTM1MjEzNiw0LjA2NzQwNDU2IDEyLjE0OTYxNzcsNC4xNDYzOTQ4MiAxMi4xNzM3Nzk0LDQuMjE4NDE1MzQgQzEyLjI2NTc3OTgsNC40ODk1Mzc3NyAxMi41MTQxMzQ1LDQuNjU1ODgxOTYgMTIuODE4MjQ3LDQuNjU3Mjc1OSBDMTMuMDY1NDQsNC42NTc3NDA1NSAxMy4zMTI2MzMsNC42NTcwNDM1OCAxMy41NjAwNTg0LDQuNjU3MDQzNTggWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
    height: 18px;
    width: 17px
  }
  .pi {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDE0IDE4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTc5LjAwMDAwMCwgLTE1ODkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgMTI0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0MC4wMDAwMDAsIDE5MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMyLjkyMzA3NywgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi40MTc3MDg4LDcuMDg1NTQ2NDMgQzExLjU1MjE1NDgsNy4wODU1NDY0MyA5LjA5ODkwNDY3LDEwLjU3Mzk0MSA5LjA5ODkwNDY3LDEzLjQ4Mjk0NTggQzkuMDk4OTA0NjcsMTUuMjQ0MzE3NyA5Ljc2NTc2MDEzLDE2LjgxMTMwODcgMTEuMTk2MDM2LDE3LjM5NTI0NzkgQzExLjQzMDU2NzEsMTcuNDkxMTMwNCAxMS42NDA2NDQyLDE3LjM5ODU0NjQgMTEuNzA4NjYwNSwxNy4xMzg4Nzg4IEMxMS43NTU5NzYyLDE2Ljk1OTE3MDIgMTEuODY3ODk2LDE2LjUwNTgwNCAxMS45MTc4Mjc3LDE2LjMxNjk5NjIgQzExLjk4NjQxMjcsMTYuMDYwMTcyMSAxMS45NTk3OTc2LDE1Ljk3MDA5MDMgMTEuNzcwNTM0OSwxNS43NDYyNTA3IEMxMS4zNTgxMTUsMTUuMjU5Nzg2MyAxMS4wOTQ1ODAzLDE0LjYzMDAxIDExLjA5NDU4MDMsMTMuNzM3OTUwMSBDMTEuMDk0NTgwMywxMS4xNDk5MTg1IDEzLjAzMDg4MzgsOC44MzMwNDIxNCAxNi4xMzY2NTgyLDguODMzMDQyMTQgQzE4Ljg4Njc2ODcsOC44MzMwNDIxNCAyMC4zOTc2ODYsMTAuNTEzNDMxNSAyMC4zOTc2ODYsMTIuNzU3NjI4MiBDMjAuMzk3Njg2LDE1LjcxMDQyMjggMTkuMDkwOTMxNCwxOC4yMDI1NzE4IDE3LjE1MDk4ODIsMTguMjAyNTcxOCBDMTYuMDc5Njc0NiwxOC4yMDI1NzE4IDE1LjI3NzY5NjUsMTcuMzE2NTQwMSAxNS41MzQ3NDgsMTYuMjI5ODcxNyBDMTUuODQyNTI3NSwxNC45MzI1NTc0IDE2LjQzODc1MDYsMTMuNTMyNDIyNSAxNi40Mzg3NTA2LDEyLjU5NjAwNDEgQzE2LjQzODc1MDYsMTEuNzU3NzQzMSAxNS45ODg3OTY2LDExLjA1ODU4NTUgMTUuMDU3NjEwMywxMS4wNTg1ODU1IEMxMy45NjI0MTE0LDExLjA1ODU4NTUgMTMuMDgyNjM1MywxMi4xOTE1NDYgMTMuMDgyNjM1MywxMy43MDkyODc3IEMxMy4wODI2MzUzLDE0LjY3NTk2MDggMTMuNDA5Mjk1NSwxNS4zMjk3MzYyIDEzLjQwOTI5NTUsMTUuMzI5NzM2MiBDMTMuNDA5Mjk1NSwxNS4zMjk3MzYyIDEyLjI4ODUwNTIsMjAuMDc4NDc5NiAxMi4wOTIwNzY4LDIwLjkxMDE0MzggQzExLjcwMDgxMjUsMjIuNTY2NDIwMyAxMi4wMzMyNzM0LDI0LjU5Njc4NjUgMTIuMDYxMzY3MSwyNC44MDE4NTkxIEMxMi4wNzc4NTk0LDI0LjkyMzMzMyAxMi4yMzQwMjM5LDI0Ljk1MjIyMjkgMTIuMzA0NzcsMjQuODYwNDM1IEMxMi40MDU3NzA3LDI0LjcyODYxMDcgMTMuNzEwMTM2OCwyMy4xMTgyODUgMTQuMTUzNjA3NywyMS41MDkyMTA0IEMxNC4yNzkwNjI1LDIxLjA1MzU2OTUgMTQuODczOTIwOCwxOC42OTQyNjgzIDE0Ljg3MzkyMDgsMTguNjk0MjY4MyBDMTUuMjI5Njk4MywxOS4zNzI5NTI3IDE2LjI2OTYxOTgsMTkuOTcwNzY4MiAxNy4zNzU1MTAyLDE5Ljk3MDc2ODIgQzIwLjY2NzU5MDIsMTkuOTcwNzY4MiAyMi45MDEwOTUzLDE2Ljk2OTUyMDUgMjIuOTAxMDk1MywxMi45NTIyMzY3IEMyMi45MDEwOTUzLDkuOTE0NTkyMzEgMjAuMzI4MTkxMSw3LjA4NTU0NjQzIDE2LjQxNzcwODgsNy4wODU1NDY0MyBMMTYuNDE3NzA4OCw3LjA4NTU0NjQzIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
    height: 18px;
    width: 14px
  }

  &.dark {
    color: #b5b6bd;
    strong { opacity: 1;}
    a { opacity: 1;}
    .tw {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE2IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDQ1LjAwMDAwMCwgLTE1OTEuMDAwMDAwKSIgZmlsbD0iI0I1QjZCRCI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgMTI0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0MC4wMDAwMDAsIDE5MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTguMjIyNTA4OSw5Ljc1MDk3NjAxIEMxNi44MjU1Njg5LDEwLjI1OTQxNzMgMTUuOTQyNzAyOSwxMS41NzAwNjYgMTYuMDQzMjgyNiwxMy4wMDUwMDA0IEwxNi4wNzY4MDkxLDEzLjU1ODYzNjUgTDE1LjUxODAzMzEsMTMuNDkwODQ0MyBDMTMuNDg0MDg4NSwxMy4yMzA5NzQzIDExLjcwNzE4MDksMTIuMzQ5Njc2MSAxMC4xOTg0ODU4LDEwLjg2OTU0NjkgTDkuNDYwOTAxNDcsMTAuMTM1MTMxNyBMOS4yNzA5MTc2MywxMC42Nzc0NjkxIEM4Ljg2ODU5ODkyLDExLjg4NjQyOTUgOS4xMjU2MzU4OCwxMy4xNjMxODIyIDkuOTYzNzk5ODUsMTQuMDIxODgzIEMxMC40MTA4MjA2LDE0LjQ5NjQyODMgMTAuMzEwMjQxLDE0LjU2NDIyMDQgOS41MzkxMzAxLDE0LjI4MTc1MyBDOS4yNzA5MTc2MywxNC4xOTEzNjM1IDkuMDM2MjMxNzIsMTQuMTIzNTcxMyA5LjAxMzg4MDY4LDE0LjE1NzQ2NzQgQzguOTM1NjUyMDQsMTQuMjM2NTU4MyA5LjIwMzg2NDUxLDE1LjI2NDczOTYgOS40MTYxOTkzOSwxNS42NzE0OTI2IEM5LjcwNjc2MjksMTYuMjM2NDI3NCAxMC4yOTkwNjU0LDE2Ljc5MDA2MzUgMTAuOTQ3MjQ1NiwxNy4xMTc3MjU3IEwxMS40OTQ4NDYsMTcuMzc3NTk1NyBMMTAuODQ2NjY1OSwxNy4zODg4OTQ0IEMxMC4yMjA4MzY4LDE3LjM4ODg5NDQgMTAuMTk4NDg1OCwxNy40MDAxOTMxIDEwLjI2NTUzODksMTcuNjM3NDY1NyBDMTAuNDg5MDQ5MywxOC4zNzE4ODA5IDExLjM3MTkxNTMsMTkuMTUxNDkxIDEyLjM1NTM2MTEsMTkuNDkwNDUxOCBMMTMuMDQ4MjQzMywxOS43Mjc3MjQ0IEwxMi40NDQ3NjUyLDIwLjA4OTI4MjcgQzExLjU1MDcyMzYsMjAuNjA5MDIyNyAxMC41MDAyMjQ4LDIwLjkwMjc4ODggOS40NDk3MjU5NSwyMC45MjUzODYyIEM4Ljk0NjgyNzU2LDIwLjkzNjY4NDkgOC41MzMzMzMzMywyMC45ODE4Nzk3IDguNTMzMzMzMzMsMjEuMDE1Nzc1OCBDOC41MzMzMzMzMywyMS4xMjg3NjI3IDkuODk2NzQ2NzMsMjEuNzYxNDg5NyAxMC42OTAyMDg2LDIyLjAxMDA2MSBDMTMuMDcwNTk0MywyMi43NDQ0NzYyIDE1Ljg5ODAwMDgsMjIuNDI4MTEyOCAxOC4wMjEzNDk1LDIxLjE3Mzk1NzUgQzE5LjUzMDA0NDcsMjAuMjgxMzYwNSAyMS4wMzg3Mzk4LDE4LjUwNzQ2NTMgMjEuNzQyNzk3NiwxNi43OTAwNjM1IEMyMi4xMjI3NjUzLDE1Ljg3NDg2OTIgMjIuNTAyNzMyOSwxNC4yMDI2NjIyIDIyLjUwMjczMjksMTMuNDAwNDU0OCBDMjIuNTAyNzMyOSwxMi44ODA3MTQ4IDIyLjUzNjI1OTUsMTIuODEyOTIyNiAyMy4xNjIwODg2LDEyLjE5MTQ5NDMgQzIzLjUzMDg4MDcsMTEuODI5OTM2IDIzLjg3NzMyMTgsMTEuNDM0NDgxNyAyMy45NDQzNzUsMTEuMzIxNDk0NyBDMjQuMDU2MTMwMiwxMS4xMDY4MTk1IDI0LjA0NDk1NDYsMTEuMTA2ODE5NSAyMy40NzUwMDMxLDExLjI5ODg5NzMgQzIyLjUyNTA4NCwxMS42Mzc4NTgyIDIyLjM5MDk3NzcsMTEuNTkyNjYzNCAyMi44NjAzNDk2LDExLjA4NDIyMjEgQzIzLjIwNjc5MDcsMTAuNzIyNjYzOSAyMy42MjAyODQ5LDEwLjA2NzMzOTUgMjMuNjIwMjg0OSw5Ljg3NTI2MTY3IEMyMy42MjAyODQ5LDkuODQxMzY1NTggMjMuNDUyNjUyMSw5Ljg5Nzg1OTA2IDIzLjI2MjY2ODMsOS45OTk1NDczMiBDMjMuMDYxNTA4OSwxMC4xMTI1MzQzIDIyLjYxNDQ4ODEsMTAuMjgyMDE0NyAyMi4yNzkyMjI1LDEwLjM4MzcwMyBMMjEuNjc1NzQ0NSwxMC41NzU3ODA4IEwyMS4xMjgxNDQsMTAuMjAyOTIzOCBDMjAuODI2NDA1LDkuOTk5NTQ3MzIgMjAuNDAxNzM1Miw5Ljc3MzU3MzQgMjAuMTc4MjI0OCw5LjcwNTc4MTIzIEMxOS42MDgyNzMzLDkuNTQ3NTk5NDkgMTguNzM2NTgyOCw5LjU3MDE5Njg4IDE4LjIyMjUwODksOS43NTA5NzYwMSBMMTguMjIyNTA4OSw5Ljc1MDk3NjAxIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')
    }
    .fb {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSI5cHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDkgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5My4wMDAwMDAsIC0xNTg5LjAwMDAwMCkiIGZpbGw9IiNCNUI2QkQiPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMDAwMDAwLCAxMjQ2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDAuMDAwMDAwLCAxOTAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NC4zMDc2OTIsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjc0MTQ0ODksMjQuNzAzODI1NiBMMTMuNzQxNDQ4OSwxNS45OTkzMjA2IEwxMS45NDQ2NjM4LDE1Ljk5OTMyMDYgTDExLjk0NDY2MzgsMTIuOTk5NTgyOSBMMTMuNzQxNDQ4OSwxMi45OTk1ODI5IEwxMy43NDE0NDg5LDExLjE5ODU1MTIgQzEzLjc0MTQ0ODksOC43NTEzNjk5NSAxNC43NTYwMjYxLDcuMjk2MTc0NDMgMTcuNjM4NTYsNy4yOTYxNzQ0MyBMMjAuMDM4MzUwMiw3LjI5NjE3NDQzIEwyMC4wMzgzNTAyLDEwLjI5NjI1MTkgTDE4LjUzODMxMTUsMTAuMjk2MjUxOSBDMTcuNDE2MjEyNSwxMC4yOTYyNTE5IDE3LjM0MTk4MzQsMTAuNzE1NDY3NyAxNy4zNDE5ODM0LDExLjQ5Nzg0NTUgTDE3LjMzNzkwNjgsMTIuOTk5MjQzMSBMMjAuMDU1MzM2MiwxMi45OTkyNDMxIEwxOS43MzczNTcyLDE1Ljk5ODk4MDggTDE3LjMzNzkwNjgsMTUuOTk4OTgwOCBMMTcuMzM3OTA2OCwyNC43MDM4MjU2IEwxMy43NDE0NDg5LDI0LjcwMzgyNTYgWiIvPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+')
    }
    .in {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDE3IDE4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTMzLjAwMDAwMCwgLTE1ODkuMDAwMDAwKSIgZmlsbD0iI0I1QjZCRCI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgMTI0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0MC4wMDAwMDAsIDE5MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguNjE1Mzg1LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4zODQ2MTUsIDcuMzg0NjE1KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjEyNDk5NDcsMTYuNzUxMzgwOCBMMi4xMDU3NzQ1MywxNi43NTEzODA4IEMyLjA3MTE1ODIxLDE2Ljc0NTgwNSAyLjAzNjMwOTU3LDE2LjczOTA2NzYgMi4wMDE2OTMyNSwxNi43MzQ4ODU4IEMxLjI4NTkwMjE1LDE2LjY0Mjg4NTQgMC42ODQxODIyNzMsMTYuMDk2NDU4NyAwLjUyNDgwNzgxOSwxNS4zOTE1ODY4IEMwLjUwNjIyMTg3NywxNS4zMDkzNDQgMC40OTQzNzMzMzksMTUuMjI1OTM5NiAwLjQ3OTUwNDU4NSwxNS4xNDMyMzIyIEwwLjQ3OTUwNDU4NSwyLjA4ODIzNDA0IEMwLjQ4NDg0ODA0MywyLjA1Nzc5OTU2IDAuNDkxMTIwNzk5LDIuMDI3NTk3NDEgMC40OTUzMDI2MzYsMS45OTcxNjI5MyBDMC41OTc5ODk5NjYsMS4yNjY3MzU0IDEuMTMxNDA2NTEsMC42ODYxNTcwMyAxLjg1MjMwODc0LDAuNTIxOTAzNzY2IEMxLjkyOTkwNTA1LDAuNTA0MjQ3MTIgMi4wMDkxMjc2MywwLjQ5MzU2MDIwNCAyLjA4Nzg4NTU2LDAuNDc5Mzg4NDIzIEwxNS4xNDI4ODM3LDAuNDc5Mzg4NDIzIEMxNS4xNzMwODU4LDAuNDg0NzMxODgxIDE1LjIwMzA1NTcsMC40OTE0NjkyODUgMTUuMjMzNzIyNSwwLjQ5NTQxODc5OCBDMTUuOTcyMjgxMywwLjU5NjQ3OTg1OSAxNi41NzM3Njg5LDEuMTYyNDIxOCAxNi43MTYxODM3LDEuODkxNjg3NyBDMTYuNzMwMTIzMSwxLjk2Mjc3ODkzIDE2LjczOTg4MDgsMi4wMzQzMzQ4MSAxNi43NTEyNjQ2LDIuMTA1NjU4MzYgTDE2Ljc1MTI2NDYsMTUuMTI1MTEwOSBDMTYuNzM5NDE2MSwxNS4xOTc1OTYgMTYuNzI5MTkzOCwxNS4yNzEwMTA1IDE2LjcxNTI1NDQsMTUuMzQzMjYzNCBDMTYuNTg1Mzg1MSwxNi4wMTE2NjAzIDE2LjA0MjQ0MzMsMTYuNTY1OTg2IDE1LjM3Nzk5NTgsMTYuNzA3MDA2OSBDMTUuMjk0MzU5MSwxNi43MjUxMjgyIDE1LjIwOTU2MDcsMTYuNzM2OTc2NyAxNS4xMjQ5OTQ3LDE2Ljc1MTM4MDggWiBNMi4yMzk4MjU2Myw3LjA3NzE2NTU4IEwyLjIzOTgyNTYzLDcuMTIxMDc0ODYgQzIuMjM5ODI1NjMsOS41MjkxMTYgMi4yMzk1OTMzMSwxMS45MzcxNTcxIDIuMjQwMDU3OTYsMTQuMzQ1MTk4MyBDMi4yNDAwNTc5NiwxNC42OTE1OTM4IDIuNTM5OTg4NiwxNC45ODk0MzM1IDIuODg2Mzg0MSwxNC45ODk0MzM1IEM2LjcwNDg2NTkyLDE0Ljk4OTY2NTggMTAuNTIzMTE1NCwxNC45ODk2NjU4IDE0LjM0MTU5NzIsMTQuOTg5NDMzNSBDMTQuNjkxMjQ1MywxNC45ODk0MzM1IDE0Ljk4OTU0OTcsMTQuNjkyMDU4NCAxNC45ODk1NDk3LDE0LjM0MzEwNzMgQzE0Ljk4OTc4MiwxMS45Mzc4NTQxIDE0Ljk4OTU0OTcsOS41MzI4MzMxOSAxNC45ODk1NDk3LDcuMTI3ODEyMjcgTDE0Ljk4OTU0OTcsNy4wNzc4NjI1NSBMMTMuNDM2MjI5NSw3LjA3Nzg2MjU1IEMxMy42NTU1NDM3LDcuNzc4Nzg0ODkgMTMuNzIyOTE3Nyw4LjQ5MTc4ODEgMTMuNjM2OTU3Nyw5LjIxODQ5ODQ0IEMxMy41NTA1MzMxLDkuOTQ1NDQxMSAxMy4zMTYzNTAyLDEwLjYyMTk2OTQgMTIuOTM0ODczNywxMS4yNDY2ODk0IEMxMi41NTMxNjUsMTEuODcyMTA2MyAxMi4wNTgzMTQyLDEyLjM5MDE4OTUgMTEuNDUyNDEyNSwxMi44MDI1NjUxIEM5Ljg4MTkwMDQxLDEzLjg3MjE4NiA3LjgxNDIxNDM0LDEzLjk2NjI3NzQgNi4xNDc3NTIzLDEzLjAzMDkzOTggQzUuMzA1MzQ0NDcsMTIuNTU4NjI0NiA0LjY0MzkxNzI2LDExLjg5OTk4NTIgNC4xODI3NTM1NywxMS4wNTEzMDQ3IEMzLjQ5NDg0MTM4LDkuNzg0OTA1MDMgMy4zODQ5NTIsOC40NTU3Nzc4NCAzLjc4ODQ5OTI3LDcuMDc2NzAwOTMgQzMuMjczMjA0MDIsNy4wNzcxNjU1OCAyLjc1OTk5OTY5LDcuMDc3MTY1NTggMi4yMzk4MjU2Myw3LjA3NzE2NTU4IFogTTguNjE1NTAwNzgsNS4zMTgwMDYxNSBDNi44MTA4MDU3OSw1LjMxNjg0NDUzIDUuMzQzNjc3OTgsNi43Njg4NzEyNiA1LjMxODM1NDYzLDguNTY1NDM0OSBDNS4yOTIzMzQzMSwxMC40MTAzMjIgNi43NjkyMTk3NSwxMS44NzI4MDMzIDguNTM5NzYzMDYsMTEuOTEwOTA0NSBDMTAuMzgyMDk0NiwxMS45NTAzOTk2IDExLjg3MjIyMjUsMTAuNDc4MzkzIDExLjkxMTAyMDcsOC42ODgxMDIxMSBDMTEuOTUwNzQ4MSw2Ljg0MTgyMTA4IDEwLjQ2MTU0OTUsNS4zMTY4NDQ1MyA4LjYxNTUwMDc4LDUuMzE4MDA2MTUgWiBNMTMuNTYwMDU4NCw0LjY1NzA0MzU4IEwxMy41NjAwNTg0LDQuNjU0MDIzMzYgQzEzLjgyNzY5NTksNC42NTQwMjMzNiAxNC4wOTYyNjI4LDQuNjU5MTM0NSAxNC4zNjQxMzI3LDQuNjUyNjI5NDIgQzE0LjcwODY2OTYsNC42NDQwMzM0MiAxNC45ODkzMTczLDQuMzQ4NzQ5MjYgMTQuOTg5MzE3Myw0LjAwMzc0NzcxIEMxNC45ODk1NDk3LDMuNDkwMDc4NzMgMTQuOTg5NTQ5NywyLjk3NjE3NzQzIDE0Ljk4OTMxNzMsMi40NjI1MDg0NSBDMTQuOTg5MzE3MywyLjA5NDA0MjE1IDE0LjY5Nzc1MDQsMS44MDA4NDg5MSAxNC4zMjk3NDg3LDEuODAwNjE2NTkgQzEzLjgxNzQ3MzcsMS44MDAzODQyNiAxMy4zMDUxOTg2LDEuODAwMTUxOTQgMTIuNzkyNjkxMywxLjgwMDYxNjU5IEMxMi40MjU2MTg5LDEuODAxMDgxMjQgMTIuMTMzMTIyNywyLjA5NDk3MTQ1IDEyLjEzMjg5MDMsMi40NjM0Mzc3NSBDMTIuMTMyNjU4LDIuOTcyNjkyNTcgMTIuMTMxMjY0MSwzLjQ4MTk0NzM4IDEyLjEzNDc0ODksMy45OTE0MzQ1MiBDMTIuMTM1MjEzNiw0LjA2NzQwNDU2IDEyLjE0OTYxNzcsNC4xNDYzOTQ4MiAxMi4xNzM3Nzk0LDQuMjE4NDE1MzQgQzEyLjI2NTc3OTgsNC40ODk1Mzc3NyAxMi41MTQxMzQ1LDQuNjU1ODgxOTYgMTIuODE4MjQ3LDQuNjU3Mjc1OSBDMTMuMDY1NDQsNC42NTc3NDA1NSAxMy4zMTI2MzMsNC42NTcwNDM1OCAxMy41NjAwNTg0LDQuNjU3MDQzNTggWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')
    }
    .pi {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDE0IDE4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTc5LjAwMDAwMCwgLTE1ODkuMDAwMDAwKSIgZmlsbD0iI0I1QjZCRCI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgMTI0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0MC4wMDAwMDAsIDE5MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMyLjkyMzA3NywgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi40MTc3MDg4LDcuMDg1NTQ2NDMgQzExLjU1MjE1NDgsNy4wODU1NDY0MyA5LjA5ODkwNDY3LDEwLjU3Mzk0MSA5LjA5ODkwNDY3LDEzLjQ4Mjk0NTggQzkuMDk4OTA0NjcsMTUuMjQ0MzE3NyA5Ljc2NTc2MDEzLDE2LjgxMTMwODcgMTEuMTk2MDM2LDE3LjM5NTI0NzkgQzExLjQzMDU2NzEsMTcuNDkxMTMwNCAxMS42NDA2NDQyLDE3LjM5ODU0NjQgMTEuNzA4NjYwNSwxNy4xMzg4Nzg4IEMxMS43NTU5NzYyLDE2Ljk1OTE3MDIgMTEuODY3ODk2LDE2LjUwNTgwNCAxMS45MTc4Mjc3LDE2LjMxNjk5NjIgQzExLjk4NjQxMjcsMTYuMDYwMTcyMSAxMS45NTk3OTc2LDE1Ljk3MDA5MDMgMTEuNzcwNTM0OSwxNS43NDYyNTA3IEMxMS4zNTgxMTUsMTUuMjU5Nzg2MyAxMS4wOTQ1ODAzLDE0LjYzMDAxIDExLjA5NDU4MDMsMTMuNzM3OTUwMSBDMTEuMDk0NTgwMywxMS4xNDk5MTg1IDEzLjAzMDg4MzgsOC44MzMwNDIxNCAxNi4xMzY2NTgyLDguODMzMDQyMTQgQzE4Ljg4Njc2ODcsOC44MzMwNDIxNCAyMC4zOTc2ODYsMTAuNTEzNDMxNSAyMC4zOTc2ODYsMTIuNzU3NjI4MiBDMjAuMzk3Njg2LDE1LjcxMDQyMjggMTkuMDkwOTMxNCwxOC4yMDI1NzE4IDE3LjE1MDk4ODIsMTguMjAyNTcxOCBDMTYuMDc5Njc0NiwxOC4yMDI1NzE4IDE1LjI3NzY5NjUsMTcuMzE2NTQwMSAxNS41MzQ3NDgsMTYuMjI5ODcxNyBDMTUuODQyNTI3NSwxNC45MzI1NTc0IDE2LjQzODc1MDYsMTMuNTMyNDIyNSAxNi40Mzg3NTA2LDEyLjU5NjAwNDEgQzE2LjQzODc1MDYsMTEuNzU3NzQzMSAxNS45ODg3OTY2LDExLjA1ODU4NTUgMTUuMDU3NjEwMywxMS4wNTg1ODU1IEMxMy45NjI0MTE0LDExLjA1ODU4NTUgMTMuMDgyNjM1MywxMi4xOTE1NDYgMTMuMDgyNjM1MywxMy43MDkyODc3IEMxMy4wODI2MzUzLDE0LjY3NTk2MDggMTMuNDA5Mjk1NSwxNS4zMjk3MzYyIDEzLjQwOTI5NTUsMTUuMzI5NzM2MiBDMTMuNDA5Mjk1NSwxNS4zMjk3MzYyIDEyLjI4ODUwNTIsMjAuMDc4NDc5NiAxMi4wOTIwNzY4LDIwLjkxMDE0MzggQzExLjcwMDgxMjUsMjIuNTY2NDIwMyAxMi4wMzMyNzM0LDI0LjU5Njc4NjUgMTIuMDYxMzY3MSwyNC44MDE4NTkxIEMxMi4wNzc4NTk0LDI0LjkyMzMzMyAxMi4yMzQwMjM5LDI0Ljk1MjIyMjkgMTIuMzA0NzcsMjQuODYwNDM1IEMxMi40MDU3NzA3LDI0LjcyODYxMDcgMTMuNzEwMTM2OCwyMy4xMTgyODUgMTQuMTUzNjA3NywyMS41MDkyMTA0IEMxNC4yNzkwNjI1LDIxLjA1MzU2OTUgMTQuODczOTIwOCwxOC42OTQyNjgzIDE0Ljg3MzkyMDgsMTguNjk0MjY4MyBDMTUuMjI5Njk4MywxOS4zNzI5NTI3IDE2LjI2OTYxOTgsMTkuOTcwNzY4MiAxNy4zNzU1MTAyLDE5Ljk3MDc2ODIgQzIwLjY2NzU5MDIsMTkuOTcwNzY4MiAyMi45MDEwOTUzLDE2Ljk2OTUyMDUgMjIuOTAxMDk1MywxMi45NTIyMzY3IEMyMi45MDEwOTUzLDkuOTE0NTkyMzEgMjAuMzI4MTkxMSw3LjA4NTU0NjQzIDE2LjQxNzcwODgsNy4wODU1NDY0MyBMMTYuNDE3NzA4OCw3LjA4NTU0NjQzIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')
    }
  }
}

@media only screen and (max-width: 850px) {
  ._cont {
    width: 90%
  }
  .collection-list a {
    font-size: 92.30769%;
    line-height: 125%
  }
}

@media only screen and (max-width: 760px) {
  .spinner .q {
    margin-right: 10px
  }
  .product-detail #AddToCart {
    background-position: -1000px center;
    padding: 14px 16px
  }
}

@media only screen and (max-width: 600px) {
  .collection-list {
    margin-top: 26px
  }
  .collection-list.cols-4 a,
  .collection-list.cols-3 a {
    width: 48.27586%;
    float: left;
    margin-right: 3.44828%;
    margin-bottom: 5.26316%
  }
  .collection-list.cols-4 a:nth-child(3n),
  .collection-list.cols-3 a:nth-child(3n) {
    width: 48.27586%;
    float: left;
    margin-right: 3.44828%
  }
  .collection-list.cols-4 a:nth-child(3n+1),
  .collection-list.cols-3 a:nth-child(3n+1) {
    clear: none
  }
  .collection-list.cols-4 a:nth-child(2n),
  .collection-list.cols-3 a:nth-child(2n) {
    float: right;
    margin-right: 0
  }
  .collection-list.cols-4 a:nth-child(2n+1),
  .collection-list.cols-3 a:nth-child(2n+1) {
    clear: both
  }
  .collection-list a > span {
    left: 0;
    max-width: 100%
  }
  .collection-list a > span strong {
    font-family: "robotolight", sans-serif
  }
  .product-detail {
    padding-top: 0
  }
  .product-detail .detail-top {
    width: 100%
  }
  .product-detail .left-col {
    float: none;
    position: relative;
    width: 100%
  }
  .product-detail .left-col .thumbs {
    bottom: -30px;
    float: none;
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 100
  }
  .product-detail .left-col .thumbs a {
    border: 2px solid #e2e2e3;
    display: inline-block;
    height: 43px;
    margin: 0 8px 8px 0;
    width: 38px
  }
  .product-detail .left-col .thumbs a span {
    background-color: #fff;
    border: 2px solid #fff;
    display: block;
    height: 39px;
    overflow: hidden;
    width: 34px
  }
  .product-detail .left-col .big {
    float: none;
    width: 100%
  }
  .product-detail .left-col .big #big-image {
    display: none
  }
  .product-detail .left-col .big #banner-gallery {
    display: block;
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    border-top: 1px solid #c6c6c6;
    border-bottom: 1px solid #c6c6c6;
    overflow: hidden
  }
  .product-detail .left-col .big #banner-gallery .swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative
  }
  .product-detail .left-col .big #banner-gallery .swipe-wrap {
    overflow: hidden;
    position: relative
  }
  .product-detail .left-col .big #banner-gallery .swipe-wrap > div {
    background: transparent no-repeat center center;
    -moz-background-size: cover;
    -o-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    float: left;
    padding-bottom: 33%;
    width: 100%;
    position: relative
  }
  .product-detail .left-col .big .navigation-module {
    width: 100%;
    padding: 12px 0;
    text-align: center
  }
  .product-detail .left-col .big .navigation-module .navigation-module__item {
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 6px;
    background-color: #cacaca;
    border: 1px solid transparent;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    text-indent: -999px;
    overflow: hidden
  }
  .product-detail .left-col .big .navigation-module .navigation-module__item.is-active {
    background-color: #b25c62
  }
  .product-detail .right-col {
    float: none;
    margin: 0 auto;
    width: 90%
  }
  .product-detail .cols {
    padding: 0 0 20px
  }
  .product-detail h1 {
    font-size: 107.69231%;
    line-height: 171.42857%;
    margin: 25px 0 2px;
    text-align: center
  }
  .product-detail .price-shipping {
    padding-bottom: 10px;
    text-align: center
  }
  .product-detail .price-shipping a {
    display: inline;
    float: none;
    margin: 0
  }
  .product-detail .price {
    font-size: 276.92308%;
    line-height: 111.11111%;
    display: block;
    float: none;
    text-align: center
  }
  .product-detail .swatches {
    margin: 10px 0 30px
  }
  .product-detail .swatches .guide {
    float: none;
    margin: -25px 0 0;
    text-align: center
  }
  .product-detail .swatch {
    float: none;
    margin-right: 0;
    text-align: center
  }
  .product-detail .swatch .swatch-element {
    display: inline-block;
    float: none;
    margin: 7px 8px 25px 0
  }
  .product-detail .btn-and-quantity {
    float: none;
    text-align: center
  }
  .product-detail .spinner {
    float: none;
    margin: 0 auto 10px;
    width: 200px
  }
  .product-detail .spinner input {
    width: 60px
  }
  .product-detail .spinner .q {
    margin-right: 20px;
    width: 61px
  }
  .product-detail .spinner:before {
    background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAAKCAIAAAB38SYMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADhSURBVFhH7ZVtC4MgFEb3///r1puZadkOU2QEKw32xe5BBC/hDZ+DPrZDrFuaTo3aeO9jSRA+oARioId1LpZ+cCIZIJee5qYbmGNJuD1JiZy751yyANoqPbEvs7Un5gq1QvRJg/zHLVeyAPua2fZKv9qBPsbQdFlXeUvrhFgJl4gJmrgJnegRoDTvMskSNJmt40mma9sr1OYPnk1f6+iGcXeuLCnuPqtpECixEi4REzRxX75JLkp2Nzjlb8+CYRTjWjhEJMsleSaGlSKSFRA8E8NKEcnKQC8xrBSRTPgz2/YGSZmvkaSZcu8AAAAASUVORK5CYII=') no-repeat center top;
    bottom: -5px;
    height: 10px;
    left: 0;
    top: auto;
    width: 100%
  }
  .product-detail #AddToCart {
    background-position: 47px center;
    float: none;
    padding: 14px 26px 14px 53px;
    width: 200px
  }
  .related {
    padding: 28px 0 58px
  }
  .related h2 {
    font-size: 107.69231%;
    line-height: 171.42857%
  }
  .detail-socials .social-sharing {
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -moz-box-shadow: rgba(17, 17, 18, 0.08) 0 -2px 10px;
    -webkit-box-shadow: rgba(17, 17, 18, 0.08) 0 -2px 10px;
    box-shadow: rgba(17, 17, 18, 0.08) 0 -2px 10px;
    background-color: #fff;
    bottom: -60px;
    float: none;
    height: 50px;
    left: 0;
    margin: 0;
    padding: 12px 5% 0;
    position: fixed;
    top: auto !important;
    width: 100%;
    z-index: 1000;
    a {
      margin-right: 20px;
    }
  }
  .cart {
    padding-top: 30px
  }
}

@media only screen and (max-width: 450px) {
  .collection-list.cols-4 a,
  .collection-list.cols-3 a {
    margin-bottom: 7.14286%
  }
  #sign-in-popup form .btn {
    font-size: 100%;
    line-height: 138.46154%
  }
}

.swatches {
  margin: 17px 0 80px
}

.selector-wrapper {
  display: none
}

.swatch {
  float: left;
  margin-right: 40px
}

.swatch:nth-last-child(2) {
  margin-right: 0
}

.swatch .header {
  font-family: "montserratbold", sans-serif;
  text-transform: uppercase
}

.swatch input {
  display: none
}

.swatch .swatch-element {
  float: left;
  margin: 5px 8px 0 0;
  position: relative
}

.swatch .color label {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: 1px solid;
  cursor: pointer;
  display: flex;
  align-items: center;
  place-content: center;
  height: 40px;
  width: 40px
}

.swatch .color label span {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: block;
  height: 26px;
  position: relative;
  width: 26px;
  &:after {
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: transparent url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iOXB4IiB2aWV3Qm94PSIwIDAgMTIgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIzMS4wMDAwMDAsIC0xMzAyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIDEyNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIzNS45MzgzNyw1OC40NTA1ODYxIEwxMjM0LjUyMTE2LDU5LjM5NTUzMDcgTDEyMzcuNTQ4NDgsNjMuOTM2NzE1OCBMMTI0NS45MjIyNSw1OC4zNTM5MTk4IEwxMjQ0Ljk3NzczLDU2LjkzNjcxNTggTDEyMzguMDIxMTYsNjEuNTc0NTY3MSBMMTIzNS45MzgzNyw1OC40NTA1ODYxIEwxMjM1LjkzODM3LDU4LjQ1MDU4NjEgWiIgaWQ9ImZhamZrYSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0MC4yMjE3MDYsIDYwLjQzNjcxNikgcm90YXRlKC0xMC4wMDAwMDApIHRyYW5zbGF0ZSgtMTI0MC4yMjE3MDYsIC02MC40MzY3MTYpIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==') no-repeat center center;
    bottom: 0;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}


.swatch .plain label {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  font-family: "montserratbold", sans-serif;
  border: 1px solid #086fcf;
  color: #086fcf;
  cursor: pointer;
  text-align: center;
  display: flex;
  width: 40px;
  height: 40px;
  place-content: center;
  align-items: center;
}

.swatch .color input:checked + label span:after {
  opacity: 1
}

.swatch input:not(:checked) + label {
  border-color: #edeff2 !important
}

.swatch input:not(:checked) + label:hover {
  border-color: #b5b6bd !important
}

.swatch .plain input:not(:checked) + label {
  color: #16161a !important
}

.swatch .blue input:checked + label {
  border-color: #086fcf !important
}

.swatch .yellow input:checked + label {
  border-color: #f5c81f !important
}

.swatch .red input:checked + label {
  border-color: #d9332e !important
}

.swatch .blue label span {
  background-color: #086fcf !important
}

.swatch .yellow label span {
  background-color: #f5c81f !important
}

.swatch .red label span {
  background-color: #d9332e !important
}

.crossed-out {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0
}

.swatch .swatch-element .crossed-out {
  display: none
}

.swatch .swatch-element.soldout .crossed-out {
  display: block
}

.swatch .swatch-element.soldout label {
  filter: alpha(opacity=60);
  -khtml-opacity: 0.6;
  -moz-opacity: 0.6;
  opacity: 0.6
}

.swatch .tooltip {
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  text-align: center;
  background-color: rgba(22, 22, 26, 0.93);
  color: #fff;
  bottom: 100%;
  padding: 10px;
  display: block;
  position: absolute;
  width: 100px;
  left: -23px;
  margin-bottom: 15px;
  filter: alpha(opacity=0);
  -khtml-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
  transform: translateY(10px);
  -webkit-transition: all .25s ease-out;
  -moz-transition: all .25s ease-out;
  -ms-transition: all .25s ease-out;
  -o-transition: all .25s ease-out;
  transition: all .25s ease-out;
  -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  z-index: 10000;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.swatch .tooltip:before {
  bottom: -20px;
  content: " ";
  display: block;
  height: 20px;
  left: 0;
  position: absolute;
  width: 100%
}

.swatch .tooltip:after {
  border-left: solid transparent 10px;
  border-right: solid transparent 10px;
  border-top: solid rgba(22, 22, 26, 0.93) 10px;
  bottom: -10px;
  content: " ";
  height: 0;
  left: 50%;
  margin-left: -13px;
  position: absolute;
  width: 0
}

.swatch .swatch-element:hover .tooltip {
  filter: alpha(opacity=100);
  -khtml-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  -o-transform: translateY(0px);
  transform: translateY(0px)
}

</style>

<style lang="scss">
.collection-list {
  &.cols-4 .product-card__wr {
    width: 23.72881%;
    float: left;
    margin-right: 1.69492%;

    &:nth-child(4n) {
      float: right;
      margin-right: 0
    }
    &:nth-child(4n+1) {
      clear: both
    }
  }
  &.cols-3 .product-card__wr {
    width: 32.20339%;
    float: left;
    margin-right: 1.69492%;

    &:nth-child(3n) {
      float: right;
      margin-right: 0
    }
    &:nth-child(3n+1) {
      clear: both
    }
  }
  &.cols-2 .product-card__wr {
    width: 49.15254%;
    float: left;
    margin-right: 1.69492%;

    &:nth-child(2n) {
      float: right;
      margin-right: 0
    }
    &:nth-child(2n+1) {
      clear: both
    }
  }
}
</style>
