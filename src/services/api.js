const base_url_user = 'https://jsonplaceholder.typicode.com/users';
const base_url_post = 'https://jsonplaceholder.typicode.com/posts';

export const GET_USER = (id) => {
  return {
    endpoint: `${base_url_user}/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const GET_POST = (id) => {
  return {
    endpoint: `${base_url_post}/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};
