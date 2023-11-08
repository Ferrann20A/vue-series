<template>
    <div class="container">
        <h1>Serie Component</h1>
        <br/>
        <div class="card mx-auto d-block" style="width: 30rem;">
            <img :src="serie.imagen" class="card-img-top" alt="img_serie">
            <div class="card-body">
                <h5 class="card-title">{{serie.nombre}}</h5>
                <p class="card-text"><strong>Puntuación: {{serie.puntuacion}}</strong></p>
                <p class="card-text">Año: {{serie.anyo}}</p>
                <router-link :to="`/personajes/${serie.idSerie}`" class="btn btn-success">Personajes</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();
    export default{
        name:"SerieComponent",
        data(){
            return{
                serie:{
                    idSerie:0,
                    nombre: "",
                    imagen: "",
                    puntuacion: 0,
                    anyo: 0
                }
            }
        },
        watch:{
            '$route.params.id'(nextVal,oldVal){
                if(nextVal != oldVal){
                    let id = this.$route.params.id;
                    service.findSerieById(id).then(result=>{
                        this.serie = result;
                    })
                }
            }
        },
        mounted(){
            let id = this.$route.params.id;
            service.findSerieById(id).then(result=>{
                this.serie = result;
            })
        }
    }
</script>

<style>

</style>