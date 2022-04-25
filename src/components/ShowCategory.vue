<template>
  <div>
    <h1>{{ category.title }}</h1>
    <ul>
      <li v-for="song in category.songs">{{ song.title }}</li>
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