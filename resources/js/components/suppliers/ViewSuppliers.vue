<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body table-responsive">
                    <h3 class="text-center">All Suppliers</h3><br/>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Supplier Name</th>
                            <th>Supplier Category</th>
                            <th>Supplier Description</th>
                            <th>Supplier Phone Number</th>
                            <th>Supplier Address</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="sup in supplier" :key="sup.id">
                            <td>{{ sup.id }}</td>
                            <td>{{ sup.suppliername }}</td>
                            <!-- <td><span v-if="category.length > 0" v-for="cat in category" :key="cat.id"><span v-if="cat.id == sup.category_id">{{ cat.categoryname }}</span></span><span v-else>No Category</span></td> -->
                            <td><span v-for="cat in category" :key="cat.id"><span v-if="cat.id == sup.category_id">{{ cat.categoryname }}</span></span></td>
                            <td>{{ sup.supplierdescription }}</td>
                            <td>+254{{ sup.contact }}</td>
                            <td>{{ sup.address }}</td>
                            <td>{{ sup.created_at }}</td>
                            <td>{{ sup.updated_at }}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <router-link :to="{name: 'editsupplier', params: { id: sup.id }}" class="btn btn-primary">Edit
                                    </router-link>
                                    <button class="btn btn-danger" @click="deletesupplier(sup.id)">Delete</button>
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
        name: 'viewsuppliers',
        data() {
            return {}
        },
        computed: {
        ...mapGetters(["supplier", "category"])
        },
        created() {
            this.$store.dispatch("viewSuppliers")
        },
        methods: {
            deletesupplier(id) {
                this.$store.dispatch("removeSupplier", id)
            }
        }
    }
</script>