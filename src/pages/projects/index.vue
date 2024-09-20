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
    <h1>Projects</h1>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<style scoped></style>
