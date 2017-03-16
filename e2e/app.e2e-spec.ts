
import {RootPage} from './root/root.po';
import * as chai from 'chai';
import { expect } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('angular-cli-seed App', () => {
  let page: RootPage;

  beforeEach(() => {
    page = new RootPage();
  });

  it('will do normal tests', () => {
    expect(true).to.be.ok;
  });

  it('will display its title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).to.contain('Car search POC');
  });
});
