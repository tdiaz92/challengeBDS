import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import EbayHomePage from '../pageobjects/ebayHome.page.js';
import EbayResultsPage from '../pageobjects/ebayResults.page.js';

Given(/^I open (.*) page in chrome browser$/, async (url) => {
    await browser.url(url)
    EbayHomePage.swithContext();
});

When(/^I input (.*) in the search bar$/,async (product) => {
    await EbayHomePage.inputProduct(product)
});

Then(/I tap on glass icon/, async () => {
    await EbayHomePage.searchProduct()
});

Then(/I should see the number of results for my search/, async () => {
    await EbayResultsPage.showResults()
});
