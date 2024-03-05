import { svgSpinner } from "./svg.js";

export const deleteClientModal = () => {

    let deleteModalContent = document.createElement('div');
    let modalClose = document.createElement('button');
    let deleteModalTitle = document.createElement('h2');
    let deleteModalText = document.createElement('p');
    let deleteModal = document.createElement('div');
    let deleteModalDelete = document.createElement('button');
    let deleteModalBack = document.createElement('button');
    let deleteSpinner = document.createElement('span');

    deleteSpinner.classList.add('modal__spinner');
    deleteModal.classList.add('delete-modal', 'site-modal', 'modal-active');
    deleteModalContent.classList.add('delete-modal__content', 'site-modal__content', 'modal-active');
    deleteModalText.classList.add('delete-modal__text');
    deleteModalTitle.classList.add('delete-modal__title', 'modal__title');
    deleteModalDelete.classList.add('delete-modal__delete', 'btn-reset', 'site-btn');
    deleteModalBack.classList.add('delete-modal__back', 'btn-reset');
    modalClose.classList.add('modal__close', 'btn-reset');

    deleteSpinner.innerHTML = svgSpinner;
    deleteModalTitle.textContent = 'Удалить клиента';
    deleteModalText.textContent = 'Вы действительно хотите удалить данного клиента?';
    deleteModalDelete.textContent = 'Удалить';
    deleteModalBack.textContent = 'Отмена';

    deleteModalDelete.append(deleteSpinner);
    deleteModalContent.append(
        modalClose,
        deleteModalTitle,
        deleteModalText,
        deleteModalDelete,
        deleteModalBack
    )
    deleteModal.append(deleteModalContent);

    modalClose.addEventListener('click', () => deleteModal.remove());
    deleteModalBack.addEventListener('click', () => deleteModal.remove());

    window.addEventListener('click', (e) => {
        if (e.target === deleteModal) {
            deleteModal.remove();
        }
    });

    return {
        deleteModal,
        deleteModalContent,
        deleteModalDelete,
        deleteSpinner
    }
}