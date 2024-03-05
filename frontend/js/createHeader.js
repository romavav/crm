export const createClientsHeader = () => {

  let header = document.createElement('header')
  let logo = document.createElement('a')
  let logoImg = document.createElement('img')
  let form = document.createElement('form')
  let input = document.createElement('input')
  let container = document.createElement('div')
  let wrap = document.createElement('div')
  let inner = document.createElement('div')
  let findList = document.createElement('ul')


  findList.classList.add('find-list', 'hide')
  header.classList.add('header')
  container.classList.add('container', 'header-container')
  logo.classList.add('logo', 'header-logo')
  wrap.classList.add('header-container', 'flex')
  logoImg.classList.add('logo-img')
  logoImg.src = 'img/Logo.png'
  logoImg.alt = 'Logo'
  form.classList.add('header__form', 'form')
  input.classList.add('header__input', 'input')
  wrap.classList.add('header__wrapper')
  input.placeholder = 'Введите запрос'
  inner.classList.add('header__inner')

  inner.append(input, findList)
  header.append(container)
  logo.append(logoImg)
  form.append(inner)
  container.append(logo, form)

  return header
}
