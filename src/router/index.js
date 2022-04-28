import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Song.vue'
import Categories from "@/components/Categories";
import AddSong from "@/components/AddSong";
import ShowCategory from "@/components/ShowCategory";
import AddCategory from "@/components/AddCategory";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create-song',
    name: 'create-song',
    component: AddSong

  },
  {
    path: '/create-category',
    name: 'create-category',
    component: AddCategory

  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/category/:id',
    name: 'show-category',
    component: ShowCategory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router