<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-9 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center">Edit Category</h3>
                            <div class="row">
                                <div class="col-md-12">
                                    <form @submit="updatecategory">
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="categoryname" class="font-weight-bold">Category Title</label>
                                            <input type="text" class="form-control" v-model="category.categoryname">
                                        </div>
                                        
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="categorydescription" class="font-weight-bold">Description</label>
                                            <input type="text" class="form-control" v-model="category.categorydescription">
                                        </div>
                                        <button type="submit" class="btn btn-primary">Update Category</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                category:{}
            }
        },
        computed: {
            category(){
                return this.$store.dispatch("editCategories", this.$route.params.id);
            }
        },
        methods: {
            updatecategory() {
                this.axios
                .put(`http://127.0.0.1:8000/api/category/update/${this.$route.params.id}`, this.category)
                .then((res)=> {
                    this.product = res.data;
                    this.$toast.success("Category Edited successfully", {
                    position: "bottom-left",
                })
                })
                .then((response) => {
                    this.$router.push({name: 'dashboard'});
                });
            }
        }
    }
</script>