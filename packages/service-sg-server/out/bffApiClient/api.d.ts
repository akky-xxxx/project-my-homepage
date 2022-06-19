/**
 * sg-server
 * api for sg
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestArgs, BaseAPI } from './base';
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
     * @type {Array<LocationsGETResImagesInner>}
     * @memberof LocationsGETRes
     */
    'images': Array<LocationsGETResImagesInner>;
    /**
     *
     * @type {string}
     * @memberof LocationsGETRes
     */
    ''?: string;
}
/**
 *
 * @export
 * @interface LocationsGETResImagesInner
 */
export interface LocationsGETResImagesInner {
    /**
     *
     * @type {string}
     * @memberof LocationsGETResImagesInner
     */
    'locationName': string;
    /**
     *
     * @type {string}
     * @memberof LocationsGETResImagesInner
     */
    'locationId': string;
    /**
     *
     * @type {string}
     * @memberof LocationsGETResImagesInner
     */
    'imagePath': string;
    /**
     *
     * @type {string}
     * @memberof LocationsGETResImagesInner
     */
    'imageNum': string;
    /**
     *
     * @type {number}
     * @memberof LocationsGETResImagesInner
     */
    'order': number;
    /**
     *
     * @type {number}
     * @memberof LocationsGETResImagesInner
     */
    'width': number;
    /**
     *
     * @type {number}
     * @memberof LocationsGETResImagesInner
     */
    'height': number;
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
     * @type {Array<LocationsIdGETResImagesInner>}
     * @memberof LocationsIdGETRes
     */
    'images': Array<LocationsIdGETResImagesInner>;
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
     * @type {Array<LocationsIdGETResImagesItemsTagsInner>}
     * @memberof LocationsIdGETResImagesInner
     */
    'tags': Array<LocationsIdGETResImagesItemsTagsInner>;
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
     * @type {Array<PhotoGalleryGETResImagesInner>}
     * @memberof PhotoGalleryGETRes
     */
    'images': Array<PhotoGalleryGETResImagesInner>;
}
/**
 *
 * @export
 * @interface PhotoGalleryGETResImagesInner
 */
