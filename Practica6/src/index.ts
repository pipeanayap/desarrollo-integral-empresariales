//ENUMS

enum Color { 
    Rojo = 200,
    Verde,
    Azul
}

console.log(Color.Verde);

console.log(Color.Rojo);

let color1 = Color.Rojo;

color1 = Color.Verde;
 // color1 = 29;  --------- no deja porque la variable color1 ahora es de tipo 'Color'
console.log('Color1 ',color1)

enum CardinalDirections{
    North = 'Norte',
    South = 'Sur',
    East = 'Este',
    West = 'Oeste'
}

let direction:CardinalDirections = CardinalDirections.North;
console.log('direction ', direction); 

enum StatusCodes{
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}

let statusCode : StatusCodes = StatusCodes.Success;

console.log('status code: ',statusCode);

enum Volumen{
    min = 1,
    mid = 5,
    max = 10
}

let volumen: Volumen = Volumen.mid;
console.log('Volumen ',volumen);






//RETO PRACTICA 6

enum MetodoDePagoEnum {
    TarjetaCredito = 'Tarjeta de Crédito',
    TarjetaDebito = 'Tarjeta de Débito',
    PayPal = 'PayPal',
    Transferencia = 'Transferencia Bancaria',
    Efectivo = 'Efectivo'
}

// Uso del enum en la clase MetodoDePago
class MetodoDePago1 {
    tipo: MetodoDePagoEnum;
    numeroCuenta: string;
    titular: string;

    constructor(tipo: MetodoDePagoEnum, numeroCuenta: string, titular: string) {
        this.tipo = tipo;
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
    }

    public getTipo(): MetodoDePagoEnum {
        return this.tipo;
    }

    public getNumeroCuenta(): string {
        return this.numeroCuenta;
    }

    public getTitular(): string {
        return this.titular;
    }

    public procesarPago(monto: number): void {
        console.log(`Procesando pago de ${monto} con el método ${this.tipo} a nombre de ${this.titular}`);
    }
}

// Ejemplo de uso
const pago = new MetodoDePago1(MetodoDePagoEnum.PayPal, '12345678', 'Juan Pérez');
pago.procesarPago(150);
