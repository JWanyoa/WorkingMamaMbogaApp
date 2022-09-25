<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body table-responsive">
                    <h3 class="text-center">All Sales</h3><br/>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Sale Name</th>
                            <th>Sale Category</th>
                            <th>Sale Description</th>
                            <th>Sale Phone Number</th>
                            <th>Sale Address</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="sup in sale" :key="sup.id">
                            <td>{{ sup.id }}</td>
                            <td>{{ sup.salename }}</td>
                            <!-- <td><span v-if="category.length > 0" v-for="cat in category" :key="cat.id"><span v-if="cat.id == sup.category_id">{{ cat.categoryname }}</span></span><span v-else>No Category</span></td> -->
                            <td><span v-for="cat in category" :key="cat.id"><span v-if="cat.id == sup.category_id">{{ cat.categoryname }}</span></span></td>
                            <td>{{ sup.saledescription }}</td>
                            <td>+254{{ sup.contact }}</td>
                            <td>{{ sup.address }}</td>
                            <td>{{ sup.created_at }}</td>
                            <td>{{ sup.updated_at }}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <router-link :to="{name: 'editsale', params: { id: sup.id }}" class="btn btn-primary">Edit
                                    </router-link>
                                    <button class="btn btn-danger" @click="deletesale(sup.id)">Delete</button>
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
            return {}
        },
        computed: {
        ...mapGetters(["sale", "category"])
        },
        created() {
            this.$store.dispatch("viewSales")
        },
        methods: {
            deletesale(id) {
                this.$swal({
                  title: 'Are you sure you want to delete this sales data?',
                  text: 'You can\'t revert your action',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes Delete it!',
                  cancelButtonText: 'No, Keep it!',
                  showCloseButton: true,
                  showLoaderOnConfirm: true
               }).then((result) => {
                  if(result.value) {
                     this.$store.dispatch("removeSales", id)
                     this.$swal('Deleted', 'You successfully deleted this record', 'success')
                  } else {
                     this.$swal('Cancelled', 'Your record is still intact', 'info')
                  }
               })
            }
        }
    }
</script>