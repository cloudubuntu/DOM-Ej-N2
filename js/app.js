class Persona{

    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;

    }

    mostrarGeneracion(){
        if(this.anioNacimiento<1948&&this.anioNacimiento>1930){
            return 'Generacion:"Silent Generation", Rasgo Caracteristico: "Austeridad" ';
        } else if(this.anioNacimiento<1968&&this.anioNacimiento>1949){  
            return 'Generacion:"Baby Boom", Rasgo Caracteristico: "Ambicion" ';
        }else if(this.anioNacimiento<1980&&this.anioNacimiento>1969){
            return 'Generacion:"Generacion X", Rasgo Caracteristico: "Obsesion por el exito" ';
        }else if(this.anioNacimiento<1993&&this.anioNacimiento>1981){
            return 'Generacion:"Generacion Y millenials", Rasgo Caracteristico: "Frustracion" ';
        }else if(this.anioNacimiento<2010&&this.anioNacimiento>1994){
            return 'Generacion:"Generacion Z", Rasgo Caracteristico: "Irreverencia" ';
        }else{
            return 'Todavia no posee una Taxonomia de Generacion definida';
        }       
    }

    esMayorDeEdad(){
        if(this.edad>21){
            return true;
        }else{
            return false;
        }
    }

    mostrarDatos(){
        return 'Nombre: '+this.nombre+', Edad: '+this.edad+', DNI: '+this.dni+', Sexo: '+this.sexo+
        ', Peso: '+this.peso+', Altura: '+this.altura+', Año de Nacimiento: '+this.anioNacimiento;
    }

    
}


let persona;
let cont=document.querySelector('#cont');



function crear(){
    let name=document.querySelector('#inputName').value;
    let edad=parseInt(document.querySelector('#inputEdad').value);
    let dni=document.querySelector('#inputDNI').value;
    let sexo=document.querySelector('#inputSexo').value;
    let peso=document.querySelector('#inputPeso').value;
    let altura=document.querySelector('#inputAltura').value;
    let anio=parseInt(document.querySelector('#inputAnio').value);

    persona=new Persona(name, edad, dni, sexo, peso, altura, anio);
    
    cont.innerHTML+=`<div class=" container mb-5">
    <button
      class="btn btn-outline-primary "
      type="button"
      id="btnGeneracion"
      onclick="mostrarGeneracion()"
    >
      Mostrar Generacion
    </button>
    <button
      class="btn btn-outline-primary"
      type="button"
      id="btnMayor"
      onclick="esMayorDeEdad()"
    >
      ¿Es Mayor de edad?
    </button>
    <button
      class="btn btn-outline-primary"
      type="button"
      id="btnDatos"
      onclick="mostrarDatos()"
    >
      Mostrar Datos Cargados
    </button>
  </div>`
}


function mostrarGeneracion(){
    /*alert (persona.mostrarGeneracion());*/
    cont.innerHTML+=`<div class="alert alert-primary" role="alert"> ${persona.mostrarGeneracion()}</div>`
}

function esMayorDeEdad(){
    if(persona.esMayorDeEdad()){
        //alert ('Es Mayor de edad');
        cont.innerHTML+=`<div class="alert alert-primary" role="alert">Es Mayor de Edad</div>`
    }else{
        //alert('No es mayor de edad');
        cont.innerHTML+=`<div class="alert alert-primary" role="alert">NO Es Mayor de Edad</div>`
    }

}

function mostrarDatos(){
    //alert(persona.mostrarDatos());
    cont.innerHTML+=`<div class="alert alert-primary" role="alert"> ${persona.mostrarDatos()}</div>`
}