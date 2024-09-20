<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

/* 
  IIFE = Immediately Invoke function Expression
  A JavaScript function that runs as soon as it is defined. Also known as an IIFE.
*/
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) {
    console.log(error)
  }
  console.log('projects ', data)
})()
</script>

<template>
  <div>
    <h1>Home</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>

<style scoped></style>
