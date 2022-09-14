const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
  e.preventDefault()

  const datos = new FormData(formulario)
  const btnEnviar = document.querySelector('#btnEnviar')
  const btnCargando = document.querySelector('#btnCargando')
  const toast = document.querySelector('.toast')

  console.log('Campo email:', datos.get('inputEmail'))
  console.log('Campo password:', datos.get('inputPassword'))
  console.log('Campo condiciones:', datos.get('checkCondiciones'))

  btnEnviar.classList.add('d-none')
  btnCargando.classList.remove('d-none')

  window.setTimeout(() => {
    btnEnviar.classList.remove('d-none')
    btnCargando.classList.add('d-none')

    const eventoToast = new bootstrap.Toast(toast)
    eventoToast.show()
  }, 3000)

  formulario.reset()
})