/*Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo: */
/*O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E. */

function notaValida (){
    resultado = (nota1 + nota2)/2
    
    if (resultado >= 0 && resultado <= 4){
        conseito = 'E'
        console.log(`Suas notas foram:\n1ª Nota = ${nota1}\n2ª Nota = ${nota2}\nMédia: ${resultado}\nConceito: '${conseito}'\nVocê está reprovado!`)
    }
    else if (resultado > 4 && resultado <= 6){
        conseito = 'D'
        console.log(`Suas notas foram:\n1ª Nota = ${nota1}\n2ª Nota = ${nota2}\nMédia: ${resultado}\nConceito: '${conseito}'\nVocê está reprovado!`)
    }
    else if (resultado > 6 && resultado <= 7.5){
        conseito = 'C'
        console.log(`Suas notas foram:\n1ª Nota = ${nota1}\n2ª Nota = ${nota2}\nMédia: ${resultado}\nConceito: '${conseito}'\nVocê está aprovado!`)
    }
    else if (resultado > 7.5 && resultado <= 9){
        conseito = 'B'
        console.log(`Suas notas foram:\n1ª Nota = ${nota1}\n2ª Nota = ${nota2}\nMédia: ${resultado}\nConceito: '${conseito}'\nVocê está aprovado!`)
    }
    else if (resultado > 9 && resultado <= 10){
        conseito = 'A'
        console.log(`Suas notas foram:\n1ª Nota = ${nota1}\n2ª Nota = ${nota2}\nMédia: ${resultado}\nConceito: '${conseito}'\nVocê está aprovado!`)
    }
    else{
        console.log('Dados inválidos!')
    }
}

notaValida(nota1 = 10, nota2 = 8.9)