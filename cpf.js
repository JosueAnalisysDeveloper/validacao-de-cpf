function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    
    // Verifica se tem 11 dígitos ou se todos os números são iguais
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digito1 = (soma * 10) % 11;
    digito1 = digito1 === 10 ? 0 : digito1;

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digito2 = (soma * 10) % 11;
    digito2 = digito2 === 10 ? 0 : digito2;

    // Verifica se os dígitos calculados conferem com os do CPF
    return cpf.slice(-2) === `${digito1}${digito2}`;
}

// Teste do código
const cpfsParaTestar = [
    "092.520.163.42"
];

cpfsParaTestar.forEach(cpf => {
    console.log(`CPF: ${cpf} -> ${validarCPF(cpf) ? 'Válido' : 'Inválido'}`);
});
