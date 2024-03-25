import { $ } from '@wdio/globals'
import Page from './page.js';

const telegramCloseXLoc = 'div[data-testid="crossButton"]';
const servicesBlockLoc = 'section[data-testid="services"]';
const servicesPopularTitleLoc = 'div[data-testid="services__populyarni"]';
const popularniServiceElementLoc = `${servicesBlockLoc} [class*="RentzilaProposes_proposes_item"]`;
const popularniServiceElementNameLoc = `${popularniServiceElementLoc} [class*="RentzilaProposes_name"]`;
const specialEquipmentBlockLoc = 'section[data-testid="specialEquipment"]';
const specialEquipmentPopularniTitleLoc = 'h3[data-testid="specialEquipment__populyarna"]';
const popularniSpecialEquipmentElementLoc =`${specialEquipmentBlockLoc} [class*="RentzilaProposes_proposes_item"]`;
const popularniSpecialEquipmentElementNameLoc = `${popularniSpecialEquipmentElementLoc} [class*="RentzilaProposes_name"]`;
const footerLoc = 'div[class*="Footer_footer"]';
const footerLogoLoc = `${footerLoc} div[data-testid="logo"]`;
const footerAboutUsLabelLoc = `${footerLoc} div[data-testid="content"]`;
const footerConfidPoliticLinkLoc = `${footerLoc} a[href="/privacy-policy/"]`;
const footerCookieUsingRulesLinkLoc = `${footerLoc} a[href="/cookie-policy/"]`;
const footerAccessAndUsingTermsLinkLoc = `${footerLoc} a[href="/terms-conditions/"]`;
const footerForUsersLabelLoc = `${footerLoc} div[class*="RentzilaForBuyers_title"]`;
const footerAnnouncementsLinkLoc = `${footerLoc} a[href="/products/"]`;
const footerTendersLinkLoc = `${footerLoc} a[href="/tenders-map/"]`;
const footerContactsAndEmailLinkLoc = `${footerLoc} a[href="mailto:info@rentzila.com.ua"]`;
const footerCopyrightLabelLoc = `${footerLoc} div[data-testid="copyright"]`;
const pageTitleLoc = 'h1[class*="HeroSection_title"]';
const searchInputLoc = 'input[data-testid="searchInput"]';
const searchDropDownLoc = 'div[class*="LeftsideSearch_container"]';
const searchDropDownItemLoc = 'h6[class*="LeftsideSearch_title"]';
const searchDropDownItemSearchHistoryLoc = `${searchDropDownItemLoc}:nth-of-type(1)`;
const searchDropDownItemServicesLoc = `${searchDropDownItemLoc}:nth-of-type(2)`;
const searchDropDownItemCategoriesLoc = `${searchDropDownItemLoc}:nth-of-type(3)`;
const searchPosivTechAndGrainCulturesLoc = 'div=Посів технічних та зернових культур';
const searchObpryskLoc = 'div=Обприскування';
const searchVnesDobryvLoc = 'div=Внесення добрив';
const searchExcavForZnesLoc = 'div=екскаватори для знесення';
const searchVacuumExcavLoc = 'div=вакуумні екскаватори';
const searchGusenExcavLoc = 'div=гусеничні екскаватори';





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

const baseURL = browser.options.baseUrl;

class MainPage extends Page {

    


