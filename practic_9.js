function boton(){
  
    function Persona(nombre, edad, genero){
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }
    
   
    Persona.prototype.obtDetalles = function(){
        return `Nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}`
    }
    
    function Estudiante(nombre, edad, genero, curso, grupo){
        Persona.call(this, nombre, edad, genero)
        this.curso = curso
        this.grupo = grupo
    }
    
    Estudiante.prototype = Object.create(Persona.prototype)
   
    Estudiante.prototype.registrar = function(){
        return `Registrado en el curso: ${this.curso}, grupo: ${this.grupo}`
    }
    
    function Profesor(nombre, edad, genero, asignatura, nivel){
        Persona.call(this, nombre, edad, genero)
        this.asignatura = asignatura
        this.nivel = nivel
    }
    
    Profesor.prototype = Object.create(Persona.prototype)
    
    Profesor.prototype.asignar = function(){
        return `Asignatura: ${this.asignatura}, nivel: ${this.nivel}`
    }
    
    
    const estudiante1 = new Estudiante("Esteban", 16, "Masculino", "ingles", "4A")
    const profesor1 = new Profesor("julio", 54, "Masculino", "historia", "Superior")
    
  
    console.log(estudiante1.obtDetalles())
    console.log(estudiante1.registrar())
    
    console.log(profesor1.obtDetalles())
    console.log(profesor1.asignar())
 
 }