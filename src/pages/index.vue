<script setup lang="ts">
import { usePageStore } from '@/stores/pages'

usePageStore().pageData.title = 'Home Page'
</script>

<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<style scoped></style>
