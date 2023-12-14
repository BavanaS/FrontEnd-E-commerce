<template>
  <div class="a">
    <div class="left-container">
      <div class="imgLogo">
        <img
          :src="logo"
          style="border: 2px"
          width="50%"
          height="50%"
          alt="Image Description"
        />
      </div>
      <div class="head">
        <input type="text" placeholder="Search" style="width: 60%" />
        <button type="submit">Search</button>
        <h5>{{ name }}</h5>
        <button @click="$emit('message', name)">Alert</button>
      </div>
    </div>
    <nav class="right-container">
      <div class="img1">
        <img
          :src="products[0].img"
          width="60%"
          height="50%"
          alt="Image Description"
        />
        <button>Login</button>
      </div>
      <div class="img1">
        <img
          :src="products[1].img"
          width="60%"
          height="50%"
          alt="Image Description"
        />
        <button @click="showCart()">Cart</button>
        <button>{{cart.length}}</button>
      </div>
      <div class="img1">
        <img
          :src="products[2].img"
          width="60%"
          height="50%"
          alt="Image Description"
        />
        <button>Menu</button>
      </div>
      <div>
        <button @click="showProduct()">Show products</button>
      </div>
    </nav>
  </div>
</template>
<script src="./js/header.js"></script>
<style scoped>
.a {
  padding: 2%;
  background-color: rgb(193, 184, 214);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left-container {
  width: 50%;
  display: flex;
  flex-direction: row;

  align-items: center;
}

button {
  background-color: rgb(179, 213, 223);
  border-color: white;
  border-radius: 5px;
}

.right-container {
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 3%;
}
.head {
  display: flex;
  width: 60%;
  height: 30%;
  border-radius: 5px;
  border-color: white;
}
.imgLogo {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
