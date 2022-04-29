<template>
  <div class="categorie">
    <hr>
    <h1>Ajouter une Catégorie : :</h1>
    <hr>
  </div>
  <div class="container">
    <div id="addbutton">
      <router-link :to="{path: '/categories'}"><button class="btn btn-danger">retour</button></router-link>
    </div>
    <hr>
    <div class="form-group mx-sm-3 mb-2">
      <input required type="text" class="form-control" v-model="category.title" aria-label="Default" placeholder="Titre Catégorie">
    </div>
    <hr>
    <input @click="storeCategory" type="submit" value="envoyer">
  </div>
  <br>
  {{ category.title }}
</template>

<script>
import axios from 'axios';
import router from "@/router";
export default {
  data() {
    return {
      category : null,
      inputCategory: {
        title : null
      }
    }
  },
  methods : {
    storeCategory() {
      if (this.inputCategory.title != null && this.inputCategory.title.trim() != '') {
        axios.post('http://localhost:3000/categories', this.inputCategory)
            .then(
                (resultat) => {
                  this.loadCategories()
                  this.inputCategory.title = null
                }
            )
            .catch(
                (erreur) => {
                  console.log(erreur)
                }
            )
      }
    },
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