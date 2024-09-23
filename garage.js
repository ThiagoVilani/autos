import Auto from "./auto.js";
export default class Garage{ 
    constructor(razonSocial,precioPorHora){
        this._razonSocial = razonSocial;
        this._precioPorHora = precioPorHora;
        this._autos = [];
    }

    GetRazonSocial(){
        return this._razonSocial;
    }

    GetprecioPorHora(){
        return this._precioPorHora;
    }

    MostrarGarage(){
        console.log(
            "\n"+this._razonSocial+
            "\n"+this._precioPorHora
        )
        for(let auto of this._autos){
            console.log("un auto");
            Auto.MostrarAuto(auto);
        }
    }

    Equals(auto){
        for(let autoEnGarage of this._autos){
            if(autoEnGarage.Equals(auto)){
                return true;
            }
        }
        return false;
    }

    Add(auto){
        if(this._autos.length < 0){
            if(!this.Equals(auto)){
                this._autos.push(auto);
            }else{
                console.log("El auto ya esta en el garage");
                return false;
            }
        }else{ this._autos.push(auto); }
    }


    Remove(auto){
        if(this.Equals(auto)){
            this._autos.splice(this._autos.findIndex(autoEnGarage => autoEnGarage.Equals(auto)),1);
            console.log("Auto removido");
            return true;
        }else{
            console.log("El auto no existe en el garage");
            return false;
        }
    }
}