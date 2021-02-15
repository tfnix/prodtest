<template>
  <div>
    <div class="footer-container">
      <div class="circle-form">
        <div class="mt-10">ASSINE NOSSA NEWSLETTER </div>  
        <v-form
          ref="form"          
          lazy-validation
          class="mt-3 d-flex flex-column"
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
            class="mr-10 ml-10"
            @click="validate"
          >
            Validate
          </v-btn>

        </v-form>               
      </div>

      <div class="footer-spacer"></div>
      
      <div class="footer-main ">
        <v-row style="height: 100%">
          <v-col cols="2">

          </v-col>
          <v-col cols="2">
            <div>
              <p class="font-weight-bold">
                INSTITUCIONAL
              </p>
              <div>A Marca</div>
              <div>Lojas</div>
              <div>Contatos</div>
            </div>

          </v-col>
          <v-col cols="2">
            <div>
              <p class="font-weight-bold">
                INFORMAÇÕES
              </p>
              <div>Formas de Pagamentos</div>
              <div>Trocas e Devoluções</div>
              <div>Cuidados com o Produto</div>        
            </div>

          </v-col>
          <v-col cols="2">
            <div>
              <p class="font-weight-bold">
                CONHEÇA
              </p>
              <div>Franquias e Multimarcas</div>
              <div>Trabalhe com a gente</div>
              <div>Procon-RJ</div>        
            </div>

          </v-col>
          <v-col cols="2">

          </v-col>
                
        </v-row>  
      </div>

      <div class="footer-bottom">
      </div>  

    </div>
  </div>  
</template>

<script>
  export default {    
    methods: {
      validate() { },
    },
    data: () => ({ }),
  }
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.footer-container {

  height: 333px;
  border-top: 2px none;
  position: relative;

  .circle-form  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: absolute;
    width: 320px;
    height: 320px;  
    border-radius: 50%;
    border: 2px solid;
    border-color: gray;
    top: 20px;;
    right: 50px;

    .v-btn {
      margin-top: 30px;
      color: white;
      
    }
  }

  
}
.footer-spacer {
  height: 100px;
  width: 100%;
}

.footer-main {
  padding-top: 50px;
  border-top: 2px solid;
  border-color: grey;
  p { color: grey }
  div,p { 
    margin-bottom: 10px;
    font-family: Montserrat; 
  }
  div {
    font-size: .95em;
    margin-bottom: 20px;
  }
}

.footer-bottom {
  height: 66px;
  background-color: #DE8F75;

}

</style>
