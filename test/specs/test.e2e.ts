import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/main.page.js'
import unitPage from '../pageobjects/unit.page.js'
import mainPage from '../pageobjects/main.page.js'
import productsPage from '../pageobjects/products.page.js'
import specialEquipment from '../../data/specialEquipment.json' assert { type: 'json' };

const baseURL = browser.options.baseUrl;
   
describe('Test cases', () => {
    beforeEach(async function () {
         // Preconditions
        await mainPage.open('');
        await browser.setWindowSize(1620, 1000);
        await mainPage.clickOnTelegramClose();
      });
    it.skip('Test-case #C212 Checking "Послуги" section on the main page', async () => {
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
        await expect(browser).toHaveUrl(`${baseURL}products/`);
        await expect(await productsPage.getNameOfChoosenFilter()).toBe(serviceName);
        await expect(await productsPage.isUnitsBlockDisplayed()).toBe(true);
        // Step 3 Click on the first relevant unit.
        await productsPage.waitUntillFirstUnitDisplayed();
        await productsPage.clickOnFirstUnit();
        await expect(browser).toHaveUrlContaining('unit');
        await expect(unitPage.servicesBlock).toHaveTextContaining(serviceName);
        // // Step 4 Click on the logo in the left corner of the page.
        await unitPage.clickOnLogo();
        await expect(browser).toHaveUrl(`${baseURL}`);
        }
    })

    it('Test-case#C213 Checking ""Спецтехніка"" section on the main page', async () => {
         // Step 1 Scroll down to the ""Спецтехніка"" section on the main page and check if 
         // the ""Популярна"" tab and 7 services below the ""Спецтехніка"" label are displayed.
        await mainPage.scrollIntoSpecialEquipmentBlock();
        await expect(await mainPage.checkIfSpecialEquipmentPopularniTitleIsDisplayed()).toBe(true);
        const popularniSpecialEquipment = await mainPage.numberOfPopularniSpecialEquipment();
        await expect(popularniSpecialEquipment).toEqual(7);
        //  // Step 5 Repeat test case for all other elements on all tabs below the ""Спецтехніка"" label.
        //  for (let i=1; i<=7; i++) {
        // // Step 2 Click on the first element in the ""Спецтехніка"" list.
        let specialEquipmentName: string;
        specialEquipmentName = await mainPage.getNameOfPopularniSpecialEquipmentItem(0);
        await mainPage.clickOnPopularniSpecialEquipmentItem(0);
        await expect(browser).toHaveUrlContaining(`${baseURL}products/`);
        // await expect(await productsPage.getNameOfChoosenFilter()).toBe(specialEquipment.specialEquipmentName);
        await expect(await productsPage.isUnitsBlockDisplayed()).toBe(true);
        // // Step 3 Click on the first relevant unit. (relevant property checking is available for manual testing only)
        // // await ProductsPage.clickOnUnitBlock(1);
        // await expect(browser).toHaveUrlContaining('unit');
        // // Step 4 Click on the logo in the left corner of the page.
        // // await UnitPage.clickOnLogo();
        // await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/');
        //  }
    })

    // it('Test-case#C214  Verify that all elements on the footer are displayed and all links are clickable', async () => {
    //     // Preconditions
    //     await browser.reloadSession();
    //     await browser.url('');
    //     await browser.maximizeWindow();
    //     // Step 1  Scroll down to the footer.
    //     await MainPage.footer.scrollIntoView();
    //     await MainPage.clickOnTelegramClose();
    //     await expect(MainPage.footer).toBeDisplayed();
    //     await expect(MainPage.footerLogo).not.toBeClickable();
    //     // Step 2  Check that ""Про нас"" label is displayed on the footer.
    //     await expect(MainPage.aboutUsLabel).toBeDisplayed();
    //     // Step 3 Check that ""Політика конфіденційності"" link is displayed on the footer.
    //     await expect(MainPage.politicConfLink).toBeDisplayed();
    //     // Step 4 Check that ""Правила використання файлів cookie"" link is displayed on the footer.
    //     await expect(MainPage.cookieUsingRulesLink).toBeDisplayed();
    //     // Step 5 Check that ""Умови доступу та користування"" link is displayed on the footer.
    //     await expect(MainPage.accessAndUsingTermsLink).toBeDisplayed();
    //     // Step 6 Check that ""Користувачам"" label is displayed on the footer.
    //     await expect(MainPage.forUsersLabel).toBeDisplayed();
    //     // Step 7 Check that ""Оголошення"" link is displayed on the footer.
    //     await expect(MainPage.announceLink).toBeDisplayed();
    //     // Step 8 Check that ""Тендери"" link is displayed on the footer.
    //     await expect(MainPage.tendersLink).toBeDisplayed();
    //     // Step 9 Check that the ""Контакти"" label and email are displayed on the footer.
    //     await expect(MainPage.contactsLabel).toBeDisplayed();
    //     // Step 10 Check that the Rentzila logo is displayed on the footer.
    //     await expect(MainPage.footerLogo).toBeDisplayed();
    //     // Step 11 Check that the ""Усі права захищені"" label is displayed on the footer.
    //     await expect(MainPage.allRigthsProtectedLabel).toBeDisplayed();
    //     // Step 12 Click the ""Політика конфіденційності"" link on the footer.
    //     await MainPage.clickOnPoliticsConfLink();
    //     await expect(browser).toHaveUrlContaining('privacy-policy');
    //     await expect(browser).toHaveTitleContaining('Політика конфіденційності');
    //     await browser.back()
    //     // Step 13 Scroll down to the footer and click the ""Правила використання файлів cookie"" link  on the footer.
    //     await MainPage.footer.scrollIntoView();
    //     await MainPage.clickOnCookieUsingRules();
    //     await expect(browser).toHaveUrlContaining('cookie-policy');
    //     await expect(browser).toHaveTitleContaining('Політика використання cookie');
    //     await browser.back();
    //     // Step 14 Scroll down to the footer and click the ""Умови доступу та користування"" link on the footer.
    //     await MainPage.footer.scrollIntoView();
    //     await MainPage.clickOnAccessAndUsingTermsLink();
    //     await expect(browser).toHaveUrlContaining('terms-conditions');
    //     await expect(browser).toHaveTitleContaining('Угода користувача');
    //     await browser.back();
    //     // Step 15 Scroll down to the footer and click on the ""Оголошення"" link.
    //     await MainPage.footer.scrollIntoView();
    //     await MainPage.clickOnAnnounceLink();
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.searchInput).toBeDisplayed();
    //     await expect(ProductsPage.searchInput).toHaveAttr('placeholder', 'Пошук оголошень або послуг');
    //     // Step 16  Click the Rentzila logo on the header.
    //     await ProductsPage.clickOnLogo();
    //     await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/');
    //     await expect(MainPage.serviceSearchSpecTechTitle).toBeDisplayed();
    //     await expect(MainPage.serviceSearchSpecTechTitle).toHaveTextContaining('Сервіс пошуку послуг спецтехніки');
    //     // Step 17 Scroll down to the footer and click the ""Тендери"" link.
    //     await MainPage.footer.scrollIntoView();
    //     await MainPage.clickOnTendersLink();
    //     await expect(browser).toHaveUrlContaining('tenders-map');
    //     await expect(TendersPage.searchInput).toBeDisplayed();
    //     await expect(TendersPage.searchInput).toHaveAttr('placeholder', 'Пошук тендера за ключовими словами');
    //     // Step 18 Click the Rentzila logo on the header.
    //     await TendersPage.clickOnLogo();
    //     await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/');
    //     // Step 19 Click on the ""info@rentzila.com.ua"" email on the footer.
    //     await MainPage.footer.scrollIntoView();
    //     await expect(MainPage.emailLink).toHaveHref('mailto:info@rentzila.com.ua');
    // })

    // it('Test-case #C530 Verify Search Input', async () => {
    //     // Preconditions
    //     await browser.reloadSession();
    //     await browser.url('');
    //     await browser.maximizeWindow();
    //     await MainPage.clickOnTelegramClose();
    //     // Step 1 Click on the search field input
    //     await MainPage.clickOnSearchInput();
    //     await expect(MainPage.searchPopUp).toBeDisplayed();
    //     await expect(MainPage.popUpServicesTitle).toBeDisplayed();
    //     await expect(MainPage.popUpCategoriesTitle).toBeDisplayed();
    //     // Step 2 Press the ""Enter"" keyboard button
    //     await browser.keys([Key.Enter]);
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.searchInput).toHaveValue('');
    //     await expect(ProductsPage.unitsBlock).toBeDisplayed();
    //     // Step 3 Return back to the previous page, enter ""Трактор"" into the ""Пошук оголошення 
    //     //за ключовими словами"" input and press the ""Enter"" keyboard button.
    //     await browser.back();
    //     await MainPage.setValueInSearchInput('Трактор');
    //     await browser.pause(3000);
    //     await browser.keys([Key.Enter]);
    //     await browser.pause(3000);
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('Трактор');
    //     // Step 4 Click on any first unit
    //     await ProductsPage.clickOnUnitBlock(1);
    //     await expect(browser).toHaveUrlContaining('unit');
    //     // Step 5 Click on the logo in the header and Click on the ""Пошук оголошення за ключовими словами"" input
    //     await UnitPage.clickOnLogo();
    //     await browser.pause(2000);
    //     await MainPage.clickOnSearchInput();
    //     await expect(MainPage.searchResult).toHaveTextContaining('Трактор');
    //     // Step 6 Repeat steps 3-5 with ""Ремонт гидравлики"" keyphrase.
    //     await MainPage.setValueInSearchInput('Ремонт гидравлики');
    //     await browser.pause(2000);
    //     await browser.keys([Key.Enter]);
    //     await browser.pause(2000);
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('Ремонт гидравлики');
    //     await ProductsPage.clickOnUnitBlock(1);
    //     await expect(browser).toHaveUrlContaining('unit');
    //     await UnitPage.clickOnLogo();
    //     await browser.pause(2000);
    //     await MainPage.clickOnSearchInput();
    //     await browser.pause(2000);
    //     await expect(MainPage.searchResult).toHaveTextContaining('Ремонт гидравлики');
    //     // Step 7 Return back to the main page, enter ""Ремонт"" into the search field input and click 
    //     //on any first search result in the search dropdown.
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.setValueInSearchInput('Ремонт');
    //     await expect(MainPage.searchResult).toHaveTextContaining('Ремонт');
    //     await MainPage.clickOnSerchResult(1);
    //     await expect(browser).toHaveUrlContaining('unit');
    //     await browser.pause(2000);
    //     await expect(UnitPage.unitTitle).toHaveTextContaining('Ремонт');
    //     // Step 8 Click on the logo in the header and enter only spaces in thesearch field input: 
    //     //""____________"" (""_"" is the Space). After input press the ""Enter"" keyboard button.
    //     await UnitPage.clickOnLogo();
    //     await browser.pause(2000);
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.setValueInSearchInput('     ');
    //     await browser.pause(2000);
    //     await expect(MainPage.searchResult).toHaveTextContaining('Ремонт');
    //     await expect(MainPage.popUpServicesTitle).toBeDisplayed();
    //     await expect(MainPage.popUpCategoriesTitle).toBeDisplayed();
    //     await browser.pause(2000);
    //     await browser.keys([Key.Enter]);
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('Знайдено 0 оголошень на видимій території за запитом " "');
    //      // Step 9 Return back to the previous page and enter the ""123"" in ""Пошук оголошення за ключовими 
    //     //словами"" input. After input press the ""Enter"" keyboard button and click on any first unit.
    //     await browser.back();
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.clearValueInSearchInput();
    //     await MainPage.setValueInSearchInput('123');
    //     await browser.pause(3000);
    //     await browser.keys([Key.Enter]);
    //     await browser.pause(3000);
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('Знайдено 0 оголошень на видимій території зазапитом " 123"');
    //     // Step 10 Click on the ""Пошук оголошення за ключовими словами"" search input and enter 
    //     //any specific symbol: !, @, #, $, %, ^, (, ), *. After each Input press the ""Enter"" button on the keyboard.
    //     await browser.back();
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.clearValueInSearchInput();
    //     await browser.pause(2000);
    //     await MainPage.setValueInSearchInput('@$!');
    //     await browser.pause(2000);
    //     await browser.keys([Key.Enter]);
    //     await browser.pause(2000);
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('Знайдено 0 оголошень на видимій території за запитом "@$!"');
    //     // Step 11 Click on the ""Пошук оголошення за ключовими словами"" search input and enter any specific
    //     // symbol: <, >, ^, ;,{,},[,]. After each Input press the ""Enter"" button on the keyboard.
    //     await browser.back();
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.clearValueInSearchInput();
    //     await browser.pause(2000);
    //     await MainPage.setValueInSearchInput('<^>');
    //     await expect(MainPage.searchInput).toHaveValue('')
    //     await browser.pause(2000);
    //     await browser.keys([Key.Enter]);
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.unitsBlockTitle).not.toHaveTextContaining('<^>');
    //     // Step 12 Return back to the main page and enter the non-existing keyword in the ""Пошук оголошення 
    //     //за ключовими словами"" input: non-existent тест1234567890. Press the ""Enter"" keyboard button.
    //     await browser.back();
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.clearValueInSearchInput();
    //     await browser.pause(2000);
    //     await MainPage.setValueInSearchInput('non-existent тест1234567890');
    //     await expect(MainPage.popUpSearchResultBlock).not.toBeDisplayed();
    //     await browser.pause(2000);
    //     await browser.keys([Key.Enter]);
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.searchInput).toHaveValue('non-existent тест1234567890');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('Знайдено 0 оголошень на видимій території за запитом "non-existent тест1234567890"');
    //     // Step 13 Return back to the previous page and click on the ""Пошук оголошення за ключовими словами"" 
    //     // search input and enter ""Асфальтування"".
    //     await browser.back();
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.clearValueInSearchInput();
    //     await browser.pause(2000);
    //     await MainPage.setValueInSearchInput('Асфальтування');
    //     await expect(MainPage.popUpSearchResultBlock).toBeDisplayed();
    //     await expect(MainPage.popUpServices).toHaveTextContaining('Асфальтування');
    //     // Step 14 Click the ""Асфальтування"" in the ""Послуги"" section in the dropdown.
    //     await MainPage.clickOnAsphaltingService();
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('Асфальтування');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('Знайдено');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('на видимій території');
    //     // Step 15 Return back to the previous page, click on the ""Пошук оголошення за ключовими словами"" 
    //     //search input and enter ""Драглайн"".
    //     await browser.back();
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.clearValueInSearchInput();
    //     await browser.pause(2000);
    //     await MainPage.setValueInSearchInput('Драглайн');
    //     await expect(MainPage.popUpSearchResultBlock).toBeDisplayed();
    //     await expect(MainPage.popUpCategories).toHaveTextContaining('драглайни');
    //     // Step 16  Click the ""драглайни"" in the ""Категорії"" section in the dropdown.
    //     await MainPage.clickOnDraglineCategorie();
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('драглайни');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('Знайдено');
    //     await expect(ProductsPage.unitsBlockTitle).toHaveTextContaining('на видимій території');
    //     // Step 17 Return back to the previous page, click on the ""Пошук оголошення за ключовими словами"" 
    //     //search input and enter the ""Ремонт"".
    //     await browser.back();
    //     await MainPage.clickOnSearchInput();
    //     await MainPage.setValueInSearchInput('Ремонт');
    //     // await expect(MainPage.searchResult).toHaveTextContaining('Ремонт');
    //     await expect(MainPage.popUpSearchResultBlock).toHaveTextContaining('Ремонт');
    //     // Step 18 Click on the ""X"" button in the search input.
    //     await MainPage.clickOnSearchClearBtn();
    //     await expect(MainPage.searchResult).not.toBeDisplayed();
    //     await expect(MainPage.searchInput).toHaveValue('')
    // })
    
    // it('Test-case #C226 Verify ""У Вас залишилися питання?"" form', async () => {
    //     // Preconditions
    //     await browser.reloadSession();
    //     await browser.url('');
    //     await browser.maximizeWindow();
    //     await MainPage.clickOnTelegramClose();
    //     // Step 1  Scroll down to the ""У Вас залишилися питання?"" form.
    //     await MainPage.questionsForm.scrollIntoView();
    //     await expect(MainPage.questionsForm).toBeDisplayed();
    //     // Step 2  Click on the ""Замовити консультацію"" button.
    //     await MainPage.clickOnOrderConsultBtn();
    //     await expect(MainPage.nameFormFieldErrorMessage).toBeDisplayed();
    //     await expect(MainPage.phoneFormFieldErrorMessage).toBeDisplayed();
    //     // Step 3 Input the ""Test"" into the ""Ім'я"" field and click on the ""Замовити консультацію"" button.
    //     await MainPage.setValueInNameFormField('Test');
    //     await MainPage.clickOnOrderConsultBtn();
    //     await expect(MainPage.nameFormFieldErrorMessage).not.toBeDisplayed();
    //     await expect(MainPage.phoneFormFieldErrorMessage).toBeDisplayed();
    //     // Step 4 Click on the ""Номер телефону"" field.
    //     await MainPage.clickOnInputPhoneFormField();
    //     await expect(MainPage.inputPhoneFormField).toHaveValue('+380');
    //     // Step 5 Input the valid phone number into the ""Номер"" field: +380506743060 After Input clear 
    //     //the ""Ім'я"" field and click on the ""Замовити консультацію"" button.
    //     await MainPage.addValueInPhoneFormField(506743060);
    //     (await MainPage.inputNameFormField).clearValue();
    //     await MainPage.clickOnOrderConsultBtn();
    //     await expect(MainPage.nameFormFieldErrorMessage).toBeDisplayed();
    //     await expect(MainPage.phoneFormFieldErrorMessage).not.toBeDisplayed();
    //     // Step 6  Input the ""Test"" into the ""Ім'я"" field. _There are no restrictions for the ""Ім'я"" 
    //     //field_ Enter the invalid phone number: +38063 111 111  +1 1111111111111  After each input click on 
    //     //the ""Замовити консультацію"" button.
    //     await MainPage.setValueInNameFormField('Test');
    //     await MainPage.setValueInPhoneFormField('+38063111111');
    //     await MainPage.clickOnOrderConsultBtn();
    //     await expect(MainPage.nameFormFieldErrorMessage).not.toBeDisplayed();
    //     await expect(MainPage.phoneFormFieldNoValidErrorMessage).toBeDisplayed();
    //     await MainPage.setValueInPhoneFormField('+11111111111111');
    //     await MainPage.clickOnOrderConsultBtn();
    //     await expect(MainPage.nameFormFieldErrorMessage).not.toBeDisplayed();
    //     await expect(MainPage.phoneFormFieldNoValidErrorMessage).toBeDisplayed();
    //     // Step 7 Input the valid phone number into the ""Номер"" field: +380506743060 After input click on 
    //     // the ""Замовити консультацію"" button.
    //     await MainPage.clearValueInputPhoneFormField();
    //     await MainPage.setValueInPhoneFormField('+380506743060');
    //     await MainPage.clickOnOrderConsultBtn();
    //     // Step 8 Click on the ""Ok"" button on the modal.
    //     await browser.pause(2000);
    //     // await browser.acceptAlert();
    //     // Step 9  Log in as the Admin to the Admin panel with credentials 
    //     // and check that this feedback is present.
    //     let apiToken:any = await feedbackAPIHelper.createAccessToken();
    //     let feedbackList:any = await feedbackAPIHelper.getFeedBackList(apiToken);
    //     let filteredList:any = await feedbackAPIHelper.feedbackFilter(feedbackList);
    //     await expect(await filteredList[0].phone).toEqual('+380506743060');
        
    // })

    // it('Test-case #C559 Verify ""Каталог""', async () => {
    //     // Preconditions
    //     await browser.reloadSession();
    //     await browser.url('');
    //     await browser.maximizeWindow();
    //     await MainPage.clickOnTelegramClose();
    //     // Step 1 Verify the ""Каталог"" button is displayed in the top left corner under the logo
    //     await browser.pause(3000);
    //     await expect(MainPage.catalogLink).toBeDisplayed();
    //     // Step 2 Click on the ""Каталог"" button.
    //     await MainPage.clickOnCatalogLink();
    //     await expect(MainPage.specTechniqLabel).toBeDisplayed();
    //     await expect(MainPage.servicesLabel).toBeDisplayed();
    //     // Step 3 Hover the ""Спецтехніка"" label
    //     await MainPage.hoverSpecTechLabel();
    //     await expect(MainPage.buildTechLabel).toBeDisplayed();
    //     await expect(MainPage.utilityTechLabel).toBeDisplayed();
    //     await expect(MainPage.agricultTechLabel).toBeDisplayed();
    //     await expect(MainPage.storeTechLabel).toBeDisplayed();
    //     // Step 4  Click on ""Будівельна техніка""
    //     await MainPage.clickOnBuildTechLabel();
    //     await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/products/budivelna-tekhnika/');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('Будівельна техніка');
    //     // Step 5 Repeat previous steps for ""Комунальна техніка"" ""Сільськогосподарська техніка"" ""Складська техніка"" 
    //     await browser.back();
    //     await MainPage.clickOnCatalogLink();
    //     await MainPage.hoverSpecTechLabel();
    //     await MainPage.clickOnUtilTechLabel();
    //     await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/products/komunalna-tekhnika/');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('Комунальна техніка');
    //     await browser.back();
    //     await MainPage.clickOnCatalogLink();
    //     await MainPage.hoverSpecTechLabel();
    //     await MainPage.clickOnAgricultTechLabel();
    //     await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/products/silskogospodarska-tekhnika/');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('Сільськогосподарська техніка');
    //     await browser.back();
    //     await MainPage.clickOnCatalogLink();
    //     await MainPage.hoverSpecTechLabel();
    //     await MainPage.clickOnStoreTechLabel();
    //     await expect(browser).toHaveUrl('https://stage.rentzila.com.ua/products/skladska-tekhnika/');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('Складська техніка');
    //     // Step 6  Open the main page again. Click on ""Каталог"". Hover ""Спецтехніка"". Hover ""Будівельна техніка""
    //     await browser.back();
    //     await MainPage.clickOnCatalogLink();
    //     await MainPage.hoverSpecTechLabel();
    //     await MainPage.hoverBudTechLabel();
    //     await expect(MainPage.autoKransLabel).toBeDisplayed();
    //     await expect(MainPage.buroviUstLabel).toBeDisplayed();
    //     await expect(MainPage.dorBudTechLabel).toBeDisplayed();
    //     await expect(MainPage.excavatorsLabel).toBeDisplayed();
    //     await expect(MainPage.anotherBudTechLabel).toBeDisplayed();
    //     await expect(MainPage.catsLabel).toBeDisplayed();
    //     await expect(MainPage.containersLabel).toBeDisplayed();
    //     await expect(MainPage.navantagLabel).toBeDisplayed();
    //     await expect(MainPage.equipForSpecTechLabel).toBeDisplayed();
    //     await expect(MainPage.liftrersLabel).toBeDisplayed();
    //     await expect(MainPage.techniqForGroundWorksLabel).toBeDisplayed();
    //     // Step 7 Click on the logo in the top left corner. Click on the ""Каталог"" button. 
    //     // Hover the ""Спецтехніка"" label.
    //     await MainPage.clickOnHeaderLogo();
    //     await MainPage.clickOnCatalogLink();
    //     await expect(MainPage.specTechniqLabel).toBeDisplayed();
    //     await expect(MainPage.servicesLabel).toBeDisplayed();
    //     await MainPage.hoverSpecTechLabel();
    //     await expect(MainPage.buildTechLabel).toBeDisplayed();
    //     await expect(MainPage.utilityTechLabel).toBeDisplayed();
    //     await expect(MainPage.agricultTechLabel).toBeDisplayed();
    //     await expect(MainPage.storeTechLabel).toBeDisplayed();
    //     // Step 8 Hover ""Комунальна техніка""
    //     await MainPage.hoverUtilityTechLabel();
    //     await expect(MainPage.avarMachLabel).toBeDisplayed();
    //     await expect(MainPage.dorCleanTechLabel).toBeDisplayed();
    //     await expect(MainPage.cleaningEquipLabel).toBeDisplayed();
    //     await expect(MainPage.utilityContainersLabel).toBeDisplayed();
    //     await expect(MainPage.utilityMachLabel).toBeDisplayed();
    //     await expect(MainPage.equipUtilTechLabel).toBeDisplayed();
    //     // Step 9  Click on the logo in the top left corner. Click on the ""Каталог"" button. Hover the ""Спецтехніка"" label.
    //     await MainPage.clickOnHeaderLogo();
    //     await MainPage.clickOnCatalogLink();
    //     await expect(MainPage.specTechniqLabel).toBeDisplayed();
    //     await expect(MainPage.servicesLabel).toBeDisplayed();
    //     await MainPage.hoverSpecTechLabel();
    //     await expect(MainPage.buildTechLabel).toBeDisplayed();
    //     await expect(MainPage.utilityTechLabel).toBeDisplayed();
    //     await expect(MainPage.agricultTechLabel).toBeDisplayed();
    //     await expect(MainPage.storeTechLabel).toBeDisplayed();
    //     // Step 10 Hover ""Сільськогосподарська техніка""
    //     await MainPage.hoverAgricultTechLabel();
    //     await expect(MainPage.gruntoObrTechLabel).toBeDisplayed();
    //     await expect(MainPage.zatkiLabel).toBeDisplayed();
    //     await expect(MainPage.inshaAgrTechLabel).toBeDisplayed();
    //     await expect(MainPage.potatoTechLabel).toBeDisplayed();
    //     await expect(MainPage.combinesLabel).toBeDisplayed();
    //     await expect(MainPage.woodKeepTechLabel).toBeDisplayed();
    //     await expect(MainPage.equipLabel).toBeDisplayed();
    //     await expect(MainPage.afterCollectLabel).toBeDisplayed();
    //     await expect(MainPage.posivAndSadTechLabel).toBeDisplayed();
    //     await expect(MainPage.agricultRielLabel).toBeDisplayed();
    //     await expect(MainPage.techForInsDobrLabel).toBeDisplayed();
    //     await expect(MainPage.techForZagotSinaLabel).toBeDisplayed();
    //     await expect(MainPage.techForPolyvZrochLabel).toBeDisplayed();
    //     await expect(MainPage.techForGardenLabel).toBeDisplayed();
    //     await expect(MainPage.techForAnimalsLabel).toBeDisplayed();
    //     await expect(MainPage.techForTranspLabel).toBeDisplayed();
    //     await expect(MainPage.tractorsLabel).toBeDisplayed();
    //     // Step 11 Click on the logo in the top left corner. Click on the ""Каталог"" button. Hover the ""Спецтехніка"" label.
    //     await MainPage.clickOnHeaderLogo();
    //     await MainPage.clickOnCatalogLink();
    //     await expect(MainPage.specTechniqLabel).toBeDisplayed();
    //     await expect(MainPage.servicesLabel).toBeDisplayed();
    //     await MainPage.hoverSpecTechLabel();
    //     await expect(MainPage.buildTechLabel).toBeDisplayed();
    //     await expect(MainPage.utilityTechLabel).toBeDisplayed();
    //     await expect(MainPage.agricultTechLabel).toBeDisplayed();
    //     await expect(MainPage.storeTechLabel).toBeDisplayed();
    //     // Step 12 Hover ""Складська техніка"" 
    //     await MainPage.hoverStoreTechLabel();
    //     await expect(MainPage.equipForLiftersLabel).toBeDisplayed();
    //     await expect(MainPage.techForStorageLabel).toBeDisplayed();
    //     // Step 13 Click on the logo in the top left corner. Click on the ""Каталог"" button.
    //     await MainPage.clickOnHeaderLogo();
    //     await MainPage.clickOnCatalogLink();
    //     await expect(MainPage.specTechniqLabel).toBeDisplayed();
    //     await expect(MainPage.servicesLabel).toBeDisplayed();
    //     // Step 14 Hover the ""Послуги"" label.
    //     await MainPage.hoverOnServicesLabel();
    //     await expect(MainPage.buildingServLabel).toBeDisplayed();
    //     await expect(MainPage.anotherServLabel ).toBeDisplayed();
    //     await expect(MainPage.agricServLabel).toBeDisplayed();
    //     // Step 15  Hover the ""Користувацькі"" label (not available in this version of the app)
    //     // Step 16 Repeat step 15 for ""Будівельні"" ""Інші"" ""Сільскогосподарські"" (available for manual testing only)
    //     // Step 17 Click on any label displayed on the right menu.
    //     await MainPage.hoverBuildServLabel();
    //     await MainPage.clickOnRoadWorksLabel();
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('Дорожні роботи');
    //     // Step 18 Click on the logo in the top left corner. Click on the ""Каталог"" button. Hover the ""Послуги"" label.
    //     await ProductsPage.clickOnLogo();
    //     await MainPage.clickOnCatalogLink();
    //     await MainPage.hoverOnServicesLabel();
    //     await expect(MainPage.buildingServLabel).toBeDisplayed();
    //     await expect(MainPage.anotherServLabel).toBeDisplayed();
    //     await expect(MainPage.agricServLabel).toBeDisplayed();
    //     // Step 19  Hover the ""Будівельні"" label (checking available for manual testing only)
    //     await MainPage.hoverBuildServLabel();
    //     // Step 20 Click on ""Розчищення території"" label displayed on the right menu.
    //     await MainPage.clickOnCleaningTeritoryLabel();
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('Розчищення території');
    //     // Step 21 Click on the logo in the top left corner. Click on the ""Каталог"" button. Hover the ""Послуги"" label.
    //     await ProductsPage.clickOnLogo();
    //     await MainPage.clickOnCatalogLink();
    //     await MainPage.hoverOnServicesLabel();
    //     await expect(MainPage.buildingServLabel).toBeDisplayed();
    //     await expect(MainPage.anotherServLabel).toBeDisplayed();
    //     await expect(MainPage.agricServLabel).toBeDisplayed();
    //     // Step 22 Hover the ""Сільскогосподарські"" label (checking available for manual testing only)
    //     await MainPage.hoverAgricServLabel();
    //     // Step 23  Click on ""Внесення добрив"" label displayed on the right menu.
    //     await browser.pause(3000);
    //     await MainPage.clickOnVnesDobryvLabel();
    //     // await expect(browser).toHaveUrlContaining('products');
    //     // await expect(ProductsPage.choosenFilters).toHaveTextContaining('Внесення добрив');
    //     // Step 24 Click on the logo in the top left corner. Click on the ""Каталог"" button. Hover the ""Послуги"" label.
    //     await ProductsPage.clickOnLogo();
    //     await MainPage.clickOnCatalogLink();
    //     await MainPage.hoverOnServicesLabel();
    //     await expect(MainPage.buildingServLabel).toBeDisplayed();
    //     await expect(MainPage.anotherServLabel).toBeDisplayed();
    //     await expect(MainPage.agricServLabel).toBeDisplayed();
    //     // Step 25 Hover the ""Інші"" label (checking available for manual testing only)
    //     await MainPage.hoverAnotherServLabel();
    //     // Step 26 Click on ""Обрізання дерев"" label displayed on the right menu.
    //     await MainPage.clickOnCuttingTreesLabel();
    //     await expect(browser).toHaveUrlContaining('products');
    //     await expect(ProductsPage.choosenFilters).toHaveTextContaining('Обрізання дерев');
    // })
     
    it.skip('Test-case#C200 Authorization with empty fields', async () => {
        // Preconditions
        await browser.reloadSession();
        await browser.url('');
        await browser.maximizeWindow();
        await MainPage.clickOnTelegramClose();
        // Step 1 Click on the ""Увійти"" at the bottom of the form with all fields empty.
        await MainPage.clickOnEnterBtn();
        await MainPage.clickOnEnterInBtn();
        await expect(MainPage.autorizationPopUp).toBeDisplayed();
        await expect(MainPage.emailField).toHaveElementClass('CustomReactHookInput_error_input___nw4a');
        await expect(MainPage.emailFieldWarningMessage).toBeDisplayed();
        await expect(MainPage.passwordField).toHaveElementClass('CustomReactHookInput_error_input___nw4a');
        await expect(MainPage.passwordFieldWarningMessage).toBeDisplayed();
        // Step 2  Enter your email (provided by team lead) into the ""E-mail або номер телефону"" Input:
        // For example: ""testuserrentzila@gmail.com"". Then click on the ""Увійти"" at the bottom of the form.
        await MainPage.setValueEmailField('testuserrentzila@gmail.com');
        await MainPage.clickOnEnterInBtn();
        await expect(MainPage.autorizationPopUp).toBeDisplayed();
        await expect(MainPage.emailField).not.toHaveElementClass('CustomReactHookInput_error_input___nw4a');
        await expect(MainPage.emailFieldWarningMessage).not.toBeDisplayed();
        await expect(MainPage.passwordField).toHaveElementClass('CustomReactHookInput_error_input___nw4a');
        await expect(MainPage.passwordFieldWarningMessage).toBeDisplayed();
        // Step 3  The ""E-mail або номер телефону"" clear.
        await MainPage.clearEmailField();
        await expect(MainPage.emailField).toHaveElementClass('CustomReactHookInput_error_input___nw4a');
        await expect(MainPage.emailFieldWarningMessage).toBeDisplayed();
        // Step 4 Enter any valid password(provided by team lead) into the ""Пароль"" Input:
        // For example: ""Testuser10"". Then click on the ""Увійти"" at the bottom of the form.
        await MainPage.setValuePasswordField('Testuser10');
        await MainPage.clickOnEnterInBtn();
        await expect(MainPage.autorizationPopUp).toBeDisplayed();
        await expect(MainPage.emailField).toHaveElementClass('CustomReactHookInput_error_input___nw4a');
        await expect(MainPage.emailFieldWarningMessage).toBeDisplayed();
        await expect(MainPage.passwordField).not.toHaveElementClass('CustomReactHookInput_error_input___nw4a');
        await expect(MainPage.passwordFieldWarningMessage).not.toBeDisplayed();
    })

        it.skip('Test-case#C199 Reset the password with invalid email', async () => {
            // Preconditions
            await browser.reloadSession();
            await browser.url('');
            await browser.maximizeWindow();
            await MainPage.clickOnTelegramClose();
            // Step 1  Click on the ""Забули пароль?"" below the password input field.
            await MainPage.clickOnEnterBtn();
            await MainPage.clickOnForgotPasswordLink();
            await expect(MainPage.passwordResetForm).toBeDisplayed();
            // Step 2  Click on the ""Відновити пароль"" button with empty email field.
            // await MainPage.clickOnRecaptchaPasswordResetForm();
            await MainPage.clickOnResetPasswordBtn();
            await expect(MainPage.resetPasswordWarningMessage).toBeDisplayed();

        })


    
   
})

