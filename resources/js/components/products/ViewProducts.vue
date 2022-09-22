<template>
    <div>
        <div class="container table-responsive">
            <div class="card">
                <div class="card-body">
                    <h3 class="text-center">All Products</h3><br/>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="prod in product" :key="prod.id">
                            <td>{{ prod.id }}</td>
                            <td>{{ prod.productname }}</td>
                            <td v-for="cat in category"><span v-if="cat.id == prod.category_id">{{ cat.categoryname }}</span></td>
                            <td>{{ prod.productdescription }}</td>
                            <td>{{ prod.created_at }}</td>
                            <td>{{ prod.quantity }}</td>
                            <td>{{ prod.price }}</td>
                            <td>{{ prod.updated_at }}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <!-- <router-link :to="{name: 'editproduct', params: { id: prod.id }}" class="btn btn-primary">Edit
                                    </router-link>
                                    <button class="btn btn-danger" @click="deleteproduct(prod.id)">Delete</button> -->
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
                this.axios
                    .delete(`http://localhost:8000/api/product/delete/${id}`)
                    .then(response => {
                        let i = this.product.map(item => item.id).indexOf(id); // find index of your object
                        this.product.splice(i, 1)
                    });
            }
        }
    }
</script>