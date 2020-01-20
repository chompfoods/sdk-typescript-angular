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
     * # Get data for a branded food using the food&#x27;s UPC/EAN barcode.  __Example:__ &#x60;&#x60;&#x60;https://chompthis.com/api/v2/food/branded/barcode.php?api_key&#x3D;API_KEY&amp;code&#x3D;CODE&#x60;&#x60;&#x60; 
     * @param code UPC/EAN barcode  __Example:__ 0842234000988  __Resources:__ [Database search](https://chompthis.com/api/lookup.php)  _Read [this article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do) for tips and tricks._ 
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
     * Get a branded food item using an ID number
     * # Get data for a branded food using Chomp&#x27;s internal ID number.  _Alternatively, set the \&quot;source\&quot; parameter to \&quot;USDA\&quot; and use the food&#x27;s FDC ID._  __Example:__ &#x60;&#x60;&#x60;https://chompthis.com/api/v2/food/branded/id.php?api_key&#x3D;API_KEY&amp;id&#x3D;ID&#x60;&#x60;&#x60; 
     * @param id Chomp branded food ID.  _Set \&quot;source&#x3D;USDA\&quot; if you wish to pass in the food&#x27;s FoodData Central ID (fdc_id)._  __Example #1:__ 15  __Resources:__ [Find branded food IDs](https://chompthis.com/api/lookup.php) 
     * @param source Specify the data source (optional).  You must pass in \&quot;USDA\&quot; if you want to look up a food item using a USDA FDC ID.  __Example:__ USDA _(defaults to \&quot;Chomp\&quot;)_ 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public foodBrandedIdPhpGet(id: number, source?: string, observe?: 'body', reportProgress?: boolean): Observable<BrandedFoodObject>;
    public foodBrandedIdPhpGet(id: number, source?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BrandedFoodObject>>;
    public foodBrandedIdPhpGet(id: number, source?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BrandedFoodObject>>;
    public foodBrandedIdPhpGet(id: number, source?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling foodBrandedIdPhpGet.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (source !== undefined && source !== null) {
            queryParameters = queryParameters.set('source', <any>source);
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

        return this.httpClient.get<BrandedFoodObject>(`${this.basePath}/food/branded/id.php`,
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
     * # Search for branded food items by name.  __Example:__ &#x60;&#x60;&#x60;https://chompthis.com/api/v2/food/branded/name.php?api_key&#x3D;API_KEY&amp;name&#x3D;NAME&#x60;&#x60;&#x60; 
     * @param name Branded food name  __Example:__ Starburst  __Resources:__ [Find branded food names](https://chompthis.com/api/lookup.php) 
     * @param limit Set maximum number of records you want the API to return.  ___Note:__ The maximum value is 10._  __Example:__ 3 _(defaults to 10)_ 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public foodBrandedNamePhpGet(name: string, limit?: number, observe?: 'body', reportProgress?: boolean): Observable<BrandedFoodObject>;
    public foodBrandedNamePhpGet(name: string, limit?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BrandedFoodObject>>;
    public foodBrandedNamePhpGet(name: string, limit?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BrandedFoodObject>>;
    public foodBrandedNamePhpGet(name: string, limit?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
     * # Search for branded food items using various parameters.  __Example:__ &#x60;&#x60;&#x60;https://chompthis.com/api/v2/food/branded/search.php?api_key&#x3D;API_KEY&amp;brand&#x3D;BRAND&amp;country&#x3D;COUNTRY&amp;page&#x3D;1&#x60;&#x60;&#x60;  ___Tip:__ Get started by using the [Query Builder](https://chompthis.com/api/build.php)._ 
     * @param allergen Specify a required allergen ingredient (optional)  __Example__: Peanuts  __Resources__: [List of allergens](https://chompthis.com/api/data/allergen.php) 
     * @param brand Specify a required brand (optional)  __Example__: Starbucks  __Resources__: [List of brands](https://chompthis.com/api/data/brand.php) 
     * @param category Specify a required category (optional)  __Example__: Pasta Dishes  __Resources__: [List of categories](https://chompthis.com/api/data/category.php) 
     * @param country Specify a required country (optional)  __Example__: United States  __Resources__: [List of countries](https://chompthis.com/api/data/country.php) 
     * @param diet Specify a required diet (optional)  _Filters the search to only include food items that are considered compatible with the following diets: Vegan, Vegetarian, Gluten Free_  __Example__: Gluten Free  __Resources__: [List of diets](https://chompthis.com/api/data/lifestyle.php) 
     * @param ingredient Specify a required ingredient (optional)  __Example__: Salt  __Resources__: [List of ingredients](https://chompthis.com/api/data/ingredient.php) 
     * @param keyword Specify a required keyword (optional)  __Example__: Starbucks  __Resources__: [List of brands](https://chompthis.com/api/data/brand.php) 
     * @param mineral Specify a required mineral (optional)  __Example__: Potassium  __Resources__: [List of minerals](https://chompthis.com/api/data/mineral.php) 
     * @param nutrient Specify a required nutrition label item (optional)  __Example__: Caffeine  __Resources__: [List of nutrition label items](https://chompthis.com/api/data/nutrition.php) 
     * @param palmOil Specify a required palm oil ingredient (optional)  __Example__: E160a Beta Carotene  __Resources__: [List of palm oil ingredients](https://chompthis.com/api/data/palm-oil.php) 
     * @param trace Specify a required trace ingredient (optional)  __Example__: Tree Nuts  __Resources__: [List of trace ingredients](https://chompthis.com/api/data/trace.php) 
     * @param vitamin Specify a required vitamin (optional)  __Example__: Biotin  __Resources__: [List of vitamins](https://chompthis.com/api/data/vitamin.php) 
     * @param limit Set maximum number of records you want the API to return.  ___Note:__ The maximum value is 10._  __Example:__ 3 _(defaults to 10)_ 
     * @param page Specify the search response page number.  _Each page will contain up to 10 items._  __Example__: 1 _(default)_ 
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
     * # Get data for a specific ingredient or a specific set of ingredients.  __Example:__ &#x60;&#x60;&#x60;https://chompthis.com/api/v2/ingredient/search.php?api_key&#x3D;API_KEY&amp;find&#x3D;STRING/LIST&amp;list&#x3D;BOOLEAN&amp;raw&#x3D;BOOLEAN&#x60;&#x60;&#x60; 
     * @param find Specify the ingredient name(s).  __Example #1:__ broccoli  __Example #2:__ broccoli,cauliflower,spinach  ___Important Note:__ Set the \&quot;is_list\&quot; parameter to true before passing in a comma-separated list of ingredients._ 
     * @param list Specify if you are searching for multiple ingredients.  _Setting this to true will configure this endpoint so that it accepts a comma-separated list of ingredients._  _By default, this endpoint expects a single ingredient._  __Example:__ true _(defaults to false)_ 
     * @param raw Specify if you only want data for raw ingredients.  __Example:__ true _(defaults to true)_ 
     * @param limit Set maximum number of records you want the API to return.  ___Important Note:__ Setting this to \&quot;1\&quot; will return 1 record per search term._  __Example:__ 1 _(defaults to 1, max is 3)_ 
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
