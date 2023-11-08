<template>
    <nav class="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">NAVBAR</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/create">Nuevo Personaje</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/update">Modificar Personajes</router-link>
                    </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Series
                    </a>
                    <ul v-if="status === true" class="dropdown-menu">
                        <li v-for="s in series" :key="s">
                            <router-link class="dropdown-item" :to="`/serie/${s.idSerie}`">{{s.nombre}}</router-link>
                        </li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();
    export default{
        name:"MenuSeries",
        data(){
            return{
                series:[],
                status:false
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