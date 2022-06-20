export const buildProfileMarkup = ({
  avatar_url,
  name,
  bio,
  followers,
  following,
  public_repos,
}) => {
  return `
  <div class="profile">
  <img
    src="${avatar_url}"
    width="160"
    height="160"
    alt="User avatar"
    class="avatar"
  />
  <div class="meta">
    <h2 class="name">${name ?? 'No username'}</h2>
    <p class="bio">${bio ?? 'No bio'}</p>
    <ul class="stats">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
          <path
            fill-rule="evenodd"
            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
          />
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
        Followers: ${followers}
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-person-heart"
          viewBox="0 0 16 16"
        >
          <path
            d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"
          />
        </svg>
        Following: ${following}
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-folder-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
          />
        </svg>
        Repos: ${public_repos}
      </li>
    </ul>
  </div>
</div>
  `;
};
