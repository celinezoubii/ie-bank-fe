import { shallowMount } from 'vue-test-utils';
import Home from '../src/components/Home.vue';

describe('Home.vue', () => {
  it('renders the home page correctly', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.exists()).toBe(true);
  });

  // Add other tests for the Home component...
});
