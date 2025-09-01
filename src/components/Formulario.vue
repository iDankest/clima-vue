<script setup>
import { reactive, ref } from 'vue';

const busqueda = reactive({
    ciudad: '',
    pais: ''
})

const error = ref('')

const paises = [
    {codigo: 'AR', nombre: 'Argentina'},
    {codigo: 'BR', nombre: 'Brasil'},
    {codigo: 'CL', nombre: 'Chile'},
    {codigo: 'CO', nombre: 'Colombia'},
    {codigo: 'EC', nombre: 'Ecuador'},
    {codigo: 'PY', nombre: 'Paraguay'},
    {codigo: 'PE', nombre: 'Perú'},
    {codigo: 'VE', nombre: 'Venezuela'},
    {codigo: 'ES', nombre: 'España'}
]
</script>

<template>
    <form class="formulario">
        <div class="campo">
            <label for="ciudad">Ciudad:</label>
            <input 
                type="text" 
                id="ciudad" 
                placeholder="Escribe el nombre de la ciudad"
                class="input-text"
                v-model="busqueda.ciudad"
            >
        </div>
        <div class="campo">
            <label for="pais">País:</label>
            <select name="pais" id="pais" class="input-select" v-model="busqueda.pais">
                <option value="">Selecciona un país</option>
                <option v-for="pais in paises" :key="pais.codigo" :value="pais.codigo">
                    {{ pais.nombre }}
                </option>
            </select>
        </div>
        <input type="submit" value="Buscar">
    </form>
</template>
