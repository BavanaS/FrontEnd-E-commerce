import { mapActions, mapWritableState } from "pinia";
import { useProductStore } from "../../stores/productStore";

export default {
  computed: {
    ...mapWritableState(useProductStore, ["cart"]),
  },

  methods: {
    ...mapActions(useProductStore, ["clearCart"]),
    emptyCart() {
      this.clearCart();
    },
  },
};
