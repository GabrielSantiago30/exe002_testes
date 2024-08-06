var peso = 1;
var total = 0;
var qtd = 0;
var media;
var maior = -9999;
var menor = 9999;

while (peso != 0) 
{
    peso = parseFloat(prompt("Escreva o peso do gado: "));
    if (peso != 0) {

        if (peso > maior) {
            maior = peso;
        }
        if (peso < menor) {
            menor = peso;
        }

    }
    total = total + peso;
    qtd++

}

media = total / (qtd-1)

window.alert("A média é " + media + " kg.")
window.alert("O maior peso é " + maior + " kg.")
window.alert("O menor peso é " + menor + " kg.")





















