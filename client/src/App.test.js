import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('window.location', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { reload: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  it('mocks `reload`', () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  it('calls `reload`', () => {
    window.location.reload();
    expect(window.location.reload).toHaveBeenCalled();
  });
});