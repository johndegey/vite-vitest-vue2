import {render, screen} from '@testing-library/vue';
import TheWelcome from '@/components/TheWelcome.vue';

describe('TheWelcome Test Suite', () => {
  it('should render the component with subbing, does work', () => {
    render(TheWelcome, {
      stubs: {
        WelcomeItem: true,
      },
    });
    expect(screen.getByTestId('welcome-documentation')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-tooling')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-ecosystem')).toBeInTheDocument();
    screen.debug();
  });

  it.skip(
    'should render the component without stubbing, does not work',
    () => {
      render(TheWelcome);
      // screen.debug();
      expect(screen.getByTestId('welcome-documentation')).toBeInTheDocument();
      expect(screen.getByTestId('welcome-tooling')).toBeInTheDocument();
      expect(screen.getByTestId('welcome-ecosystem')).toBeInTheDocument();
    },
  );

  it('should validate the attribute, works with value \'false\'', () => {
    render(TheWelcome, {
      stubs: {
        WelcomeItem: true,
      },
    });
    expect(screen.getByTestId('welcome-documentation')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-documentation'))
      .toHaveAttribute('show-attribute-in-stub', 'true');
    screen.debug();
  });

  it('should validate the attribute, does not work with value \'false\'',
    () => {
      render(TheWelcome, {
        stubs: {
          WelcomeItem: true,
        },
      });
      expect(screen.getByTestId('welcome-tooling')).toBeInTheDocument();
      expect(screen.getByTestId('welcome-tooling'))
        .toHaveAttribute('show-attribute-in-stub', 'false');
      screen.debug();
    },
  );
});
