<template>
  <q-page padding>
    <div>
      <h5>
        Projeto técnico desenvolvido por Caio Sales com o intuito de ser uma avaliação técnica de desenvolvimento Front-end como candidato no processo seletivo do
        <strong class="text-primary">Grupo Allo</strong>.
      </h5>

      <h5>
        O projeto trata-se de um CRUD básico e foi desenvolvido utilizando o <a href="https://quasar.dev/" target="_blank" class="text-primary"><strong>Quasar Framework</strong></a> para
        a implementação do layout da aplicação em conjunto com <a href="https://vuejs.org/" target="_blank" class="text-primary"><strong>Vue.js 3</strong></a>.
      </h5>

      <h5>
        O Back-end foi desenvolvido utilizando a biblioteca <a href="https://www.npmjs.com/package/json-server" target="_blank" class="text-primary"><strong>JSON Server</strong></a>
        que simula uma REST API para fazer um controle dinâmico de um arquivo JSON que simula uma base de dados.
      </h5>

      <h5>
        Versão: 1.0.0
      </h5>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage'
})
</script>
