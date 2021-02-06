import axios from 'axios';

export const requestHelper = (formData) => {
  const method = formData.get('method');
  const requestData = formData.get('data') || {};
  const url = formData.get('url');
  let request = null;
  switch (method) {
    case 'get':
      request = axios[method.toLowerCase()](url);
      break;
    case 'post':
      request = axios[method.toLowerCase()](url, requestData);
      break;
    default:
      break;
  }
  return request;
};

export default {};
