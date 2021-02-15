<template>
  <v-app >

    <v-system-bar
      height="100"
      hide-on-scroll
      style="background-color: white;"
    >
      <v-spacer></v-spacer>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />   
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-light.png"
          width="100"
        />         -->
      <v-spacer></v-spacer>   
    </v-system-bar>    
    <v-app-bar
      flat
      outlined    
      hide-on-scroll
      color="white"
      class="hidden-sm-and-down"
      style="border-color: lightgrey !important; font-family: Montserrat;"
    >
     
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        class="text-capitalize font-weight-medium menu-option"
        color="grey"
        style="font-size: .8em;"
      >
        <span class="mr-2 " >Entrar</span>

      </v-btn>
      <v-divider vertical inset></v-divider>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        class="text-capitalize font-weight-medium menu-option"
        color="grey"
        style="font-size: .8em;"
      >
        <span class="mr-2" >Cadastrar-se</span>
        
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        color="grey"
        class="menu-option"
      >
        <span class="mr-2" >Sapatos</span>   
      </v-btn>
      

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        color="grey"
        class="menu-option"
      >
        <span class="mr-2" >Bolsas</span>   
      </v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        color="grey"
        class="menu-option"
      >
        <span class="mr-2" >Acessórios</span>   
      </v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        color="grey"
        class="menu-option"
      >
        <span class="mr-2" >OFF</span>   
      </v-btn>                  

      <v-spacer></v-spacer>      
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        class="text-capitalize menu-option"
        color="grey"

      >
        
        <v-icon color="grey darken-3">mdi-magnify</v-icon>
      </v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        color="grey"
        class="menu-option"
      >
        <span class="mr-2" >{{totalCartItems}}</span>
        <v-icon color="grey darken-3"  >mdi-purse-outline</v-icon>
      </v-btn> 
        
    </v-app-bar>

    <v-main>
      <v-container fluid>
        
        <ProductDetail class="mt-8"/>
        <Footer class="d-none d-sm-none d-md-block"/>
        <FooterResponsive class="d-sm-block d-md-none hidden-md-and-up"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import FooterResponsive from './components/FooterResponsive';

export default {
  name: 'App',

  components: {
    ProductDetail,
    Footer,
    FooterResponsive,

  },

  data: () => ({
    //
  }),
  computed: {
    totalCartItems() {
      return this.$store.getters.numCartItems
    }
  }
};
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.menu-option {
  &:hover {    
    color: rgb(246, 176, 62) !important;
  }

}

</style>