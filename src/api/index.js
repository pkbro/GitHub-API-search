const API_URL = 'https://api.github.com'
const OPTS = {
  headers: {
    'Authorization': 'token 57b16fb40b47c6e8615089abd4b66c93d8812b92',
  }
}

export const fetchUser = (username) => {
  return fetch(`${API_URL}/users/${username}`, OPTS)
    .then((res) => res.json())
    .catch((e) => console.error(e))
}

export const fetchFollowers = (username) => {
  return fetch(`${API_URL}/users/${username}/followers`, OPTS)
    .then((res) => res.json())
    .catch((e) => console.error(e))
}

export const fetchFollowing = (username) => {
  return fetch(`${API_URL}/users/${username}/following`, OPTS)
    .then((res) => res.json())
    .catch((e) => console.error(e))
}

export const fetchRepos = (username) => {
  return fetch(`${API_URL}/users/${username}/repos`, OPTS)
    .then((res) => res.json())
    .catch((e) => console.error(e))
}
