import { addClientModal } from "./addClient.js";
import { createPreloader } from "./preloader.js";
import { svgAddUser } from "./svg.js";

export const createClientsSection = () => {

    let main = document.createElement('main')
    let section = document.createElement('section')
    let container = document.createElement('div')
    let title = document.createElement('h1')
    let tableWrapper = document.createElement('div')
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')
    let thead = document.createElement('thead')
    let theadTR = document.createElement('tr')
    let idTH = document.createElement('th')
    let fioTH = document.createElement('th')
    let dataTH = document.createElement('th')
    let newDataTH = document.createElement('th')
    let contactsTH = document.createElement('th')
    let actionTH = document.createElement('th')
    let sortingSpan = document.createElement('span')
    let button = document.createElement('button')
    let addSvg = document.createElement('span')
    let changeBtn = document.createElement('span')
    let createBtn = document.createElement('span')

    let sortItems = [idTH, fioTH, dataTH, newDataTH]

    for (let item of sortItems) {
        item.addEventListener('click', () => {
            if (item.classList.contains('sort-down')) {
                item.classList.remove('sort-down');
                item.classList.add('sort-up');
            } else {
                item.classList.add('sort-down');
                item.classList.remove('sort-up');
            }
        });
    }

    dataTH.addEventListener('click', () => {
        if (dataTH.classList.contains('sort-down')) {
            createBtn.classList.add('sort-up');
        } else {
            createBtn.classList.remove('sort-up');
        }
    });

    newDataTH.addEventListener('click', () => {
        if (newDataTH.classList.contains('sort-down')) {
            changeBtn.classList.add('sort-up');
        } else {
            changeBtn.classList.remove('sort-up');
        }
    });


    idTH.setAttribute('data-type', 'id')
    fioTH.setAttribute('data-type', 'text')
    dataTH.setAttribute('data-type', 'create')
    newDataTH.setAttribute('data-type', 'update')

    main.classList.add('main')
    section.classList.add('clients')
    title.classList.add('clients__heading')
    container.classList.add('container', 'clients__container')
    tableWrapper.classList.add('clients__wrapper')
    table.classList.add('clients__table')
    tbody.classList.add('clients__tbody')
    thead.classList.add('clients__display', 'display-info')
    idTH.classList.add('display-info__item', 'display-info__item--id', 'sort-up')
    fioTH.classList.add('display-info__item', 'display-info__item--name', 'sort-down')
    dataTH.classList.add('display-info__item', 'display-info__item--create', 'sort-down')
    newDataTH.classList.add('display-info__item', 'display-info__item--change', 'sort-down')
    contactsTH.classList.add('display-info__item', 'display-info__item--contacts')
    actionTH.classList.add('display-info__item', 'display-info__item--actions')
    sortingSpan.classList.add('display-info__sorting')
    button.classList.add('clients__btn', 'btn-reset')
    addSvg.classList.add('clients__svg')
    changeBtn.classList.add('change__span')
    createBtn.classList.add('create__span')

    title.textContent = 'Клиенты'
    idTH.textContent = 'id'
    fioTH.textContent = 'Фамилия Имя Отчество'
    dataTH.textContent = 'Дата и время'
    newDataTH.textContent = 'Последние'
    contactsTH.textContent = 'Контакты'
    actionTH.textContent = 'Действия'
    sortingSpan.textContent = 'А-Я'
    button.textContent = 'Добавить клиента'
    addSvg.innerHTML = svgAddUser;

    button.addEventListener('click', () => {
        document.body.append(addClientModal())
    })

    main.append(section)
    section.append(container)
    fioTH.append(sortingSpan)
    dataTH.append(createBtn)
    newDataTH.append(changeBtn)
    theadTR.append(
        idTH,
        fioTH,
        dataTH,
        newDataTH,
        contactsTH,
        actionTH
    )
    thead.append(theadTR)
    tableWrapper.append(table, createPreloader())
    table.append(thead, tbody)
    button.append(addSvg)
    container.append(title, tableWrapper, button)

    return {
        main,
        table,
        tbody
    }
}
