// // --------------- PRÁTICA GUIADA ---------------
// const bimestre1 = [10,4,3,8]
// const bimestre2 = [10,9,8,7]
// const bimestre3 = [5,6,7,8]
// const bimestre4 = [10,8,10,8]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// console.table(notasDoAno)
// // for(let i = 0; i < notasDoAno.length; i++){
// //   //console.log(i)

// //   let soma = 0  
// //   for(let j = 0; j < notasDoAno[i].length; j++){
// //     soma = soma + notasDoAno[i][j]
// //   }
// //   console.log("soma do bimestre" ,soma)
// //   let mediaBimestre = soma / notasDoAno[i].length
// //   console.log(`A soma das notas do bimestre ${i+1} é: \nA média do bimeste é ${i +1} é ${mediaBimestre} `) 
  
// // }

// for(let indiceBimestre in notasDoAno){
//    let soma = 0  
//   for(let nota of notasDoAno[indiceBimestre]){
//   soma = soma + nota
//   }
//    // console.log("soma do bimestre" ,soma)
//   let mediaBimestre = soma / notasDoAno[indiceBimestre].length
//   console.log(`A soma das notas do bimestre ${Number(indiceBimestre)+1} é: ${soma} \nA média do bimeste é ${Number(indiceBimestre) +1} é ${mediaBimestre} `)

// }













// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
for(let i = 0; i < filmes.length; i++){
  console.log(`\nTitulo do filme: ${filmes[i].titulo} , de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor}`);
  for(let j = 0; j < filmes[i].elenco.length; j++){
    console.log(`Ator/Atriz : ${filmes[i].elenco[j]}`)
  }
}
  for(let i in filmes){
    console.log(`\nTitulo do filme: ${filmes[i].titulo} , de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor}`);
    for( let j in filmes[i].elenco){
      console.log(`Ator/Atriz : ${filmes[i].elenco[j]}`)
    }
  }

  for(let i in filmes){
    console.log(`\nTitulo do filme: ${filmes[i].titulo} , de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor}`);
    for( let ator of filmes[i].elenco){
      console.log(`Ator/Atriz : ${ator}`)
    }
  }


