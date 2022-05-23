import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Song.vue'
import Categories from "@/components/Categories";
import AddSong from "@/components/AddSong";
import ShowCategory from "@/components/ShowCategory";
import AddCategory from "@/components/AddCategory";
import Home from "@/components/Home";

const routes = [
  {
    path: '/',
    name: 'songs',
    component: HomeView
  },
  {
    path: '/create-song',
    name: 'create-song',
    component: AddSong

  },
  {
    path: '/home',
    name: 'home',
    component: Home

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