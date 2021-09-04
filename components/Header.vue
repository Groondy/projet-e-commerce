<template>
  <div class="header">
    <div class="nav">
      <nuxt-link to="/">accueil</nuxt-link>
      <nuxt-link to="/boutique">boutique</nuxt-link>
      <nuxt-link to="/panier">panier</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 10;

  .nav {
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    font-size: 18px;

    a {
      color: #828282;
      transition: 0.3s ease-in-out;

      &:hover {
        color: black;
      }
      &.nuxt-link-exact-active {
        color: black;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .nav {
      width: 90%;
      font-size: 16px;
    }
  }
}
</style>
