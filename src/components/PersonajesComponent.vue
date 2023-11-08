<template>
    <div class="container">
        <h1>Personajes</h1>
        <br/>
        <router-link class="btn btn-danger" :to="`/serie/${this.$route.params.idserie}`">Volver</router-link>
        <br/>
        <br/>
        <dvi v-if="status === true">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="p in personajes" :key="p">
                        <td>{{p.nombre}}</td>
                        <td><img :src="p.imagen" alt="img_personaje" width="250"/></td>
                    </tr>
                </tbody>
            </table>
        </dvi>
    </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();
    export default{
        name:"PersonajesComponent",
        data(){
            return{
                personajes:[],
                status: false
            }
        },
        mounted(){
            let idSerie = this.$route.params.idserie;
            service.getPersonajesByIdSerie(idSerie).then(result=>{
                console.log(result);
                this.personajes = result;
                this.status = true;
            })
        }
    }
</script>

<style>

</style>