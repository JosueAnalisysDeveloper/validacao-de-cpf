function validarCPF(cpf) {
   
    cpf = cpf.replace(/[^\d]+/g, '');
    
   
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digito1 = (soma * 10) % 11;
    digito1 = digito1 === 10 ? 0 : digito1;


    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digito2 = (soma * 10) % 11;
    digito2 = digito2 === 10 ? 0 : digito2;

   
    return cpf.slice(-2) === `${digito1}${digito2}`;
}


const cpfsParaTestar = [
    "092.520.163.42"
];

cpfsParaTestar.forEach(cpf => {
    console.log(`CPF: ${cpf} -> ${validarCPF(cpf) ? 'Válido' : 'Inválido'}`);
})