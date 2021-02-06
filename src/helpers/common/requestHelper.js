import axios from 'axios';

export const requestHelper = (formData) => axios[formData.get('method')
  .toLowerCase()](formData.get('url'), formData.get('data'));

export default {};
