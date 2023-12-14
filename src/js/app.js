import tv1 from '@/assets/images/tv1.jpeg';
import login from '@/assets/images/login.jpeg';
import cart from '@/assets/images/cart.png';
import menu from '@/assets/images/menu.png';
import logo from '@/assets/images/logo.png';
import HeadSection from '../components/Header.vue';
import Filter from '../components/Filter.vue';

export default {
  components: {
    HeadSection,
    Filter
  },
  data(){
    return{
      //check=[]
      "products":[
        {
          "img":tv1,
          "name":"TV"
        },
        {
          "img":tv1,
          "name":"TV"
        },
        {
          "img":tv1,
          "name":"TV"
        },
        {
          "img":tv1,
          "name":"TV"
        }
      ]
      }
  },
   methods:{
     show(n) {
       alert(n);
     }
    }
  }
  // }
  

