function pesquisarPessoaPorCpf(cpf){
    const pessoas = [
  {
    nome: 'julio',
    cpf: '123456789',
    frutasFavoritas: ['maçã', 'abacaxi'],
  },
  {
    nome: 'julio',
    cpf: '123456788',
    frutasFavoritas: ['goiaba', 'maracujá'],
  },
  {
    nome: 'isabelle',
    cpf: '987654321',
    frutasFavoritas: ['abacaxi', 'maçã'],
  },
  {
    nome: 'priscila',
    cpf: '987654322',
    frutasFavoritas: ['mamão', 'banana'],
  },
  {
    nome: 'carlos',
    cpf: '987654332',
    frutasFavoritas: ['laranja', 'manga'],
  },
  {
    nome: 'lucas',
    cpf: '987654532',
    frutasFavoritas: ['manga', 'abacate'],
  },
  {
    nome: 'camila',
    cpf: '287654532',
    frutasFavoritas: ['manga', 'maçã'],
  }
];

// console.log(pessoas[0].nome)
// console.log(pessoas[1].nome)
// console.log(pessoas[2].nome)

// Gatilho: Quando tenho que navegar em
// uma lista, eu uso um Laço de Repetição!

for (let indice = 0; indice < pessoas.length; indice++) {
    if (pessoas[indice].cpf === cpf) {
      return pessoas[indice]; // Retorna a pessoa que tem o CPF correspondente
    }
  }

  return null; // Retorna null se não encontrar a pessoa
}

module.exports = {
  pesquisarPessoaPorCpf
};
console.log('Já sai do for');