<template>
  <div class="musique">
    <hr>
    <h1>Ajouter un Titre :</h1>
    <hr>
  </div>
  <div class="container">
    <div id="addbutton">
      <router-link :to="{path: '/'}"><button class="btn btn-danger">Retour</button></router-link>
    </div>
    <hr>
    <div class="form-group mx-sm-3 mb-2">
      <input required type="text" class="form-control" v-model="song.title" aria-label="Default" placeholder="Titre">
    </div>
   <hr>
    <div class="form-group mx-sm-3 mb-2">
      <input required type="text" class="form-control" v-model="song.artiste" aria-label="Default" placeholder="Artiste">
    </div>
    <hr>
    <select class="form-select" required v-model="song.categoryId" aria-label="Default select example">
      <option selected>Choisir la catégorie</option>
      <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
    </select>
    <hr>
    <input @click="storeSong" type="submit" value="envoyer">
  </div>
<br>
  {{ song.title }}
<br>
  {{ song.artiste }}
  <br>
  {{ song.categoryId }}
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return {
      song : {
        title : null,
        artiste : null,
        categoryId : null
      },
      categories: null
    }
  },
  methods : {
    storeSong() {
      if (this.song.title != null && this.song.title.trim()!="" && this.song.artiste != null && this.song.artiste.trim()!="" && this.song.categoryId != null)
        axios.post('http://localhost:3000/songs', this.song)
            .then(
                (result) => {
                  router.push('http://192.168.1.138:8080/')
                  console.log(this.song)
                }
            )
            .catch(
                (error) => {
                  console.log(error, this.song)
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
    this.loadCategories()
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}
.container input, select {
  margin-left: auto;
  margin-right: auto;
}
#addbutton{
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
</style>