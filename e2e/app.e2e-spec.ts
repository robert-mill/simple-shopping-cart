import { SimpleShoppingCartPage } from './app.po';

describe('simple-shopping-cart App', () => {
  let page: SimpleShoppingCartPage;

  beforeEach(() => {
    page = new SimpleShoppingCartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
