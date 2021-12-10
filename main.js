//Calculo de salário

function novoSal(salAntig =280, salNovoColab) {

    if(salAntig <= 280){
        salNovoColab = salAntig * 0.2 + salAntig

        console.log(`O novo salário é ${salNovoColab}`)

    } else if (salAntig > 280 || salAntig <= 700) {
        salNovoColab = salAntig * 0.15 + salAntig

        console.log(`O novo salário é ${salNovoColab}`)

    } else if (salAntig >700 || salAntig <= 1500){
        salNovoColab = salAntig * 0.1 + salAntig

        console.log(`O novo salário é ${salNovoColab}`)

    } else {
        salNovoColab = salAntig * 0.05 + salAntig

        console.log(`O novo salário é ${salNovoColab}`)
    };
}
console.log(novoSal())

console.clear();

function maiorNumero(num1 = 2, num2 = 3, num3 = 6) {
    if (num1 > num2 && num1 > num3){
        console.log(`O numero ${num1} é o maior`);
    } else if (num2 > num1 && num2 > num3){
        console.log(`O numero ${num2} é o maior`);
    } else{
        console.log(`O numero ${num3} é o maior`);
    }   
}
console.log(maiorNumero()) 

// Atividade 

// Estrutura condicional simples
// Igual duplo
const a = 11;
if (a == 10)
{
    console.log('os valores são iguais');
}
    else
    {
        console.log("Os valores são diferentes");
    }

console.clear();

if (a == 10)
{
    console.log('os valores são iguais');
}
    else if (a > 10)
    {
        console.log("A é maior que 10");
    }
        else
        {
            console.log("A variável a não é igual a 10 e não é maior que 10");
        }

//SWITCH
console.clear();

const nota = 6;0

switch (nota)
    {
        case 4:
            console.log("Reprovado");
            break;
        case 6:
            console.log("Recuperação");
            break;
        default:
            console.log("Nota superior a média, parabens!");
            break;
    }
