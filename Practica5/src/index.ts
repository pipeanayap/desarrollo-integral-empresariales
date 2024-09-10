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



