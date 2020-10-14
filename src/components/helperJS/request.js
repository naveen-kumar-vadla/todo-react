const fetchPostMethod = (url, postData) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(postData),
  };
  return fetch(url, requestOptions).then(x => x.json());
};

const fetchGetMethod = url => fetch(url).then(x => x.json());

export { fetchPostMethod, fetchGetMethod };
