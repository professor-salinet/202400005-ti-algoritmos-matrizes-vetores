var frutas = ["Graviola", "Agave", "Marula", "Toranja", "Mirtilo", "Seriguela", "Acerola", "Uva passa", "Abacate"]; // Declaração da variável matriz frutas

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

const ddds = [11, 43, 44, 45, 21, 41, 42, 85, 69, 68, 23];

let ddd = ddds[0];

switch (ddd) {
    case 12:
    case 11:
        console.log("DDD São Paulo.");
        break;
    case 41:
    case 43:
    case 44:
    case 45:
        console.log("DDD do Paraná.");
        break;
    case 23:
        console.log("DDD do Espírito Santo.");
        break;
    case 21:
        console.log("DDD do Rio de Janeiro.");
        break;
    case 68:
        console.log("DDD do Acre.");
        break;
    case 69:
        console.log("DDD de Rondônia.");
        break;
    case 85:
        console.log("DDD do Ceará.");
        break;
    default:
        console.log("DDD não encontrado.");
        break;
}