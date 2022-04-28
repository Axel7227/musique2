<template>
  <hr>
  <div>
    <h1 class="display-1">{{ category.title }}</h1>
    <hr>
    <ul class="list-group">
      <li class="list-group-item list-group-item-action list-group-item-dark" v-for="song in category.songs">{{ song.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'show-category',
  data() {
    return {
      id: null,
      category: {
        'id': null,
        'title': null
      }
    }
  },
  methods: {
    loadCategory() {
      axios.get('http://localhost:3000/categories/' + this.id + "/?_embed=songs")
          .then(
              (result) => {
                this.category = result.data
                console.log(result, 'Bravo !!!')
              }
          )
          .catch(
              (error) => {
                console.log(error, 'Cela ne fonctionne pas')
              }
          )
    }
  },
  mounted() {
    this.loadCategory()
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>
<style>

h1{
  text-align: center;
}


li{
  text-align: center;

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