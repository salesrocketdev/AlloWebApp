<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Allo Web App
        </q-toolbar-title>

        <dark-mode-toggle />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <q-separator />

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-transparent text-primary">
        <q-toolbar class="justify-center">
          <div class="text-p">Desenvolvido por - Caio Sales, 2023</div>
        </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import DarkModeToggle from 'components/DarkModeToggle.vue'

const linksList = [
  {
    title: 'Início',
    caption: '',
    icon: 'home',
    route: { name: 'home' }
  },
  {
    title: 'Lista de Usuários',
    caption: '',
    icon: 'list',
    route: { name: 'list' }
  },
  {
    title: 'Adicionar',
    caption: '',
    icon: 'add',
    route: { name: 'add' }
  },
  {
    title: 'Sobre',
    caption: '',
    icon: 'info',
    route: { name: 'about' }
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    DarkModeToggle
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
