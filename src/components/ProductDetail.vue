<template>
  <!-- <v-container> -->
    <div>
      <v-row style="margin-left: 10px; margin-right: 10px;" v-if="1">
      
        <v-col cols="12" md="7" class="d-flex justify-end align-start">
          <v-row>

            <!-- Left slide -->
            <v-col cols="3" offset="0" class="hidden-sm-and-down">              
              <LeftSlide />
            </v-col>

            <!-- Slide output -->
            <v-col cols="12" md="9"                   
                   class="left-slide-output d-none d-sm-none d-md-flex justify-center align-center">                   
              <div 
                   :style="{backgroundColor : this.$store.state.current_product_image.color}" 
                   class="d-flex justify-center align-center">
                {{this.$store.state.current_product_image.num}}                
              </div>
            </v-col>

            <!-- TODO: we need code the horizontal responsivel slide  -->

            <!-- Responsive slide  -->
            <v-col cols="12" md="9"              
                   class="d-flex d-md-none justify-center align-center ">
              <div style="" class="left-slide-output-responsivity d-flex justify-center align-center">
                n/a1
              </div>
            </v-col>  

          </v-row>      
        </v-col>

        <!-- Product card -->        
        <v-col  cols="12" md="5" class="d-flex justify-center align-center">
          <ProductCard/>        
        </v-col>
   
      </v-row>

      <v-row>
        <v-col cols="12" class="hidden-sm-and-down my-10" >
          <SlideQuemViu slide_num="1"/>
        </v-col>

        <v-col cols="12" class="hidden-md-and-up my-10" >
          <SlideQuemViu slide_num="2"/>
        </v-col>
      </v-row>
      <AdicionarSacola :show="this.$store.state.store_dialog"/>
    </div>


  <!-- </v-container> -->
  
</template>

<script>
  
  import SlideQuemViu from './SlideQuemViu.vue';
  import LeftSlide from './LeftSlide.vue'
  import AdicionarSacola from './AdicionarSacola.vue';
  import ProductCard from './ProductCard.vue'

  export default {
    name: 'HelloWorld',

    components: {
      SlideQuemViu,
      AdicionarSacola,
      LeftSlide,
      ProductCard
    },     
    data: () => ({ }),
  }
</script>

<style lang="scss">

.left-slide-output {
  height: 500px; 
  width: 100%; 
  background-color: lightgreen; 
  color: white; 
  font-size: 2.0em
}

.left-slide-output-responsivity {
  height: 300px; 
  width:100%; 
  border: 1px none; 
  color: white; background-color: green  
}
</style>
