const form = document.getElementById('guest-form');
const guestNameInput = document.getElementById('guest-name');
const guestCategorySelect = document.getElementById('guest-category');
const guestList = document.getElementById('guest-list');

const MAX_GUESTS = 10;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = guestNameInput.value.trim();
  const category = guestCategorySelect.value;

  if (!name) {
    alert('Please enter a guest name.');
    return;
  }

  if (guestList.children.length >= MAX_GUESTS) {
    alert('Guest list is full! Maximum 10 guests allowed.');
    return;
  }

  addGuest(name, category);
  form.reset();
});

function addGuest(name, category) {
  const li = document.createElement('li');
  li.classList.add(category.toLowerCase());

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('name');
  nameSpan.textContent = name;

  let attending = false;

  const rsvpBtn = document.createElement('button');
  rsvpBtn.classList.add('rsvp');
  rsvpBtn.textContent = 'Not Attending';

  rsvpBtn.addEventListener('click', () => {
    attending = !attending;
    rsvpBtn.textContent = attending ? 'Attending' : 'Not Attending';
    rsvpBtn.style.backgroundColor = attending ? '#4caf50' : '#777';
  });

  const categorySpan = document.createElement('span');
  categorySpan.classList.add('category');
  categorySpan.textContent = category;

  const timestampSpan = document.createElement('span');
  timestampSpan.classList.add('timestamp');
  timestampSpan.textContent = new Date().toLocaleTimeString();

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent = 'Remove';

  deleteBtn.addEventListener('click', () => {
    guestList.removeChild(li);
  });

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'Edit';

  editBtn.addEventListener('click', () => {
    const newName = prompt('Edit guest name:', nameSpan.textContent);
    if (newName !== null && newName.trim() !== '') {
      nameSpan.textContent = newName.trim();
    }
  });

  li.appendChild(nameSpan);
  li.appendChild(categorySpan);
  li.appendChild(timestampSpan);
  li.appendChild(rsvpBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  guestList.appendChild(li);
}
