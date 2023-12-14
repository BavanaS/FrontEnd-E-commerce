<template>
  <div class="cart">
    <div class="cartHeader">
      <div>
        <h2>My Cart:</h2>
      </div>
      <div><br /><button @click="emptyCart">Clear cart</button></div>
    </div>
    <div class="container">
      <div v-for="product in cart" :key="product">
        <div>
          <img class="img" :src="product.img" />
          <h4>{{ product.name }}</h4>
          <h5>Price: {{ product.price }}</h5>
          <h5>Quantity: {{ product.quantity }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/cart.js"></script>
<style scope>
.cart {
  width: 70%;
}

.cartHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  background-color: rgb(193, 184, 214);
  border-color: white;
  border-radius: 5px;
}

.container {
  background-color: white;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
