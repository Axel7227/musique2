<template>
  <div class="about">
    <h1>Ajouter une musique :</h1>
    <add-song></add-song>
  </div>
</template>

<script>
import AddSong from "@/components/AddSong";
export default {
  name: 'AboutView',
  components: {
    AddSong
  }
}
</script>