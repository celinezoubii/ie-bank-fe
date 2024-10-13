import { shallowMount } from 'vue-test-utils';
import AppAccounts from '../src/components/AppAccounts.vue';

describe('AppAccounts.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(AppAccounts);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct message when accounts are empty', () => {
    const wrapper = shallowMount(AppAccounts, {
      propsData: {
        accounts: []
      }
    });
    expect(wrapper.text()).toContain('No accounts available');
  });

  // Additional tests for AppAccounts.vue...
});
