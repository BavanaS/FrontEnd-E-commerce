import tv1 from "@/assets/images/tv1.jpeg";
import testAPI from "@/api/test-api";

import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductStore } from "../../stores/productStore";
export default {
    mounted(){
console.log(this.$ref)
    },
  data() {
    return {
      //check=[]
    };
  },
  methods: {
    ...mapActions(useProductStore,["addCart"]),
    decrease(product) {
      product.quantity--;
    },
    increase(product) {
      product.quantity++;
    },
    addToCart(product) {
      this.addCart(product);
      alert("The product is added to cart")
    },

  },
  computed: {
    ...mapState(useProductStore, ["products"]),

  },
};
