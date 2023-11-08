import Global from './../Global';
import axios from 'axios';

export default class SeriesService{
    loadSeries(){
        return new Promise(function(resolve){
            let request = "api/series";
            let url = Global.URL_ApiSeries + request;
            let series = [];
            axios.get(url).then(response=>{
                series = response.data;
                resolve(series);
            })
            return series;
        })
    }

    findSerieById(id){
        return new Promise(function(resolve){
            let request = `api/series/${id}`;
            let url = Global.URL_ApiSeries + request;
            let serie = {};
            axios.get(url).then(response=>{
                serie = response.data;
                resolve(serie);
            })
        })
    }

    getPersonajesByIdSerie(idSerie){
        return new Promise(function(resolve){
            let request = `api/series/personajesserie/${idSerie}`;
            let url = Global.URL_ApiSeries + request;
            let personajes = [];
            axios.get(url).then(response=>{
                personajes = response.data;
                resolve(personajes);
            })
            return personajes;
        })
    }

    insertarPersoaje(personaje){
        return new Promise(function(resolve){
            let request = "api/personajes";
            let url = Global.URL_ApiSeries + request;
            axios.post(url,personaje).then(response=>{
                resolve(response);
            })
        })
    }

    getPersonajes(){
        return new Promise(function(resolve){
            let request = "api/personajes";
            let url = Global.URL_ApiSeries + request;
            let personajes = [];
            axios.get(url).then(response=>{
                personajes = response.data;
                resolve(personajes);
            })
            return personajes;
        })
    }
}