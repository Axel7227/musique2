<template>
  <div class="musique">
    <hr>
    <h1>Les musiques :</h1>
    <hr>
  </div>
  <table id="customers">
    <thead>
    <tr>
      <th>Id</th>
      <th>Nom musique</th>
      <th>Nom artiste</th>
      <th>Catégorie</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="song in songs">
      <td>{{ song.id }}</td>
      <td><input @keyup.enter="updateSong(song.id, song.title)" type="text" v-model="song.title"></td>
      <td><input @keyup.enter="updateSong(song.artiste)" type="text" v-model="song.artiste"></td>
      <td><input @keyup.enter="updateSong(song.categoryId)" type="text" v-model="song.categoryId"></td>
      <td @click="deleteSong(song.id)">Supprimer</td>
    </tr>
    </tbody>
  </table>
  <div>
    <input @keyup.enter="storeSong" type="text" v-model="inputSong.title" placeholder="Ajouter un titre">
    <input @keyup.enter="storeSong" type="text" v-model="inputSong.artiste" placeholder="Ajouter un artiste">
    <input @keyup.enter="storeSong" type="text" v-model="inputSong.categoryId" placeholder="Ajouter une catégorie">

  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data() {
    return {
      songs : null,
      inputSong: {
        title : null,
        artiste : null,
        categoryId : null
      }
    }
  },
  methods : {
    loadSongs() {
      axios.get('http://localhost:3000/songs')
          .then(
              (resultat) => {
                this.songs = resultat.data
              }
          )
          .catch(
              (erreur) => {
                console.log(erreur)
              }
          )
    },
    storeSong() {
      if (this.inputSong.title != null && this.inputSong.title.trim() != '') {
        axios.post('http://localhost:3000/songs', this.inputSong)
            .then(
                (resultat) => {
                  this.loadSongs()
                  this.inputSong.title = null
                  this.inputSong.artiste = null
                  this.inputSong.categoryId = null
                }
            )
            .catch(
                (erreur) => {
                  console.log(erreur)
                }
            )
      }
    },
    deleteSong(songId) {
      console.log(songId)
      axios.delete('http://localhost:3000/songs/' + songId)
          .then(
              (resultat) => {
                this.loadSongs()
              }
          )
          .catch(
              (erreur) => {
                console.log(erreur)
              }
          )
    },
    updateSong(songId, songTitle, songArtiste, songCategoryId) {
      let string = 'http://localhost:3000/songs/' + songId
      axios.put(string, {"title" : songTitle, "artiste" : songArtiste, "categoryId" : songCategoryId})
          .then(
              (resultat) => {
                console.log(resultat)
                this.loadSongs()
              }
          )
          .catch(
              (erreur) => {
                console.log(erreur)
              }
          )
    }
  },
  mounted() {
    this.loadSongs()
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
#customers tr:nth-child(even){background-color: #f2f2f2;}
#customers tr:hover {background-color: #ddd;}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
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
</style>