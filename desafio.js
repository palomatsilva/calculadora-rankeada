// 2️⃣ Calculadora de partidas Rankeadas

function calcularRanked(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };
}

const vitorias = Number(process.argv[2]);
const derrotas = Number(process.argv[3]);

if (Number.isNaN(vitorias) || Number.isNaN(derrotas)) {
  console.log("Uso: node index.js <vitorias> <derrotas>");
  process.exit(1);
}

const { saldoVitorias, nivel } = calcularRanked(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);

