import Page from './page.js';

const servicesBlockLoc = 'div[class*="UnitCharacteristics_services"]';
const logoLoc = 'div[data-testid="logo"]'

class UnitPage extends Page {

    get servicesBlock() {return super.getElement(servicesBlockLoc);}
   
    public async clickOnLogo(): Promise<void> {
      await super.click(logoLoc);
    }
}

export default new UnitPage();