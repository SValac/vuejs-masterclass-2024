<script setup lang="ts">
import { projectsQuery } from '@/utils/queries'
import { columns } from '@/utils/tableColumns/projectsColumns'
import type { ProjectsQuery } from '@/utils/queries'

usePageStore().pageData.title = 'Projects'

const projects = ref<ProjectsQuery | null>(null)
const getProjects = async () => {
  const { data, error, status } = await projectsQuery
  if (error) {
    useErrorStore().setError({ error, customCode: status })
  }
  projects.value = data
  return data
}

await getProjects()
</script>

<template>
  <div>
    <DataTable v-if="projects" :columns :data="projects" />
  </div>
</template>

<style scoped></style>
