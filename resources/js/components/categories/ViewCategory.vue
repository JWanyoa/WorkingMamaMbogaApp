<template>
    <div>
       <div class="container table-responsive">
          <div class="card">
             <div class="card-body">
                <h3 class="text-center">All Categories</h3>
                <br/>
                <table class="table table-bordered">
                   <thead>
                      <tr>
                         <th>ID</th>
                         <th>Title</th>
                         <th>Description</th>
                         <th>Created At</th>
                         <th>Updated At</th>
                         <th>Actions</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr v-for="cat in category" :key="cat.id">
                         <td>{{ cat.id }}</td>
                         <td>{{ cat.categoryname }}</td>
                         <td>{{ cat.categorydescription }}</td>
                         <td>{{ cat.created_at }}</td>
                         <td>{{ cat.updated_at }}</td>
                         <td>
                            <div class="btn-group" role="group">
                               <router-link :to="{name: 'editcategory', params: { id: cat.id }}" class="btn btn-primary">Edit
                               </router-link>
                               <button class="btn btn-danger" @click="deletecategories(cat.id)">Delete</button>
                            </div>
                         </td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>
       </div>
    </div>
 </template>
 <script>
    import {mapGetters} from 'vuex';
    
    export default {
        name: 'viewcategories',
        data() {
            return {}
        },
        computed: {
        ...mapGetters(["category"])
        },
        created() {
            this.$store.dispatch("viewCategories")
        },
        methods: {
            deletecategories(id) {
                this.axios
                    .delete(`http://127.0.0.1:8000/api/category/delete/${id}`)
                    .then(response => {
                        let i = this.category.map(item => item.id).indexOf(id); // find index of your object
                        this.category.splice(i, 1)
                    });
            }
        }
    }
 </script>