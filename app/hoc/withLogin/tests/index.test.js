import React from 'react';
import { create } from 'react-test-renderer';
import Providers from 'tests/providers';
import withNavigation from '../index';

jest.mock('helpers/Authenticator');

const Component = () => <div>test</div>;
function renderDecorated(params, props) {
  const DecoratedComponent = withNavigation(params)(Component);
  return Providers(<DecoratedComponent {...props} />);
}
describe('withLogin', () => {
  it('should pass the user state as a prop', () => {
    const { root } = create(renderDecorated());
    expect(root.findByType(Component).props.user).toBeDefined();
  });
  it('should pass the onCredentialsLogin function as a prop', () => {
    const { root } = create(renderDecorated());
    expect(root.findByType(Component).props.onCredentialsLogin).toBeDefined();
  });
});
