<template>
  <div class="categorie">
    <hr>
    <h1>Les catégories :</h1>
    <hr>
  </div>
    <table id="customers">
      <thead>
      <tr>
        <th>Id</th>
        <th>Nom Catégorie</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="categorie in categories">
        <td>{{ categorie.id }}</td>
        <td><input @keyup.enter="updateCategorie(categorie.id, categorie.title)" type="text" v-model="categorie.title"></td>
        <td @click="deleteCategorie(categorie.id)">Supprimer</td>
      </tr>
      </tbody>
    </table>
    <div>
      <input @keyup.enter="storeCategorie" type="text" v-model="inputCategorie.title" placeholder="Ajouter une catégorie">
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data() {
    return {
      categories : null,
      inputCategorie: {
        title : null
      }
    }
  },
  methods : {
    loadCategories() {
      axios.get('http://localhost:3000/categories')
          .then(
              (resultat) => {
                this.categories = resultat.data
              }
          )
          .catch(
              (erreur) => {
                console.log(erreur)
              }
          )
    },
    storeCategorie() {
      if (this.inputCategorie.title != null && this.inputCategorie.title.trim() != '') {
        axios.post('http://localhost:3000/categories', this.inputCategorie)
            .then(
                (resultat) => {
                  this.loadCategories()
                  this.inputCategorie.title = null
                }
            )
            .catch(
                (erreur) => {
                  console.log(erreur)
                }
            )
      }
    },
    deleteCategorie(categorieId) {
      axios.delete('http://localhost:3000/categories/' + categorieId)
          .then(
              (resultat) => {
                this.loadCategories()
              }
          )
          .catch(
              (erreur) => {
                console.log(erreur)
              }
          )
    },
    updateCategorie(categorieId, categorieTitle) {
      let string = 'http://localhost:3000/categories/' + categorieId
      axios.put(string, {"title" : categorieTitle})
          .then(
              (resultat) => {
                console.log(resultat)
                this.loadCategories()
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
    this.loadCategories()
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