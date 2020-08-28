const BASE_URL = 'https://animesort-backend.herokuapp.com/api';

export const login = async (formData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: formData.email,
      username: formData.username,
      password: formData.password,
    }),
  });
  const json = await response.json();
  if (response.ok) {
    localStorage.setItem('token', json.token);
    return json.token;
  } else {
    throw json;
  }
};

export const getListData = async (username) => {
  const response = await fetch(`${BASE_URL}/list/${username}`);

  const json = await response.json();
  if (response.ok) {
    console.log(json);
    return json;
  } else {
    throw json;
  }
};

export const addToList = async (title, image, id) => {
  const response = await fetch(`${BASE_URL}/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('token'),
    },
    body: JSON.stringify({ title, image, animeid: id }),
  });

  if (!response.ok) {
    const json = await response.json();
    throw json;
  }
};
