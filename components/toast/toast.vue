
<script>
  import { Toast } from 'vant';
  export default {
    name: "tg-toast",
    components: {
      [Toast.name]: Toast
    },
    data() {
      // 
    },
    props: {
      //
    },
    methods: {
      success: function(options){
        this.$Toast.success(options);
      }
    }
  }
</script>

