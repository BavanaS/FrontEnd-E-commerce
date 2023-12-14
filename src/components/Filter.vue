<template>
  <div class="filter">
    <div>
      <h3 style="padding-left: 5%">Filters</h3>
    </div>
    <div style="background-color: white">
      <div>
        <h4 style="padding-left: 5%">Category:</h4>
        <div v-for="category in categories" :key="category" class="category">
          <input
            type="radio"
            :value="category"
            v-model="selectedCategory"
            name="category"
            @click="filterProducts"
          />
          {{ category }}
        </div>
      </div>
      <div>
        <h4 style="padding-left: 5%">Price</h4>
        <div class="price">
          <select name="min-price" style="height: 5%">
            <option value="Min">Min</option>
            <option value="20000">Rs. 20000</option>
            <option value="30000">Rs. 30000</option>
            <option value="50000">Rs. 50000</option>
          </select>
          <p>to</p>
          <select name="max-price" style="height: 5%">
            <option value="20000">Rs. 20000</option>
            <option value="30000">Rs. 30000</option>
            <option value="50000">Rs. 50000</option>
            <option value="100000+">Rs. 100000+</option>
          </select>
        </div>
        <div class="brand">
          <h4>Brands:</h4>
          <select v-model="selected" name="max-price" style="width: 40%">
            <option disabled value="">Select one</option>
            <option>Sony</option>
            <option>Samsung</option>
            <option>LG</option>
            <option>Mi</option>
          </select>
        </div>
        <div class="ratings">
          <h4>Ratings:</h4>
          <form style="padding-left: 5%">
            <input v-model="check1" type="checkbox" name="4" value="4" />
            <label for="4* and above">4* and above</label> <br />
            <input v-model="check2" type="checkbox" name="3" value="3" />
            <label for="3* and above">3* and above</label> <br />
            <input v-model="check3" type="checkbox" name="2" value="2" />
            <label for="2* and above">2* and above</label> <br />
            <input v-model="check4" type="checkbox" name="1" value="1" />
            <label for="4* and above">1* and above</label>
          </form>
        </div>
        <div
          class="clear-filters"
          style="padding-left: 30%; padding-bottom: 5%"
        >
          <br /><button @click="clearFilters">Clear filters</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/filter.js"></script>
<style scoped>
.filter {
  width: 25%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
}

.radio {
  padding-left: 5%;
  display: flex;
  flex-direction: column;
}

.category {
  padding-left: 5%;
}

button {
  background-color: rgb(193, 184, 214);
  border-color: white;
  border-radius: 5px;
}

.price {
  display: flex;
  justify-content: space-around;
}

.brand {
  padding-left: 5%;
  display: flex;
  align-items: center;
}

.ratings {
  padding-left: 5%;
}

.clear-filters {
  align-items: center;
}
</style>
