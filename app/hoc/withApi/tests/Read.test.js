import React from 'react';
import { render } from 'utils/test-utils';
import { create } from 'react-test-renderer';
import Providers from 'tests/providers';
import { withApiRead } from 'hoc/withApi';
import 'jest-dom/extend-expect';

import Connection from 'helpers/Connection';
jest.mock('helpers/Connection');

const ExampleComponent = () => <div data-testid="exampleComponent">test</div>;
const exampleOptions = {
  storeName: 'testStore',
  api: {
    get: '/test',
  },
};

function renderDecorated(params) {
  const DecoratedComponent = withApiRead(params)(ExampleComponent);
  return Providers(<DecoratedComponent />);
}
describe('withApiRead', () => {
  it('should fetch the initial data on mount', () => {
    render(renderDecorated(exampleOptions));
    expect(Connection.get).toHaveBeenCalledWith(exampleOptions.api.get);
  });
  it('should render the component', () => {
    const { getByTestId } = render(renderDecorated(exampleOptions));
    expect(getByTestId('exampleComponent')).toBeInTheDocument();
  });
  it('should pass the data state as a prop', () => {
    const { root } = create(renderDecorated(exampleOptions));
    expect(root.findByType(ExampleComponent).props.data).toBeDefined();
  });
});
