/**
 * Chomp Food Database API Documentation
 * ## Important An **[API key](https://chompthis.com/api/)** is required for access to this API. Get yours at **[https://chompthis.com/api](https://chompthis.com/api/)**.  ### Getting Started   * **[Subscribe](https://chompthis.com/api/#pricing)** to the API.   * Scroll down and click the \"**Authorize**\" button.   * Enter your API key into the \"**value**\" input, click the \"**Authorize**\" button, then click the \"**Close**\" button.   * Scroll down to the section titled \"**default**\" and click on the API endpoint you wish to use.   * Click the \"**Try it out**\" button.   * Enter the information the endpoint requires.   * Click the \"**Execute**\" button.  ### Example    * Branded food response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/branded-food-response-object.json)**   * Ingredient response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/ingredient-response-object.json)**   * Error response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/error-response-object.json)**  ### How Do I Find My API Key?   * Your API key was sent to the email address you used to create your subscription.   * You will also find your API key in the **[Client Center](https://chompthis.com/api/manage.php)**.   * Read **[this article](https://desk.zoho.com/portal/chompthis/kb/articles/how-do-i-find-my-api-key)** for more information.  ### Helpful Links   * **Help & Support**     * [Knowledge Base &raquo;](https://desk.zoho.com/portal/chompthis/kb/chomp)     * [Support &raquo;](https://chompthis.com/api/ticket-new.php)     * [Client Center &raquo;](https://chompthis.com/api/manage.php)   * **Pricing**     * [Subscription Options &raquo;](https://chompthis.com/api/)     * [Cost Calculator &raquo;](https://chompthis.com/api/cost-calculator.php)   * **Guidelines**     * [Terms & License &raquo;](https://chompthis.com/api/terms.php)     * [Attribution &raquo;](https://chompthis.com/api/docs/attribution.php) 
 *
 * OpenAPI spec version: 1.0.0-oas3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BrandedFoodObjectCountryDetails } from './brandedFoodObjectCountryDetails';
import { BrandedFoodObjectDietFlags } from './brandedFoodObjectDietFlags';
import { BrandedFoodObjectDietLabels } from './brandedFoodObjectDietLabels';
import { BrandedFoodObjectNutrients } from './brandedFoodObjectNutrients';
import { BrandedFoodObjectPackage } from './brandedFoodObjectPackage';
import { BrandedFoodObjectPackagingPhotos } from './brandedFoodObjectPackagingPhotos';
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
    /**
     * This food item's ingredients from greatest quantity to least
     */
    ingredients?: string;
    _package?: BrandedFoodObjectPackage;
    serving?: BrandedFoodObjectServing;
    categories?: Array<string>;
    /**
     * An array containing nutrient informatio objects for this food item
     */
    nutrients?: Array<BrandedFoodObjectNutrients>;
    dietLabels?: BrandedFoodObjectDietLabels;
    /**
     * An array of ingredient objects that were flagged while grading this item for compatibility with each diet
     */
    dietFlags?: Array<BrandedFoodObjectDietFlags>;
    packagingPhotos?: BrandedFoodObjectPackagingPhotos;
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
     * A description of this item
     */
    description?: string;
    /**
     * An array of keywords that can be used to describe this item
     */
    keywords?: Array<string>;
}