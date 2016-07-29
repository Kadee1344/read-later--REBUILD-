import { ReadLater(rebuild)Page } from './app.po';

describe('read-later(rebuild) App', function() {
  let page: ReadLater(rebuild)Page;

  beforeEach(() => {
    page = new ReadLater(rebuild)Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
