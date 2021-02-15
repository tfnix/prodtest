<template>
<div>
  <div class="slides-container" v-if="slide_num ==1">
    <div class="slide-title">
      QUEM VIU, VIU TAMBEM
    </div>
    
    <div class="inner-slides">
      <div class="img" :style="{backgroundColor: i.color}" 
           v-for="i in this.$store.state.product[0].quem_viu" :key="i.num">
        {{i.num}}
      </div>      
    </div>

    <div class="slides-controls">

      <div @click="sld_left(false)">
        <v-icon
          color="grey darken-2"          
          class="slide-arrows"
        >
          mdi-arrow-left
        </v-icon>        
      
      </div>
      <div class="pages">
        1 de 5
      </div>

      <div @click="sld_right(false)">
        <v-icon
          color="grey darken-2"          
          class="slide-arrows"
        >
          mdi-arrow-right
        </v-icon>        
      </div>
      
    </div>
    
  </div>

  <div class="slides-container" v-if="slide_num ==2">
    <div class="slide-title">
      QUEM VIU, VIU TAMBEM
    </div>
    
    <div class="inner-slides-resp">
      <div class="img" :style="{backgroundColor: i.color}" 
           v-for="i in this.$store.state.product[0].quem_viu" :key="i.num">
        {{i.num}}
      </div>      
    </div>

    <div class="slides-controls">
      <div @click="sld_left(true)">
        <v-icon
          color="grey darken-2"          
          class="slide-arrows"
        >
          mdi-arrow-left
        </v-icon>        
      </div>
      <div class="pages">
        1 de 5
      </div>
      <div @click="sld_right(true)">
        <v-icon
          color="grey darken-2"          
          class="slide-arrows"
        >
          mdi-arrow-right
        </v-icon>        
      </div>
    </div>
    
  </div>  


</div>

</template>

<script>
  export default {

    props: ['slide_num'],
    data: () => ({
      num_slides: 1,
      slide_transform: 0,
      slide_trans_padd: 0,
      res_transform: 0,
    }),
    mounted() {},
    methods: {
      sld_left(resp) {
        var el;
        if (!resp) {
          if (this.num_slides == 5) return
          el = document.querySelector('.inner-slides')          
        } else {
          if (this.num_slides == 7) return
          el = document.querySelector('.inner-slides-resp')
        }
        this.slide_transform = (this.slide_transform) + 100/8 ;       
        el.style.transform = 'translateX(calc(' + (this.slide_transform) *-1 + '% + '+ this.slide_trans_padd +'px))'
        this.num_slides = this.num_slides + 1;        
      },
      sld_right(resp) {
        var el;
        if (!resp) {
          if (this.num_slides == 1) return
          el = document.querySelector('.inner-slides')
    
        } else {
          if (this.num_slides == 1) return
          el = document.querySelector('.inner-slides-resp')
        }
        this.slide_transform = (this.slide_transform) - 100/8;
        el.style.transform = 'translateX(calc(' + (this.slide_transform) *-1 + '% - '+ (this.slide_trans_padd) +'px))'
        this.num_slides = this.num_slides - 1;          
      }

    },

   
  }
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.slides-container {
 overflow-x: hidden;
 width: 90%;
 margin: 0 auto;

  .slide-title {    
    text-align: center;
    font-size: 1.6em;
    font-family: Montserrat;
    margin: 20px;
  }

  .inner-slides {
    width: 200%;    
    transition: all .25s;
    display: flex;
    border: 3px none;
    margin: 0px;

    .img {
      width: 100%;
      height: 220px;    
      margin: 0 10px;                         
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      color: white;      
    }
       
  }
  .inner-slides-resp {
      width: 400%;    
      transition: all .25s;
      display: flex;
      border: 3px none;
      margin: 0px;

      .img {
        width: 100%;
        height: 220px;    
        margin: 0 10px;                         
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        color: white;
      }
      
    }  

  .slides-controls {
    margin-top: 20px;
    display: flex;
    border: 1px none;
    justify-content: center;
    align-items: center;
    div {
      margin: 10px;
      border: 1px none;
      padding: 10px;
    }
    .slide-arrows { 
      //display: none;
      border: 1px solid;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        opacity: 0.5
      }
    }     
  }

}


</style>
