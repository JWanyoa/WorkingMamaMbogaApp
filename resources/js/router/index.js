import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
/* Guest Component */

/* Layouts */
const DashboardLayout = () => import('@/components/layouts/Default.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')
const AddCategory = () => import('@/components/categories/AddCategory.vue')
const ViewCategory = () => import('@/components/categories/ViewCategory.vue')
const EditCategory = () => import('@/components/categories/EditCategory.vue')

const AddProduct = () => import('@/components/products/AddProducts.vue')
const ViewProduct = () => import('@/components/products/ViewProducts.vue')
const EditProduct = () => import('@/components/products/EditProducts.vue')
/* Authenticated Component */


const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        path: "/",
        component: DashboardLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            },
            {
                name: "addcategory",
                path: '/category/addcat',
                component: AddCategory,
                meta: {
                    title: `AddCategory`
                }
            },
            {
                name: "viewcategories",
                path: '/category/viewcat',
                component: ViewCategory,
                meta: {
                    title: `ViewCategory`
                }
            },
            {
                name: "editcategory",
                path: '/category/catedit/:id',
                component: EditCategory,
                meta: {
                    title: `EditCategory`
                }
            },
            {
                name: "addproduct",
                path: '/products/addproduct',
                component: AddProduct,
                meta: {
                    title: `AddProduct`
                }
            },
            {
                name: "viewproducts",
                path: '/products/viewproduct',
                component: ViewProduct,
                meta: {
                    title: `ViewProduct`
                }
            },
            {
                name: "editproduct",
                path: '/products/productedit',
                component: EditProduct,
                meta: {
                    title: `EditProduct`
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "login" })
        }
    }
})

export default router