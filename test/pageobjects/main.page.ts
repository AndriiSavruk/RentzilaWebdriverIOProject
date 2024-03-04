import { $ } from '@wdio/globals'
import Page from './page.js';

const telegramCloseXLoc = 'div[data-testid="crossButton"]';
const servicesBlockLoc = 'section[data-testid="services"]';
const servicesPopularTitleLoc = 'div[data-testid="services__populyarni"]';
const popularniServiceElementLoc = `${servicesBlockLoc} [class*="RentzilaProposes_proposes_item"]`;
const popularniServiceElementNameLoc = '[class*="RentzilaProposes_name"]';
const specialEquipmentBlockLoc = 'section[data-testid="specialEquipment"]';
const specialEquipmentPopularniTitleLoc = 'h3[data-testid="specialEquipment__populyarna"]';
const popularniSpecialEquipmentElementLoc =`${specialEquipmentBlockLoc} [class*="RentzilaProposes_proposes_item"]`;
const popularniSpecialEquipmentElementNameLoc = '[class*="RentzilaProposes_name"]';


const servicesBlockListLoc = '//*[@id="__next"]/div[3]/main/section[1]/div[2]';


const specialEquipmentPopularTitleLoc = 'h3[data-testid="specialEquipment__populyarna"]';
const specialEquipmentBlockListLoc = '//*[@id="__next"]/div[3]/main/section[2]/div[2]';



const enterBtnLoc = '//*[@id="__next"]/div[3]/header/div/div[2]/div/div[3]/div';
const enterInBtnLoc = '//*[@id="__next"]/div[1]/div/div[2]/form/div[3]/button';
const autorizationPopUpLoc = 'div[data-testid="authorizationContainer"]';
const emailFieldLoc = '#email';
const emailFieldWarningMessageLoc = '//*[@id="__next"]/div[1]/div/div[2]/form/div[1]/p';
const passwordFieldLoc = '#password';
const passwordFieldWarningMessageLoc = '//*[@id="__next"]/div[1]/div/div[2]/form/div[2]/div[1]/p';
const forgotPasswordLinkLoc = '//*[@id="__next"]/div[1]/div/div[2]/form/div[2]/div[2]/div[2]';
const passwordResetFormLoc = 'div[data-testid="restorePasswordContainer"]';
const recaptchaPasswordResetFormLoc = '//*[@id="recaptcha-anchor"]/div[4]';
const resetPasswordBtnLoc = '//*[@id="__next"]/div[1]/div[1]/div/form/div[3]/button';
const resetPasswordWarningMessageLoc = '//*[@id="__next"]/div[1]/div[1]/div/form/div[1]/p';

class MainPage extends Page {

    get servicesBlock() {return super.getElement(servicesBlockLoc);}
    get servicesBlockList() {return super.getElement(servicesBlockListLoc);}
    get servicesPopularTitle() {return super.getElement(servicesPopularTitleLoc);}
    get telegramCloseX() {return super.getElement(telegramCloseXLoc);}
    get specialEquipmentBlock() {return super.getElement(specialEquipmentBlockLoc);}
    get specialEquipmentPopularTitle() {return super.getElement(specialEquipmentPopularTitleLoc);}
    get specialEquipmentBlockList() {return super.getElement(specialEquipmentBlockListLoc);}



    get enterBtn() {return super.getElement(enterBtnLoc);}
    get enterInBtn() {return super.getElement(enterInBtnLoc);}
    get autorizationPopUp() {return super.getElement(autorizationPopUpLoc);}
    get emailField() {return super.getElement(emailFieldLoc);}
    get emailFieldWarningMessage() {return super.getElement(emailFieldWarningMessageLoc);}
    get passwordField() {return super.getElement(passwordFieldLoc);}
    get passwordFieldWarningMessage() {return super.getElement(passwordFieldWarningMessageLoc);}
    get forgotPasswordLink() {return super.getElement(forgotPasswordLinkLoc);}
    get passwordResetForm() {return super.getElement(passwordResetFormLoc);}
    get recaptchaPasswordResetForm() {return this.getElement(recaptchaPasswordResetFormLoc);}
    get resetPasswordBtn() {return this.getElement(resetPasswordBtnLoc);}
    get resetPasswordWarningMessage() {return this.getElement(resetPasswordWarningMessageLoc);}

