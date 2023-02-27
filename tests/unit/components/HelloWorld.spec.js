import {mount} from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld Test Suite', () => {
  it('should render the component', () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: 'Hello Vitest',
      },
    });
    expect(wrapper.text()).toContain('Hello Vitest');
  });

  it.todo('do not forget this one', () => {});

  it.each`
    text
    ${'Hello You'}
    ${'Hello Me'}
  `('should contain $text', ({text}) => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: text,
      },
    });
    expect(wrapper.text()).toContain(text);
  });
});
