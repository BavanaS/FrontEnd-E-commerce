<template>
  <div class="product">
    <div>
      <h3 style="padding-left: 5%">Products</h3>
    </div>
    <div class="scrollmenu">
      <div v-for="product in products" :key="product">
        <div class="img1">
          <img
            :src="product.img"
            width="200px"
            height="200px"
            alt="Image Description"
          />
          <h3>{{ product.name }}</h3>
          <h4>Rs. {{ product.price }}</h4>
          <h4>{{ product.category }}</h4>
          <div>
            <button @click="decrease(product)">-</button>
            {{ product.quantity }}
            <button @click="increase(product)">+</button> <br /><br /><button
              @click="addToCart(product)"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script src="./js/product.js"></script>
<style scoped>
.img1 {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.product {
  display: flex;
  justify-content: space-around;
  width: 70%;
  height: 100%;
  padding: 2%;
  flex-direction: column;
}

div.scrollmenu {
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

button {
  background-color: rgb(193, 184, 214);
  border-color: white;
  border-radius: 5px;
}

.img1 {
  display: inline-block;
  width: 200px;
  height: 200px;
  text-align: center;
  padding: 25px;
  text-decoration: none;
}
</style>
