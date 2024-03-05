import { createContactItem } from "./createContact.js";
import { svgContactDefault, svgContactHover, svgSpinner } from "./svg.js";

export const createClientsForm = () => {

    const modalTitle = document.createElement('h2');
    const modalClose = document.createElement('button');
    const form = document.createElement('form');
    const inputSurname = document.createElement('input');
    const labelSurname = document.createElement('label');
    const inputName = document.createElement('input');
    const labelName = document.createElement('label');
    const inputLastname = document.createElement('input');
    const labelLastName = document.createElement('label');
    const requiredName = document.createElement('span');
    const requiredSurname = document.createElement('span');
    const addContactBtn = document.createElement('button');
    const contactBtnSvgDefault = document.createElement('span');
    const contactBtnSvgHover = document.createElement('span');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const contactsBlock = document.createElement('div');
    const formFloatingSurname = document.createElement('div');
    const formFloatingName = document.createElement('div');
    const formFloatingLastName = document.createElement('div');
    const saveSpinner = document.createElement('span');
    const errorBlock = document.createElement('p');
    const unacceptableLetter = document.createElement('span');
    const writeSurname = document.createElement('span');
    const writeName = document.createElement('span');
    const writeLastName = document.createElement('span');
    const requiredValue = document.createElement('span');
    const requiredContacts = document.createElement('span');

    saveSpinner.classList.add('modal__spinner');
    modalTitle.classList.add('modal__title');
    modalClose.classList.add('modal__close', 'btn-reset');
    form.classList.add('modal__form');
    formFloatingSurname.classList.add('form-floating');
    formFloatingName.classList.add('form-floating');
    formFloatingLastName.classList.add('form-floating');
    inputSurname.classList.add('modal__input');
    inputName.classList.add('modal__input');
    inputLastname.classList.add('modal__input');
    labelSurname.classList.add('modal__label');
    labelName.classList.add('modal__label');
    labelLastName.classList.add('modal__label');
    requiredSurname.classList.add('modal__label');
    requiredName.classList.add('modal__label');
    addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active');
    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
    cancelBtn.classList.add('modal__btn-back', 'btn-reset');
    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active');
    contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover');
    contactsBlock.classList.add('modal__contact');

    labelSurname.for = 'floatingSurname';
    labelName.for = 'floatingName';
    labelLastName.for = 'floatingLastName';
    inputSurname.id = 'floatingSurname';
    inputName.id = 'floatingName';
    inputLastname.id = 'floatingLastName';
    inputSurname.type = 'text';
    inputName.type = 'text';
    inputLastname.type = 'text';
    inputSurname.placeholder = 'Фамилия';
    inputName.placeholder = 'Имя';
    inputLastname.placeholder = 'Отчество';

    errorBlock.classList.add('modal__error');
    unacceptableLetter.id = 'unacceptableLetter';
    writeSurname.id = 'writeSurname';
    writeName.id = 'writeName';
    writeLastName.id = 'writeLastName';
    requiredValue.id = 'requiredValue';
    requiredContacts.id = 'requiredContacts';

    saveSpinner.innerHTML = svgSpinner;
    modalTitle.textContent = 'Новый клиент';
    labelSurname.textContent = 'Фамилия';
    labelName.textContent = 'Имя';
    labelLastName.textContent = 'Отчество';
    addContactBtn.textContent = 'Добавить контакт';
    saveBtn.textContent = 'Сохранить';
    cancelBtn.textContent = 'Отмена';
    requiredSurname.textContent = '*';
    requiredName.textContent = '*';
    contactBtnSvgDefault.innerHTML = svgContactDefault;
    contactBtnSvgHover.innerHTML = svgContactHover;

    saveBtn.append(saveSpinner);
    labelSurname.append(requiredSurname);
    labelName.append(requiredName);
    formFloatingSurname.append(inputSurname, labelSurname);
    formFloatingName.append(inputName, labelName);
    formFloatingLastName.append(inputLastname, labelLastName);
    contactsBlock.append(addContactBtn);
    errorBlock.append(writeSurname, writeName, writeLastName, requiredContacts, requiredValue, unacceptableLetter);
    form.append(
        formFloatingSurname,
        formFloatingName,
        formFloatingLastName,
        contactsBlock,
        errorBlock,
        saveBtn,
        cancelBtn
    );
    addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover);

    addContactBtn.addEventListener('click', (e) => {

        e.preventDefault();

        const contactsItems = document.getElementsByClassName('contact');

            if (contactsItems.length < 9) {
                const contactItem = createContactItem();
                contactsBlock.prepend(contactItem.contact);

            contactsBlock.style.backgroundColor = 'var(--color-gray-athens)';

                if (contactsItems.length >= 5) {
                    document.querySelector('.site-modal__content').style.top = '70%';
                } else {
                    document.querySelector('.site-modal__content').style.top = '50%';
                }
            } else {
                const contactItem = createContactItem();
                contactsBlock.prepend(contactItem.contact);
                addContactBtn.classList.remove('modal__btn-contact--active');
            }
        });

    addContactBtn.addEventListener('mousemove', () => {
        contactBtnSvgDefault.classList.remove('btn-contact__svg--active');
        contactBtnSvgHover.classList.add('btn-contact__svg--active');
    });

    addContactBtn.addEventListener('mouseleave', () => {
        contactBtnSvgDefault.classList.add('btn-contact__svg--active');
        contactBtnSvgHover.classList.remove('btn-contact__svg--active');
    });

    return {
        form,
        modalClose,
        modalTitle,
        cancelBtn,
        inputSurname,
        inputName,
        inputLastname,
        labelName,
        labelSurname,
        labelLastName,
        contactsBlock,
        addContactBtn
    };
}