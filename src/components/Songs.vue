<template>

  <div class="musique">
    <h1 class="display-1">Les Titres</h1>
  </div>
  <div id="addbutton">
  <router-link :to="{path: '/create-song'}"><button class="btn btn-dark">Ajouter un titre</button></router-link>
  </div>
<br>
  <table class="table table-dark table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>Titre</th>
        <th>Artiste</th>
        <th>Catégorie</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="song in songs">
        <td>{{ song.id }}</td>
        <td><input @keyup.enter="updateSong(song.id,song.artiste,song.title,song.categoryId)" type="text" v-model="song.title"></td>
        <td><input @keyup.enter="updateSong(song.id, song.artiste,song.title,song.categoryId)" type="text" v-model="song.artiste"></td>
        <td><input @keyup.enter="updateSong(song.id, song.artiste,song.title,song.categoryId)" type="text" v-model="song.categoryId"></td>
        <td>
          <button class="btn btn-danger" @click="deleteSong(song.id)">Supprimer</button>
        </td>
      </tr>
      </tbody>
  </table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Crud Songs',
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
      axios.get('http://localhost:3000/songs')
          .then(
              (result) => {
                this.songs = result.data
              }
          )
          .catch(
              (error) => {
                console.log(error)
              }
          )
    },
    deleteSong(songId) {

      if(confirm("Voulez vraiment supprimer ce titre ?")) {
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
      }
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

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
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

#addbutton{
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
router-link{
  alignment: center;
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
table{
  background-color: white;
  border: 1px solid black;
  width: 1300px;
  margin-left: auto;
  margin-right: auto;

}
</style>