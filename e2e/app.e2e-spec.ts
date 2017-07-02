import { RebellePage } from './app.po';

describe('rebelle App', () => {
  let page: RebellePage;

  beforeEach(() => {
    page = new RebellePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
