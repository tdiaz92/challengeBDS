import { $ } from '@wdio/globals'

class EbayResultsPage {
    
    get results () {
        return $('//android.view.View[contains(@text, "resultados")]');
    }

    async showResults () {
       var results = (await this.results.getText()).replace('resultados', ' ');
       console.log("Results for this search: "+ results);
    }
}

export default new EbayResultsPage();