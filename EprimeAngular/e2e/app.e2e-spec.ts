import { EprimeAngularPage } from './app.po';

describe('eprime-angular App', function() {
  let page: EprimeAngularPage;

  beforeEach(() => {
    page = new EprimeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
