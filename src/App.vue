<script setup>
import ComponeteClima from './components/ComponeteClima.vue'
import Formulario from './components/Formulario.vue'
import useClima  from './composables/useClima.js'

const { obtenerClima, clima, mostrarClima } = useClima()
</script>

<template>
  <h1 class="titulo">App Clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario 
        @obtener-clima="obtenerClima"
    />
    <ComponeteClima v-if="mostrarClima"/>
  </div>
</template>
