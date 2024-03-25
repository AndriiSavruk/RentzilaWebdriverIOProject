import Page from './page.js';

const searchInputLoc = 'input[data-testid="search"]';
const headerLoc = 'div[data-testid="Navbar"]';
const headerLogoLoc = `${headerLoc} div[data-testid="logo"]`;

class TendersPage extends Page {

    public async isSearchInputDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(searchInputLoc);
      }

    public async getSearchInputPlaceholder(): Promise<string> {
        return super.getElementAttribute(searchInputLoc,'placeholder');
    }

    public async clickOnHeaderLogo(): Promise<void> {
        await super.click(await this.getElement(headerLogoLoc));
      }
}

export default new TendersPage();