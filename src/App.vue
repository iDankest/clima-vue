<script setup>
import Formulario from './components/Formulario.vue'
import  useClima  from './composables/useClima'
const { obtenerClima, clima } = useClima()
</script>

<template>
  <h1 class="titulo">App Clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario 
        @obtener-clima="obtenerClima"
    />
  </div>
</template>
