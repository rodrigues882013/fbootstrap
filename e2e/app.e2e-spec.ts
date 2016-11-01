import { FBootstrapPage } from './app.po';

describe('f-bootstrap App', function() {
  let page: FBootstrapPage;

  beforeEach(() => {
    page = new FBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
