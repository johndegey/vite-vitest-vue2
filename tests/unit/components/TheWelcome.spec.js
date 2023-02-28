import {render, screen} from '@testing-library/vue';
import TheWelcome from '@/components/TheWelcome.vue';

describe('TheWelcome Test Suite', () => {
  it('should render the component with subbing and no warnings', () => {
    render(TheWelcome, {
      stubs: {
        WelcomeItem: true,
        DocumentationIcon: true,
        ToolingIcon: true,
        EcosystemIcon: true,
        CommunityIcon: true,
        SupportIcon: true,
      },
    });
    // screen.debug();
    expect(screen.getByTestId('welcome-documentation')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-tooling')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-ecosystem')).toBeInTheDocument();
  });

  it('should render the component with unknown components warnings', () => {
    render(TheWelcome);
    // screen.debug();
    expect(screen.getByTestId('welcome-documentation')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-tooling')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-ecosystem')).toBeInTheDocument();
  });
});
