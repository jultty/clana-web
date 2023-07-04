let medicoes = JSON.parse(localStorage.getItem('medicoes')) || [];
const formulario = document.querySelector('form')
 
formulario.addEventListener('submit', e => {
  e.preventDefault()

  const medicao = {}
  const campos = document.querySelectorAll('input, select')

  Array.from(campos).forEach(campo => {
    if (campo.type === 'checkbox') {
      medicao[campo.name] = campo.checked
    } else {
      medicao[campo.name] = campo.value
    }
  })

  medicoes.push(medicao)
  localStorage.setItem('medicoes', JSON.stringify(medicoes))
  console.log(medicoes)
})

