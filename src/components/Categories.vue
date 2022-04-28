<template>
  <div class="categorie">
    <h1 class="display-1">Les Catégories musicales :</h1>
  </div>
  <div id="addbutton">
    <router-link :to="{path: '/create-category'}"><button class="btn btn-dark">Ajouter une catégorie</button></router-link>
  </div>
  <br>
  <table class="table table-dark table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Actions</th>
          <th>Musiques associées</th>
          <th>Détails</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="category in categories">
          <td>{{ category.id }}</td>
          <td><input type="text" @keyup.enter="updateSong(category.id, category.artiste, category.title, category.categoryId)" v-model="category.title"></td>
          <td><button class="btn btn-danger" @click="deleteCategory(category.id)">Supprimer</button></td>
          <td>
          <ul v-for="song in category.songs">
            <li>{{ song.title}}</li>
          </ul>
          </td>
          <td><router-link :to="{path: '/category/' + category.id}"><button class="btn btn-warning">Détails</button></router-link></td>
        </tr>
        </tbody>
      </table>
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
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
table{
  width: 1300px;
  margin-left: auto;
  margin-right: auto;

}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
#customers tr:nth-child(even){background-color: #f2f2f2;}
#customers tr:hover {background-color: #ddd;}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #000000;
  color: white;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

h1
{
  font-size: 50px;
  text-shadow: -1px -1px #eee, 1px 1px #888, -3px 0 4px #000;
  font-family:Arial, Helvetica, sans-serif;
  color:white;
  padding:10px;
  font-weight: normal;
  -moz-box-shadow: 2px 2px 6px #000000;
  -webkit-box-shadow: 2px 2px 6px #000000;
  box-shadow:2px 2px 6px #000000;
  text-align:center;
  display:inline;
  line-height:92px;
  background-color: black;
}



</style>