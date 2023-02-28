import {render, screen} from '@testing-library/vue';
import TheWelcome from '@/components/TheWelcome.vue';

describe('TheWelcome Test Suite', () => {
  it('should render the component with subbing', () => {
    render(TheWelcome, {
      stubs: {
        WelcomeItem: true,
        IconDocumentation: true,
        IconTooling: true,
        IconEcosystem: true,
        IconCommunity: true,
        IconSupport: true,
      },
    });
    screen.debug();
    expect(screen.getByTestId('welcome-documentation')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-tooling')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-ecosystem')).toBeInTheDocument();
  });

  it('should render the component without stubbing', () => {
    render(TheWelcome);
    screen.debug();
    expect(screen.getByTestId('welcome-documentation')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-tooling')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-ecosystem')).toBeInTheDocument();
  });
});
