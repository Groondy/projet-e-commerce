<template>
  <div class="card-product">
    <div class="card-product-content">
      <div class="presentation">
        <img :src="currentProduct.imageUrl" alt="computer" />
        <div class="title-description">
          <h3>{{ currentProduct.name }}</h3>
          <p>{{ currentProduct.description }}</p>
        </div>
      </div>

      <div class="add-to-cart">
        <div class="price">
          <p>{{ currentProduct.price }} €</p>
          <div class="quantity">
            <label for="quantity">Quantité</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              max="9"
              value="1"
              v-model="quantity"
              @input="setQuantity"
              onclick="this.select()"
            />
          </div>
        </div>
        <nuxt-link
          to="/panier"
          class="add-to-cart-btn"
          @click.native="addToCart"
        >
          <p>ajouter au panier</p>
          <img src="@/assets/img/Cart.svg" alt="cart" />
        </nuxt-link>
        <nuxt-link to="/boutique" class="back">
          <p>retour</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../data/products.js";
export default {
  data() {
    return {
      products,
      currentProduct: products.filter(product => {
        return product.id == this.$route.params.id;
      })[0],
      quantity: 1
    };
  },
  methods: {
    addToCart() {
      if (process.client) {
        let panier = JSON.parse(localStorage.getItem("panier"));

        if (panier) {
          let productInCart = panier.find(
            product => product.id == this.currentProduct.id
          );
          if (productInCart) {
            productInCart.quantity += parseInt(this.quantity);
            localStorage.setItem("panier", JSON.stringify(panier));
          } else {
            panier.push({
              name: this.currentProduct.name,
              id: this.currentProduct.id,
              price: this.currentProduct.price,
              quantity: parseInt(this.quantity),
              image: this.currentProduct.imageUrl
            });
            localStorage.setItem("panier", JSON.stringify(panier));
          }
        } else {
          panier = [];
          panier.push({
            name: this.currentProduct.name,
            id: this.currentProduct.id,
            price: this.currentProduct.price,
            quantity: parseInt(this.quantity),
            image: this.currentProduct.imageUrl
          });
          localStorage.setItem("panier", JSON.stringify(panier));
        }
      }
    },
    setQuantity() {
      if (this.quantity > 9 || this.quantity < 1) {
        this.quantity = 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-product {
  width: 100%;
  height: 700px;
  display: flex;

  &-content {
    width: 86%;
    height: 100%;
    margin: 100px auto 0 auto;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;

    .presentation {
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      border-right: 2px solid #828282;

      img {
        width: 500px;
        height: auto;
        margin-top: 40px;
      }

      .title-description {
        width: 90%;
        margin-bottom: 40px;

        h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          text-align: justify;
          line-height: 20px;
        }
      }
    }
    .add-to-cart {
      width: 30%;
      height: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 350px;

        p {
          font-size: 28px;
        }
      }

      &-btn {
        background-color: #46bbe8;
        width: 300px;
        height: 55px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s ease-in-out;

        p {
          font-size: 18px;
          margin-right: 10px;
        }

        img {
          width: 20px;
          height: auto;
        }

        &:hover {
          background-color: #32a7d4;
        }
      }

      .back {
        border: 2px solid #46bbe8;
        border-radius: 10px;
        width: 150px;
        height: 40px;
        display: flex;
        margin-top: -50px;

        p {
          color: #46bbe8;
          margin: auto;
          font-size: 18px;
        }
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  .card-product {
    height: 900px;
    margin-bottom: 150px;
    &-content {
      flex-direction: column;

      .presentation {
        width: 100%;
        height: auto;
        border-right: none;
        border-bottom: 2px solid #828282;
        justify-content: flex-start;
        letter-spacing: 0.1em;

        img {
          width: 350px;
          margin-bottom: 20px;
        }

        .title-description {
          margin-bottom: 40px;

          h3 {
            font-size: 20px;
          }
          p {
            font-size: 18px;
          }
        }
      }

      .add-to-cart {
        justify-content: space-around;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .card-product {
      &-content {
        .presentation {
          img {
            width: 90%;
          }

          .title-description {
            p {
              font-size: 14px;
              line-height: 16px;
            }
          }
        }

        .add-to-cart {
          min-height: 30%;

          .price {
            justify-content: center;

            p {
              font-size: 22px;
            }
          }

          &-btn {
            height: 45px;
            width: 250px;

            p {
              font-size: 14px;
            }

            img {
              width: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
