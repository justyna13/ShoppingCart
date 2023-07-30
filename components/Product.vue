<template>
  <div class="product-card__wr">
    <div
      class="product-card"
      :class="{'animate': isHovered}"
      ref="productElem"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false">
      <div id="product-front">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png" alt=""/>
        <div class="image_overlay"></div>
        <div id="view_details">View details</div>
        <div class="stats">
          <div class="stats-container">
            <span class="product_price">$39</span>
            <span class="product_name">Adidas Originals</span>
            <p>Men's running shirt</p>

            <div class="product-options" v-show="isHovered">
              <strong>SIZES</strong>
              <span>XS, S, M, L, XL, XXL</span>
              <strong>COLORS</strong>
              <div class="colors">
                <div class="c-blue"><span></span></div>
                <div class="c-red"><span></span></div>
                <div class="c-white"><span></span></div>
                <div class="c-green"><span></span></div>
              </div>
              <div class="icons">
                <button @click="addProductToCard">
                  <span class="mdi mdi-cart-outline"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Data
const productElem = ref(null);
const isHovered = ref(false);

// Props
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  }
})

// Methods
const addProductToCard = () => {
  console.log('adding to cart')
}
</script>


<style lang="scss" scoped>
.product-card {
  &__wr {
    margin-bottom: 24px;
  }
  width: 325px;
  height: 490px;
  -webkit-transition: 100ms ease-out;
  -moz-transition: 100ms ease-out;
  -o-transition: 100ms ease-out;
  transition: 100ms ease-out;
}
#product-front {
  position: relative;
  width: 335px;
  height: 500px;
  background: #fff;
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
}

.stats-container {
  background: #fff;
  position: absolute;
  top: 386px;
  left: 0;
  width: 265px;
  height: 300px;
  padding: 27px 35px 35px;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;

  .product_name {
    font-size: 22px;
    color: #393c45;
  }
  p {
    font-size: 16px;
    color: #b1b1b3;
    padding: 2px 0 20px 0;
  }
  .product_price {
    float: right;
    color: #48cfad;
    font-size: 22px;
    font-weight: 600;
  }
}

.image_overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #48daa1;
  opacity: 0;
}

.product-options {
  padding: 2px 0 0;
  strong {
    font-weight: 700;
    color: #393c45;
    font-size: 14px;
  }
  span {
    color: #969699;
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }
  .icons {
    float: right;
  }
  button {
    display: flex;
    align-items: center;
    place-content: center;
    width: 42px;
    height: 42px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    border: 1px solid rgb(17, 158, 0);
    cursor: pointer;
    &:hover {
      background-color: rgb(17, 158, 0);
      border-color: transparent;
      span {
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%);
      }
    }
    span {
      display: flex;
      font-size: 18px;
      margin-bottom: 0;
      filter: invert(41%) sepia(93%) saturate(4408%) hue-rotate(82deg) brightness(106%) contrast(106%);
    }
  }
}

#view_details {
  position: absolute;
  top: 112px;
  left: 50%;
  margin-left: -85px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 0;
  width: 172px;
  opacity: 0;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;

  &:hover {
    background: #fff;
    color: #48cfad;
    cursor: pointer;
  }
}

div.colors div {
  margin-top: 3px;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  float: left;

  span {
    width: 15px;
    height: 15px;
    display: block;
    border-radius: 50%;
    &:hover {
      width: 17px;
      height: 17px;
      margin: -1px 0 0 -1px;
    }
  }
}

div.c-blue span {
  background: #6e8cd5;
}

div.c-red span {
  background: #f56060;
}

div.c-green span {
  background: #44c28d;
}

div.c-white span {
  background: #fff;
  width: 14px;
  height: 14px;
  border: 1px solid #e8e9eb;
}

.product-card.animate {
  top: 5px;
  left: 5px;
  width: 335px;
  height: 500px;
  box-shadow: 0 13px 21px -5px rgba(0, 0, 0, 0.3);
  -webkit-transition: 100ms ease-out;
  -moz-transition: 100ms ease-out;
  -o-transition: 100ms ease-out;
  transition: 100ms ease-out;
  #product-front {
    top: 0;
    left: 0;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .image_overlay {
    opacity: 0.7;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  #view_details {
    opacity: 1;
    width: 152px;
    font-size: 15px;
    margin-left: -75px;
    top: 115px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  .stats-container {
    top: 272px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
}
</style>
