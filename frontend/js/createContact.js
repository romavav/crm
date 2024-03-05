import { svgDelete } from "./svg.js";

export let createContactItem = () => {

    let contact = document.createElement('div');
    let contactType = document.createElement('div');
    let contactName = document.createElement('button');
    let contactList = document.createElement('ul');
    let contactPhone = document.createElement('li');
    let contactVk = document.createElement('li');
    let contactFb = document.createElement('li');
    let contactEmail = document.createElement('li');
    let contactOther = document.createElement('li');
    let contactInput = document.createElement('input');
    let contactDelete = document.createElement('button');
    let contactDeleteTooltip = document.createElement('span');

    contact.classList.add('contact');
    contactType.classList.add('contact__type');
    contactName.classList.add('contact__name');
    contactList.classList.add('contact__list', 'list-reset');
    contactPhone.classList.add('contact__item');
    contactVk.classList.add('contact__item');
    contactFb.classList.add('contact__item');
    contactEmail.classList.add('contact__item');
    contactOther.classList.add('contact__item');
    contactInput.classList.add('contact__input');
    contactDelete.classList.add('contact__delete', 'btn-reset');
    contactDeleteTooltip.classList.add('contact-tooltip', 'site-tooltip');

    contactName.textContent = 'Телефон';
    contactDeleteTooltip.textContent = 'Удалить контакт';
    contactPhone.textContent = 'Телефон';
    contactVk.textContent = 'VK';
    contactEmail.textContent = 'Email';
    contactFb.textContent = 'Facebook';
    contactOther.textContent = 'Другое';
    contactInput.placeholder = 'Введите данные контакта';
    contactInput.type = 'text';
    contactDelete.innerHTML = svgDelete;

    contactDelete.addEventListener('click', (e) => {
        e.preventDefault();
        contact.remove();
        document.querySelector('.modal__btn-contact').classList.add('modal__btn-contact--active');
    })

    contactName.addEventListener('click', (e) => {
        e.preventDefault();
        contactList.classList.toggle('contact__list--active');
        contactName.classList.toggle('contact__list--active');
    })

    contactType.addEventListener('mouseleave', () => {
        contactList.classList.remove('contact__list--active');
        contactName.classList.remove('contact__list--active');
    })

    let setType = (type) => {
        type.addEventListener('click', () => {
            contactName.textContent = type.textContent;
            contactList.classList.remove('contact__list--active');
            contactName.classList.remove('contact__list--active');
        });
    }

    let typesArray = [contactEmail, contactFb, contactVk, contactPhone, contactOther];
    for (const type of typesArray) {
        setType(type);
    }

    contactDelete.append(contactDeleteTooltip);
    contact.append(contactType, contactInput, contactDelete);
    contactType.append(contactName, contactList);
    contactList.append(contactPhone, contactEmail, contactVk, contactFb, contactOther);

    return {
        contact,
        contactName,
        contactInput,
        contactDelete
    }
}

