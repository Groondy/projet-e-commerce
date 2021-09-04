<template>
  <div class="home-card" :style="{ 'background-color': color }">
    <div class="card-content">
      <div class="title">
        <h2>{{ category }}</h2>
        <p>{{ slogan }}</p>
      </div>
      <img
        :src="require(`@/assets/img/${img}`)"
        alt="computer"
        class="category-img"
      />
      <nuxt-link to="/boutique" @click.native="updateCategory">
        <p>voir nos produits</p>
        <img src="../assets/img/arrowBlack.svg" alt="arrow" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: ["category", "slogan", "img", "color"],

  methods: {
    updateCategory() {
      this.$store.commit("UPDATE_CATEGORY", this.category);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-card {
  width: 100%;
  height: 600px;
  margin: 0.5vw;
  margin-bottom: 0;

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .title {
      text-align: center;
      margin-top: 25px;

      h2 {
        font-size: 35px;
        margin-bottom: 8px;
      }

      p {
        font-size: 22px;
      }
    }

    .category-img {
      width: 300px;
      height: auto;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;

      &:hover {
        img {
          margin-left: 20px;
        }
      }

      p {
        color: #000000;
        font-size: 22px;
        font-weight: bold;
      }

      img {
        width: 10px;
        height: auto;
        margin-top: 3px;
        margin-left: 8px;
        transition: 0.4s;
      }
    }

    @media screen and (max-width: 600px) {
      a {
        &:hover {
          img {
            margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>
