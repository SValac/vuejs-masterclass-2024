<script setup lang="ts">
import { usePageStore } from '@/stores/pages'

usePageStore().pageData.title = 'Not Found'
</script>

<template>
  <div>404 Not Found</div>
</template>

<style scoped></style>
