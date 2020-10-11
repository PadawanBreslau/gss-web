/* eslint-disable no-console */
import React from 'react';
import { create, act } from 'react-test-renderer';
import Providers from 'tests/providers';
import Layout from 'components/Layout/Layout';
import Authenticator from 'helpers/Authenticator';
import withNavigation from '../index';

jest.mock('helpers/Authenticator');

const Component = () => <div>test</div>;

function renderDecorated(params, props) {
  const DecoratedComponent = withNavigation(params)(Component);
  return Providers(<DecoratedComponent {...props} />);
}

describe('withNavigation', () => {
  let component;
  const originalError = console.error.bind(console.error);

  beforeEach(() => {
    component = create(renderDecorated());
  });

  // React 16.8.6 doesn't support async act and logs the following error
  beforeAll(() => {
    console.error = (msg) =>
      !msg.toString().includes('inside a test was not wrapped in act') && originalError(msg);
  });

  afterAll(() => {
    console.error = originalError;
  });

  it('should render the component wrapped inside the layout', () => {
    expect(component.root.findAllByType(Layout).length).toBe(1);
    expect(component.root.findByType(Component)).toBeTruthy();
  });
  it('should have the logout props', () => {
    Authenticator.isAuthenticated.mockImplementation(() => true);
    act(() => component.root.findByType(Layout).props.onLogout());
    expect(Authenticator.logout).toHaveBeenLastCalledWith('/auth/sign_out');
  });
  it('should pass the user state as a prop', () => {
    expect(component.root.findByType(Component).props.user).toBeDefined();
  });
  it('should pass the onLogout function as a prop', () => {
    expect(component.root.findByType(Component).props.onLogout).toBeDefined();
  });
});
