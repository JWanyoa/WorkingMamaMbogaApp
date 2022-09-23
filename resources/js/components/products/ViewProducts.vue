<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body table-responsive">
                    <h3 class="text-center">All Products in Stock</h3><br/>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Product Description</th>
                            <th>Quantity</th>
                            <th>Price Per Unit</th>
                            <th>Total Sale Value</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="prod in product" :key="prod.id">
                            <td>{{ prod.id }}</td>
                            <td>{{ prod.productname }}</td>
                            <!-- <td><span v-if="category.length > 0" v-for="cat in category" :key="cat.id"><span v-if="cat.id == prod.category_id">{{ cat.categoryname }}</span></span><span v-else>No Category</span></td> -->
                            <td><span v-for="cat in category" :key="cat.id"><span v-if="cat.id == prod.category_id">{{ cat.categoryname }}</span></span></td>
                            <td>{{ prod.productdescription }}</td>
                            <td>{{ prod.quantity }}</td>
                            <td>Kshs. {{ prod.price.toLocaleString('en-US') }}</td>
                            <td>Kshs. {{ (prod.price * prod.quantity).toLocaleString('en-US') }}</td>
                            <td>{{ prod.created_at }}</td>
                            <td>{{ prod.updated_at }}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <router-link :to="{name: 'editproduct', params: { id: prod.id }}" class="btn btn-primary">Edit
                                    </router-link>
                                    <button type="submit" class="btn btn-danger" @click="deleteproduct(prod.id)">Delete</button>
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
        name: 'viewproducts',
        data() {
            return {}
        },
        computed: {
        ...mapGetters(["product", "category"])
        },
        created() {
            this.$store.dispatch("viewProducts")
        },
        methods: {
                deleteproduct(id) {
                    this.$store.dispatch("removeProduct", id)
            }
        }
    }

</script>