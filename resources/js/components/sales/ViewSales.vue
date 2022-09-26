<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body table-responsive">
                    
                    <h3 class="text-center">Product Orders</h3>
                    <table class="table table-bordered">
                      <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                 <div class="alert alert-danger">
                                     <ul class="mb-0">
                                         <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                     </ul>
                                 </div>
                             </div>
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Quantity Ordered</th>
                            <th>Price Per Unit</th>
                            <th>Total Sale Value</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            <!-- <tr v-for="sale in sales" :key="sale.id">
                                <span v-for="ord in order" :key="ord.id">
                                    <span v-if="sale.order_id == ord.id">
                                        <td>{{ ord.id }}</td>
                                        <td><span v-if="product.length > 0" v-for="prod in product" :key="prod.id"><span v-if="prod.id == ord.category_id">{{ prod.categoryname }}</span></span><span v-else>No Category</span></td>
                                        <td><span v-for="prod in product" :key="prod.id"><span v-if="prod.id == ord.product_id">{{ prod.productname }}</span></span></td>
                                        <td><span v-if="customer.length > 0"><span v-for="cust in customer" :key="cust.id"><span v-if="cust.id == ord.customer_id"><span v-for="user in users" :key="user.id"><span v-if="user.id == cust.user_id">{{user.firstname}} {{user.lastname}}</span></span></span></span></span></td>
                                        <td>{{ ord.quantity }}</td>
                                        <td>Kshs. {{ ord.price.toLocaleString('en-US') }}</td>
                                        <td>Kshs. {{ (ord.price * ord.quantity).toLocaleString('en-US') }}</td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <router-link :to="{name: 'editsale', params: { id: ord.id }}" class="btn btn-primary">Edit
                                                </router-link> 
                                                <button type="submit" class="btn btn-danger" @click="deletesale(ord.id)">Delete</button>
                                            </div>
                                        </td>
                                    </span>
                                </span>
                            </tr> -->
                            <tr v-for="ord in order" :key="ord.id">
                                <td>{{ ord.id }}</td>
                                <td><span v-if="product.length > 0"><span v-for="prod in product" :key="prod.id"><span v-if="prod.id == ord.product_id">{{prod.productname}}</span></span></span></td>
                                <td><span v-if="customer.length > 0"><span v-for="cust in customer" :key="cust.id"><span v-if="cust.id == ord.customer_id"><span v-for="user in users" :key="user.id"><span v-if="user.id == cust.user_id">{{user.firstname}} {{user.lastname}}</span></span></span></span></span></td>
                                <td>{{ ord.quantity }}</td>
                                <td>Kshs. {{ ord.price.toLocaleString('en-US') }}</td>
                                <td>Kshs. {{ (ord.price * ord.quantity).toLocaleString('en-US') }}</td>
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
        name: 'viewsales',
        data() {
            return {
             ord:
             {
                id:''
             },
             validationErrors:{},
            }
        },
        computed: {
        ...mapGetters(["product", "users", "customer", "order","sales"])
        },
        created() {
            this.$store.dispatch("viewSales")
        },
        methods: {
            deletesale(id) {
                this.$swal({
                  title: 'Are you sure you want to delete order number '+id+' from database?',
                  text: 'You can\'t revert your action',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes Delete it!',
                  cancelButtonText: 'No, Keep it!',
                  showCloseButton: true,
                  showLoaderOnConfirm: true
               }).then((result) => {
                  if(result.value) {
                     this.$store.dispatch("removeProduct", id)
                     this.$swal('Deleted', 'You successfully deleted order number '+id, 'success')
                  } else {
                     this.$swal('Cancelled', 'Your sale record is still intact', 'info')
                  }
               })
            },
        }
    }
 </script>
 <style scoped>
 ul.alert{
    list-style: none;
 }
 </style>