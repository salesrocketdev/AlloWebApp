<template>
  <q-toggle
    v-model="darkMode"
    checked-icon="dark_mode"
    color="dark"
    label="Modo Escuro"
    unchecked-icon="light_mode"
    size="lg" />
</template>

<script>
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  setup () {
    const darkMode = ref(false)
    const $q = useQuasar()

    onMounted(() => {
      const darkModeIsActive = $q.localStorage.getItem('darkMode')
      if (darkModeIsActive) {
        darkMode.value = true
      }
    })

    watch(darkMode, (darkMode) => {
      $q.dark.set(darkMode)
      $q.localStorage.set('darkMode', darkMode)
    })

    return {
      darkMode
    }
  }
})

</script>
