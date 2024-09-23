export default class Auto{
    #color;
    #precio;
    #marca;
    #fecha;

    constructor(color,precio,marca,fecha=null){
        this.#color = color;
        this.#precio = precio;
        this.#marca = marca;
        if(!fecha){
            this.#fecha = "No hay fecha";
        }
    }
    
    GetMarca(){
        return this.#marca;
    }

    GetColor(){
        return this.#color;
    }

    GetPrecio(){
        return this.#precio;
    }

    GetFecha(){
        return this.#fecha;
    }

    static Registrar(auto){
        let autos = JSON.parse(localStorage.getItem("autos")) || [];        
        autos.push({"marca":auto.GetMarca(),"precio":auto.GetPrecio(),"color":auto.GetColor()});
        localStorage.setItem("autos",JSON.stringify(autos));
    }

    // static Registrar(auto){
    //     let autos = JSON.parse(localStorage.getItem("autos")) || [];
    //     localStorage.setItem("autos",JSON.stringify(autos));
    //     autos.push({"marca":auto.GetMarca(),"precio":auto.GetPrecio(),"color":auto.GetColor()});
    // }
    
    static GetAutosRegistrados(){
        return JSON.parse(localStorage.getItem('autos')) || [];
    }

    static EliminarDelRegistro(indexAuto){
        let autos = this.GetAutosRegistrados();
        autos.splice(indexAuto,1);
        localStorage.setItem("autos",JSON.stringify(autos));
        document.getElementById('mensaje-eliminado').style.visibility = 'visible';
    }


    AgregarImpuestos(costoImpuesto){
        this._precio += costoImpuesto;
    }

    static MostrarAuto(auto){
        console.log(
            "\n "+auto.#marca+"\n"+
            "\n "+auto.#color+"\n"+
            "\n "+auto.#precio+"\n"+
            "\n "+auto.#fecha+"\n"
        );
    }

    Equals(auto){
        return this.#marca === auto.GetMarca();
    }

    
    static Add(auto1,auto2){
        if(auto1.GetMarca()===auto2.GetMarca() && auto1.GetColor()===auto2.GetColor()){
            return auto1.GetPrecio() + auto2.GetPrecio();
        }else{
            return 0;
        }
    }
}