import { expect } from '@wdio/globals'
import unitPage from '../pageobjects/unit.page.js'
import mainPage from '../pageobjects/main.page.js'
import productsPage from '../pageobjects/products.page.js'
import specialEquipment from '../../data/specialEquipment.json' assert { type: 'json' };

const baseURL = browser.options.baseUrl;
   
describe('Test cases', () => {
    beforeEach(async function () {
         // Preconditions
        await mainPage.open('');
        await mainPage.clickOnTelegramClose();
      });
    it('Test-case #C212 Checking "Послуги" section on the main page', async () => {
        // Step 1  Scroll to the ""Послуги"" section and check if the ""Популярні"" tab and 7 services 
        // below the ""Послуги"" label are displayed.
        await mainPage.scrollIntoViewServicesBlock();
        await expect(await mainPage.checkIfServicesPopularniTitleIsDisplayed()).toBe(true);
        const popularniServices = await mainPage.numberOfPopularniServices();
        await expect(popularniServices).toEqual(7);
        // Step 5 Repeat test case for all other services on all tabs below the ""Послуги"" label.
        for (let i=0; i<popularniServices; i++) {
        // Step 2 Click on the first service below the ""Послуги"" label.
        let serviceName:string;
        serviceName = await mainPage.getNameOfPopularniServiceItem(i);
        await mainPage.clickOnPopularniServiceItem(i);
        await expect(await productsPage.getCurrentUrl()).toBe(`${baseURL}products/`);
        await expect(await productsPage.getNameOfChoosenFilter()).toBe(serviceName);
        await expect(await productsPage.isUnitsBlockDisplayed()).toBe(true);
        // Step 3 Click on the first relevant unit.
        await productsPage.waitUntillFirstUnitDisplayed();
        await productsPage.clickOnFirstUnit();
        await expect(await unitPage.getCurrentUrl()).toContain('unit');
        await expect(unitPage.servicesBlock).toHaveTextContaining(serviceName);
        // // Step 4 Click on the logo in the left corner of the page.
        await unitPage.clickOnLogo();
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}`)
        }
    })

    it('Test-case#C213 Checking ""Спецтехніка"" section on the main page', async () => {
         // Step 1 Scroll down to the ""Спецтехніка"" section on the main page and check if 
         // the ""Популярна"" tab and 7 services below the ""Спецтехніка"" label are displayed.
        await mainPage.scrollIntoSpecialEquipmentBlock();
        await expect(await mainPage.checkIfSpecialEquipmentPopularniTitleIsDisplayed()).toBe(true);
        const popularniSpecialEquipment = await mainPage.numberOfPopularniSpecialEquipment();
        await expect(popularniSpecialEquipment).toEqual(7);
         // Step 5 Repeat test case for all other elements on all tabs below the ""Спецтехніка"" label.
         for (let i:number=0; i<popularniSpecialEquipment; i++) {
        // Step 2 Click on the first element in the ""Спецтехніка"" list.
        let specialEquipmentName: string;
        specialEquipmentName = await mainPage.getNameOfPopularniSpecialEquipmentItem(i);
        await expect(specialEquipmentName).toBe(specialEquipment[i].name);
        await mainPage.clickOnPopularniSpecialEquipmentItem(i);
        await expect(await productsPage.getCurrentUrl()).toBe(`${baseURL}products/${specialEquipment[i].url}`);
        await expect(await productsPage.getNameOfChoosenFilter()).toBe(specialEquipment[i].filter);
        await expect(await productsPage.isUnitsBlockDisplayed()).toBe(true);
        // Step 3 Click on the first relevant unit.
        await productsPage.waitUntillFirstUnitDisplayed();
        await productsPage.clickOnFirstUnit();
        await expect(await unitPage.getCurrentUrl()).toContain('unit');
        await expect(unitPage.servicesBlock).toHaveTextContaining(specialEquipment[i].service);
        // Step 4 Click on the logo in the left corner of the page.
        await unitPage.clickOnLogo();
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}`)
         }
    });
});