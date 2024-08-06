var dia, mes, nome;

nome = window.prompt("Escreva seu nome: ");
dia = parseFloat(prompt("Escreva o dia: "));
mes = parseFloat(prompt("Escreva o mês: "));

if (nome == "Celso Portiolli" || nome == "Celso" && dia == '11' && mes == '9') {
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro")
}
else if (nome == "Gabriel" && dia == '4' && mes == '7') {
    window.alert("Faça a prova com atenção")
}
else {
    window.alert("ALERTA, USUÁRIO ERRADO!!!")
}