<template>
    <div>
       <div class="container">
          <div class="card">
             <div class="card-body table-responsive">
                <h3 class="text-center">All Orders</h3>
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
                      <tr v-for="ord in order" :key="ord.id">
                         <td>{{ ord.id }}</td>
                         <td>{{ ord.ordername }}</td>
                         <td>{{ ord.orderdescription }}</td>
                         <td>{{ ord.created_at }}</td>
                         <td>{{ ord.updated_at }}</td>
                         <td>
                            <div class="btn-group" role="group">
                               <router-link :to="{name: 'editorder', params: { id: ord.id }}" class="btn btn-primary">Edit
                               </router-link>
                               <button class="btn btn-danger" @click="deletecategories(ord.id)">Delete</button>
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
        name: 'vieworders',
        data() {
            return {}
        },
        computed: {
        ...mapGetters(["order"])
        },
        created() {
            this.$store.dispatch("viewOrders")
        },
        methods: {
            deletecategories(id) {
               this.$store.dispatch("removeOrder", id)
            }
        }
    }
 </script>