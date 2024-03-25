import Page from './page.js';

const choosenFiltersLoc = 'div[class*="ResetFilters_selectedCategory"] p';
const unitsBlockLoc = 'div[class*="MapPagination_units_container"]';
const unitsBlocTitleLoc = `${unitsBlockLoc} h1`;
const unitElementLoc = 'div[class*="UnitCard_infoWrapper"]';
const searchInputLoc = 'input[data-testid="searchInput"]';
const headerLoc = 'div[data-testid="Navbar"]';
const headerLogoLoc = `${headerLoc} div[data-testid="logo"]`;
const mapLoc = 'div[class*="Map_map__container"]';

class ProductsPage extends Page {

    public async getNameOfChoosenFilter(): Promise<string> {
        return await super.getText(await super.getElement(choosenFiltersLoc));
    }

    public async isUnitsBlockDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(unitsBlockLoc);
      }

    public async waitUntillFirstUnitDisplayed(): Promise<void> {
      await super.waitUntilElementDisplayed(unitElementLoc);
    }
    
    public async clickOnFirstUnit(): Promise<void> {
        await super.click(await this.getElement(unitElementLoc));
        await super.pause(1500);
      }

    public async isSearchInputDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(searchInputLoc);
      }

    public async getSearchInputPlaceholder(): Promise<string> {
        return super.getElementAttribute(searchInputLoc,'placeholder');
    }

    public async clickOnHeaderLogo(): Promise<void> {
      await super.click(await this.getElement(headerLogoLoc));
    }

    public async getSearchInputValue(): Promise<string> {
      return super.getValue(searchInputLoc);
    }

    public async checkIfMapIsDisplayed(): Promise<boolean> {
      return super.isElementDisplayed(mapLoc);
    }

    public async getUnitsBlocTitleText(): Promise<string> {
      return super.getText(unitsBlocTitleLoc);
    }
   
}

export default new ProductsPage();