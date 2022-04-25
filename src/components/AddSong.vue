<template>
  <div class="container">
    <input required type="text" v-model="songs.title" placeholder="Titre de la musique">
    <input required type="text" v-model="songs.artiste" placeholder="Description de la musique">
    <select required v-model="songs.categoryId">
      <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
    </select>
    <input @click="storeSong" type="submit" value="envoyer">
  </div>

  {{ song.title }}
  {{ song.artiste }}
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
</style>