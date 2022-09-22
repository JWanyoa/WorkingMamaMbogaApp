import axios from "axios";
import router from "@/router";

export default{
    state: {
        category: [],
    },
    getters: {
        category(state) {
            return state.category
        }
    },
    actions: {
        viewCategories({commit}){
            return axios.get('/api/category').then(({data}) =>{
                commit('SET_CATEGORY', data)
            })
        },
        newCategory({commit}, category){
            return axios.post('/api/category/add', category).then(res => {
                console.log(res.data)
                commit('NEW_CATEGORY', category)
            })
        },
        removeCategory({commit}, id){
            return axios.delete('/api/category/delete/'+id).then(res => {
                commit('DELETE_CATEGORY', id)
            })
        },
        async updateCategory({commit}, category){
            // return axios.put('/api/category/'+id).then(res =>{
            //     commit('EDIT_CATEGORY', id)
            // })  
            try {
                let result = await axios.put("/api/category/edit/"+id, category)
                console.log(result.response.data)
                commit('EDIT_CATEGORY', category)
              } catch (error) {
                console.error(error.response.data);    
              }
        }
    },
    mutations: {
        SET_CATEGORY(state, category) {
            state.category = category
        },
        NEW_CATEGORY(state, category) {
            // let categories = state.categories.concat(category)
            // state.categories = categories
            state.category = state.category.unshift(category)
        },
        DELETE_CATEGORY(state, id) {
            state.category = state.category.filter(f => {
                return f.id !== id
            })
        },
        EDIT_CATEGORY(state, category) {
            const index = state.category.findIndex(f => f.id === category.id)
            if(index !== -1) {
                state.category.splice(index, 1, category)
            }
        }
    },
}