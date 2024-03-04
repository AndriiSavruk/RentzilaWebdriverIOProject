import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    // public open (path: string) {
    //     return browser.url(path);
    // }
    // public getElement(element: string) {
    //     return $(element);
    //   }

      public async open(path: string): Promise<void> {
        await browser.url(path);
      }
    
      public async pause(milliseconds = 5000): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, milliseconds));
      }
      public async getCurrentUrl(): Promise<string> {
        browser.waitUntil(async () => (await browser.isLoading()) === false, {
          timeout: 5000,
          timeoutMsg: 'Browser did not finish loading within 5 seconds',
          interval: 500,
        });
        const url: string = await browser.getUrl();
        return url;
      }
    
      /**
       * browser back action
       */
      public async browserBack(): Promise<void> {
        await browser.back();
      }
    
      public async getElement(element: string | WebdriverIO.Element): Promise<WebdriverIO.Element> {
        return $(element);
      }
    
      public async getAllElements(elements: string): Promise<WebdriverIO.ElementArray> {
        return $$(elements);
      }

      public async click(element: string | WebdriverIO.Element): Promise<void> {
        await this.waitUntilElementDisplayed(element);
        await (await this.getElement(element)).click();
      }

      public async clickByCoordinates(
        element: string | WebdriverIO.Element,
        x_cord: number,
        y_cord: number
      ): Promise<void> {
        await this.waitUntilElementDisplayed(element);
        await (await this.getElement(element)).click({ x: x_cord, y: y_cord });
      }
    
      public async hover(element: string | WebdriverIO.Element): Promise<void> {
        await this.waitUntilElementDisplayed(element);
        await (await this.getElement(element)).moveTo();
      }
    
      public async clearValue(element: string | WebdriverIO.Element): Promise<void> {
        await this.click(element);
        await (await this.getElement(element)).clearValue();
      }
    
      public async clickEnterKey(): Promise<void> {
        await browser.keys('\uE007');
      }
    
      public async getText(element: string | WebdriverIO.Element): Promise<string> {
        await this.waitUntilElementDisplayed(element);
        return (await this.getElement(element)).getText();
      }
    
      public async getValue(element: string | WebdriverIO.Element): Promise<string> {
        await this.waitUntilElementDisplayed(element);
        return (await this.getElement(element)).getValue();
      }
    
      public async getElementValue(element: string): Promise<string> {
        await this.waitUntilElementDisplayed(element);
        return (await this.getElement(element)).getValue();
      }
    
      public async getSelectFieldValue(selectField: string | WebdriverIO.Element): Promise<string> {
        const selectElement = await this.getElement(selectField);
        return browser.execute((selectFld) => {
          // @ts-ignore
          return selectFld.options[selectFld.selectedIndex].text;
        }, selectElement);
      }
    
      public async getElementAttribute(
        element: string | WebdriverIO.Element,
        attributeName: string
      ): Promise<string> {
        return (await this.getElement(element)).getAttribute(attributeName);
      }
    
      public async addValue(element: string, value: string): Promise<void> {
        await this.waitUntilElementDisplayed(element);
        await (await this.getElement(element)).addValue(value);
      }
    
      public async setValue(element: string | WebdriverIO.Element, value: string): Promise<void> {
        await this.waitUntilElementDisplayed(element);
        await (await this.getElement(element)).setValue(value);
      }
    
      public async scrollElementIntoViewTop(element: any): Promise<void> {
        await (
          await this.getElement(element)
        ).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      }
    
      public async scrollElementIntoViewCenter(element: any): Promise<void> {
        await (
          await this.getElement(element)
        ).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
    
      public async scrollElementIntoViewBottom(element: any): Promise<void> {
        await (await this.getElement(element)).scrollIntoView(false);
      }
    
      public async isValueEntered(
        element: string | WebdriverIO.Element,
        value: string
      ): Promise<boolean> {
        const text = await this.getText(element);
        return text === value;
      }
    
      public async isEnteredValueNotEmpty(element: string | WebdriverIO.Element): Promise<boolean> {
        const text = await this.getText(element);
        return text.length > 0;
      }
    
      public async isElementClickable(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isClickable();
      }
    
      public async isElementEnabled(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isEnabled();
      }
    
      public async isElementFocused(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isFocused();
      }
    
      public async isElementDisplayed(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isDisplayed();
      }
    
      public async isElementDisplayedInViewport(
        element: string | WebdriverIO.Element
      ): Promise<boolean> {
        return (await this.getElement(element)).isDisplayedInViewport();
      }
    
      public async isElementExisting(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isExisting();
      }
    
      /* public async areElementsDisplayed(elements: string): Promise<boolean> {
          if ((await this.getAllElements(elements)).length === 0) {
            return false;
          }
    
          for (const element of await this.getAllElements(elements)) {
            if (!(await this.isElementDisplayed(element))) {
              return false;
            }
          }
    
          return true;
        }*/
    
      public async waitUntilElementDisplayed(element: string | WebdriverIO.Element): Promise<void> {
        await browser.waitUntil(() => this.isElementDisplayed(element));
      }
    
      public async waitUntilElementDisplayedInViewport(
        element: string | WebdriverIO.Element
      ): Promise<void> {
        await browser.waitUntil(() => this.isElementDisplayedInViewport(element));
      }
    
      public async waitUntilElementNotDisplayed(
        element: string | WebdriverIO.Element
      ): Promise<boolean> {
        return browser.waitUntil(async () => !(await this.isElementDisplayed(element)));
      }
    
      public async waitUntilUrlChange(expectedUrl: string, timeout: number = 5000): Promise<void> {
        await browser.waitUntil(
          async () => {
            const currentUrl = await this.getCurrentUrl();
            return currentUrl === expectedUrl;
          },
          {
            timeout,
            timeoutMsg: `Expected url to be "${expectedUrl}" but found "${await this.getCurrentUrl()}"`,
          }
        );
      }
    
      public async waitUntilUrlContains(
        expectedSubstring: string,
        timeout: number = 5000
      ): Promise<void> {
        await browser.waitUntil(
          async () => {
            const currentUrl = await this.getCurrentUrl();
            return currentUrl.includes(expectedSubstring);
          },
          {
            timeout,
            timeoutMsg: `Expected url to contain "${expectedSubstring}" but found "${await this.getCurrentUrl()}"`,
          }
        );
      }
    
      public async waitUntilNewWindowsIsOpened(timeout: number = 5000): Promise<void> {
        browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1, {
          timeout,
          timeoutMsg: 'Expected to have new windows opened',
        });
      }
    
      /**
       * Switches the browser tab to the other open window (assumes only two windows are open)
       * @throws {Error} throws an error if no other windows are found
       */
      public async changeWindow(): Promise<void> {
        const currentWindowHandle = await browser.getWindowHandle();
        const windowHandles = await browser.getWindowHandles();
        const newWindowHandle = windowHandles.find((handle) => handle !== currentWindowHandle);
    
        if (newWindowHandle) {
          await browser.switchToWindow(newWindowHandle);
        } else {
          throw new Error('No new windows is find');
        }
      }
    
      /**
       * Runs function inside frame or iframe
       * @param frameSelector selector corresponding to the frame, frame as WebdriverIO.Element, or its index
       * @param func function to be executed inside the frame
       */
      public async runInsideFrame(
        frameSelector: string | WebdriverIO.Element | number,
        func: () => void | Promise<void>
      ) {
        let frameElementOrIndex: WebdriverIO.Element | number;
    
        if (typeof frameSelector === 'string') {
          frameElementOrIndex = await $(frameSelector);
        } else {
          frameElementOrIndex = frameSelector;
        }
    
        await browser.switchToFrame(frameElementOrIndex);
        await func();
        await browser.switchToParentFrame();
      }
    
      /**
       * Clear bwoser local storage
       */
      public async clearLocalStorage(): Promise<void> {
        await browser.execute('window.localStorage.clear()');
      }
}