export interface PhotoGalleryGETResImagesInner {
    /**
     *
     * @type {string}
     * @memberof PhotoGalleryGETResImagesInner
     */
    'imageId': string;
    /**
     *
     * @type {string}
     * @memberof PhotoGalleryGETResImagesInner
     */
    'imagePath': string;
    /**
     *
     * @type {string}
     * @memberof PhotoGalleryGETResImagesInner
     */
    'locationName': string;
    /**
     *
     * @type {string}
     * @memberof PhotoGalleryGETResImagesInner
     */
    'takenAt': string;
    /**
     *
     * @type {number}
     * @memberof PhotoGalleryGETResImagesInner
     */
    'width': number;
    /**
     *
     * @type {number}
     * @memberof PhotoGalleryGETResImagesInner
     */
    'height': number;
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
     * @type {TagsIdGETResImagesItemsLocation}
     * @memberof TagsIdGETResImagesInner
     */
    'location': TagsIdGETResImagesItemsLocation;
    /**
     *
     * @type {TagsIdGETResImagesItemsTakenAt}
     * @memberof TagsIdGETResImagesInner
     */
    'takenAt': TagsIdGETResImagesItemsTakenAt;
    /**
     *
     * @type {Array<TagsIdGETResImagesItemsTagsInner>}
     * @memberof TagsIdGETResImagesInner
     */
    'tags': Array<TagsIdGETResImagesItemsTagsInner>;
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
 * @interface TagsIdGETResImagesItemsLocation
 */
export interface TagsIdGETResImagesItemsLocation {
    /**
     *
     * @type {string}
     * @memberof TagsIdGETResImagesItemsLocation
     */
    'locationId': string;
    /**
     *
     * @type {string}
     * @memberof TagsIdGETResImagesItemsLocation
     */
    'locationName': string;
}
/**
 *
 * @export
 * @interface TagsIdGETResImagesItemsTagsInner
 */
export interface TagsIdGETResImagesItemsTagsInner {
    /**
     *
     * @type {string}
     * @memberof TagsIdGETResImagesItemsTagsInner
     */
    'tagId': string;
    /**
     *
     * @type {string}
     * @memberof TagsIdGETResImagesItemsTagsInner
     */
    'tagName': string;
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
export declare const Class01TopApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiHome: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * Class01TopApi - functional programming interface
 * @export
 */
export declare const Class01TopApiFp: (configuration?: Configuration) => {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiHome(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HomeGETRes>>;
};
/**
 * Class01TopApi - factory interface
 * @export
 */
export declare const Class01TopApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiHome(options?: any): AxiosPromise<HomeGETRes>;
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
export declare class Class01TopApi extends BaseAPI implements Class01TopApiInterface {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class01TopApi
     */
    getApiHome(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<HomeGETRes, any>>;
}
/**
 * Class02PhotoGalleryApi - axios parameter creator
 * @export
 */
export declare const Class02PhotoGalleryApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocations: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocationsLocationId: (locationId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiPhotoGallery: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * for tags page
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiTags: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * for tag detail page
     * @summary Get photos related the tag
     * @param {string} tagId tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiTagsId: (tagId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * Class02PhotoGalleryApi - functional programming interface
 * @export
 */
export declare const Class02PhotoGalleryApiFp: (configuration?: Configuration) => {
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationsGETRes>>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocationsLocationId(locationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationsIdGETRes>>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiPhotoGallery(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PhotoGalleryGETRes>>;
    /**
     * for tags page
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiTags(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagsGETRes>>;
    /**
     * for tag detail page
     * @summary Get photos related the tag
     * @param {string} tagId tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiTagsId(tagId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagsIdGETRes>>;
};
/**
 * Class02PhotoGalleryApi - factory interface
 * @export
 */
export declare const Class02PhotoGalleryApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocations(options?: any): AxiosPromise<LocationsGETRes>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocationsLocationId(locationId: string, options?: any): AxiosPromise<LocationsIdGETRes>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiPhotoGallery(options?: any): AxiosPromise<PhotoGalleryGETRes>;
    /**
     * for tags page
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiTags(options?: any): AxiosPromise<TagsGETRes>;
    /**
     * for tag detail page
     * @summary Get photos related the tag
     * @param {string} tagId tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiTagsId(tagId: string, options?: any): AxiosPromise<TagsIdGETRes>;
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
export declare class Class02PhotoGalleryApi extends BaseAPI implements Class02PhotoGalleryApiInterface {
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    getApiLocations(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LocationsGETRes, any>>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    getApiLocationsLocationId(locationId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LocationsIdGETRes, any>>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    getApiPhotoGallery(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PhotoGalleryGETRes, any>>;
    /**
     * for tags page
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    getApiTags(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<TagsGETRes, any>>;
    /**
     * for tag detail page
     * @summary Get photos related the tag
     * @param {string} tagId tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class02PhotoGalleryApi
     */
    getApiTagsId(tagId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<TagsIdGETRes, any>>;
}
/**
 * SGApi - axios parameter creator
 * @export
 */
export declare const SGApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiHome: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocations: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocationsLocationId: (locationId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiPhotoGallery: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * SGApi - functional programming interface
 * @export
 */
export declare const SGApiFp: (configuration?: Configuration) => {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiHome(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HomeGETRes>>;
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationsGETRes>>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocationsLocationId(locationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationsIdGETRes>>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiPhotoGallery(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PhotoGalleryGETRes>>;
};
/**
 * SGApi - factory interface
 * @export
 */
export declare const SGApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiHome(options?: any): AxiosPromise<HomeGETRes>;
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocations(options?: any): AxiosPromise<LocationsGETRes>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiLocationsLocationId(locationId: string, options?: any): AxiosPromise<LocationsIdGETRes>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiPhotoGallery(options?: any): AxiosPromise<PhotoGalleryGETRes>;
};
/**
 * SGApi - interface
 * @export
 * @interface SGApi
 */
export interface SGApiInterface {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SGApiInterface
     */
    getApiHome(options?: AxiosRequestConfig): AxiosPromise<HomeGETRes>;
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SGApiInterface
     */
    getApiLocations(options?: AxiosRequestConfig): AxiosPromise<LocationsGETRes>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SGApiInterface
     */
    getApiLocationsLocationId(locationId: string, options?: AxiosRequestConfig): AxiosPromise<LocationsIdGETRes>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SGApiInterface
     */
    getApiPhotoGallery(options?: AxiosRequestConfig): AxiosPromise<PhotoGalleryGETRes>;
}
/**
 * SGApi - object-oriented interface
 * @export
 * @class SGApi
 * @extends {BaseAPI}
 */
export declare class SGApi extends BaseAPI implements SGApiInterface {
    /**
     * for top page
     * @summary Get Main Visual Paths
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SGApi
     */
    getApiHome(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<HomeGETRes, any>>;
    /**
     * for locations page
     * @summary Get locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SGApi
     */
    getApiLocations(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LocationsGETRes, any>>;
    /**
     * for location detail page
     * @summary Get photos related the location
     * @param {string} locationId location id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SGApi
     */
    getApiLocationsLocationId(locationId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LocationsIdGETRes, any>>;
    /**
     * for photo-gallery page
     * @summary Get all photos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SGApi
     */
    getApiPhotoGallery(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PhotoGalleryGETRes, any>>;
}
