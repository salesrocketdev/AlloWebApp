import useApi from 'src/composables/UseApi'

export default function userService () {
  const { list, getById, post, update, remove } = useApi('users')

  return {
    list,
    getById,
    post,
    update,
    remove
  }
}
