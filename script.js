const students = [
  { name: 'João das Colves', firstNote: 8, secondNote: 9 },
  { name: 'Ana Maria Braga', firstNote: 4, secondNote: 5 },
  { name: 'Pedro Bial', firstNote: 7, secondNote: 10 },
  { name: 'Marco Antonio', firstNote: 6, secondNote: 8 },
  { name: 'Marcelo Marinho', firstNote: 3, secondNote: 10 },
  { name: 'Faustão', firstNote: 3, secondNote: 3 },
]


const calculateAverage = (firstNote, secondNote) => {
  let average = ((firstNote + secondNote) / 2).toFixed(2)
  return average
}

for (let student of students) {
  let averateStudent = calculateAverage(student.firstNote, student.secondNote)

  let approved = averateStudent >= 7

  if (approved) {
    alert(`A media do aluno(a) ${student.name} é: ${averateStudent}\nParabéns ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A media do aluno(a) ${student.name} é: ${averateStudent}\nNão foi dessa vez ${student.name}! Tente novamente!`)
  }
}