    // get footerLogo() {return super.getElement(footerLogoLoc)};
    // get aboutUs() {return super.getElement(footerAboutUsLabelLoc)};

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
        await super.waitUntilUrlChange(`${baseURL}products/`,3000);
    }

    public async scrollIntoSpecialEquipmentBlock(): Promise<void> {
        await super.scrollElementIntoViewTop(specialEquipmentBlockLoc);
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
        return (await (await this.getPopularniSpecialEquipmentItem(i)).$(popularniSpecialEquipmentElementNameLoc).getText());
    }

    public async clickOnPopularniSpecialEquipmentItem(i: number): Promise<void> {
        await super.click(await this.getPopularniSpecialEquipmentItem(i));
        await super.pause(1500);
    }

    public async scrollIntoFooter(): Promise<void> {
        await super.scrollElementIntoViewTop(footerLoc);
    }

    public async checkIfFooterIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerLoc);
      }

    public async checkIfFooterLogoIsNotClickable(): Promise<boolean>{
        return !(await super.isElementClickable(footerLogoLoc));
    }

    public async checkIfFooterAboutUsLabelIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerAboutUsLabelLoc);
      }

    public async checkIfFooterConfidPoliticLinkIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerConfidPoliticLinkLoc);
      }

    public async checkIfFooterCookieUsingRulesLinkIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerCookieUsingRulesLinkLoc);
      }

    public async checkIfFooterAccessAndUsingTermsLinkIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerAccessAndUsingTermsLinkLoc);
      }

    public async checkIfFooterForUsersLabelIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerForUsersLabelLoc);
      }

    public async checkIfFooterAnnouncementsLinkIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerAnnouncementsLinkLoc);
      }

    public async checkIfFooterTendersLinkIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerTendersLinkLoc);
      }

    public async checkIfFooterContactsAndEmailLinkIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerContactsAndEmailLinkLoc);
      }

    public async checkIfFooterLogoIsDisplayed(): Promise<boolean> {
        return super.isElementDisplayed(footerLogoLoc);
      }

    public async checkIfFooterCopyrightLabelIsDisplayed(): Promise<boolean> {
       return super.isElementDisplayed(footerCopyrightLabelLoc);
    }

    public async clickOnConfidPoliticLink(): Promise<void> {
      await super.click(footerConfidPoliticLinkLoc);
  }

    public async clickOnCookieUsingRulesLink(): Promise<void> {
      await super.click(footerCookieUsingRulesLinkLoc);
  }
    
    public async clickOnAccessAndUsingTermsLink(): Promise<void> {
      await super.click(footerAccessAndUsingTermsLinkLoc);
}

    public async clickOnAnnouncementsLink(): Promise<void> {
      await super.click(footerAnnouncementsLinkLoc);
}

    public async checkIfPageTitleIsDisplayed(): Promise<boolean> {
      return super.isElementDisplayed(pageTitleLoc);
}

    public async getTextOfPageTitle(): Promise<string> {
    return super.getText(pageTitleLoc);
   }

   public async clickOnTendersLink(): Promise<void> {
    await super.click(footerTendersLinkLoc);
}

   public async getContactAndEmailLinkAddress(): Promise<string> {
    return super.getElementAttribute(footerContactsAndEmailLinkLoc,'href');
}

   public async clickOnSearchInput(): Promise<void> {
     await super.click(searchInputLoc);
}

  public async checkIfSearchDropDownIsDisplayed(): Promise<boolean> {
    return super.isElementDisplayed(searchDropDownLoc);
}

public async checkIfHistoryOfSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchDropDownItemSearchHistoryLoc);
}

public async checkIfServicesSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchDropDownItemServicesLoc);
}

public async checkIfCategoriesSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchDropDownItemCategoriesLoc);
}

public async checkIfPosivTechAndGrainCultInServicesSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchPosivTechAndGrainCulturesLoc);
}

public async checkIfObpryskInServicesSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchObpryskLoc);
}

public async checkIfVnesDobryvServicesSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchVnesDobryvLoc);
}

public async checkIfExcavForZnesInCategoriesSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchExcavForZnesLoc);
}

public async checkIfVacuumExcavInCategoriesSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchVacuumExcavLoc);
}

public async checkIfGusenExcavInCategoriesSearchIsDisplayed(): Promise<boolean> {
  return super.isElementDisplayed(searchGusenExcavLoc);
}

public async setValueInSearchInput(value: string): Promise<void> {
  await super.setValue(searchInputLoc,value);
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