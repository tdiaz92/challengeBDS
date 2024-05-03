import { $ } from '@wdio/globals'

class EbayHomePage {

    get searchBar () {
        return $('//android.widget.EditText[@resource-id="kw"]');
    }

    get glassIcon () {
        return $('//android.widget.Button[@text="Buscar"]');
    }

    async swithContext(){
        driver.switchContext("NATIVE_APP")
    }

    async inputProduct(){
        await this.searchBar.setValue('Pilas');
    }

    async searchProduct(){
        await this.glassIcon.click();
    }

}

export default new EbayHomePage();