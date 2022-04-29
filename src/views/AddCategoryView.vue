<template>
  <div class="about">
    <h1>Ajouter une catégorie :</h1>
    <add-category></add-category>
  </div>
</template>

<script>
import AddCategory from "@/components/AddCategory";
export default {
  name: 'AboutView',
  components: {
    AddCategory
  }
}
</script>