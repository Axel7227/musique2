<template>
  <div id="table">
    <table class="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Titre</th>
        <th>Artiste</th>
        <th>Catégorie Id</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="song in songs">
        <td>{{ song.id }}</td>
        <td>
          <input type="text" @keyup.enter="updateSong(song.id, song.artiste, song.title, song.categoryId)" v-model="song.title">
        </td>
        <td>
          <textarea rows="1.5" cols="80" type="text" @keyup.enter="updateSong(song.id, song.artiste, song.title, song.categoryId)" v-model="song.artiste"></textarea>
        </td>
        <td>{{ song.category.title }}</td>
        <td>
          <button @click="deleteSong(song.id)">Supprimer</button>
        </td>
      </tr>
      </tbody>
    </table>
    <router-link class="link" to="/create-product">Ajouter une musique</router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Crud Song',
  data() {
    return {
      songs: null,
      categories: null,
      updatedSong: {
        title: null,
        artiste: null,
        categoryId: null
      }
    }
  },
  methods: {
    loadSongs() {
      axios.get('http://localhost:3000/songs?_expand=category')
          .then(
              (result) => {
                this.plants = result.data
              }
          )
          .catch(
              (error) => {
                console.log(error)
              }
          )
    },
    deleteSong(songId) {
      axios.delete('http://localhost:3000/songs/' + songId)
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
    },
    updateSong(songId, songArtiste, songTitle, songCategoryId) {
      axios.put('http://localhost:3000/songs/' + songId, {
        "artiste" : songArtiste,
        "title" : songTitle,
        "categoryId" : songCategoryId
      })
          .then(
              (result) => {
                console.log(songId, songArtiste)
                this.loadSongs()
              }
          )
          .catch(
              (error) => {
                console.log('Cela ne fonctionne pas')
              }
          )
    },
    loadCategories() {
      axios.get('http://localhost:3000/categories')
          .then(
              (result) => {
                this.categories = result.data
              }
          )
          .catch(
              (error) => {
                console.log(error)
              }
          )
    }
  },
  mounted() {
    this.loadSongs()
    this.loadCategories()
  }
}
</script>

<style >
.link {
  font-weight: bold;
  color: blue;
  text-decoration: none;
  margin: 10px;
  font-size: 1.5rem;
}
#table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}
#table tr:hover {
  background-color: #ddd;
}
#table th {
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  color: black;
}
input[type=text], select {
  width: 550px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.table {
  margin: auto;
}
</style>
