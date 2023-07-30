<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__item product--woman">
        <NuxtLink to="/products/women" class="hero__item__img">
          <img
            src="~images/woman-category.jpg"
            alt="Product" class="img-responsive"/>
        </NuxtLink>
        <div class="hero__item__text">
          <div class="title-product">
            <span class="hero__item__ttl">Women</span>
          </div>
          <div class="subtitle-product">
            <h3>Feel special everyday!</h3>
          </div>
          <div class="desc-product">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br>
              Accusamus alias aliquam assumenda, corporis cum et, expedita fugit hic quas recusandae reiciendis, rerum.
              Ad aliquam aut deserunt eligendi enim explicabo harum libero minus, neque nihil perspiciatis rem tempora
              veniam.
              <br>
              <br>
              Asperiores, aut dolor, dolore ducimus error, in incidunt ipsa iste iure minus nostrum pariatur rem
              repellendus repudiandae sit tempore totam voluptatibus voluptatum. Ab aspernatur at delectus deserunt
              dolorem qui quis!
              <br><br>
            </p>
          </div>
        </div>
      </div>
      <div class="hero__item product--men">
        <NuxtLink to="/products/men" class="hero__item__img">
          <img
            src="~images/men-category.jpg"
            alt="Product" class="img-responsive"/>
        </NuxtLink>
        <div class="hero__item__text">
          <div class="title-product">
            <span>Men</span>
          </div>
          <div class="subtitle-product">
            <h3>Stylish clothes for all occasions</h3>
          </div>
          <div class="desc-product">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsa, voluptas!</p>
          </div>
        </div>
      </div>
      <div class="hero__item product--kids">
        <NuxtLink to="/products/kids" class="hero__item__img">
          <img
            src="~images/kids-category.jpg"
            alt="Product" class="img-responsive"/>
        </NuxtLink>
        <div class="hero__item__text">
          <div class="title-product">
            <span>Kids</span>
          </div>
          <div class="subtitle-product">
            <h3>Cute clothes for the little ones</h3>
          </div>
          <div class="desc-product">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding-bottom: 24px;
}

.hero__item {
  background: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;

  &__img {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translate(-50%);
    padding: 15px;
    transition: all 0.2s ease-in-out;
    width: 90%;
    cursor: pointer;

    img {
      display: flex;
      height: 100%;
      width: 90%;
      object-fit: cover;
      margin: auto;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
    }
  }

  &:hover .hero__item__img {
    top: -40px;

    img {
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
    }
  }

  &.product--woman,
  &.product--men,
  &.product--kids {
    .hero__item__img {
      height: 260px;
    }

    .hero__item__text {
      padding-top: 280px;
    }
  }

  &.product--men .hero__item__img img {
    object-position: top;
  }

  &__text {
    padding: 0 16px;

    .title-product {
      font-size: 1.8em;
      color: #DCBD6B;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
      margin-bottom: 16px;
      text-align: center;
    }

    .subtitle-product {
      font-size: 1.5em;
      color: #333333;
      margin-bottom: 12px;
    }

    .desc-product {
      font-size: 1em;
      color: #ccc;
      line-height: 1.5;
    }
  }
}

@media (max-width: 1199px) {
  .hero__item {
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 48px;
  }
}

@media (min-width: 768px) {
  .hero__item {
    &.product--woman,
    &.product--kids {
      .hero__item__img {
        height: 400px;
      }

      .hero__item__text {
        padding-top: 440px;
      }
    }

    &.product--men {
      .hero__item__img {
        height: 600px;
      }

      .hero__item__text {
        padding-top: 640px;
      }
    }
  }
}

@media (min-width: 1200px) {
  .hero__inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 40px;

    .product--woman {
      grid-column: 1;
      grid-row: span 2;
    }

    .product--man,
    .product--kids {
      grid-column: 2;
    }
  }
  .hero__item {
    &.product--woman {
      .hero__item__img {
        height: 500px;
      }

      .hero__item__text {
        padding-top: 540px;
      }
    }

    &.product--men {
      .hero__item__img {
        height: 350px;
      }

      .hero__item__text {
        padding-top: 370px;
      }
    }

    &.product--kids {
      .hero__item__img {
        height: 200px;
      }

      .hero__item__text {
        padding-top: 220px;
      }
    }
  }
}
</style>
<script setup>
</script>
