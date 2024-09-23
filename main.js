import Auto from "./auto.js";

// localStorage.removeItem('autos');

// let auto1 = new Auto("rojo",42000,"seat");
// let auto2 = new Auto("beige",30000,"chery");
// let auto3 = new Auto("marron",21000,"volvo");

// Auto.Registrar(auto1);
// Auto.Registrar(auto2);
// Auto.Registrar(auto3);
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


//CONFLICTOS
//  Eliminar cuando estoy listando todos, me elimina uno
//  Mensajes aparecen aunque no deberian      
//  Al agregar un auto tengo que verificar que no exista antes      



let ultimoClick = null;



document.getElementById("btn-eliminar").addEventListener("click",function(){
    // let div = document.getElementById("resultado-busqueda");
    console.log(ultimoClick.id);
    let idAuto = ultimoClick.id//div.children[ultimoClick.id].id;
    Auto.EliminarDelRegistro(idAuto);
    LimpiarDivId("resultado-busqueda");
})


//Click BUSCAR
document.getElementById("btn-buscar").addEventListener("click",function(){
    LimpiarDivId("resultado-busqueda");
    document.getElementById('mensaje-eliminado').style.visibility = 'hidden';
    let inputMarca = document.getElementById("input-marca").value;
    let inputColor = document.getElementById("input-color").value;
    let busqueda = Buscar(inputMarca,inputColor);
    if(busqueda){
        MostrarResultados(busqueda["auto"],busqueda["index"]);
    }else{ 
        document.getElementById('mensaje-no-encontrado').style.visibility = 'visible';
    }
})


document.getElementById("btn-registrar").addEventListener("click",function(){
    let marca = document.getElementById("registrar-marca").value;
    let color = document.getElementById("registrar-color").value;
    let precio = document.getElementById("registrar-precio").value;
    let fecha = document.getElementById("registrar-fecha").value;
    Auto.Registrar(new Auto(color,precio,marca,fecha));
})


document.getElementById("btn-listar-todos").addEventListener("click",function(){
    MostrarTodos(Auto.GetAutosRegistrados());
    for(let element of document.getElementsByClassName("auto")){
        element.addEventListener("click",function(){
            ultimoClick = element;
            console.log(element);
            console.log("click en un auto");
            console.log(ultimoClick.id);
        })
    }
})

function LimpiarDivId(id){
    document.getElementById(id).innerHTML = "";
}



//Busco auto por marca y color en los registros
function Buscar(inputMarca,inputColor){ 
    let autos = Auto.GetAutosRegistrados();
    for(let [index,auto] of autos.entries()){
        if(auto["marca"] === inputMarca){
            if(auto["color"] === inputColor){
                return {"index":index,"auto":auto};
            }
        }
    }
    return false;
}


//Muestro los resultados de la busqueda uno por uno
function MostrarResultados(auto,index=null){
    let div = document.createElement("div");
    div.className = "auto"; 
    div.id = index;
    div.innerHTML = "Marca: "+auto["marca"]+
                    "<br>Color: "+auto["color"]+
                    "<br>Precio: "+auto["precio"];
    document.getElementById("resultado-busqueda").appendChild(div);
}


function MostrarTodos(listaAutos){
    for(let [index,auto] of listaAutos.entries()){
        MostrarResultados(auto,index);
    }
}


