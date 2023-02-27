import {render, screen} from '@testing-library/vue';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld Test Suite', () => {
  it('should render the component', () => {
    render(HelloWorld, {
      props: {
        msg: 'Hello Vitest',
      },
    });
    expect(screen.getByText('Hello Vitest')).toBeInTheDocument();
  });

  it.todo('do not forget this one', () => {});

  it.each`
    text
    ${'Hello You'}
    ${'Hello Me'}
  `('should contain $text', ({text}) => {
    render(HelloWorld, {
      props: {
        msg: text,
      },
    });
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
