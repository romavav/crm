import { deleteClientModal } from "./createDeleteModal.js";
import { editClientModal } from "./editClient.js";
import { svgSpinner } from "./svg.js";
import { createContactItemByType, formateDate, formateTime } from "./utils.js";

export const createClientItem = (data) => {

  const clientTr = document.createElement('tr');
  const clientIdTd = document.createElement('td');
  const clientId = document.createElement('span');
  const clientFullName = document.createElement('td');
  const clientSurname = document.createElement('span');
  const clientName = document.createElement('span');
  const clientLastName = document.createElement('span');
  const clientCreated = document.createElement('td');
  const createdDate = document.createElement('span');
  const createdTime = document.createElement('span');
  const clientChanged = document.createElement('td');
  const changedDate = document.createElement('span');
  const changedTime = document.createElement('span');
  const clientContacts = document.createElement('td');
  const clientActions = document.createElement('td');
  const clientEdit = document.createElement('button');
  const clientDelete = document.createElement('button');
  const deleteClient = deleteClientModal();
  const editClient = editClientModal(data);
  const editSpinner = document.createElement('span');
  const deleteSpinner = document.createElement('span');

  editSpinner.classList.add('actions__spinner');
  deleteSpinner.classList.add('actions__spinner');
  clientTr.classList.add('clients__item');
  clientTr.id = data.id;
  clientIdTd.classList.add('clients__id');
  clientFullName.classList.add('clients__full-name');
  clientSurname.classList.add('clients__surname');
  clientName.classList.add('clients__name');
  clientLastName.classList.add('clients__lastname');
  clientCreated.classList.add('clients__created');
  createdDate.classList.add('created__date');
  createdTime.classList.add('created__time');
  clientChanged.classList.add('clients__changed');
  changedDate.classList.add('changed__date');
  changedTime.classList.add('changed__time');
  clientContacts.classList.add('clients__contacts');
  clientActions.classList.add('clients__actions');
  clientEdit.classList.add('clients__edit', 'btn-reset');
  clientDelete.classList.add('clients__delete', 'btn-reset');

  for (const contact of data.contacts) {
    createContactItemByType(contact.type, contact.value, clientContacts)
  }

  const deleteById = () => {

    import('./clientsApi.js').then(({ deleteClientItem }) => {

      deleteClient.deleteModalDelete.addEventListener('click', () => {
        try {
          deleteClient.deleteSpinner.style.display = "block";
          setTimeout(() => {
            deleteClientItem(data.id);
            document.getElementById(data.id).remove();
            deleteClient.deleteModal.remove();
          }, 1500);
        } catch (error) {
          console.log(error)
        } finally {
          setTimeout(() => deleteClient.deleteSpinner.style.display = "none", 1500);
        }
      });
    });
  }

  clientDelete.addEventListener('click', () => {
    deleteSpinner.style.display = 'block';
    clientDelete.classList.add('action-white');

    setTimeout(() => {
      deleteById();
      document.body.append(deleteClient.deleteModal);

      deleteSpinner.style.display = 'none';
      clientDelete.classList.remove('action-white');
    }, 1500);
  });

  clientEdit.addEventListener('click', () => {
    editSpinner.style.display = 'block';
    clientEdit.classList.add('action-white');

    setTimeout(() => {
      document.body.append(editClient.editModal);

      editSpinner.style.display = 'none';
      clientEdit.classList.remove('action-white');
    }, 1500);
  });

  deleteSpinner.innerHTML = svgSpinner;
  editSpinner.innerHTML = svgSpinner;
  if (data && data.id) {
    clientId.textContent = 'ID: ' + data.id.substr(0, 6);
  } else {
    clientId.textContent = 'ID: N/A';
  }
  clientSurname.textContent = data.surname;
  clientName.textContent = data.name;
  clientLastName.textContent = data.lastName;
  clientEdit.textContent = 'Изменить';
  clientDelete.textContent = 'Удалить';
  createdDate.textContent = formateDate(data.createdAt);
  createdTime.textContent = formateTime(data.createdAt);
  changedDate.textContent = formateDate(data.updatedAt);
  changedTime.textContent = formateTime(data.updatedAt);

  clientIdTd.append(clientId);
  clientFullName.append(clientSurname, clientName, clientLastName);
  clientCreated.append(createdDate, createdTime);
  clientChanged.append(changedDate, changedTime);
  clientDelete.append(deleteSpinner);
  clientEdit.append(editSpinner);
  clientActions.append(clientEdit, clientDelete);
  clientTr.append(
    clientIdTd,
    clientFullName,
    clientCreated,
    clientChanged,
    clientContacts,
    clientActions
  );

  return clientTr;
}
