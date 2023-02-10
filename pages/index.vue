<template>
  <div>
    <h1>home</h1>
    <p>text</p>
    <ExampleComponent title="title text prop"></ExampleComponent>
    <p>icon:</p>
    <i class="material-icons">star</i>
  </div>
</template>

<script setup>
useHead({
  title: 'index title',
  meta: [
    {
      name: 'description',
      content: 'index description'
    }
  ]
})
</script>

<style>

</style>