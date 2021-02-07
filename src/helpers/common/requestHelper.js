import axios from 'axios';

export const requestHelper = (formData) => {
  const method = formData.get('method');
  const requestData = formData.get('data') || {};
  const url = formData.get('url');
  let request;
  switch (method.toLowerCase()) {
    case 'get':
      request = axios[method.toLowerCase()](url);
      break;
    default:
      request = axios[method.toLowerCase()](url, requestData);
      break;
  }
  return request;
};

export default {};
