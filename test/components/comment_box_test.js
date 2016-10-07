import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box.js';

describe('CommentBox', () => {
  it('has a text area', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });
  it('has a button', () => {

  });
});
