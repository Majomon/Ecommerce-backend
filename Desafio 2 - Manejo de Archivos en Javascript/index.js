class Usuario{ //Forma, anatomia del objeto - Como van a ser la Persona
    constructor(nombre,apellido){ // Como se construye la persona
        //Recibo nombre y apellido por parametro
        this.nombre=nombre;
        this.apellido=apellido; 
        this.libros=[];
        this.mascotas=[];
    }

    //Metodo que devuelve el nombre completo
    getFullName(){
        console.log(`El nombre y apellido del usuario es ${this.nombre} ${this.apellido}`);
    }

    //Recibe un nombre de mascota y lo agrega al array demascotas.
    addMascota(nuevaMascota){
        this.mascotas=[...this.mascotas, nuevaMascota]
    }

    //Retorna la cantidad de mascotas que tiene el usuario.
    countMascotas(){
        console.log(this.mascotas.length);
    }

    //Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    addBook(nombre,autor){
        this.libros=[...this.libros,{nombre:nombre, autor:autor}]
    }
    //Retorna un array con sólo los nombres del array de libros del usuario.
    getBookNames(){
        let nombreDeLibros=this.libros.map((e)=>e.nombre)
        console.log(nombreDeLibros);
    }
}

//Varible tipo usuario
const usuario= new Usuario("Mauricio", "Monzón");

//Agregando mascotas
usuario.addMascota("Perro");
usuario.addMascota("Gato");

//Agregando Libros
usuario.addBook("El señor de las moscas","William Golding");
usuario.addBook("Fundacion","Isaac Asimov");


//Metodo devuelve la cantidad de mascotas
usuario.countMascotas()

//Metodo devuelve nombre de los libros
usuario.getBookNames()

//Metodo devuelve el nombre completo del usuario
usuario.getFullName()
