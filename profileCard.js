const addProfileBtn = document.getElementById('addProfileBtn');
const profileContainer = document.getElementById('profileContainer');

function createProfileCard(name, role) {
  const card = document.createElement('div');
  card.classList.add('profile-card');

  const nameEl = document.createElement('h3');
  nameEl.textContent = name;

  const roleEl = document.createElement('p');
  roleEl.textContent = role;

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(nameEl);
  card.appendChild(roleEl);
  card.appendChild(removeBtn);

  return card;
}

addProfileBtn.addEventListener('click', () => {
  const name = prompt('Enter user name:');
  const role = prompt('Enter user role:');
  if (name && role) {
    const newCard = createProfileCard(name, role);
    profileContainer.appendChild(newCard);
  }
});
