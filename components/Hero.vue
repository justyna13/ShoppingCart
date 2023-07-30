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
          <div class="category">
            <span>Ethnic</span>
          </div>
          <div class="title-product">
            <h3>My face not my heart</h3>
          </div>
          <div class="description-prod">
            <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good
              work now check this link</p>
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
          <div class="category">
            <span>Ethnic</span>
          </div>
          <div class="title-product">
            <h3>My face not my heart</h3>
          </div>
          <div class="description-prod">
            <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good
              work now check this link</p>
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
          <div class="category">
            <span>Ethnic</span>
          </div>
          <div class="title-product">
            <h3>My face not my heart</h3>
          </div>
          <div class="description-prod">
            <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good
              work now check this link</p>
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
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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
}

@media (max-width: 767px) {
  .hero__item {
    margin-bottom: 48px;
  }
}

@media (min-width: 768px) {
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
}
</style>
