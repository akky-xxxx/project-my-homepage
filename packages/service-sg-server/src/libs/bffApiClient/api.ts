/* tslint:disable */
/* eslint-disable */
/**
 * sg-server
 * api for ssg
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface HomeGETRes
 */
export interface HomeGETRes {
    /**
     * 
     * @type {Array<string>}
     * @memberof HomeGETRes
     */
    'mainVisualPaths': Array<string>;
}
/**
 * 
 * @export
 * @interface LocationsGETRes
 */
export interface LocationsGETRes {
    /**
     * 
     * @type {Array<LocationsGETResLocationsInner>}
     * @memberof LocationsGETRes
     */
    'locations': Array<LocationsGETResLocationsInner>;
}
/**
 * 
 * @export
 * @interface LocationsGETResLocationsInner
 */
export interface LocationsGETResLocationsInner {
    /**
     * 
     * @type {string}
     * @memberof LocationsGETResLocationsInner
     */
    'locationName': string;
    /**
     * 
     * @type {string}
     * @memberof LocationsGETResLocationsInner
     */
    'locationId': string;
    /**
     * 
     * @type {string}
     * @memberof LocationsGETResLocationsInner
     */
    'imagePath': string;
    /**
     * 
     * @type {number}
     * @memberof LocationsGETResLocationsInner
     */
    'imageNum': number;
}
/**
 * 
 * @export
 * @interface LocationsIdGETRes
 */
export interface LocationsIdGETRes {
    /**
     * 
     * @type {string}
     * @memberof LocationsIdGETRes
     */
    'locationName': string;
    /**
     * 
     * @type {Set<LocationsIdGETResImagesInner>}
     * @memberof LocationsIdGETRes
     */
    'images': Set<LocationsIdGETResImagesInner>;
}
/**
 * 
 * @export
 * @interface LocationsIdGETResImagesInner
 */
export interface LocationsIdGETResImagesInner {
    /**
     * 
     * @type {string}
     * @memberof LocationsIdGETResImagesInner
     */
    'imagePath': string;
    /**
     * 
     * @type {TagsIdGETResImagesItemsTakenAt}
     * @memberof LocationsIdGETResImagesInner
     */
    'takenAt': TagsIdGETResImagesItemsTakenAt;
    /**
     * 
     * @type {Set<LocationsIdGETResImagesItemsTagsInner>}
     * @memberof LocationsIdGETResImagesInner
     */
    'tags': Set<LocationsIdGETResImagesItemsTagsInner>;
}
/**
 * 
 * @export
 * @interface LocationsIdGETResImagesItemsTagsInner
 */
export interface LocationsIdGETResImagesItemsTagsInner {
    /**
     * 
     * @type {string}
     * @memberof LocationsIdGETResImagesItemsTagsInner
     */
    'tagId': string;
    /**
     * 
     * @type {string}
     * @memberof LocationsIdGETResImagesItemsTagsInner
     */
    'tagName': string;
}
/**
 * 
 * @export
 * @interface PhotoGalleryGETRes
 */
export interface PhotoGalleryGETRes {
    /**
     * 
     * @type {Array<PhotoGalleryGETResCardsInner>}
     * @memberof PhotoGalleryGETRes
     */
    'cards': Array<PhotoGalleryGETResCardsInner>;
}
/**
 * 
 * @export
 * @interface PhotoGalleryGETResCardsInner
 */
