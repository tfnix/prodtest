<template>
  <div>
    <div class="footer-container">


      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-medium">
            INSTITUCIONAL
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            
            <div class="mb-3">
              A Marca           
            </div>
            <div class="mb-3">
              Lojas           
            </div> 
            <div class="mb-3">
              Contato
            </div>           

          </v-expansion-panel-content>          
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-medium">
            INFORMAÇÕES
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            
            <div class="mb-3">
              Formas de Pagamentos           
            </div>
            <div class="mb-3">
              Trocas e Devoluções           
            </div> 
            <div class="mb-3">
              Cuidados com o Produto
            </div>           

          </v-expansion-panel-content>          
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-medium">
            CONHEÇA
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            
            <div class="mb-3">
              Franquias e Multimarcas          
            </div>
            <div class="mb-3">
              Trabalhe com a gente           
            </div> 
            <div class="mb-3">
              Procon-RJ
            </div>           

          </v-expansion-panel-content>          
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="mt-5">
        <v-row>
          <v-col cols="12" class="d-flex justify-center align-center">
            <v-img  
              lazy-src="@/assets/facebook.png"
              max-height="25"
              max-width="12"
              src="@/assets/facebook.png"
       
            ></v-img>            
            <v-img  class="ml-5 "
              lazy-src="@/assets/Vector.png"
              max-height="25"
              max-width="25"
              src="@/assets/Vector.png"
      
            ></v-img>    

            <v-img  class="ml-5 "
              lazy-src="@/assets/Subtract.png"
              max-height="25"
              max-width="25"
              src="@/assets/Subtract.png"
              
            ></v-img>    
        

          </v-col>          
        </v-row>
        <v-row class="mt-2">
          <v-col cols="12" class="d-flex justify-center align-center"> 
            <v-img  
              lazy-src="@/assets/vtex-pci-200.png"
              max-height="60"
              max-width="90"
              src="@/assets/vtex-pci-200.png"
            ></v-img>            

            <v-img class="ml-5"
              lazy-src="@/assets/selo-ebit.png"
              max-height="58"
              max-width="54"
              src="@/assets/selo-ebit.png"
            ></v-img>              

          </v-col>

        </v-row>
      </div>

      <div class="mx-10 mt-10">
         <div class="text-center text-h5 ma-5">ASSINE NOSSA NEWSLETTER RESPONSIVE</div>
        <v-form
          ref="form"          
          lazy-validation          
        >
          <v-text-field            
            :counter="10"            
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            required
          ></v-text-field>
          <v-btn
            color="success"
            class="mr-4 text-center"
            @click="validate"
      
          >
            ENVIAR
          </v-btn>        
        </v-form>  
      </div>
      
      <div class="footer-bottom" >
        <div class="text-center text-h5 ma-5" >LOGOTEXT</div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum totam odio natus voluptate in est minima dolor rem perspiciatis obcaecati, exercitationem alias. Modi deleniti, obcaecati quisquam ea dolor vero adipisci!
      </div>  

    </div>
  </div>  
</template>

<script>
  export default {

    methods: {
      validate() {},
    },

    data: () => ({ }),
  }
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.footer-container {
  border: 5px gray;
}

.footer-bottom {
  background-color: #DE8F75;
  color: white;
  padding: 10px;
}

</style>
