<script setup>
import ComponeteClima from './components/ComponeteClima.vue'
import Formulario from './components/Formulario.vue'
import useClima  from './composables/useClima.js'
import Spinner from './components/Spinner.vue'
import Alerta from './components/Alerta.vue'

const { obtenerClima, clima, mostrarClima, convertirKelvinACelsius, cargando, error } = useClima()
</script>

<template>
  <h1 class="titulo">App Clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario 
        @obtener-clima="obtenerClima"
    />
    <Spinner v-if="cargando"/>
    <Alerta v-if="error">{{ error }}</Alerta> 
    <ComponeteClima v-if="mostrarClima" :clima="clima" :convertirKelvinACelsius="convertirKelvinACelsius"/>
  </div>
</template>