export interface PhotoGalleryGETResCardsInner {
    /**
     * 
     * @type {string}
     * @memberof PhotoGalleryGETResCardsInner
     */
    'imagePath': string;
    /**
     * 
     * @type {PhotoGalleryGETResCardsItemsLocation}
     * @memberof PhotoGalleryGETResCardsInner
     */
    'location': PhotoGalleryGETResCardsItemsLocation;
    /**
     * 
     * @type {PhotoGalleryGETResCardsItemsTakenAt}
     * @memberof PhotoGalleryGETResCardsInner
     */
    'takenAt': PhotoGalleryGETResCardsItemsTakenAt;
    /**
     * 
     * @type {Array<PhotoGalleryGETResCardsItemsTagsInner>}
     * @memberof PhotoGalleryGETResCardsInner
     */
    'tags': Array<PhotoGalleryGETResCardsItemsTagsInner>;
}
/**
 * 
 * @export
 * @interface PhotoGalleryGETResCardsItemsLocation
 */
export interface PhotoGalleryGETResCardsItemsLocation {
    /**
     * 
     * @type {string}
     * @memberof PhotoGalleryGETResCardsItemsLocation
     */
    'locationId': string;
    /**
     * 
     * @type {string}
     * @memberof PhotoGalleryGETResCardsItemsLocation
     */
    'locationName': string;
}
/**
 * 
 * @export
 * @interface PhotoGalleryGETResCardsItemsTagsInner
 */
export interface PhotoGalleryGETResCardsItemsTagsInner {
    /**
     * 
     * @type {string}
     * @memberof PhotoGalleryGETResCardsItemsTagsInner
     */
    'tagId': string;
    /**
     * 
     * @type {string}
     * @memberof PhotoGalleryGETResCardsItemsTagsInner
     */
    'tagName': string;
}
/**
 * 
 * @export
 * @interface PhotoGalleryGETResCardsItemsTakenAt
 */
export interface PhotoGalleryGETResCardsItemsTakenAt {
    /**
     * 
     * @type {string}
     * @memberof PhotoGalleryGETResCardsItemsTakenAt
     */
    'yearMonth': string;
    /**
     * 
     * @type {string}
     * @memberof PhotoGalleryGETResCardsItemsTakenAt
     */
    'viewTakenAt': string;
}
/**
 * 
 * @export
 * @interface TagsGETRes
 */
export interface TagsGETRes {
    /**
     * 
     * @type {Array<TagsGETResTagsInner>}
     * @memberof TagsGETRes
     */
    'tags': Array<TagsGETResTagsInner>;
}
/**
 * 
 * @export
 * @interface TagsGETResTagsInner
 */
export interface TagsGETResTagsInner {
    /**
     * 
     * @type {string}
     * @memberof TagsGETResTagsInner
     */
    'tagName': string;
    /**
     * 
     * @type {string}
     * @memberof TagsGETResTagsInner
     */
    'tagId': string;
    /**
     * 
     * @type {string}
     * @memberof TagsGETResTagsInner
     */
    'imagePath': string;
    /**
     * 
     * @type {number}
     * @memberof TagsGETResTagsInner
     */
    'imageNum': number;
}
/**
 * 
 * @export
 * @interface TagsIdGETRes
 */
export interface TagsIdGETRes {
    /**
     * 
     * @type {string}
     * @memberof TagsIdGETRes
     */
    'tagName': string;
    /**
     * 
     * @type {Array<TagsIdGETResImagesInner>}
     * @memberof TagsIdGETRes
     */
    'images': Array<TagsIdGETResImagesInner>;
}
/**
 * 
 * @export
 * @interface TagsIdGETResImagesInner
 */
export interface TagsIdGETResImagesInner {
    /**
     * 
     * @type {string}
     * @memberof TagsIdGETResImagesInner
     */
    'imageId': string;
    /**
     * 
     * @type {string}
     * @memberof TagsIdGETResImagesInner
     */
    'imagePath': string;
    /**
     * 
     * @type {PhotoGalleryGETResCardsItemsLocation}
     * @memberof TagsIdGETResImagesInner
     */
    'location': PhotoGalleryGETResCardsItemsLocation;
    /**
     * 
     * @type {TagsIdGETResImagesItemsTakenAt}
     * @memberof TagsIdGETResImagesInner
     */
    'takenAt': TagsIdGETResImagesItemsTakenAt;
    /**
     * 
     * @type {Array<PhotoGalleryGETResCardsItemsTagsInner>}
     * @memberof TagsIdGETResImagesInner
     */
    'tags': Array<PhotoGalleryGETResCardsItemsTagsInner>;
    /**
     * 
     * @type {string}
     * @memberof TagsIdGETResImagesInner
     */
    ''?: string;
}
/**
 * 
 * @export
 * @interface TagsIdGETResImagesItemsTakenAt
 */
