<template>
  <div class="accueil">
    <div class="first-card">
      <div class="first-card-content">
        <h1>DEVENEZ PROFESSIONNEL</h1>
        <img src="@/assets/img/laptop.jpeg" alt="laptop" class="main-img" />
        <nuxt-link
          to="/boutique"
          class="voir-produits"
          @click.native="updateCategory"
        >
          <p>voir nos produits</p>
          <img src="@/assets/img/arrow.svg" alt="arrow" />
        </nuxt-link>
      </div>
    </div>
    <div class="categories-card">
      <HomeCard
        category="PC portable"
        slogan="Mobilité"
        img="macbookPro16.png"
        color="#AEDBEE"
      />
      <HomeCard
        category="PC fixe"
        slogan="Comfort"
        img="MacBook.png"
        color="#F183A0"
      />
      <HomeCard
        category="Gaming"
        slogan="Puissance"
        img="pcGamer.png"
        color="#F5C241"
      />
      <HomeCard
        category="Accessoire"
        slogan="La différence"
        img="casque.png"
        color="#46BBE8"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateCategory() {
      this.$store.commit("UPDATE_CATEGORY", "all");
    }
  }
};
</script>

<style lang="scss">
.accueil {
  display: flex;
  flex-direction: column;
  align-items: center;

  .first-card {
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 100vh;
    width: 100%;

    &-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        color: white;
        font-size: 56px;
        text-align: center;
        position: absolute;
        top: 10vh;

        @media screen and (max-width: 600px) {
          font-size: 36px;
        }
      }

      @media screen and (max-width: 600px) {
        .main-img {
          width: 650px;
          height: auto;
        }
      }

      .voir-produits {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 26px;

        &:hover {
          img {
            margin-left: 20px;
          }
        }

        img {
          margin-left: 10px;
          margin-top: 3px;
          transition: 0.4s;
        }
      }
      @media screen and (max-width: 600px) {
        .voir-produits {
          &:hover {
            img {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  .categories-card {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0.5vw;
    margin-bottom: 0.8vw;

    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }
}
</style>
