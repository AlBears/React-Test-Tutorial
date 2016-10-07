import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//Group together similar tests
describe('App', () => {
  //single attribute test
  it('shows the correct text', () => {
    //create instance of component app
    const component = renderComponent(App);
    //Make statement
    expect(component).to.contain('React simple starter');

  });
});
