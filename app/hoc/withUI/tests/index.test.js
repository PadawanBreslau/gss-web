import React from 'react';
import { create } from 'react-test-renderer';
import Providers from 'tests/providers';
import withUi from '../index';

const Component = () => <div>test</div>;

function renderDecorated(params) {
  const DecoratedComponent = withUi(params)(Component);
  return Providers(<DecoratedComponent />);
}

describe('withUI', () => {
  it('should pass the UI state as a prop', () => {
    const { root } = create(renderDecorated());
    expect(root.findByType(Component).props.ui).toBeDefined();
  });
});
