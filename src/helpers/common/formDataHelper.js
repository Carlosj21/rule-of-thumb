export const formDataHelper = (
  (url, method, data, requestHeaders = { 'Content-Type': 'Application/json' }, actionRequest) => {
    const formData = new FormData();
    formData.append('url', url);
    formData.append('method', method);
    formData.append('headers', JSON.stringify(requestHeaders));
    formData.append('data', data || null);
    formData.append('actionRequest', actionRequest || null);
    return formData;
  }
);

export default {};
