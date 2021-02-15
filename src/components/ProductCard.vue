<template>
<div>
  <v-card
    height="533"              
    outlined
    class="mx-5 hidden-sm-and-down"
    style="font-family: Montserrat"
  >
  <v-list-item three-line>
    <v-list-item-content>

      <v-list-item-title class="headline font-weight-bold mt-4" >        
        <span style="font-size:26px; font-weight: 700">{{this.currentProduct.description}}</span>        
      </v-list-item-title>            
      <v-list-item-subtitle>{{this.currentProduct.code}}</v-list-item-subtitle>
      <v-list-item-title class="mt-4">
        <span class="text-body-2 text-decoration-line-through red--text ">{{this.currentProduct.preco_original}}</span> | 
        <span class="text-h6 font-weight-bold">{{this.currentProduct.preco_desconto}}</span>
      </v-list-item-title>    
      <v-list-item-subtitle>Ou {{this.currentProduct.num_parcelas}}x de {{this.currentProduct.preco_parcela}}</v-list-item-subtitle>     

      <!-- 
        Color selector
        TODO: Code a Component for this 
       -->
      <v-list-item-title class="mt-10"> 
        <div class="d-flex space-between">
          <div>
            <span style="font-size: 14px">Cor:  </span> <span>({{currentColor}})</span>
          </div>                    
          <div>LINK</div>
        </div>                                       
      </v-list-item-title>  

      <v-list-item-title class="colorsContainer">

        <div v-for="i in currentProduct.colors" :key="i.name" class="circle mt-2" :class="i.name" @click="setColorActive(i.name)">
          <div class="innerCircle" :class="[i.active ? 'is-color-act' : '']">
            <div class="innerCircleSolid"  :class="[i.name ]"></div>
          </div>
        </div>
      </v-list-item-title> 

      <!--  
        Size selector       
        TODO: Code a Component for this 
       -->
      <v-list-item-title class="mt-4">
        <span style="font-size: 14px">Tamanho:</span> <span>({{currentSize}})</span>                    
      </v-list-item-title>  

      <v-list-item-title>
        <div v-for="i in currentProduct.sizes" :key="i.num" class="rectangle grey--text mt-2" 
             :class="[i.active ? 'is-size-act' : '']"  
             @click="setSizeActive(i.num)" >
          <span class="text-size" 
                style="font-size: 14px"
                :class="[i.active ? 'is-text-size-act' : '']">{{i.num}}</span>
        </div>
      </v-list-item-title > 

      <div class="mt-10">
        <v-btn     
          class="product-btn large mx-auto"
          color="green"
          @click="addToCart()">
          Adicionar a Sacola
        </v-btn>                
      </div>

      <v-list-item-content class="mt-2 " style="font-size: 15px">
         {{this.currentProduct.mais_info}}
      </v-list-item-content>  

    </v-list-item-content>
  </v-list-item>

</v-card>  


<!---------------------  Responsive Card starts here --------------------->

<v-card    
    height="533"          
    style="font-family: Montserrat"  
    class="elevation-0 hidden-md-and-up"
  >
  <v-list-item three-line>

    <v-list-item-content>
      <v-list-item-title class="headline font-weight-bold mt-4" >
        <span style="font-size:26px ; font-weight: 700">{{this.currentProduct.description}}</span>                    
      </v-list-item-title>
      <v-list-item-subtitle>{{this.currentProduct.code}}</v-list-item-subtitle>
      <v-list-item-title class="mt-4">
        <span class="text-body-2 text-decoration-line-through red--text ">{{this.currentProduct.preco_original}}</span> | 
        <span class="text-h6 font-weight-bold">R$ 55,20 </span>
      </v-list-item-title>   
      <v-list-item-subtitle>{{this.currentProduct.num_parcelas}}x de {{this.currentProduct.preco_parcela}}</v-list-item-subtitle>         
      
      <!--  
        Color selector. For respon.
        TODO: Code a Component for this 
       -->
      <v-list-item-title class="mt-10"> 
        <div class="d-flex space-between" style="border: 1px none">
          <div>
            <span style="font-size: 14px">Cor:  </span> <span>({{currentColor}})</span>
          </div>                    
          <div>LINK</div>
        </div>     
      </v-list-item-title>  
      <v-list-item-title class="colorsContainer">
        <div v-for="i in currentProduct.colors" :key="i.name" class="circle mt-2" :class="i.name" @click="setColorActive(i.name)">
          <div class="innerCircle" :class="[i.active ? 'is-color-act' : '']">
            <div class="innerCircleSolid"  :class="[i.name ]"></div>
          </div>
        </div>
      </v-list-item-title> 

      <!--  
        Size selector. For respon.  
        TODO: Code a Component for this 
       -->
      <v-list-item-title class="mt-4">
        <span style="font-size: 14px">Tamanho:</span> <span>({{currentSize}})</span>                    
      </v-list-item-title>  
      <v-list-item-title class="">
        <div v-for="i in currentProduct.sizes" :key="i.num" class="rectangle grey--text mt-2" 
            :class="[i.active ? 'is-size-act' : '']"  
            @click="setSizeActive(i.num)" >
          <span class="text-size" 
                style="font-size: 14px"
                :class="[i.active ? 'is-text-size-act' : '']">{{i.num}}</span>
        </div>
      </v-list-item-title>   
      <div class="mt-10">
        <v-btn                  
          class="product-btn large mx-auto"
          color="green"
          @click="$store.commit('change_dialog')"
        >
          Adicionar a Sacola
        </v-btn>                
      </div>
      <v-list-item-content class="mt-2 text-no-truncate" style="font-size: 15px">
        {{this.currentProduct.mais_info}}
      </v-list-item-content>               
    </v-list-item-content>
  </v-list-item>

  <v-list-item-content>
  </v-list-item-content>
</v-card>        

          
</div>
</template>

<script>
  export default {    

    data: () => ({
      currentColor: 'Fuscia',
      currentSize: 37,
            
    }),
    computed: {
      currentProduct () {
        return this.$store.getters.currentProduct
      }

    },
    methods: {
      addToCart() {
        console.log(this.currentProduct)
        this.$store.commit('ADD_TO_SHOPPING_CART', this.currentProduct);
        this.$store.commit('change_dialog')
      },
      setColorActive(color) {          
        this.$store.commit('SET_COLOR', color)
        this.currentColor = color
      },
      setSizeActive(size) {
        this.$store.commit('SET_SIZE', size)
        this.currentSize = size        
      }
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');


.product-btn.v-btn {
  width: 100% !important;
  height: 50px !important; 
  color: white !important;
}


/* ----------- Size Picker */

.rectangle { 
  width: 25px; height: 25px;
  border: 1px solid;  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 6px;
}

.is-color-act {
  opacity: 1;
  width: 30px !important;
  height: 30px !important;
}

.text-size {
  font-weight: 600;
}

.is-size-act {
  background-color: rgb(167, 90, 90) !important;
  color: white !important;
}

.is-text-size-act {
  color: white !important;
}


/* ----------- Color Picker */
.circle {
  width: 28px; height: 28px;
  border-radius: 50%;
  margin: 0 4px 0 2px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
}

.innerCircle {
  width: 26px; height: 26px;
  border-radius: 50%;
  background-color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;  

}

.innerCircleSolid {
  width: 20px; height: 20px;
  border-radius: 50%;
  background-color: white;
}

.innerCircleSolid:hover { 
 opacity: 0.0;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
.blue {
  background-color: blue
}

.yellow { 
  background-color: yellow
}

</style>
