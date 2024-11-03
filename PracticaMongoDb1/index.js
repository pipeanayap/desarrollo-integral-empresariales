const { MongoClient } = require('mongodb');

// Definicion de user y pass
const user = "pipeanayap";
const pass = "PipilloGaymer1";

// Connection URI
const uri = `mongodb+srv://${user}:${pass}@cluster0.efv8i.mongodb.net/`;
const client = new MongoClient(uri);

// Funcion asincrona - conexion
async function run() {
  try {
    await client.connect();
    const db = client.db('blog');
    const collection = db.collection('articulos');

    // Obtener todos los documentos en la colección
    const articulos = await collection.find().toArray();
    console.log(articulos);
  } finally {
    // Cerrar la conexión a la base de datos
    await client.close();
  }
}

run().catch(console.error);
