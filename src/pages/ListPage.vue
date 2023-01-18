<template>
  <q-page padding>
    <q-table
      title="Usuários"
      :rows="users"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top>
        <span class="text-h5">Usuários</span>
        <q-space></q-space>
        <q-btn title="Adicionar" size="17px" color="primary" icon="add" round dense :to="{ name: 'add' }" />
      </template>

      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-sm">
          <q-btn dense flat round icon="edit" color="primary" size="md" @click="handleEditUser(props.row.id)" />
          <q-btn flat round icon="delete" color="negative" size="md" @click="handleDeleteUser(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import userService from 'src/services/users'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const users = ref([])
    const { list, remove } = userService()
    const columns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true, align: 'left' },
      { name: 'name', label: 'Nome', field: 'name', sortable: true, align: 'left' },
      { name: 'cpf', label: 'CPF', field: 'cpf', sortable: true, align: 'left' },
      { name: 'tel', label: 'Telefone', field: 'tel', sortable: true, align: 'left' },
      { name: 'email', label: 'E-mail', field: 'email', sortable: true, align: 'left' },
      { name: 'actions', label: 'Ações', field: 'actions', align: 'center' }
    ]

    const $q = useQuasar()
    const router = useRouter()

    onMounted(() => {
      getUsers()
    })

    const getUsers = async () => {
      try {
        const data = await list()
        users.value = data
      } catch (error) {
        console.log(error)
      }
    }

    const handleDeleteUser = async (id) => {
      try {
        $q.dialog({
          title: 'Deletar',
          message: 'Deseja deletar este Usuário?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          await remove(id)
          $q.notify({ message: 'Apagado com sucesso', icon: 'check', color: 'positive' })
          await getUsers()
        })
      } catch (error) {
        console.log(error)
        $q.notify({
          message: 'Erro ao apagar Usuário',
          icon: 'times',
          color: 'negative'
        })
      }
    }

    const handleEditUser = async (id) => {
      router.push({ name: 'add', params: { id } })
    }

    return {
      users,
      columns,
      handleDeleteUser,
      handleEditUser
    }
  }
})
</script>
