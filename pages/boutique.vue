<template>
  <div class="boutique">
    <SearchBar
      @update-search="updateSearch"
      @update-min-price="updateMinPrice"
      @update-max-price="updateMaxPrice"
      :min="SetMinPrice"
      :max="SetMaxPrice"
    />
    <div class="products">
      <div
        class="card"
        v-show="SearchProducts.length > 0"
        v-for="product in FinalList"
        :key="product.id"
      >
        <div class="card-content">
          <p class="title">{{ product.name }}</p>
          <img :src="product.imageUrl" :alt="product.categories" />
          <div class="bottom">
            <div class="price">
              <p>{{ product.price + "€" }}</p>
            </div>
            <nuxt-link :to="`/${product.id}`">
              <p>voir fiche</p>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-show="SearchProducts.length <= 0" class="no-product">
        <img src="@/assets/img/CartError.svg" alt="cart" />
        <p>Pas de produit trouvé</p>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../data/products.js";
import { mapState } from "vuex";
export default {
  name: "boutique",

  data() {
    return {
      products,
      search: "",
      min: 0,
      max: 100000
    };
  },

  computed: {
    ...mapState(["CategoriesList"]),
    Categories() {
      if (this.CategoriesList === "all") {
        return this.products;
      } else {
        return this.products.filter(product => {
          return product.categories.includes(this.CategoriesList);
        });
      }
    },
    SearchProducts() {
      return this.Categories.filter(product => {
        return product.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    FinalList() {
      return this.SearchProducts.filter(product => {
        return product.price >= this.min && product.price <= this.max;
      });
    },

    SetMinPrice() {
      return this.SearchProducts.reduce(
        (a, b) => (a.price < b.price ? a : b),
        {}
      ).price;
    },
    SetMaxPrice() {
      return this.SearchProducts.reduce(
        (a, b) => (a.price > b.price ? a : b),
        {}
      ).price;
    }
  },
  methods: {
    updateSearch(payload) {
      this.search = payload.search;
    },
    updateMinPrice(payload) {
      if (payload.min.length > 0) {
        this.min = payload.min;
      } else {
        this.min = 0;
      }
    },
    updateMaxPrice(payload) {
      if (payload.max.length > 0) {
        this.max = payload.max;
      } else {
        this.max = 100000;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.boutique {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 70px;
    margin-left: 20px;
    width: 80%;
    height: 80%;

    .card {
      width: 350px;
      height: 350px;
      background-color: white;
      margin: 8px;
      border-radius: 7px;
      box-shadow: 0 4px 10px rgba($color: #000000, $alpha: 0.1);
      transition: 0.4s;

      &:hover {
        transform: scale(1.02);
      }

      &-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .title {
          font-size: 20px;
          color: #828282;
          margin-top: 20px;
        }

        img {
          margin-top: -20px;
          width: 45%;
          height: auto;
        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80%;
          margin-bottom: 20px;

          .price {
            width: 45%;
            height: 40px;
            border: 2px solid #46bbe8;
            border-radius: 10px;
            display: flex;
            p {
              color: #46bbe8;
              margin: auto;
            }
          }

          a {
            width: 45%;
            height: 40px;
            background-color: #46bbe8;
            border-radius: 10px;
            display: flex;
            transition: 0.2s ease-in-out;

            p {
              margin: auto;
              font-size: 14px;
              letter-spacing: 0.2em;
            }

            &:hover {
              background-color: #32a7d4;
            }
          }
        }
      }
    }

    .no-product {
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 275px;
      width: 100%;
      margin-top: 60px;

      img {
        width: 200px;
        height: auto;
      }
      p {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .boutique {
    .products {
      .card {
        &-content {
          .bottom {
            a {
              p {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