export interface TagsIdGETResImagesItemsTakenAt {
    /**
     * 
     * @type {string}
     * @memberof TagsIdGETResImagesItemsTakenAt
     */
    'yearMonth': string;
    /**
     * 
     * @type {string}
     * @memberof TagsIdGETResImagesItemsTakenAt
     */
    'viewTakenAt': string;
}

/**
 * Class01TopApi - axios parameter creator
 * @export
 */
export const Class01TopApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * for top page
         * @summary Get Main Visual Paths
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiHome: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/home`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * Class01TopApi - functional programming interface
 * @export
 */
export const Class01TopApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = Class01TopApiAxiosParamCreator(configuration)
    return {
        /**
         * for top page
         * @summary Get Main Visual Paths
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiHome(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HomeGETRes>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiHome(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * Class01TopApi - factory interface
 * @export
 */
export const Class01TopApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = Class01TopApiFp(configuration)
    return {
        /**
         * for top page
         * @summary Get Main Visual Paths
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiHome(options?: any): AxiosPromise<HomeGETRes> {
            return localVarFp.getApiHome(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Class01TopApi - interface
 * @export
 * @interface Class01TopApi
 */
export interface Class01TopApiInterface {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class01TopApiInterface
     */
    getApiHome(options?: AxiosRequestConfig): AxiosPromise<HomeGETRes>;

}

/**
 * Class01TopApi - object-oriented interface
 * @export
 * @class Class01TopApi
 * @extends {BaseAPI}
 */
export class Class01TopApi extends BaseAPI implements Class01TopApiInterface {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class01TopApi
     */
    public getApiHome(options?: AxiosRequestConfig) {
        return Class01TopApiFp(this.configuration).getApiHome(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * Class02PhotoGalleryApi - axios parameter creator
 * @export
 */
export const Class02PhotoGalleryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * for locations page
         * @summary Get locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiLocations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/locations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * for location detail page
         * @summary Get photos related the location
         * @param {string} locationId location id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiLocationsLocationId: async (locationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationId' is not null or undefined
            assertParamExists('getApiLocationsLocationId', 'locationId', locationId)
            const localVarPath = `/api/locations/{locationId}`
                .replace(`{${"locationId"}}`, encodeURIComponent(String(locationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * for photo-gallery page
         * @summary Get all photos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiPhotoGallery: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/photo-gallery`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * for tags page
         * @summary Get all tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTags: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * for tag detail page
         * @summary Get photos related the tag
         * @param {string} tagId tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTagsId: async (tagId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagId' is not null or undefined
            assertParamExists('getApiTagsId', 'tagId', tagId)
            const localVarPath = `/api/tags/{tagId}`
                .replace(`{${"tagId"}}`, encodeURIComponent(String(tagId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * Class02PhotoGalleryApi - functional programming interface
 * @export
 */
export const Class02PhotoGalleryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = Class02PhotoGalleryApiAxiosParamCreator(configuration)
    return {
        /**
         * for locations page
         * @summary Get locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiLocations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationsGETRes>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiLocations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * for location detail page
         * @summary Get photos related the location
         * @param {string} locationId location id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiLocationsLocationId(locationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationsIdGETRes>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiLocationsLocationId(locationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * for photo-gallery page
         * @summary Get all photos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiPhotoGallery(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PhotoGalleryGETRes>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiPhotoGallery(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * for tags page
         * @summary Get all tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiTags(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagsGETRes>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiTags(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * for tag detail page
         * @summary Get photos related the tag
         * @param {string} tagId tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiTagsId(tagId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagsIdGETRes>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiTagsId(tagId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * Class02PhotoGalleryApi - factory interface
 * @export
 */
export const Class02PhotoGalleryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = Class02PhotoGalleryApiFp(configuration)
    return {
        /**
         * for locations page
         * @summary Get locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiLocations(options?: any): AxiosPromise<LocationsGETRes> {
            return localVarFp.getApiLocations(options).then((request) => request(axios, basePath));
        },
        /**
         * for location detail page
         * @summary Get photos related the location
         * @param {string} locationId location id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiLocationsLocationId(locationId: string, options?: any): AxiosPromise<LocationsIdGETRes> {
            return localVarFp.getApiLocationsLocationId(locationId, options).then((request) => request(axios, basePath));
        },
        /**
         * for photo-gallery page
         * @summary Get all photos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiPhotoGallery(options?: any): AxiosPromise<PhotoGalleryGETRes> {
            return localVarFp.getApiPhotoGallery(options).then((request) => request(axios, basePath));
        },
        /**
         * for tags page
         * @summary Get all tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTags(options?: any): AxiosPromise<TagsGETRes> {
            return localVarFp.getApiTags(options).then((request) => request(axios, basePath));
        },
        /**
         * for tag detail page
         * @summary Get photos related the tag
         * @param {string} tagId tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTagsId(tagId: string, options?: any): AxiosPromise<TagsIdGETRes> {
            return localVarFp.getApiTagsId(tagId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Class02PhotoGalleryApi - interface
 * @export
 * @interface Class02PhotoGalleryApi
 */
export interface Class02PhotoGalleryApiInterface {
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApiInterface
     */
    getApiLocations(options?: AxiosRequestConfig): AxiosPromise<LocationsGETRes>;

    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApiInterface
     */
    getApiLocationsLocationId(locationId: string, options?: AxiosRequestConfig): AxiosPromise<LocationsIdGETRes>;

    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApiInterface
     */
    getApiPhotoGallery(options?: AxiosRequestConfig): AxiosPromise<PhotoGalleryGETRes>;

    /**
     * for tags page
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApiInterface
     */
    getApiTags(options?: AxiosRequestConfig): AxiosPromise<TagsGETRes>;

    /**
     * for tag detail page
     * @summary Get photos related the tag
     * @param {string} tagId tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApiInterface
     */
    getApiTagsId(tagId: string, options?: AxiosRequestConfig): AxiosPromise<TagsIdGETRes>;

}

/**
 * Class02PhotoGalleryApi - object-oriented interface
 * @export
 * @class Class02PhotoGalleryApi
 * @extends {BaseAPI}
 */
export class Class02PhotoGalleryApi extends BaseAPI implements Class02PhotoGalleryApiInterface {
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    public getApiLocations(options?: AxiosRequestConfig) {
        return Class02PhotoGalleryApiFp(this.configuration).getApiLocations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    public getApiLocationsLocationId(locationId: string, options?: AxiosRequestConfig) {
        return Class02PhotoGalleryApiFp(this.configuration).getApiLocationsLocationId(locationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    public getApiPhotoGallery(options?: AxiosRequestConfig) {
        return Class02PhotoGalleryApiFp(this.configuration).getApiPhotoGallery(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * for tags page
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    public getApiTags(options?: AxiosRequestConfig) {
        return Class02PhotoGalleryApiFp(this.configuration).getApiTags(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * for tag detail page
     * @summary Get photos related the tag
     * @param {string} tagId tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    public getApiTagsId(tagId: string, options?: AxiosRequestConfig) {
        return Class02PhotoGalleryApiFp(this.configuration).getApiTagsId(tagId, options).then((request) => request(this.axios, this.basePath));
    }
}


