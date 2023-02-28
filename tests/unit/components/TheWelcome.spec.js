import {render, screen} from '@testing-library/vue';
import TheWelcome from '@/components/TheWelcome.vue';

describe('TheWelcome Test Suite', () => {
  it('should render the component', () => {
    render(TheWelcome);
    screen.debug();
    expect(screen.getByTestId('welcome-documentation')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-tooling')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-ecosystem')).toBeInTheDocument();
  });
});
