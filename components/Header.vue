<template>
  <header>
    <NuxtLink to="/">
      <img src="~images/nav-logo.jpg" alt="Company logo" class="logo">
    </NuxtLink>
    <input type="checkbox" id="nav-toggle" class="nav-toggle">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/products/women">Women</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/men">Men</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/kids">Kids</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/accessories">Accesories</NuxtLink>
        </li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
    <!--      icons-->
    <div class="icons">
      <NuxtLink to="/cart">
        <span class="mdi mdi-cart"></span>
      </NuxtLink>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss" scoped>
header {
  background: #fff;
  text-align: center;
  position: fixed;
  width: 100%;
  z-index: 666;

  .logo {
    margin: 10px 0;
    width: 80px;
  }

  .icons {
    position: absolute;
    right: 30px;
    top: 30px;

    span {
      font-size: 26px;
      color: black;
      line-height: 14px;
    }
  }
}

.nav-toggle {
  display: none;

  &-label {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 1em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    span,
    span:before,
    span:after {
      display: block;
      background: #333;
      height: 3px;
      width: 2em;
      position: relative;
    }

    span:before,
    span:after {
      content: '';
      position: absolute;
    }

    span:before {
      bottom: 7px;
    }

    span:after {
      top: 7px;
    }
  }

  &:checked ~ nav {
    transform: scale(1, 1);
  }

  &:checked ~ nav a {
    opacity: 1;
    transition: opacity 250ms ease-in-out 250ms;
  }

  &:checked .nav-toggle-label span {
    opacity: 0;
  }

  &:checked span::before {
    transform: rotate(45deg);
  }

  &:checked span::after {
    transform: rotate(-45deg);
  }
}

nav {
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background: #fff;
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin-bottom: 1em;
    margin-left: 1em;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;
    opacity: 0;
    transition: opacity 150ms ease-in-out;

    &:hover {
      color: #DCBD6B;
    }
  }
}

@media screen and (min-width: 1200px) {
  header {
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;

    .logo {
      grid-column: 2 / span 1;
    }
  }
  .nav-toggle-label {
    display: none;
  }
  nav {
    all: unset;
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul {
      display: flex;
    }

    li {
      margin-left: 3em;
      margin-bottom: 0;
    }

    a {
      opacity: 1;
      position: relative;

      &:before {
        content: '';
        display: block;
        height: 4px;
        background: #DCBD6B;
        width: 100%;
        position: absolute;
        top: -.75em;
        left: 0;
        right: 0;
        transform: scale(0, 1);
        transform-origin: right;
        transition: transform ease-in-out 250ms;
      }

      &:hover:before {
        transform: scale(1, 1);
      }
    }
  }
}
</style>
