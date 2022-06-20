import 'modern-normalize';
import { fetchUser } from './fetchUser';
import { buildProfileMarkup } from './buildProfileMarkup';
import { buildErrorScreen } from './buildErrorScreen';

const form = document.querySelector('.searchbox');
const profileContainer = document.querySelector('.profile-container');

form.addEventListener('submit', event => {
  event.preventDefault();

  fetchUser(form.elements.username.value)
    .then(user => {
      profileContainer.innerHTML = buildProfileMarkup(user);
    })
    .catch(() => {
      profileContainer.innerHTML = buildErrorScreen();
    });

  form.reset();
});
