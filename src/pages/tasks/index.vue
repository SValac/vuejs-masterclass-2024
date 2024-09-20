<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from 'database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)
/* 
  IIFE = Immediately Invoke function Expression
  A JavaScript function that runs as soon as it is defined. Also known as an IIFE.
*/
;(async () => {
  const { data, error } = await supabase.from('tasks').select()
  if (error) {
    console.log(error)
  }

  tasks.value = data
  return data
})()
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <RouterLink to="/">Home</RouterLink>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
