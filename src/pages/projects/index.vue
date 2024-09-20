<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
const projects = ref()
/* 
  IIFE = Immediately Invoke function Expression
  A JavaScript function that runs as soon as it is defined. Also known as an IIFE.
*/
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) {
    console.log(error)
  }

  projects.value = data
  return data
})()
</script>

<template>
  <div>
    <h1>Projects</h1>
    <RouterLink to="/">Home</RouterLink>
    {{ projects }}
  </div>
</template>

<style scoped></style>
