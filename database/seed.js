/* eslint-env node*/
import { fakerES_MX as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const seedProject = async (numEntries) => {
  const projects = []
  for (let i = 1; i < numEntries; i++) {
    const name = faker.lorem.words(3)
    projects.push({
      name,
      slug: name.toLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['todo', 'in-progress', 'done']),
      collaborators: faker.helpers.arrayElements([1, 2, 3])
    })
  }
  const { data, error, status } = await supabase.from('projects').insert(projects)
  console.log(data, status, error)
}

await seedProject(10)
