<script setup>
    defineProps({
        clima: {
            type: Object,
            required: true
        },
        convertirKelvinACelsius: {
            type: Function,
            required: true
        }
    })
</script>

<template>
    <div class="resultado">
        <h2>Clima de: {{ clima.name }}</h2>
        <p class="actual">{{ convertirKelvinACelsius(clima.main.temp) }}<span>&deg;C</span></p>
        <div class="temperaturas">
            <p>Min: {{ convertirKelvinACelsius(clima.main.temp_min) }}<span>&deg;C</span></p><!--&deg;C es el simbolo de grados centigrados-->
            <p>Max: {{ convertirKelvinACelsius(clima.main.temp_max) }}<span>&deg;C</span></p>
        </div>
    </div>
  
</template>
