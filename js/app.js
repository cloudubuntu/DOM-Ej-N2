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
