<template>
  <div :class="{ searchBarOpen: isOpen, searchBar: !isOpen }">
    <div class="open-search-bar" @click="openSearchBar()">
      <img src="@/assets/img/arrowBlack.svg" alt="arrow" />
    </div>
    <div class="search-content">
      <div class="search">
        <input
          type="text"
          v-model="search"
          placeholder="Recherche"
          maxlength="20"
          size="12"
          @input="updateSearch"
        />
      </div>
      <div class="categories">
        <h3>Catégories :</h3>

        <ul>
          <li>
            <input
              type="radio"
              value="all"
              id="all"
              v-model="category"
              @click="updateCategory"
            /><label for="all">Toutes</label>
          </li>
          <li>
            <input
              type="radio"
              value="PC portable"
              id="pc portable"
              v-model="category"
              @click="updateCategory"
            /><label for="pc portable">PC Portable</label>
          </li>
          <li>
            <input
              type="radio"
              value="PC fixe"
              id="pc fixe"
              v-model="category"
              @click="updateCategory"
            />
            <label for="pc fixe">PC Fixe</label>
          </li>
          <li>
            <input
              type="radio"
              value="Gaming"
              id="gaming"
              v-model="category"
              @click="updateCategory"
            /><label for="gaming">Gaming</label>
          </li>
          <li>
            <input
              type="radio"
              value="Accessoire"
              id="accessoire"
              v-model="category"
              @click="updateCategory"
            /><label for="accessoire">Accessoire</label>
          </li>
        </ul>
      </div>
      <div class="price">
        <h3>Prix :</h3>
        <div class="price-select">
          <p>Min :</p>
          <input type="text" :placeholder="min" @input="updateMinPrice" />
        </div>
        <div class="price-select">
          <p>Max :</p>
          <input type="text" :placeholder="max" @input="updateMaxPrice" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: ["min", "max"],

  data() {
    return {
      search: "",
      category: this.$store.state.CategoriesList,
      isOpen: false
    };
  },

  methods: {
    updateCategory(e) {
      this.$store.commit("UPDATE_CATEGORY", e.target.value);
    },
    updateSearch() {
      this.$emit("update-search", { search: this.search });
    },
    updateMinPrice(e) {
      this.$emit("update-min-price", { min: e.target.value });
    },
    updateMaxPrice(e) {
      this.$emit("update-max-price", { max: e.target.value });
    },
    openSearchBar() {
      this.isOpen ? (this.isOpen = false) : (this.isOpen = true);
    }
  }
};
</script>

<style lang="scss" scoped>
.open-search-bar {
  display: none;
}
.searchBar,
.searchBarOpen {
  border-right: 2px solid #828282;
  height: 100vh;
  width: 17%;
  min-width: 200px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  .search-content {
    position: absolute;
    top: 80px;
    left: 1.5%;
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 100%;

    .search {
      width: 100%;
      text-align: center;
      input {
        height: 40px;
        width: 80%;
        font-size: 22px;
      }
    }

    .categories {
      color: #828282;
      margin-left: 10%;
      margin-top: 30px;

      h3 {
        font-size: 16px;
      }

      li {
        font-size: 14px;
        letter-spacing: 0.1em;
        margin-top: 20px;
        margin-left: 20px;

        input {
          margin-right: 13px;
        }
      }
    }

    .price {
      h3 {
        font-size: 16px;
        color: #828282;
        margin-left: 10%;
        margin-top: 30px;
      }

      .price-select {
        display: flex;
        margin-top: 15px;
        margin-left: 15%;
        p {
          color: #828282;
          font-size: 14px;
        }
        input {
          width: 80px;
        }
      }
    }
  }
}

@media screen and (max-width: 950px) {
  .searchBar,
  .searchBarOpen {
    border: none;
    position: fixed;
    left: 0;
    width: 100vw;
    z-index: 5;
    height: 100vh;

    transition: 0.4s;
    .open-search-bar {
      display: initial;
      visibility: visible;
      position: absolute;
      top: 90px;
      left: 4vw;
      cursor: pointer;
      z-index: 15;
      transition: 0.4s;
      background-color: rgba(0, 0, 0, 0);
      img {
        width: 18px;
        height: auto;
        transition: 0.3s ease-in-out;
      }

      &:hover {
        left: 4.5vw;
      }
    }
  }

  .searchBar {
    visibility: hidden;
    background-color: rgba(255, 255, 255, 0);
    .search-content {
      animation: closeSearchBar 0.4s ease-in-out;
    }
  }
  .searchBarOpen {
    visibility: visible;
    background-color: rgba(255, 255, 255, 1);

    .search-content {
      animation: openSearchBar 0.4s ease-in-out;
    }
    .open-search-bar {
      background-color: rgba(255, 255, 255, 0);
      img {
        transform: rotate(180deg);
      }
    }
  }
}

@keyframes openSearchBar {
  from {
    left: -1000px;
  }
  to {
    left: 0;
  }
}
@keyframes closeSearchBar {
  from {
    left: 0;
  }
  to {
    left: -1000px;
  }
}
</style>
