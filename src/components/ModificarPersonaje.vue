<template>
    <div class="container">
        <h1>
            Modificar Personaje
        </h1>
        <br/>
        <label>Seleccione una serie:</label>
        <select class="form-control" v-model="idSerie">
            <option v-for="s in series" :key="s" :value="s.idSerie">
                {{s.nombre}}
            </option>
        </select>
        <br/>
        <label>Seleccione un personaje:</label>
        <select class="form-control" v-model="idSerie">
            <option v-for="p in personajes" :key="p" :value="p.idPersonaje">
                {{p.nombre}}
            </option>
        </select>
    </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();
    export default {
        name:"ModificarPersonaje",
        data(){
            return{
                idSerie:0,
                series:[],
                personajes:[]
            }
        },
        mounted(){
            service.loadSeries().then(result=>{
                this.series = result;
            });
            service.getPersonajes().then(result=>{
                this.personajes = result;
            })
        },
        methods:{

        }
    }
</script>

<style>
    
</style>