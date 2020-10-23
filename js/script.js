

document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('.form')
  const first_name = document.getElementById('first_name')
  const last_name = document.getElementById('last_name')
  const e_mail = document.getElementById('E-mail')
  const agreement = document.getElementById('agreement')

  let first_name_check
  let last_name_check
  let e_mail_check


  function validation_name(str) {
    const RegExp = /^\p{Alpha}{2,20}|^\s/gui
    return RegExp.test(str)
  }

  function validation_email(str) {
    const RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return RegExp.test(str)
  }

  async function sendForm(){
    let formData = new FormData(form)
    let response = await fetch('sendmail.php',{
      method: "POST",
      body: formData
    })

    if (response.ok){
      let result = await response.json()
      console.log(result.message);
      alert('Данные успешно отправлены')
      form.reset()
    } else {
      alert("Ошибка")
    }
  }

  first_name.addEventListener("blur", (e) => {
    if (!validation_name(e.target.value) && e.target.value.length > 0){
      e.target.classList.add('error_shadow')
      first_name_check = false
    } else {
      e.target.classList.remove('error_shadow')
      first_name_check = true
    }
  })

  last_name.addEventListener("blur", (e) => {
    if (!validation_name(e.target.value) && e.target.value.length > 0){
      e.target.classList.add('error_shadow')
      last_name_check = false
    } else {
      e.target.classList.remove('error_shadow')
      last_name_check = true
    }
  })

  e_mail.addEventListener("blur", (e) => {
    if (!validation_email(e.target.value)){
      e.target.classList.add('error_shadow')
      e_mail_check = false
    } else {
      e.target.classList.remove('error_shadow')
      e_mail_check = true
    }
  })



  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (agreement.checked && first_name_check && last_name_check && e_mail_check){
      sendForm()
    } else {
      alert('Заполните все поля')
    }
  })
})