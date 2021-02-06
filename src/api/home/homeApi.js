import { requestHelper } from '@/helpers/common/requestHelper';
import { formDataHelper } from '@/helpers/common/formDataHelper';

export default class TemplatesApi {
  static getCandidates() {
    return requestHelper(formDataHelper(
      '', 'GET', null, null,
    ));
  }
}
