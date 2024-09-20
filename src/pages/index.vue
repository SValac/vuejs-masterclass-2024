<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
const getProjects = async () => {
  const { data, error } = await supabase.from('countries').select()
  if (error) {
    console.log(error)
  }
  console.log('projects ', data)
}

await getProjects()
</script>

<template>
  <div>
    <h1>Home</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>

<style scoped></style>
