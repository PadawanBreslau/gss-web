/**
 * Test connection
 */

import Connection, { parseAPIResponse } from '../Connection';

const exampleEndpoint = '/endpoint';
const exampleUrl = `${process.env.API_HOST}/api/v1/endpoint`;
const headers = {
  Accept: 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
  'Access-Token': null,
  client: null,
  uid: null,
};
const exampleAnswer = { data: 'exampleAnswer' };
const exampleError = { error: 'exampleErrror' };
const examplePayload = { data: 'examplePayload' };
const ignoredPayload = { data: 'ignoredPayload' };

describe('Connection', () => {
  beforeEach(() => {});

  it('should allow propper GET request', () => {
    fetch.mockResponseOnce(JSON.stringify(exampleAnswer));
    const fetchSpy = jest.spyOn(global, 'fetch');
    const response = Connection.get(exampleEndpoint, ignoredPayload);
    expect(fetchSpy).toHaveBeenCalledWith(exampleUrl, {
      headers,
      method: 'get',
    });
    response.then((json) => {
      expect(json).toEqual(exampleAnswer);
    });
  });
  it('should allow propper POST request', () => {
    fetch.mockResponseOnce(JSON.stringify(exampleAnswer));
    const fetchSpy = jest.spyOn(global, 'fetch');
    const response = Connection.post(exampleEndpoint, examplePayload);
    expect(fetchSpy).toHaveBeenCalledWith(exampleUrl, {
      headers,
      method: 'post',
      body: JSON.stringify(examplePayload),
    });
    response.then((json) => {
      expect(json).toEqual(exampleAnswer);
    });
  });
  it('should allow propper PUT request', () => {
    fetch.mockResponseOnce(JSON.stringify(exampleAnswer));
    const fetchSpy = jest.spyOn(global, 'fetch');
    const response = Connection.put(exampleEndpoint, examplePayload);
    expect(fetchSpy).toHaveBeenCalledWith(exampleUrl, {
      headers,
      method: 'put',
      body: JSON.stringify(examplePayload),
    });
    response.then((json) => {
      expect(json).toEqual(exampleAnswer);
    });
  });
  it('should allow propper DELETE request', () => {
    fetch.mockResponseOnce(JSON.stringify(exampleAnswer));
    const fetchSpy = jest.spyOn(global, 'fetch');
    const response = Connection.delete(exampleEndpoint, examplePayload);
    expect(fetchSpy).toHaveBeenCalledWith(exampleUrl, {
      headers,
      method: 'delete',
      body: JSON.stringify(examplePayload),
    });
    response.then((json) => {
      expect(json).toEqual(exampleAnswer);
    });
  });
  it('should refresh headers with each request', () => {
    const responseHeaders = {
      'Access-Token': '32532532',
      client: '2',
      uid: '34',
    };
    fetch.mockResponseOnce(JSON.stringify(exampleAnswer), {
      status: 200,
      headers: responseHeaders,
    });
    Connection.get(exampleEndpoint).then(() => {
      expect(localStorage.setItem).toHaveBeenCalled();
      expect(localStorage.__STORE__).toEqual(responseHeaders); // eslint-disable-line no-underscore-dangle
    });
  });
  it('should throw ServerError when 501', () => {
    fetch.mockResponseOnce(JSON.stringify(exampleError), { status: 501 });
    Connection.get(exampleEndpoint).then(
      () => {},
      (error) => {
        expect(error).toEqual({
          body: exampleError,
          status: 501,
          type: 'ServerError',
        });
      },
    );
  });
  it('should throw ApplicationError and clear headers on 401', () => {
    fetch.mockResponseOnce(JSON.stringify(exampleError), { status: 401 });
    localStorage.setItem('uid', 'value'); // eslint-disable-line no-underscore-dangle
    Connection.get(exampleEndpoint).then(
      () => {},
      (error) => {
        expect(error).toEqual({
          body: exampleError,
          status: 401,
          type: 'ApplicationError',
        });
        expect(localStorage.removeItem).toHaveBeenCalled();
        expect(localStorage.__STORE__).toEqual({}); // eslint-disable-line no-underscore-dangle
      },
    );
  });
  it('should throw JSONError when incorrect data', () => {
    fetch.mockResponseOnce('{ invalid: JSON', { status: 'someStatus' });
    Connection.get(exampleEndpoint).then(
      () => {},
      (error) => {
        expect(error).toEqual({
          body: '{ invalid: JSON',
          status: 'someStatus',
          type: 'InvalidJSON',
        });
      },
    );
  });
  it('should throw a connection error', () => {
    parseAPIResponse('someResponse')
      .then(
        () => {},
        (error) => {
          expect(error).toEqual({
            type: 'NetworkError',
            status: expect.any(),
            message: expect.any(),
          });
        },
      )
      .catch(() => {});
  });
});
