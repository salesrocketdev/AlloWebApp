<template>
  <q-layout view="lHh lpr lFf" container style="width: auto; height: 550px; margin: 30px 20px 0px 20px; padding: 40px;" class="shadow-2 rounded-borders">
  <q-page-container>
    <q-page padding>
      <q-form
        @submit="onSubmit"
        class="q-gutter-sm">
        <h5>Adicionar usuário</h5>

        <q-input
        filled
          v-model="form.name"
          label="Nome completo *"
          hint="Por favor, insira seu Nome completo"
          lazy-rules
          class="col-lg col-xs-12"
          :rules="[ val => val && val.length > 0 || 'O campo Nome obrigatório']"
        />

        <q-input
        filled
        v-model="form.cpf"
        label="CPF *"
        hint="Por favor, insira seu CPF"
        lazy-rules
        class="col-lg col-xs-12"
        :rules="[ val => val && val.length > 0 || 'O campo CPF obrigatório']"
        />

        <q-input
        filled
        v-model="form.tel"
          label="Telefone"
          hint="Por favor, insira seu Telefone"
          lazy-rules
          class="col-lg col-xs-12"
          />

        <q-input
        filled
        v-model="form.email"
        type="email"
        label="E-mail *"
        hint="Por favor, insira seu E-mail"
        lazy-rules
        class="col-lg col-xs-12"
        :rules="[ val => val && val.length > 0 || 'O campo E-mail é obrigatório']"
        />

        <div class="col-12 q-gutter-sm">
          <p class="q-mt-lg text-negative">Campos contendo (*) são obrigatórios</p>
          <q-btn v-if="form.id == null" type="submit" label="Adicionar" color="accent" class="float-right" icon="add" />
          <q-btn v-if="form.id != null" type="submit" label="Salvar alterações" color="accent" class="float-right" icon="save" />
          <q-btn label="Cancelar" color="white" class="float-right" text-color="accent" :to="{ name: 'home' }" />
        </div>
      </q-form>

    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import userService from 'src/services/users'
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'AddPage',

  setup () {
    const { post, getById, update } = userService()
    const $q = useQuasar()
    const router = useRouter()
    const route = useRoute()

    const form = ref({
      name: '',
      cpf: '',
      tel: '',
      email: ''
    })

    onMounted(async () => {
      if (route.params.id) {
        getUser(route.params.id)
      }
    })

    const getUser = async (id) => {
      try {
        const response = await getById(id)
        form.value = response
      } catch (error) {
        console.error(error)
      }
    }

    const onSubmit = async () => {
      try {
        if (form.value.id) {
          await update(form.value)
          $q.notify({ message: 'Usuário atualizado com sucesso', icon: 'check', color: 'positive' })
        } else {
          await post(form.value)
          $q.notify({ message: 'Usuário adicionado com sucesso', icon: 'check', color: 'positive' })
        }

        router.push({ name: 'list' })
      } catch (error) {
        console.error(error)
        $q.notify({ message: 'Ocorreu um erro ao adicionar um Usuário', icon: 'times', color: 'negative' })
      }
    }

    return {
      form,
      onSubmit
    }
  }
})

</script>
