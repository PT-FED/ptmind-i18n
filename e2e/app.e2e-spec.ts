import { PtengineI18nPage } from './app.po';

describe('ptengine-i18n App', function() {
  let page: PtengineI18nPage;

  beforeEach(() => {
    page = new PtengineI18nPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
