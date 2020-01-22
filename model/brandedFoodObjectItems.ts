/**
 * Chomp Food Database API Documentation
 * __Important:__   - An __[API key](https://chompthis.com/api/)__ is required for access to this API.   - Get yours at __[https://chompthis.com/api](https://chompthis.com/api/)__.  -----  __Getting Started:__   - __[Subscribe](https://chompthis.com/api/#pricing)__ to the API.   - Scroll down and click the \"__Authorize__\" button.   - Enter your API key into the \"__value__\" input, click the \"__Authorize__\" button, then click the \"__Close__\" button.   - Scroll down to the section titled \"__default__\" and click on the API endpoint you wish to use.   - Click the \"__Try it out__\" button.   - Enter the information the endpoint requires.   - Click the \"__Execute__\" button.  __Example:__    - Branded Food: __[View example](https://raw.githubusercontent.com/chompfoods/examples/master/branded-food-response-object.json)__ API response object.   - Ingredient: __[View example](https://raw.githubusercontent.com/chompfoods/examples/master/ingredient-response-object.json)__ API response object.  -----  __How Do I Find My API Key?__   - Your API key was sent to the email address you used to create your subscription.   - You will also find your API key in the __[Client Center](https://chompthis.com/api/manage.php)__.   - _Read __[this article](https://desk.zoho.com/portal/chompthis/kb/articles/how-do-i-find-my-api-key)__ for more information._  ||| | ------- | -------- | | [Knowledge Base](https://desk.zoho.com/portal/chompthis/kb/chomp) | [Pricing](https://chompthis.com/api/) | | [Attribution](https://chompthis.com/api/docs/attribution.php) | [Cost Calculator](https://chompthis.com/api/cost-calculator.php) | | [Terms & License](https://chompthis.com/api/terms.php) | [Database Search](https://chompthis.com/api/lookup.php) | | [Support](https://chompthis.com/api/ticket-new.php) | [Query Builder](https://chompthis.com/api/build.php) | | [Client Center](https://chompthis.com/api/manage.php) | | 
 *
 * OpenAPI spec version: 1.0.0-oas3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BrandedFoodObjectCalorieConversionFactor } from './brandedFoodObjectCalorieConversionFactor';
import { BrandedFoodObjectComponents } from './brandedFoodObjectComponents';
import { BrandedFoodObjectCountryDetails } from './brandedFoodObjectCountryDetails';
import { BrandedFoodObjectDietFlags } from './brandedFoodObjectDietFlags';
import { BrandedFoodObjectDietLabels } from './brandedFoodObjectDietLabels';
import { BrandedFoodObjectIngredients } from './brandedFoodObjectIngredients';
import { BrandedFoodObjectNutrients } from './brandedFoodObjectNutrients';
import { BrandedFoodObjectPackage } from './brandedFoodObjectPackage';
import { BrandedFoodObjectPackagingPhotos } from './brandedFoodObjectPackagingPhotos';
import { BrandedFoodObjectPortions } from './brandedFoodObjectPortions';
import { BrandedFoodObjectServing } from './brandedFoodObjectServing';

/**
 * An object containing information for this specific item.
 */
export interface BrandedFoodObjectItems { 
    /**
     * EAN/UPC barcode
     */
    barcode?: string;
    /**
     * Item name as provided by brand owner or as shown on packaging
     */
    name?: string;
    /**
     * The brand name that owns this item
     */
    brand?: string;
    ingredients?: BrandedFoodObjectIngredients;
    _package?: BrandedFoodObjectPackage;
    serving?: BrandedFoodObjectServing;
    categories?: Array<string>;
    nutrients?: BrandedFoodObjectNutrients;
    calorieConversionFactor?: BrandedFoodObjectCalorieConversionFactor;
    /**
     * The multiplication factor used to calculate protein from nitrogen
     */
    proteinConversionFactor?: number;
    dietLabels?: BrandedFoodObjectDietLabels;
    /**
     * An array of ingredient objects that were flagged while grading this item for compatibility with each diet
     */
    dietFlags?: Array<BrandedFoodObjectDietFlags>;
    packagingPhotos?: BrandedFoodObjectPackagingPhotos;
    /**
     * An array of objects containing the constituent parts of a food (e.g. bone is a component of meat)
     */
    components?: Array<BrandedFoodObjectComponents>;
    /**
     * An array of objects containing information on discrete amounts of a food found in this item
     */
    portions?: Array<BrandedFoodObjectPortions>;
    /**
     * An array of ingredients in this item that may cause allergic reactions in people
     */
    allergens?: Array<string>;
    /**
     * An array of brands we have associated with this item. Some items are sold by more than 1 brand.
     */
    brandList?: Array<string>;
    /**
     * An array of countries where this item is sold
     */
    countries?: Array<string>;
    countryDetails?: BrandedFoodObjectCountryDetails;
    /**
     * An array of ingredients made from palm oil
     */
    palmOilIngredients?: Array<string>;
    /**
     * An array of this item's ingredients
     */
    ingredientList?: Array<string>;
    /**
     * A boolean indicating if we have English ingredients for this item
     */
    hasEnglishIngredients?: boolean;
    /**
     * An array of minerals that this item contains
     */
    minerals?: Array<string>;
    /**
     * An array of trace ingredients that may be found in this item
     */
    traces?: Array<string>;
    /**
     * An array of vitamins that are found in this item
     */
    vitamins?: Array<string>;
    /**
     * An array containing other names commonly associated with this item. These generally clarify what the item is (e.g. when the brand name is \"BRAND's Spicy Enchilada\" a common name may be \"Chicken enchilada\")
     */
    commonNames?: Array<string>;
    /**
     * A description of this item
     */
    description?: string;
    /**
     * An array of keywords that can be used to describe this item
     */
    keywords?: Array<string>;
    /**
     * Comments on any unusual aspects of this item. Examples might include unusual aspects of the food overall.
     */
    footnote?: string;
}