<template>
  <div>
    <div id="table">
      <table class="table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Supprimer</th>
          <th>Musiques associées</th>
          <th>Détails</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="category in categories">
          <td>{{ category.id }}</td>
          <td><input type="text" @keyup.enter="updateSong(category.id, category.artiste, category.title, category.categoryId)" v-model="category.title"></td>
          <td><button @click="deleteCategory(category.id)">Supprimer</button></td>
          <td>
            <ul v-for="song in category.songs">
              <li>{{ song.title}}</li>
            </ul>
          </td>
          <td><router-link :to="{path: '/category/' + category.id}">Voir</router-link></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'categories',
  data() {
    return {
      categories: null
    }
  },
  methods: {
    loadCategories() {
      axios.get('http://localhost:3000/categories?_embed=songs')
          .then(
              (result) => {
                this.categories = result.data
                console.log(result, 'Bravo !!!')
              }
          )
          .catch(
              (error) => {
                console.log(error, 'Cela ne fonctionne pas')
              }
          )
    },
    deleteCategory(categoryId) {
      axios.delete('http://localhost:3000/categories/' + categoryId)
          .then(
              (result) => {
                console.log('Bravo !!!')
                this.loadSongs()
              }
          )
          .catch(
              (error) => {
                console.log('Cela ne fonctionne pas')
                this.loadSongs()
              }
          )
    }
  },
  mounted() {
    this.loadCategories()
  }
}
</script>