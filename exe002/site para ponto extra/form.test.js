const { validarSenha, validarRepeticaoSenha, validarFormulario, validarIdade } = require('./form')

it('testando regras de senha', () => {
    expect(!validarSenha('ab!')).toBe(true);
})

it('testando repetição de senha', () => {
    expect(!validarRepeticaoSenha('ab!', 'ab!')).toBe(true);
})

it('testando envio do formulário', () => {
    expect(!validarFormulario('ab!', 'ab!', '18', '25', '17')).toBe(false);
})

it('testando se é maior de 18 anos', () => {
    expect(!validarIdade(18)).toBe(true);
    expect(!validarIdade(25)).toBe(true);
})

it('testando se é menor de 18 anos', () => {
    expect(!validarIdade(17)).toBe(true);
})