<template>

  <div class="vertical-slide-controls-container text-center">

    <!-- Slide arrow up  -->   
    <div @click="moveUp()" class="slide_control">
      <v-icon              
        color="grey darken-2">                    
        mdi-arrow-up
      </v-icon>       
    </div>

    <!-- Slide images -->
    <div class="vertical-slide-container">                  
      <div class="vertical-items">
        <div  v-for="item in currentProduct.images" :key="item.num"  class="d-flex justify-center align-center">
          <div :style="{backgroundColor: item.color}" 
                style="" 
                class="slide-individual-item d-flex justify-center align-center my-1"
                @click="addClass($event); setCurrent(item)">
            {{item.num}}
          </div>
        </div>
      </div>                
    </div>

    <!-- Slide arrow down -->         
    <div @click="moveDown()" class="slide_control">
      <v-icon          
        color="grey darken-2">
        mdi-arrow-down
      </v-icon>   
    </div>
  </div>  
</template>


<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      verticalPos: 0,
      firstSlide : 1

    }),  
    computed: {
      currentProduct () {
        return this.$store.getters.currentProduct
      }
    },    
    methods: {
      addClass(e) {
        // Select element adding a class
        var els = document.querySelectorAll('.slide-individual-item')
        els.forEach((i) => {
          i.classList.remove('border-on')
        })
        e.target.classList.add('border-on')

      },
      setCurrent(item) { 
        this.$store.commit('CHANGE_CURRENT_PRODUCT_IMAGE', item)        
      },

      moveUp() {          
        if(this.firstSlide==(this.currentProduct.images.length-3)) return
        this.firstSlide = this.firstSlide +1;
        var el = document.querySelector('.vertical-items')
        var pos = this.verticalPos - 108;
        this.verticalPos = pos; 
        el.style.transform = 'translateY(' + pos + 'px)'        
      },

      moveDown() {
        if (this.firstSlide==1) return
        this.firstSlide = this.firstSlide -1;          
        var el = document.querySelector('.vertical-items')
        var pos = this.verticalPos + 108;
        this.verticalPos = pos; 
        el.style.transform = 'translateY(' + pos + 'px)'
      },
    }

  }
</script>

<style lang="scss">
  .slide_control {
    cursor: pointer;
    margin: 10px;

    &:hover {
      opacity: 0.5;
    }
  }


  .vertical-slide-container {
    height: 430px;
    overflow-y: hidden;
    cursor: pointer;

    .vertical-items {
      transition: all .25s;

    } 

    .slide-individual-item {
      height: 100px; 
      width: 100px;
      

    }  
  }
  .border-on {
    border: 6px solid rgb(0, 0, 0);
    color: white;
    font-size: 1.3em;
  }

</style>
