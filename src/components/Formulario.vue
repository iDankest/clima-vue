<script setup>
const paises = [
    {codigo: AR, nombre: 'Argentina'},
    {codigo: BR, nombre: 'Brasil'},
    {codigo: CL, nombre: 'Chile'},
    {codigo: CO, nombre: 'Colombia'},
    {codigo: EC, nombre: 'Ecuador'},
    {codigo: PY, nombre: 'Paraguay'},
    {codigo: PE, nombre: 'Perú'},
    {codigo: VE, nombre: 'Venezuela'},
]
</script>

<template>
    <form action="" class="formulario">
        <div>
            <label for="ciudad">Ciudad:</label>
            <input type="text" id="ciudad" placeholder="Escribe el nombre de la ciudad">
        </div>
        <div>
            <label for="pais">País:</label>
            <select name="pais" id="pais">
                <option value="">Selecciona un país</option>
                <option v-for="pais in paises" :key="pais.codigo" :value="pais.codigo">{{ pais.nombre }}</option>
            </select>
        </div>
        <div>
            <label for="ciudad">Ciudad:</label>
            <input type="text" id="ciudad" placeholder="Escribe el nombre de la ciudad">
        </div>

    </form>
</template>


