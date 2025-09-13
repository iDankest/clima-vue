import axios from 'axios'
import { ref, computed } from 'vue'

export default function useClima() {
    const clima = ref({})
    const cargando = ref(false)
    const error = ref('')
    const obtenerClima = async ({ciudad, pais}) => {

        const apiKey = import.meta.env.VITE_API_KEY
        cargando.value = true
        clima.value = {}
        error.value = ''
        try {
            //Obtener Lat y Lon
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${apiKey}`
            const {data} = await axios.get(url)
            const {lat, lon} = data[0]
            //Obtener clima
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
            const {data: resultado} = await axios.get(urlClima)
            clima.value = resultado
        } catch {
            error.value = 'Ciudad no encontrada'
        } finally {
            cargando.value = false
        }


    }
    const mostrarClima = computed(() => {
        return Object.keys(clima.value).length > 0 
    })

    const convertirKelvinACelsius = (grados) => {
        return Math.round(grados - 273.15)
    }

    return {
        obtenerClima,
        clima,
        mostrarClima,
        convertirKelvinACelsius,
        cargando,
        error
    }
}
