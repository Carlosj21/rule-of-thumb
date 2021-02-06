import { shallowMount } from '@vue/test-utils';
import VotingCard from '@/components/common/VotingCard.vue';

describe('VotingCard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(VotingCard, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
