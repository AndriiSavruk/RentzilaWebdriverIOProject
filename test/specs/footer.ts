import { expect } from '@wdio/globals'
import mainPage from '../pageobjects/main.page.js'
import productsPage from '../pageobjects/products.page.js';
import tendersPage from '../pageobjects/tenders.page.js';

const baseURL = browser.options.baseUrl;
   
describe('Test cases', () => {
    beforeEach(async function () {
         // Preconditions
        await mainPage.open('');
        await mainPage.clickOnTelegramClose();
      });
    it('Test-case#C214  Verify that all elements on the footer are displayed and all links are clickable', async () => {
        // Step 1  Scroll down to the footer.
        await mainPage.scrollIntoFooter();
        await expect(await mainPage.checkIfFooterIsDisplayed()).toBe(true);
        // await expect(await mainPage.checkIfFooterLogoIsNotClickable()).toBe(true);
        // Step 2  Check that ""Про нас"" label is displayed on the footer.
        await expect(await mainPage.checkIfFooterAboutUsLabelIsDisplayed()).toBe(true);
        // Step 3 Check that ""Політика конфіденційності"" link is displayed on the footer.
        await expect(await mainPage.checkIfFooterConfidPoliticLinkIsDisplayed()).toBe(true);
        // Step 4 Check that ""Правила використання файлів cookie"" link is displayed on the footer.
        await expect(await mainPage.checkIfFooterCookieUsingRulesLinkIsDisplayed()).toBe(true);
        // Step 5 Check that ""Умови доступу та користування"" link is displayed on the footer.
        await expect(await mainPage.checkIfFooterAccessAndUsingTermsLinkIsDisplayed()).toBe(true);
        // Step 6 Check that ""Користувачам"" label is displayed on the footer.
        await expect(await mainPage.checkIfFooterForUsersLabelIsDisplayed()).toBe(true);
        // Step 7 Check that ""Оголошення"" link is displayed on the footer.
        await expect(await mainPage.checkIfFooterAnnouncementsLinkIsDisplayed()).toBe(true);
        // Step 8 Check that ""Тендери"" link is displayed on the footer.
        await expect(await mainPage.checkIfFooterTendersLinkIsDisplayed()).toBe(true);
        // Step 9 Check that the ""Контакти"" label and email are displayed on the footer.
        await expect(await mainPage.checkIfFooterContactsAndEmailLinkIsDisplayed()).toBe(true);
        // Step 10 Check that the Rentzila logo is displayed on the footer.
        await expect(await mainPage.checkIfFooterLogoIsDisplayed()).toBe(true);
        // Step 11 Check that the ""Усі права захищені"" label is displayed on the footer.
        await expect(await mainPage.checkIfFooterCopyrightLabelIsDisplayed()).toBe(true);
        // Step 12 Click the ""Політика конфіденційності"" link on the footer.
        await mainPage.clickOnConfidPoliticLink();
        await mainPage.waitUntilUrlChange(`${baseURL}privacy-policy/`,3000);
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}privacy-policy/`);
        await expect(browser).toHaveTitleContaining('Політика конфіденційності');
        await mainPage.browserBack();
        // Step 13 Scroll down to the footer and click the ""Правила використання файлів cookie"" link  on the footer.
        // await mainPage.clickOnTelegramClose();
        await mainPage.scrollIntoFooter();
        await mainPage.clickOnCookieUsingRulesLink();
        await mainPage.waitUntilUrlChange(`${baseURL}cookie-policy/`,3000);
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}cookie-policy/`);
        await expect(browser).toHaveTitleContaining('Політика використання cookie');
        await mainPage.browserBack();
        // Step 14 Scroll down to the footer and click the ""Умови доступу та користування"" link on the footer.
        await mainPage.scrollIntoFooter();
        await mainPage.clickOnAccessAndUsingTermsLink();
        await mainPage.waitUntilUrlChange(`${baseURL}terms-conditions/`,3000);
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}terms-conditions/`);
        await expect(browser).toHaveTitleContaining('Угода користувача');
        await mainPage.browserBack();
        // Step 15 Scroll down to the footer and click on the ""Оголошення"" link.
        await mainPage.scrollIntoFooter();
        await mainPage.clickOnAnnouncementsLink();
        await mainPage.waitUntilUrlChange(`${baseURL}products/`,3000);
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}products/`);
        await expect(await productsPage.isSearchInputDisplayed()).toBe(true);
        await expect(await productsPage.getSearchInputPlaceholder()).toBe('Пошук оголошень або послуг');
        // Step 16  Click the Rentzila logo on the header.
        await productsPage.clickOnHeaderLogo();
        await mainPage.waitUntilUrlChange(`${baseURL}`,3000);
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}`);
        await expect(await mainPage.checkIfPageTitleIsDisplayed()).toBe(true);
        await expect(await mainPage.getTextOfPageTitle()).toBe('Сервіс пошуку послуг спецтехніки');
        // Step 17 Scroll down to the footer and click the ""Тендери"" link.
        await mainPage.scrollIntoFooter();
        await mainPage.clickOnTendersLink();
        await mainPage.waitUntilUrlChange(`${baseURL}tenders-map/`,3000);
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}tenders-map/`);
        await expect(await tendersPage.isSearchInputDisplayed()).toBe(true);
        await expect(await tendersPage.getSearchInputPlaceholder()).toBe('Пошук тендера за ключовими словами');
        // Step 18 Click the Rentzila logo on the header.
        await tendersPage.clickOnHeaderLogo();
        await mainPage.waitUntilUrlChange(`${baseURL}`,3000);
        await expect(await mainPage.getCurrentUrl()).toBe(`${baseURL}`);
        // Step 19 Click on the ""info@rentzila.com.ua"" email on the footer.
        await mainPage.scrollIntoFooter();
        await expect(await mainPage.getContactAndEmailLinkAddress()).toBe('mailto:info@rentzila.com.ua');
    });
});

