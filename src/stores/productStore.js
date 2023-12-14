import { defineStore } from "pinia";
import img1 from "@/assets/images/beauty1.jpeg";
import img2 from "@/assets/images/beauty2.jpeg";
import img3 from "@/assets/images/electronics1.jpeg";
import img4 from "@/assets/images/fashion1.jpeg";
import img5 from "@/assets/images/electronics2.jpeg";
import img6 from "@/assets/images/electronics3.jpeg";
import img7 from "@/assets/images/beauty3.jpeg";
import img8 from "@/assets/images/electronics4.jpeg";
import img9 from "@/assets/images/fashion2.jpeg";
import img10 from "@/assets/images/beauty4.jpeg";
import img11 from "@/assets/images/electronics5.jpeg";
import img12 from "@/assets/images/fashion3.jpeg";

export const useProductStore = defineStore("productStores", {
  state: () => ({
    products: [
      {
        img: img1,
        name: "Cream",
        price: 200,
        quantity: 1,
        category: "Skin care",
      },
      {
        img: img2,
        name: "Cream",
        price: 500,
        quantity: 1,
        category: "Skin care",
      },
      {
        img: img3,
        name: "Fridge",
        price: 50000,
        quantity: 1,
        category: "Electronics",
      },
      {
        img: img4,
        name: "Dress",
        price: 2000,
        quantity: 1,
        category: "Fashion",
      },
      {
        img: img5,
        name: "Fridge",
        price: 60000,
        quantity: 1,
        category: "Electronics",
      },
      {
        img: img6,
        name: "Laptop",
        price: 50000,
        quantity: 1,
        category: "Electronics",
      },
      {
        img: img7,
        name: "Cream",
        price: 500,
        quantity: 1,
        category: "Skin care",
      },
      {
        img: img8,
        name: "Television",
        price: 150000,
        quantity: 1,
        category: "Electronics",
      },
      {
        img: img9,
        name: "Dress",
        price: 2500,
        quantity: 1,
        category: "Fashion",
      },
      {
        img: img10,
        name: "Cream",
        price: 300,
        quantity: 1,
        category: "Skin care",
      },
      {
        img: img11,
        name: "Vaccum",
        price: 10000,
        quantity: 1,
        category: "Electronics",
      },
      {
        img: img12,
        name: "Coat",
        price: 5000,
        quantity: 1,
        category: "Fashion",
      },
    ],
    categories: ["Skin care", "Electronics", "Fashion"],
    cart: [],
    filteredProducts: [],
    
  }),
  actions: {
    addCart(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
    clearCart() {
      console.log(this.cart);
      this.cart = [];
    },
    filterProductStoreByCategory(category) {
      this.filteredProductsList = this.products.filter(
        (product) => product.category === category
      );
    },
    copyState() {
      this.filteredProductsList = this.products;
    },
    removeFilters() {
        this.filteredProductsList = this.products;
    },
  },
});
