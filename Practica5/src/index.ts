let miVariable : string = "Hola mundo";
console.log(miVariable);

 //Create an object

 const Person1 = {
    firstName1 : "Luis",
    secondName : "Felipe",
    age : 20
 }

 //Destructuring

 let {firstName1, secondName} = Person1;
 console.log(firstName1 , ' ', secondName);



 let miNombre = "Pipe";
 let [a1,a2,a3,a4]:any = miNombre;
 console.log(a1,a2,a3,a4)

 const frutas = ["platanos", "naranjas", "manzanas", "mangos"];
 let [fruta1, fruta2] = frutas;
 console.log(fruta1, fruta2);

 let [frutaA, , ,frutaB] = frutas;
 console.log(frutaA, frutaB);


 class Personax {
   nombrex: string;
   edadx : number;
   apellidoP: string;
   apellidoM: string

   constructor(nombre: string, edadx: number, apellidoP : string, apellidoM: string){
      this.nombrex = nombre;
      this.edadx = edadx;
      this.apellidoP = apellidoP;
      this.apellidoM = apellidoM;
   }

   getEdadx() : number {
      return this.edadx
   }

   setEdad(edadx : number): void{
      this.edadx = edadx;
   }

   getNombrex() : string{
      return this.nombrex
   }

   setNombrex(nombrex : string): void{
      this.nombrex = nombrex;
   }

   getApellidoP() : string{
      return this.apellidoP;
   }

   setApellidoP(apellidoP : string):void{
      this.apellidoP = apellidoP;
   }

   getApellidoM() : string{
      return this.apellidoM;
   }

   setApellidoM(apellidoM : string):void{
      this.apellidoM = apellidoM;
   }

   nombreCompleto(): string{
      return this.nombrex + " " + this.apellidoP + " "+this.apellidoM + " con la edad de " + this.edadx   
   }

 }

 let personaje1 = new Personax("Pipe", 20, 'Anaya', 'Parada');
 console.log(personaje1.edadx);
 console.log(personaje1.nombrex);
 
//  personaje1.nombrex = 'Hola';
 personaje1.edadx = 25;

 console.log(personaje1.edadx);
 console.log(personaje1.nombrex);

 let personaje2 = new Personax('Carlos', 35, 'Serrano', 'algo');
 personaje2.setEdad(20);
 personaje2.setNombrex('Juan carlos');
console.log('La nueva edad de carlos es de ', personaje2.getEdadx());
console.log('El nuevo nombre de carlos es ',personaje2.getNombrex());

console.log(personaje1.nombreCompleto());
 
//Interface
interface user{
   name : string;
   id : number;
}

class userAccount{
   name : string;
   id : number;

   constructor( name : string, id : number){
      this.name = name;
      this.id = id;
   }
}

const usuarioInterface : user = new userAccount('Imagine Dragons' , 2);
console.log(usuarioInterface.name, usuarioInterface.id);

//PARTE DEL RETO 

  /*  Crear al menos 5 clases que van a usar en su proyecto, 3 propiedades, getters y setters y al menos un metodo por clase o 
      funcion agregar un constructor 
   */

//IGNORAR POR AHORA

class animal { 
   nombre : string;
   constructor(nombre : string){
      this.nombre = nombre;
   }

   mover(distancia : number = 0){
      console.log(`${this.nombre} se ha movido ${distancia} metros`)
   }

   hacerSonido(sonido : string = 'sin sonido'){
      console.log(`${this.nombre} hace ${sonido}`);
   }
}

let animal1 = new animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('cri cri cri')


class perro extends animal { 

   raza : string;
   constructor(nombre : string, raza : string){
      super(nombre);
      this.raza = raza;
   }

   hacerSonido(sonido = 'Ladrido'): void {
         console.log(`${this.nombre} hace ${sonido}`);
   }

   mover(distancia : number = 0){
      console.log(`${this.nombre} se ha movido ${distancia} metros`);
   }
}

