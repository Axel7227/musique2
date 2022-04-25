<template>
  <div class="home">
    <categories></categories>
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from "@/components/Categories";
export default {
  name: 'CategoriesVue',
  components: {
    Categories
  }
}
</script>