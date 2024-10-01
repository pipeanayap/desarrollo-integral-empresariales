console.log("Profe no se porque aqui no se ve pero si lo corro con node si funciona")


const os = require('os');

const nameOs = os.type();
console.log(nameOs);

const uptimeOS = os.uptime();
console.log(uptimeOS);

const totalMemory = os.totalmem();
console.log(totalMemory/1024);

const cpuArchitecture = os.arch();
console.log(cpuArchitecture);

const cpuCoreLogic = os.cpus();
console.log(cpuCoreLogic);


const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);