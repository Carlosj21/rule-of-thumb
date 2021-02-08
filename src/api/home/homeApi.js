import { requestHelper } from '@/helpers/common/requestHelper';
import { formDataHelper } from '@/helpers/common/formDataHelper';

export default class TemplatesApi {
  static getCandidates() {
    return requestHelper(formDataHelper(
      './data/candidates.json', 'GET', null, null,
    ));
  }

  static getHeadlights() {
    return requestHelper(formDataHelper(
      './data/headlights.json', 'GET', null, null,
    ));
  }
}