let perro1 = new perro("Kira", 'Golden retriever');
perro1.hacerSonido('Guau guau');
perro1.mover(10);


class serpiente extends animal{
   constructor(nombre : string){
      super(nombre);
   }

   mover(distancia : number = 1){
      console.log('reptando');
      super.mover(distancia);
   }

   hacerSonido(sonido = 'siseo'){
      console.log(`${this.nombre} hace ${sonido}`);
   }
       
   }

   const serpiente1 = new serpiente('cobra');
   serpiente1.mover(2);
   serpiente1.hacerSonido();





   


   //RETO PRACTICA 5
   console.log("------Aqui inicia la practica 5-------")

   // Clase Padre
class Persona {
    nombre: string;
    email: string;
   telefono: string;

   // Constructor
   constructor(nombre: string, email: string, telefono: string) {
       this.nombre = nombre;
       this.email = email;
       this.telefono = telefono;
   }

   // Getters y Setters
 getNombre(): string {
       return this.nombre;
   }

 setNombre(nombre: string): void {
       this.nombre = nombre;
   }

 getEmail(): string {
       return this.email;
   }

 setEmail(email: string): void {
       this.email = email;
   }

 getTelefono(): string {
       return this.telefono;
   }

 setTelefono(telefono: string): void {
       this.telefono = telefono;
   }
}

// Clase Hija - Usuario
class Usuario extends Persona {
    username: string;
    password: string;
    rol: string;

   constructor(nombre: string, email: string, telefono: string, username: string, password: string, rol: string) {
       super(nombre, email, telefono);
       this.username = username;
       this.password = password;
       this.rol = rol;
   }

   public getUsername(): string {
       return this.username;
   }

   public setUsername(username: string): void {
       this.username = username;
   }

   public getRol(): string {
       return this.rol;
   }

   public setRol(rol: string): void {
       this.rol = rol;
   }

   public checkPassword(password: string): boolean {
       return this.password === password;
   }
}

// Clase Productos
class Producto {
    nombre: string;
    precio: number;
    stock: number;

   constructor(nombre: string, precio: number, stock: number) {
       this.nombre = nombre;
       this.precio = precio;
       this.stock = stock;
   }

 getNombre(): string {
       return this.nombre;
   }

 setNombre(nombre: string): void {
       this.nombre = nombre;
   }

 getPrecio(): number {
       return this.precio;
   }

 setPrecio(precio: number): void {
       this.precio = precio;
   }

 getStock(): number {
       return this.stock;
   }

 setStock(stock: number): void {
       this.stock = stock;
   }

 comprar(cantidad: number): void {
       if (this.stock >= cantidad) {
           this.stock -= cantidad;
       } else {
           console.log('Stock insuficiente');
       }
   }
}

// Clase Carrito
class Carrito {
    productos: Producto[] = [];
 total: number;
    cantidadProductos: number;

   constructor() {
       this.total = 0;
       this.cantidadProductos = 0;
   }
 getTotal(): number {
       return this.total;
   }
 getCantidadProductos(): number {
       return this.cantidadProductos;
   }
 agregarProducto(producto: Producto): void {
       this.productos.push(producto);
       this.total += producto.getPrecio();
       this.cantidadProductos++;
   }
 mostrarProductos(): void {
       console.log(this.productos);
   }
}

// Clase MetodoDePago
class MetodoDePago {
    tipo: string;
    numeroCuenta: string;
    titular: string;

   constructor(tipo: string, numeroCuenta: string, titular: string) {
       this.tipo = tipo;
       this.numeroCuenta = numeroCuenta;
       this.titular = titular;
   }

    getTipo(): string {
       return this.tipo;
   }

    getNumeroCuenta(): string {
       return this.numeroCuenta;
   }

    getTitular(): string {
       return this.titular;
   }

    procesarPago(monto: number): void {
       console.log(`Procesando pago de ${monto} con el método ${this.tipo} a nombre de ${this.titular}`);
   }
}
