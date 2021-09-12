<template>
  <div class="panier">
    <div class="no-product" v-if="!cart || cart.length <= 0">
      <p>Pas de produit dans le panier</p>
      <img src="@/assets/img/CartError.svg" alt="cart" />
    </div>
    <div class="products" v-else>
      <div class="products-content">
        <div
          class="product"
          v-for="(product, index) in cart"
          :key="product.id"
          :class="{ last: index === cart.length - 1 }"
        >
          <img :src="product.image" alt="computer" class="img-product" />
          <div class="title-and-price">
            <h3>{{ product.name }}</h3>
            <div class="price-total">
              <div class="price">
                <p>{{ product.price }}€</p>
              </div>
              <p class="product-total">
                X {{ product.quantity }} =
                {{ product.price * product.quantity }} €
              </p>
            </div>
          </div>
          <div class="custom">
            <div class="add circle" @click="addItem(product.id)">
              <p>+</p>
            </div>
            <div class="remove circle" @click="removeItem(product.id)">
              <p>-</p>
            </div>
            <div class="delete circle" @click="deleteItem(product.id)">
              <img src="@/assets/img/trash.svg" alt="trash" />
            </div>
          </div>
        </div>
      </div>
      <div class="buy">
        <div class="buy-content">
          <div class="price">
            <p
              v-for="(product, index) in cart"
              :key="product.id"
              :class="{ notTheFirst: index !== 0 }"
            >
              {{ product.price * product.quantity }} €
            </p>
          </div>
          <div class="total">
            <p>Total : {{ setTotal }} €</p>
          </div>
        </div>
        <nuxt-link to="/finDemo" @click.native="clearCart">
          <p>payer</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "panier",

  data() {
    return {
      cart: []
    };
  },
  computed: {
    setTotal() {
      let total = 0;
      this.cart.forEach(product => {
        total += product.price * product.quantity;
      });
      return total;
    }
  },

  methods: {
    addItem(id) {
      if (process.client) {
        let panier = JSON.parse(localStorage.getItem("panier"));
        let selectedProduct = panier.find(product => product.id == id);
        selectedProduct.quantity += 1;
        localStorage.setItem("panier", JSON.stringify(panier));
        this.updateCart();
      }
    },
    removeItem(id) {
      if (process.client) {
        let panier = JSON.parse(localStorage.getItem("panier"));
        let selectedProduct = panier.find(product => product.id == id);
        if (selectedProduct.quantity <= 1) {
          this.deleteItem(id);
        } else {
          selectedProduct.quantity -= 1;
          localStorage.setItem("panier", JSON.stringify(panier));
          this.updateCart();
        }
      }
    },
    deleteItem(id) {
      if (process.client) {
        let panier = JSON.parse(localStorage.getItem("panier"));
        let newPanier = panier.filter(product => {
          return product.id != id;
        });
        localStorage.setItem("panier", JSON.stringify(newPanier));
        this.updateCart();
      }
    },
    clearCart() {
      if (process.client) {
        localStorage.removeItem("panier");
      }
    },
    updateCart() {
      if (process.client) {
        this.cart = JSON.parse(localStorage.getItem("panier"));
      }
    }
  },

  mounted() {
    this.updateCart();
  }
};
</script>

<style lang="scss" scoped>
.panier {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .products {
    margin: 120px auto 100px auto;
    width: 80%;
    height: 100%;
    min-height: 300px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
    display: flex;

    &-content {
      width: 70%;
      border-right: 2px solid #828282;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .last {
        border: none !important;
      }

      .product {
        border-bottom: 2px solid #828282;
        height: 200px;
        display: flex;
        align-items: center;
        padding: 10px;
        width: 100%;
        position: relative;

        .img-product {
          width: 150px;
          height: auto;
          margin-left: 30px;
        }

        .title-and-price {
          width: 50%;
          height: 60%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          margin-left: 80px;
          margin-top: -20px;

          .price-total {
            display: flex;
            align-items: center;
            width: 100%;

            .price {
              border: 2px solid #46bbe8;
              border-radius: 10px;
              width: 120px;
              height: 40px;
              display: flex;
              font-size: 18px;
              margin-right: 15px;

              p {
                margin: auto;
                color: #46bbe8;
              }
            }

            .product-total {
              color: #46bbe8;
              font-size: 18px;
            }
          }
        }

        .custom {
          position: absolute;
          right: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 110px;

          .circle {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .add {
            border: 2px solid #46bbe8;

            p {
              margin-left: 5px;
              margin-bottom: 3px;
              font-size: 26px;
              color: #46bbe8;
            }
          }

          .remove {
            border: 2px solid #46bbe8;

            p {
              color: #46bbe8;
              font-size: 34px;
              margin-left: 5px;
              margin-bottom: 3px;
            }
          }

          .delete {
            border: 2px solid #eb5757;
          }
        }
      }
    }

    .buy {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-content {
        margin-top: 50px;
        margin-left: 40px;

        .price {
          p {
            margin-bottom: 20px;
            font-size: 26px;
          }
          .notTheFirst::before {
            margin-left: -35px;
            content: "+";
          }
        }

        .total {
          margin: 60px 0 0 -50px;
          font-size: 26px;
          position: relative;

          &::before {
            content: "";
            width: 90%;
            height: 2px;
            background-color: black;
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translate(-50%);
          }
        }
      }

      a {
        background-color: #46bbe8;
        width: 150px;
        height: 42px;
        border-radius: 10px;
        display: flex;
        transition: 0.3s ease-in-out;
        margin-top: 60px;

        p {
          margin: auto;
          font-size: 20px;
        }

        &:hover {
          background-color: #32a7d4;
        }
      }
    }
  }

  .no-product {
    margin: 200px auto 0 auto;
    text-align: center;

    p {
      font-size: 36px;
      color: black;
      margin-bottom: 60px;
    }
    img {
      width: 150px;
      height: auto;
    }
  }
}

@media screen and (max-width: 1200px) {
  .panier {
    .products {
      flex-direction: column;
      letter-spacing: 0.1em;

      &-content {
        width: 100%;
        border-right: none;
        border-bottom: 2px solid #828282;

        .product {
          height: 300px;
          position: relative;
          margin-top: -50px;
          h3 {
            font-size: 14px;
          }

          .title-and-price {
            flex-direction: row;
            position: absolute;
            width: 90%;
            left: -40px;
            bottom: -120px;
            .price-total {
              .price {
                width: 90px;
                height: 33px;
                font-size: 14px;
              }

              .product-total {
                font-size: 14px;
                margin-right: 30px;
              }
            }
          }
          .custom {
            .add {
              p {
                margin-left: 2px;
              }
            }

            .remove {
              p {
                margin-left: 2px;
              }
            }
          }
        }
      }

      .buy {
        width: 100%;

        &-content {
          margin-top: 30px;
          margin-left: 60px;

          .price {
            p {
              margin-bottom: 10px;
              font-size: 20px;
            }
            .notTheFirst::before {
              margin-left: -23px;
            }
          }

          .total {
            margin: 30px 0 0 -40px;
            font-size: 22px;

            &::before {
              top: -15px;
              width: 100%;
            }
          }
        }

        a {
          margin-top: 30px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
