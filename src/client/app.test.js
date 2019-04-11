import App from './app'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
  test('App renders nested components', () => {
    const app = shallow(<App />);
    expect(app.find('Chat').length).toEqual(1);
  });
})