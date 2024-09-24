import { supabase } from '@/lib/supabaseClient'
import type { LoginForm, RegisterForm } from '@/types/AuthForm'

/**
 * Registers a user with Supabase auth and creates a matching profile
 * in the `profiles` table.
 *
 * @param formData - The form data to register the user.
 * @returns {Promise<boolean>} - A promise resolving to `true` if the
 * registration was successful.
 */
export const register = async (formData: RegisterForm): Promise<boolean | void> => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password
  })

  if (error) return console.log(error)

  if (data.user) {
    const { error } = await supabase.from('profiles').insert({
      id: data.user?.id,
      username: formData.username,
      full_name: formData.firstName.concat(' ', formData.lastName)
    })

    if (error) return console.log('Profile Err: ', error)
  }
  return true
}

/**
 * Logs a user in with Supabase auth.
 *
 * @param formData - The form data to login the user.
 * @returns {Promise<boolean>} - A promise resolving to `true` if the
 * login was successful.
 */
export const login = async (formData: LoginForm): Promise<boolean | void> => {
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password
  })
  if (error) return console.log(error)

  return true
}