    public async clickOnTelegramClose(): Promise<void> {
        await super.click(telegramCloseXLoc);
    }
    
    public async scrollIntoViewServicesBlock(): Promise<void> {
        await super.scrollElementIntoViewTop(servicesBlockLoc);
    }

    public async checkIfServicesPopularniTitleIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(servicesPopularTitleLoc);
      }

    public async numberOfPopularniServices(): Promise<number> {
        return (await super.getAllElements(popularniServiceElementLoc)).length;
      }

    public async getPopularniServicesItem(i: number): Promise<WebdriverIO.Element> {
        return (await super.getAllElements(popularniServiceElementLoc))[i];
    }

    public async getNameOfPopularniServiceItem(i: number): Promise<string> {
        return (await (await this.getPopularniServicesItem(i)).$(popularniServiceElementNameLoc).getText());
    }

    public async clickOnPopularniServiceItem(i: number): Promise<void> {
        await super.click(await this.getPopularniServicesItem(i));
    }

    public async scrollIntoSpecialEquipmentBlock(): Promise<void> {
        await super.scrollElementIntoViewTop(specialEquipmentBlockListLoc);
    }

    public async checkIfSpecialEquipmentPopularniTitleIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(specialEquipmentPopularniTitleLoc);
      }
      
    public async numberOfPopularniSpecialEquipment(): Promise<number> {
        return (await super.getAllElements(popularniSpecialEquipmentElementLoc)).length;
      }

    public async getPopularniSpecialEquipmentItem(i: number): Promise<WebdriverIO.Element> {
        return (await super.getAllElements(popularniSpecialEquipmentElementLoc))[i];
    }

    public async getNameOfPopularniSpecialEquipmentItem(i: number): Promise<string> {
        return (await (await this.getPopularniServicesItem(i)).$(popularniSpecialEquipmentElementNameLoc).getText());
    }

    public async clickOnPopularniSpecialEquipmentItem(i: number): Promise<void> {
        await super.click(await this.getPopularniSpecialEquipmentItem(i));
    }


    // public async clickOnServicesItem (i:number) {
    //     (await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']')).click();
    // }
    // public async getNameOfServiceItem (i:number) {
    //     await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']').waitForDisplayed({ timeout: 3000 })
    //     return (await $('//*[@id="__next"]/div[3]/main/section[1]/div[2]/div['+i+']')).getText(); 
    // }
    
    public async clickOnSpecialEquipmentItem (i:number) {
        (await $('//*[@id="__next"]/div[3]/main/section[2]/div[2]/div['+i+']/div[1]')).click();
    }
    public async getNameOfSpecialEquipmentItem (i:number) {
        return (await $('//*[@id="__next"]/div[3]/main/section[2]/div[2]/div[1]/div['+i+']')).getText(); 
    }



    public async clickOnEnterBtn () {
        (await this.enterBtn).click();
    }
    public async clickOnEnterInBtn () {
        (await this.enterInBtn).click();
    }
    public async setValueEmailField (a:string) {
        (await this.emailField).setValue(a);
    }
    public async clearEmailField () {
        (await this.emailField).clearValue();
    }
    public async setValuePasswordField(a:string) {
        (await this.passwordField).setValue(a);
    }
    public async clickOnForgotPasswordLink () {
        (await this.forgotPasswordLink).click();
    }
    // public async clickOnRecaptchaPasswordResetForm () {
    //     await this.recaptchaPasswordResetForm.waitForClickable({ timeout: 10000 });
    //     (await this.recaptchaPasswordResetForm).click();
    // }
    public async clickOnResetPasswordBtn () {
        (await this.resetPasswordBtn).click();
    }

}

export default new MainPage();