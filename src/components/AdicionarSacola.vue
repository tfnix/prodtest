<template>
  <div class="text-center">
    <v-dialog
      v-model="show"
      width="420"
      persistent      
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template> -->

      <v-card>
        <v-card-title class="lighten-2" style="cursor: pointer" @click="$store.commit('off_dialog')">
          <v-spacer></v-spacer>  x
        </v-card-title>

        <div class="d-flex justify-center align-center">

          <div  style="width: 90%; height: 300px; "
                   :style="{backgroundColor : this.$store.state.current_product_image.color}" 
                   class="d-flex justify-center align-center">
                {{this.$store.state.current_product_image.num}}                
          </div>

        </div>
        <v-card-text class="mt-4" style="font-family: Montserrat;  line-height: 1.2; font-size: 1.3em; text-align: center; ">
          PRODUTO ADICIONADO COM SUCESSO!
        </v-card-text>

        <div class="d-flex justify-center align-center">
          <v-btn     
            class="product-btn "
            color="green"        
            @click="$store.commit('change_dialog')">
            FINALIZAR COMPRA
          </v-btn>                
        </div>        

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center align-center">
          
          <v-btn
            color="grey"
            text
            @click="$store.commit('off_dialog')"
            style="font-size: .7em"
          >
            Continar Comprando
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
  export default {

    props: [
      'show'
    ],
    
    data: () => ({
      dialog: false,

    }),
  }
</script>

<style lang="scss" scoped>
.product-btn.v-btn {
  margin: 0 auto !important;
  width: 90% !important;
  height: 50px !important; 
  color: rgb(255, 255, 255) !important;
  font-family:  Montserrat !important;
}


</style>
