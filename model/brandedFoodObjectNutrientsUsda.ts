/**
 * Chomp Food Database API Documentation
 * __Important:__   - An __[API key](https://chompthis.com/api/)__ is required for access to this API.   - Get yours at __[https://chompthis.com/api](https://chompthis.com/api/)__.  -----  __Getting Started:__   - __[Subscribe](https://chompthis.com/api/#pricing)__ to the API.   - Scroll down and click the \"__Authorize__\" button.   - Enter your API key into the \"__value__\" input, click the \"__Authorize__\" button, then click the \"__Close__\" button.   - Scroll down to the section titled \"__default__\" and click on the API endpoint you wish to use.   - Click the \"__Try it out__\" button.   - Enter the information the endpoint requires.   - Click the \"__Execute__\" button.  __Example:__    - __[View example](https://raw.githubusercontent.com/chompfoods/examples/master/response-object.json)__ API response object.  -----  __How Do I Find My API Key?__   - Your API key was sent to the email address you used to create your subscription.   - You will also find your API key in the __[Client Center](https://chompthis.com/api/manage.php)__.   - _Read __[this article](https://desk.zoho.com/portal/chompthis/kb/articles/how-do-i-find-my-api-key)__ for more information._  ||| | ------- | -------- | | [Knowledge Base](https://desk.zoho.com/portal/chompthis/kb/chomp) | [Pricing](https://chompthis.com/api/) | | [Attribution](https://chompthis.com/api/docs/attribution.php) | [Cost Calculator](https://chompthis.com/api/cost-calculator.php) | | [Terms & License](https://chompthis.com/api/terms.php) | [Database Search](https://chompthis.com/api/lookup.php) | | [Support](https://chompthis.com/api/ticket-new.php) | [Query Builder](https://chompthis.com/api/build.php) | | [Client Center](https://chompthis.com/api/manage.php) | | 
 *
 * OpenAPI spec version: 1.0.0-oas3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface BrandedFoodObjectNutrientsUsda { 
    /**
     * Nutrient ID
     */
    id?: number;
    /**
     * Nutrient name
     */
    name?: string;
    /**
     * Amount of the nutrient per 100g of food
     */
    per100g?: number;
    /**
     * The unit used for the measure of this nutrient
     */
    measurementUnit?: string;
    /**
     * Minimum nutrient value
     */
    min?: number;
    /**
     * Maximum nutrient value
     */
    max?: number;
    /**
     * Median nutrient value
     */
    median?: number;
    /**
     * Number of observations on which the value is based
     */
    dataPoints?: number;
    /**
     * Comments on any unusual aspect of the food nutrient. Examples might include why a nutrient value is different than typically expected.
     */
    footnote?: string;
    /**
     * Description of the nutrient source
     */
    source?: string;
    /**
     * Description of how the food nutrient value was obtained
     */
    description?: string;
}