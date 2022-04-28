<template>
  <div class="about">
    <h1>Ajouter une catégorie :</h1>
    <add-category></add-category>
  </div>
</template>

<script>
import AddSong from "@/components/AddCategory";
export default {
  name: 'AboutView',
  components: {
    AddSong
  }
}
</script>