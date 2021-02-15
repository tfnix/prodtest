import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({   

    state: {
        
      // SACOLA DIALOG 
      store_dialog: false,
      


      // FAKE PRODUCT DATA FOR TEST PURPOSE
      current_product_image: {},
      current_product: {},

      product: [
          {
              id: 'someuniqueid',
              description: 'RASTEIRA TIRA DEDO',
              code: 'RT 0568 | 03.07.0653',
              preco_original: 'R$ 69,00',
              preco_desconto: 'R$ 55,20',
              num_parcelas: '6',
              preco_parcela: 'R$ 9,20',
              mais_info: 'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal. ',
              colors: [
                  {name: 'red',   active: true },
                  {name: 'green', active: true },
                  {name: 'blue',  active: true },
                  {name: 'yellow',active: true },
              ],
              sizes:  [ 
                  { num: 33, active: false},
                  { num: 34, active: false},
                  { num: 35, active: false},
                  { num: 36, active: false},
                  { num: 37, active: false},
                  { num: 38, active: true},
                  { num: 39, active: false},
                  { num: 40, active: false},
                  { num: 41, active: false},
                  { num: 42, active: false},
              ],
              images: [ 
                {num: 1, color: '#28b463'},{num: 2, color: '#cb4335'},
                {num: 3, color: '#4682B4'},{num: 4, color: '#8e44ad'},
                {num: 5, color: '#FF4500'},{num: 6, color: '#f4d03f'},
                {num: 7, color: '#2980b9'},{num: 8, color: '#a6acaf'},
                {num: 9, color: '#d35400'},{num: 10, color: '#a93226'},
                {num: 11, color: '#1a5276'}
              ],
              thumbs: [
                  '',
              ],
              quem_viu: [
                { num :  '#1', color: '#5F9EA0' }, 
                { num :  '#2', color: '#DAA520' }, 
                { num :  '#3', color: '#FF4500' }, 
                { num :  '#4', color: '#BDB76B' },
                { num :  '#5', color: '#5F9EA0' },
                { num :  '#6', color: '#DAA520' },
                { num :  '#7', color: '#5F9EA0' },
                { num :  '#8', color: '#DAA520' }                
              ]
          }
      ],
      shopping_cart:  [

      ]
    },

    mutations: {

      // SHOPPING CART - 
      ADD_TO_SHOPPING_CART(state, payload) {
          var item =  {
            description: payload.description,
            price: payload.preco_desconto,
            thumb: state.current_product_image,
            qnt: '01'

          }
          state.shopping_cart.push(item)
          
      },
      REMOVE_TO_SHOPPING_CART(state, payload) {
        state
        payload
        
      },

      // PRODUCT STUFF


      // Select a color for the product
      SET_COLOR(state, payload) {        

        // state.current_product.colors.forEach((i, idx) => {          
        //   state.current_product.colors[idx].active = false
          
        // })        
        state.current_product.colors.forEach((i, idx) => {
          idx
          if(i.name == payload) {
            i.active = true
          } else {
            i.active = false
          } 
        })
        
      },
      // Select the size for the product
      SET_SIZE(state, payload) {        
        
        state.current_product.sizes.forEach((i) => {
          if(i.num == payload) {
            i.active = true
          } else 
          i.active = false          
        })
        
      },

      // PRODUCT SLIDE - current_product_image
      CHANGE_CURRENT_PRODUCT_IMAGE(state, payload) {
        state.current_product_image = payload;        
      },

      // DIALOG 
      change_dialog(state) {
        state.store_dialog = !state.store_dialog
      },
      off_dialog(state) {
        state.store_dialog = false
      }
    }, 
    getters: {

      // Shopping Cart
      numCartItems : (state) => {

        return state.shopping_cart.length

      },

      // Product 
      currentProduct: (state) => {       


      //   const removeProps = (...propsToFilter) => obj => {
      //    const newObj = Object.assign({}, obj);
      //    propsToFilter.forEach(key => delete newObj[key]);
      //     return newObj;
      //  };
       state.current_product = state.product[0]

       return state.current_product;
      }    

    }
  })
