<template>
    <div class="container">
        <h1>
            Nuevo Personaje
        </h1>
        <br/>
        <form v-on:submit.prevent="insertPersonaje()">
            <label>Id Personaje</label>
            <input type="number" class="form-control" v-model="personaje.idPersonaje"/>
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="personaje.nombre"/>
            <label>Imagen</label>
            <input type="text" class="form-control" v-model="personaje.imagen"/>
            <label>Series</label>
            <select v-model="personaje.idSerie" class="form-control">
                <option v-for="s in series" :key="s" :value="s.idSerie">
                    {{s.nombre}}
                </option>
            </select>
            <br/>
            <button class="btn btn-success">Insertar Personaje</button>
        </form>
        <h2 class="text-success">{{mensaje}}</h2>
    </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();
    export default {
        name:"CreatePersonaje",
        data(){
            return{
                personaje:{
                    idPersonaje:0,
                    nombre:"",
                    imagen:"",
                    idSerie:0
                },
                series:[],
                status:false,
                mensaje:""
            }
        },
        methods:{
            insertPersonaje(){
                service.insertarPersoaje(this.personaje).then(result=>{
                    console.log(result);
                    this.mensaje = "Personaje insertado correctamente!!"
                    this.$router.push(`/personajes/${this.personaje.idSerie}`)
                })
            }
        },
        mounted(){
            service.loadSeries().then(result=>{
                this.series = result;
                this.status = true;
            })
        }
    }
</script>

<style>
    
</style>