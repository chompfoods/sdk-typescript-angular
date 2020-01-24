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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { BrandedFoodObject } from '../model/brandedFoodObject';
import { IngredientObject } from '../model/ingredientObject';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DefaultService {

    protected basePath = 'https://chompthis.com/api/v2';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get a branded food item using a barcode
     * ## Get data for a branded food using the food&#x27;s UPC/EAN barcode.  **Example**  &gt; &#x60;&#x60;&#x60;https://chompthis.com/api/v2/food/branded/barcode.php?api_key&#x3D;API_KEY&amp;code&#x3D;CODE&#x60;&#x60;&#x60;  **Tips**   * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks. 
     * @param code #### UPC/EAN barcode  **Example** &gt; &#x60;&#x60;&#x60;&amp;code&#x3D;0842234000988&#x60;&#x60;&#x60; 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public foodBrandedBarcodePhpGet(code: string, observe?: 'body', reportProgress?: boolean): Observable<BrandedFoodObject>;
    public foodBrandedBarcodePhpGet(code: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BrandedFoodObject>>;
    public foodBrandedBarcodePhpGet(code: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BrandedFoodObject>>;
    public foodBrandedBarcodePhpGet(code: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling foodBrandedBarcodePhpGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('code', <any>code);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys["api_key"]) {
            queryParameters = queryParameters.set('api_key', this.configuration.apiKeys["api_key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<BrandedFoodObject>(`${this.basePath}/food/branded/barcode.php`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a branded food item by name
     * ## Search for branded food items by name.  **Example** &gt; &#x60;&#x60;&#x60;https://chompthis.com/api/v2/food/branded/name.php?api_key&#x3D;API_KEY&amp;name&#x3D;NAME&#x60;&#x60;&#x60;  **Tips**   * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.  &gt; This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren&#x27;t sure how to upgrade your subscription. 
     * @param name #### Search for branded food items using a general food name keyword. This does not have to exactly match the \&quot;official\&quot; name for the food.  **Example** &gt; &#x60;&#x60;&#x60;&amp;name&#x3D;Starburst&#x60;&#x60;&#x60; 
     * @param limit #### Set maximum number of records you want the API to return.  **Example** &gt; &#x60;&#x60;&#x60;&amp;limit&#x3D;10&#x60;&#x60;&#x60; 
     * @param page #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on.  **Example** &gt; &#x60;&#x60;&#x60;&amp;page&#x3D;1&#x60;&#x60;&#x60; 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public foodBrandedNamePhpGet(name: string, limit?: number, page?: number, observe?: 'body', reportProgress?: boolean): Observable<BrandedFoodObject>;
    public foodBrandedNamePhpGet(name: string, limit?: number, page?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BrandedFoodObject>>;
    public foodBrandedNamePhpGet(name: string, limit?: number, page?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BrandedFoodObject>>;
    public foodBrandedNamePhpGet(name: string, limit?: number, page?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling foodBrandedNamePhpGet.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys["api_key"]) {
            queryParameters = queryParameters.set('api_key', this.configuration.apiKeys["api_key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<BrandedFoodObject>(`${this.basePath}/food/branded/name.php`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get data for branded food items using various search parameters
     * ## Search for branded food items using various parameters.  **Example** &gt; &#x60;&#x60;&#x60;https://chompthis.com/api/v2/food/branded/search.php?api_key&#x3D;API_KEY&amp;brand&#x3D;BRAND&amp;country&#x3D;COUNTRY&amp;page&#x3D;1&#x60;&#x60;&#x60;  **Tips**    * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.  &gt; This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren&#x27;t sure how to upgrade your subscription. 
     * @param allergen #### Filter the search to only include branded foods that contain a specific allergen.  **Example** &gt; &#x60;&#x60;&#x60;&amp;allergen&#x3D;Peanuts&#x60;&#x60;&#x60;  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter. 
     * @param brand #### Filter the search to only include branded foods that are owned by a specific brand.  **Example** &gt; &#x60;&#x60;&#x60;&amp;brand&#x3D;Starbucks&#x60;&#x60;&#x60; 
     * @param category #### Filter the search to only include branded foods from a specific category.  **Example** &gt; &#x60;&#x60;&#x60;&amp;category&#x3D;Plant Based Foods&#x60;&#x60;&#x60; 
     * @param country #### Filter the search to only include branded foods that are sold in a specific country.  **Example** &gt; &#x60;&#x60;&#x60;&amp;country&#x3D;United States&#x60;&#x60;&#x60;  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter. 
     * @param diet #### Filter the search to only include branded foods that are considered compatible with a specific diet.  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter. 
     * @param ingredient #### Filter the search to only include branded foods that contain a specific ingredient.  **Example** &gt; &#x60;&#x60;&#x60;&amp;ingredient&#x3D;Salt&#x60;&#x60;&#x60; 
     * @param keyword #### Filter the search to only include branded foods that are associated with a specific keyword.  **Example** &gt; &#x60;&#x60;&#x60;&amp;keyword&#x3D;Organic&#x60;&#x60;&#x60;  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter. 
     * @param mineral #### Filter the search to only include branded foods that contain a specific mineral.  **Example** &gt; &#x60;&#x60;&#x60;&amp;mineral&#x3D;Potassium&#x60;&#x60;&#x60; 
     * @param nutrient #### Filter the search to only include branded foods that contain a specific nutrient.  **Example** &gt; &#x60;&#x60;&#x60;&amp;nutrient&#x3D;Caffeine&#x60;&#x60;&#x60;  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter. 
     * @param palmOil #### Filter the search to only include branded foods that contain a specific ingredient made using palm oil.  **Example** &gt; &#x60;&#x60;&#x60;&amp;palm_oil&#x3D;E160a Beta Carotene&#x60;&#x60;&#x60; 
     * @param trace ### Filter the search to only include branded foods that contain a specific trace ingredient.  **Example** &gt; &#x60;&#x60;&#x60;&amp;trace&#x3D;Tree Nuts&#x60;&#x60;&#x60;  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter. 
     * @param vitamin #### Filter the search to only include branded foods that contain a specific vitamin.  **Example** &gt; &#x60;&#x60;&#x60;&amp;vitamin&#x3D;Biotin&#x60;&#x60;&#x60; 
     * @param limit #### Set maximum number of records you want the API to return.  **Example** &gt; &#x60;&#x60;&#x60;&amp;limit&#x3D;10&#x60;&#x60;&#x60; 
     * @param page #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on.  **Example** &gt; &#x60;&#x60;&#x60;&amp;page&#x3D;1&#x60;&#x60;&#x60; 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public foodBrandedSearchPhpGet(allergen?: string, brand?: string, category?: string, country?: string, diet?: string, ingredient?: string, keyword?: string, mineral?: string, nutrient?: string, palmOil?: string, trace?: string, vitamin?: string, limit?: number, page?: number, observe?: 'body', reportProgress?: boolean): Observable<BrandedFoodObject>;
    public foodBrandedSearchPhpGet(allergen?: string, brand?: string, category?: string, country?: string, diet?: string, ingredient?: string, keyword?: string, mineral?: string, nutrient?: string, palmOil?: string, trace?: string, vitamin?: string, limit?: number, page?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BrandedFoodObject>>;
    public foodBrandedSearchPhpGet(allergen?: string, brand?: string, category?: string, country?: string, diet?: string, ingredient?: string, keyword?: string, mineral?: string, nutrient?: string, palmOil?: string, trace?: string, vitamin?: string, limit?: number, page?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BrandedFoodObject>>;
    public foodBrandedSearchPhpGet(allergen?: string, brand?: string, category?: string, country?: string, diet?: string, ingredient?: string, keyword?: string, mineral?: string, nutrient?: string, palmOil?: string, trace?: string, vitamin?: string, limit?: number, page?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {















        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (allergen !== undefined && allergen !== null) {
            queryParameters = queryParameters.set('allergen', <any>allergen);
        }
        if (brand !== undefined && brand !== null) {
            queryParameters = queryParameters.set('brand', <any>brand);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (country !== undefined && country !== null) {
            queryParameters = queryParameters.set('country', <any>country);
        }
        if (diet !== undefined && diet !== null) {
            queryParameters = queryParameters.set('diet', <any>diet);
        }
        if (ingredient !== undefined && ingredient !== null) {
            queryParameters = queryParameters.set('ingredient', <any>ingredient);
        }
        if (keyword !== undefined && keyword !== null) {
            queryParameters = queryParameters.set('keyword', <any>keyword);
        }
        if (mineral !== undefined && mineral !== null) {
            queryParameters = queryParameters.set('mineral', <any>mineral);
        }
        if (nutrient !== undefined && nutrient !== null) {
            queryParameters = queryParameters.set('nutrient', <any>nutrient);
        }
        if (palmOil !== undefined && palmOil !== null) {
            queryParameters = queryParameters.set('palm_oil', <any>palmOil);
        }
        if (trace !== undefined && trace !== null) {
            queryParameters = queryParameters.set('trace', <any>trace);
        }
        if (vitamin !== undefined && vitamin !== null) {
            queryParameters = queryParameters.set('vitamin', <any>vitamin);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys["api_key"]) {
            queryParameters = queryParameters.set('api_key', this.configuration.apiKeys["api_key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<BrandedFoodObject>(`${this.basePath}/food/branded/search.php`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get raw/generic food ingredient item(s)
     * ## Get data for a specific ingredient or a specific set of ingredients.  **Example #1: Single Ingredient** &gt; &#x60;&#x60;&#x60;https://chompthis.com/api/v2/ingredient/search.php?api_key&#x3D;API_KEY&amp;find&#x3D;broccoli&amp;raw&#x3D;true&#x60;&#x60;&#x60;  **Example #2: Set of Ingredients** &gt; &#x60;&#x60;&#x60;https://chompthis.com/api/v2/ingredient/search.php?api_key&#x3D;API_KEY&amp;find&#x3D;broccoli,cauliflower,spinach&amp;list&#x3D;true&amp;raw&#x3D;true&#x60;&#x60;&#x60;  **Tips**   * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.  &gt; This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren&#x27;t sure how to upgrade your subscription. 
     * @param find Search our database for a single ingredient or a specific set of ingredients.  **Example #1: Single Ingredient** &gt; &#x60;&#x60;&#x60;&amp;find&#x3D;broccoli&#x60;&#x60;&#x60;  **Example #2: Set of Ingredients** &gt; &#x60;&#x60;&#x60;&amp;find&#x3D;broccoli,cauliflower,spinach&amp;list&#x3D;true&#x60;&#x60;&#x60;  **Important Notes**    * Set the \&quot;list\&quot; parameter to \&quot;true\&quot; before passing in a comma-separated list of ingredients.   * Comma-separated lists cannot contain more than **15 ingredients**. You must perform additional API calls if you are looking up more than 15 ingredients. 
     * @param list #### Setting &#x60;&#x60;&#x60;&amp;list&#x3D;true&#x60;&#x60;&#x60; will configure this endpoint to allow searching for ingredients using a comma-separated list. By default, this endpoint will **only** return results for the first ingredient.  **Example** &gt; &#x60;&#x60;&#x60;&amp;list&#x3D;true&#x60;&#x60;&#x60; 
     * @param raw #### Optionally filter the search result to only include raw ingredients.  **Example** &gt; &#x60;&#x60;&#x60;&amp;raw&#x3D;true&#x60;&#x60;&#x60; 
     * @param limit #### Set maximum number of records you want the API to return, per search term.  **Example** &gt; &#x60;&#x60;&#x60;&amp;limit&#x3D;3&#x60;&#x60;&#x60; 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public foodIngredientSearchPhpGet(find: number, list: boolean, raw?: boolean, limit?: number, observe?: 'body', reportProgress?: boolean): Observable<IngredientObject>;
    public foodIngredientSearchPhpGet(find: number, list: boolean, raw?: boolean, limit?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IngredientObject>>;
    public foodIngredientSearchPhpGet(find: number, list: boolean, raw?: boolean, limit?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IngredientObject>>;
    public foodIngredientSearchPhpGet(find: number, list: boolean, raw?: boolean, limit?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (find === null || find === undefined) {
            throw new Error('Required parameter find was null or undefined when calling foodIngredientSearchPhpGet.');
        }

        if (list === null || list === undefined) {
            throw new Error('Required parameter list was null or undefined when calling foodIngredientSearchPhpGet.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (find !== undefined && find !== null) {
            queryParameters = queryParameters.set('find', <any>find);
        }
        if (list !== undefined && list !== null) {
            queryParameters = queryParameters.set('list', <any>list);
        }
        if (raw !== undefined && raw !== null) {
            queryParameters = queryParameters.set('raw', <any>raw);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys["api_key"]) {
            queryParameters = queryParameters.set('api_key', this.configuration.apiKeys["api_key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<IngredientObject>(`${this.basePath}/food/ingredient/search.php`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
