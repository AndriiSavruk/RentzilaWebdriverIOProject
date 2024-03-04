import Page from './page.js';

const choosenFiltersLoc = 'div[class*="ResetFilters_selectedCategory"] p';
const unitsBlockLoc = 'div[class*="MapPagination_units_container"]';
const unitElementLoc = 'div[class*="UnitCard_infoWrapper"]';

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
      }
   
}

export default new ProductsPage();