import tv1 from "@/assets/images/tv1.jpeg";
import login from "@/assets/images/login.jpeg";
import cart from "@/assets/images/cart.png";
import menu from "@/assets/images/menu.png";
import logo from "@/assets/images/logo.png";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../stores/productStore";
export default {
  data() {
    return {
      
      selectedCategory: "",
      selected: "",
      check1: "",
      check2: "",
      check3: "",
      check4: "",
    };
  },
  computed: {
    ...mapState(useProductStore, ["categories"]),
  },
  methods: {
    ...mapActions(useProductStore, ["filterProductStoreByCategory", "copyState","removeFilters"]),
    filterProducts() {
      this.filterProductStoreByCategory(this.selectedCategory);
    },
    clearFilters() {
      this.removeFilters();
    },
  },
  mounted(){
    this.copyState();
  },
  watch: {
    check1(value1) {
      console.log(value1);
    },
  },
};
