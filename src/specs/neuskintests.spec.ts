import { test } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { ProductsContentPage } from '../pages/ProductsContentPage';

test.use({ launchOptions: { slowMo: 20 } });
test.describe.configure({ mode: 'parallel' });

test.describe('NUSKIN Product scenarios', () => {
  let basePage;
  let homePage;
  let productsContentPage;

  // test('Nuskin Beauty Devices product content verification',async ({ page,playwright}, testInfo) => {
   
  //   basePage = new BasePage(page);
  //   homePage = new HomePage(page);
  //   productsContentPage=new ProductsContentPage(page);
  //   await basePage.navigate();
  //   await homePage.gotoProduct("Beauty Devices");
  //   await productsContentPage.clickEachProduct("Beauty Devices",testInfo,playwright);
  // });

  // test('Nuskin Skin & Beauty product content verification', async ({ page,playwright}, testInfo) => {
  
  //   basePage = new BasePage(page);
  //   homePage = new HomePage(page);
  //   productsContentPage = new ProductsContentPage(page);
  //   await basePage.navigate();
  //   await homePage.gotoProduct('Skin & Beauty');
  //   await productsContentPage.clickEachProduct('Skin & Beauty',testInfo,playwright);
  // });

  test('Nuskin Nutrition product content verification', async ({baseURL,page,playwright}, testInfo) => {
    basePage = new BasePage(page);
    homePage = new HomePage(page);
    productsContentPage = new ProductsContentPage(page);
    await basePage.navigate();
    await homePage.gotoProduct('Nutrition');
    await productsContentPage.clickEachProduct('Nutrition',testInfo,playwright,baseURL);
  });

  // test('Nuskin Product Lines product content verification', async ({ page,playwright}, testInfo) => {
 
  //   basePage = new BasePage(page);
  //   homePage = new HomePage(page);
  //   productsContentPage=new ProductsContentPage(page);
  //   await basePage.navigate();
  //   await homePage.gotoProduct("Product Lines");
  //   await productsContentPage.clickEachProduct("Product Lines",testInfo,playwright);
  // });

  // test('Nuskin New & Loved product content verification', async ({baseURL, page,playwright}, testInfo) => {
  //   basePage = new BasePage(page);
  //   homePage = new HomePage(page);
  //   productsContentPage = new ProductsContentPage(page);
  //   await basePage.navigate();
  //   await homePage.gotoProduct('New & Loved');
  //   await productsContentPage.clickEachProduct('New & Loved',testInfo,playwright,baseURL);
  // });
  // test('Nuskin content verification for single Product ', async ({baseURL,page,playwright}, testInfo) => {
  //  // let productUrl = baseURL+"/us/en/product/wellness-premium-kit-US";
  //   let productUrl =baseURL+"/us/en/product/probio-pcc?categoryId=all_products";
  //   basePage = new BasePage(page);
  //   homePage = new HomePage(page);
  //   productsContentPage = new ProductsContentPage(page);
  //   await basePage.navigate();
  //   await productsContentPage.validateSingleProduct(productUrl,testInfo,playwright);
  // });

});
