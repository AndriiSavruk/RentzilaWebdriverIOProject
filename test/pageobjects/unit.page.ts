import Page from './page.js';

const servicesBlockLoc = 'div[class*="UnitCharacteristics_services"]';
const logoLoc = 'div[data-testid="logo"]';

const baseURL = browser.options.baseUrl;

class UnitPage extends Page {

    get servicesBlock() {return super.getElement(servicesBlockLoc);}
   
    public async clickOnLogo(): Promise<void> {
      await super.click(logoLoc);
      await super.waitUntilUrlChange(`${baseURL}`,3000);
    }
    
}

export default new UnitPage();