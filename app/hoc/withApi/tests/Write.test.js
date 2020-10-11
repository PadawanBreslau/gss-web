import React from 'react';
import { create } from 'react-test-renderer';
import Providers from 'tests/providers';
import { generateFormOptions } from 'hoc/withApi/Write';
import { withApiWrite } from 'hoc/withApi';
import generateActions from 'redux/api/actions';
import { push } from 'connected-react-router';

const ExampleComponent = () => <div>test</div>;
const exampleHocOptions = {
  storeName: 'testStore',
  formName: 'testForm',
  api: {
    post: '/test',
  },
};

let DecoratedComponent;
let formOptions;
let actions;
describe('withApiWrite', () => {
  beforeEach(() => {
    DecoratedComponent = withApiWrite(exampleHocOptions)(ExampleComponent);
    formOptions = generateFormOptions(exampleHocOptions);
    actions = generateActions(exampleHocOptions.storeName);
  });
  it('should render the component inside ReduxForm', () => {
    const { root } = create(Providers(<DecoratedComponent />));
    expect(root.findByType(DecoratedComponent)).toBeTruthy();
    expect(root.findByType(ExampleComponent)).toBeTruthy();
  });
  it('should pass handleSubmit as props', () => {
    const { root } = create(Providers(<DecoratedComponent />));
    expect(root.findByType(ExampleComponent).props.data).toBeDefined();
    expect(root.findByType(ExampleComponent).props.handleSubmit).toBeDefined();
  });
  it('should post the submitted data to the API', () => {
    const { submitPageData } = actions;
    const payload = { some: 'data' };
    const dispatch = jest.fn();
    const props = {};
    formOptions.onSubmit(payload, dispatch, props);
    expect(dispatch).toHaveBeenCalledWith(submitPageData('/test', 'post', { attributes: payload }));
  });
  it('should put the submitted data to the API', () => {
    formOptions = generateFormOptions({
      ...exampleHocOptions,
      api: {
        put: '/test-put',
      },
    });
    const { submitPageData } = actions;
    const payload = { some: 'data' };
    const dispatch = jest.fn();
    const props = {};
    formOptions.onSubmit(payload, dispatch, props);
    expect(dispatch).toHaveBeenCalledWith(
      submitPageData('/test-put', 'put', { attributes: payload }),
    );
  });
  it('should not post or put when no endpoint given', () => {
    formOptions = generateFormOptions({
      ...exampleHocOptions,
      api: {},
    });
    const payload = { some: 'data' };
    const dispatch = jest.fn();
    const props = {};
    formOptions.onSubmit(payload, dispatch, props);
    expect(dispatch).not.toHaveBeenCalled();
  });
  it('should redirect after success', () => {
    formOptions = generateFormOptions({
      ...exampleHocOptions,
      successRedirectUrl: '/test-redirect',
    });

    const { submitPageData } = actions;
    const payload = { some: 'data' };
    const dispatch = jest.fn();
    const props = {};
    formOptions.onSubmit(payload, dispatch, props);
    expect(dispatch).toHaveBeenCalledWith(
      submitPageData('/test', 'post', { attributes: payload }, push('/test-redirect')),
    );
  });
});
