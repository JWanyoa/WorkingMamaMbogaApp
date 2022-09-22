import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/auth'
import category from '@/store/category'
import product from '@/store/product'

const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        category,
        product
    }
})

export default store