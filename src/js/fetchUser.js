export const fetchUser = username => {
  return fetch(`https://api.github.com/users/${username}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
