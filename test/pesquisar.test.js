const { pesquisarPessoaPorCpf } = require('../src/pesquisar.js');
const { strictEqual } = require('node:assert');

describe('pesquisar', () => {
  it('Informa o número de CPF do usuário, teremos seu CPF e fruta favorita', () => {
    const cpfPesquisado = '987654321'; // Definição da variável com o CPF a ser pesquisado
    const nomeEsperado = 'isabelle';   // Definindo o nome esperado
    const cpfEsperado = '987654321';   // Definindo o CPF esperado

    // Chama a função para buscar a pessoa pelo CPF
    const pessoa = pesquisarPessoaPorCpf(cpfPesquisado);  // Passando a variável correta

    // Verifica se a pessoa encontrada é a mesma que a esperada
    strictEqual(pessoa.nome, nomeEsperado);
    strictEqual(pessoa.cpf, cpfEsperado);
  });
});


