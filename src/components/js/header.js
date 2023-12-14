import tv1 from "@/assets/images/tv1.jpeg";
import login from "@/assets/images/login.jpeg";
import cart from "@/assets/images/cart.png";
import menu from "@/assets/images/menu.png";
import logo from "@/assets/images/logo.png";
import { useProductStore } from "../../stores/productStore";
import { mapWritableState } from "pinia";

export default {
  props:['name'],
  emits:['message'],
  data() {
    return {
      logo,

      //check=[]
      products: [
        {
          img: login,
          name: "Login",
        },
        {
          img: cart,
          name: "Cart",
        },
        {
          img: menu,
          name: "Menu",
        }
      ],
    };
  },
  computed: {
    ...mapWritableState(useProductStore, ["cart"])
  },
  methods:{
    showCart()
    {
      this.$router.push('/cart');
    },
    showProduct()
    {
      this.$router.push('/');
    },
    
  },
  
  
  
};
