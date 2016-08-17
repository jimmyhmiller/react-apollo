// Generated by typings
// Source: node_modules/amandas-dummy-package/middleware.d.ts
declare module '~amandas-dummy-package/middleware' {
import { Request } from '~amandas-dummy-package/networkInterface';
export interface MiddlewareRequest {
    request: Request;
    options: RequestInit;
}
export interface MiddlewareInterface {
    applyMiddleware(request: MiddlewareRequest, next: Function): any;
}
}
declare module 'amandas-dummy-package/middleware' {
export * from '~amandas-dummy-package/middleware';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/afterware.d.ts
declare module '~amandas-dummy-package/afterware' {
export interface AfterwareResponse {
    response: IResponse;
    options: RequestInit;
}
export interface AfterwareInterface {
    applyAfterware(response: AfterwareResponse, next: Function): any;
}
}
declare module 'amandas-dummy-package/afterware' {
export * from '~amandas-dummy-package/afterware';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/networkInterface.d.ts
declare module '~amandas-dummy-package/networkInterface' {
import 'whatwg-fetch';
import { GraphQLResult, Document } from 'graphql';
import { MiddlewareInterface } from '~amandas-dummy-package/middleware';
import { AfterwareInterface } from '~amandas-dummy-package/afterware';
export interface Request {
    debugName?: string;
    query?: Document;
    variables?: Object;
    operationName?: string;
}
export interface PrintedRequest {
    debugName?: string;
    query?: string;
    variables?: Object;
    operationName?: string;
}
export interface NetworkInterface {
    [others: string]: any;
    query(request: Request): Promise<GraphQLResult>;
}
export interface SubscriptionNetworkInterface extends NetworkInterface {
    subscribe(request: Request, handler: (error, result) => void): number;
    unsubscribe(id: Number): void;
}
export interface BatchedNetworkInterface extends NetworkInterface {
    batchQuery(requests: Request[]): Promise<GraphQLResult[]>;
}
export interface HTTPNetworkInterface extends BatchedNetworkInterface {
    _uri: string;
    _opts: RequestInit;
    _middlewares: MiddlewareInterface[];
    _afterwares: AfterwareInterface[];
    use(middlewares: MiddlewareInterface[]): any;
    useAfter(afterwares: AfterwareInterface[]): any;
}
export interface RequestAndOptions {
    request: Request;
    options: RequestInit;
}
export interface ResponseAndOptions {
    response: IResponse;
    options: RequestInit;
}
export function addQueryMerging(networkInterface: NetworkInterface): BatchedNetworkInterface;
export function addGraphQLSubscriptions(networkInterface: NetworkInterface, wsClient: any): SubscriptionNetworkInterface;
export function printRequest(request: Request): PrintedRequest;
export function createNetworkInterface(uri: string, opts?: RequestInit): HTTPNetworkInterface;
}
declare module 'amandas-dummy-package/networkInterface' {
export * from '~amandas-dummy-package/networkInterface';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/data/store.d.ts
declare module '~amandas-dummy-package/data/store' {
import { ApolloAction } from '~amandas-dummy-package/actions';
import { QueryStore } from '~amandas-dummy-package/queries/store';
import { MutationStore } from '~amandas-dummy-package/mutations/store';
import { ApolloReducerConfig } from '~amandas-dummy-package/store';
export interface NormalizedCache {
    [dataId: string]: StoreObject;
}
export interface StoreObject {
    __typename?: string;
    [storeFieldKey: string]: StoreValue;
}
export interface IdValue {
    type: "id";
    id: string;
    generated: boolean;
}
export interface JsonValue {
    type: "json";
    json: any;
}
export type StoreValue = number | string | string[] | IdValue | JsonValue;
export function isIdValue(idObject: StoreValue): idObject is IdValue;
export function isJsonValue(jsonObject: StoreValue): jsonObject is JsonValue;
export function data(previousState: NormalizedCache, action: ApolloAction, queries: QueryStore, mutations: MutationStore, config: ApolloReducerConfig): NormalizedCache;
}
declare module 'amandas-dummy-package/data/store' {
export * from '~amandas-dummy-package/data/store';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/queries/store.d.ts
declare module '~amandas-dummy-package/queries/store' {
import { ApolloAction } from '~amandas-dummy-package/actions';
import { FragmentMap } from '~amandas-dummy-package/queries/getFromAST';
import { SelectionSet, GraphQLError } from 'graphql';
export interface QueryStore {
    [queryId: string]: QueryStoreValue;
}
export interface QueryStoreValue {
    queryString: string;
    query: SelectionSetWithRoot;
    minimizedQueryString: string;
    minimizedQuery: SelectionSetWithRoot;
    variables: Object;
    loading: boolean;
    networkError: Error;
    graphQLErrors: GraphQLError[];
    forceFetch: boolean;
    returnPartialData: boolean;
    lastRequestId: number;
    fragmentMap: FragmentMap;
}
export interface SelectionSetWithRoot {
    id: string;
    typeName: string;
    selectionSet: SelectionSet;
}
export function queries(previousState: QueryStore, action: ApolloAction): QueryStore;
}
declare module 'amandas-dummy-package/queries/store' {
export * from '~amandas-dummy-package/queries/store';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/mutations/store.d.ts
declare module '~amandas-dummy-package/mutations/store' {
import { ApolloAction } from '~amandas-dummy-package/actions';
import { SelectionSet } from 'graphql';
import { FragmentMap } from '~amandas-dummy-package/queries/getFromAST';
export interface MutationStore {
    [mutationId: string]: MutationStoreValue;
}
export interface MutationStoreValue {
    mutationString: string;
    mutation: SelectionSetWithRoot;
    variables: Object;
    loading: boolean;
    error: Error;
    fragmentMap: FragmentMap;
}
export interface SelectionSetWithRoot {
    id: string;
    typeName: string;
    selectionSet: SelectionSet;
}
export function mutations(previousState: MutationStore, action: ApolloAction): MutationStore;
}
declare module 'amandas-dummy-package/mutations/store' {
export * from '~amandas-dummy-package/mutations/store';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/optimistic-data/store.d.ts
declare module '~amandas-dummy-package/optimistic-data/store' {
import { NormalizedCache } from '~amandas-dummy-package/data/store';
export type OptimisticStore = {
    mutationId: string;
    data: NormalizedCache;
}[];
export function optimistic(previousState: any[], action: any, store: any, config: any): OptimisticStore;
}
declare module 'amandas-dummy-package/optimistic-data/store' {
export * from '~amandas-dummy-package/optimistic-data/store';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/actions.d.ts
declare module '~amandas-dummy-package/actions' {
import { GraphQLResult, SelectionSet, FragmentDefinition } from 'graphql';
import { SelectionSetWithRoot } from '~amandas-dummy-package/queries/store';
import { MutationBehavior } from '~amandas-dummy-package/data/mutationResults';
import { FragmentMap } from '~amandas-dummy-package/queries/getFromAST';
export interface QueryResultAction {
    type: 'APOLLO_QUERY_RESULT';
    result: GraphQLResult;
    queryId: string;
    requestId: number;
}
export function isQueryResultAction(action: ApolloAction): action is QueryResultAction;
export interface QueryErrorAction {
    type: 'APOLLO_QUERY_ERROR';
    error: Error;
    queryId: string;
    requestId: number;
}
export function isQueryErrorAction(action: ApolloAction): action is QueryErrorAction;
export interface QueryInitAction {
    type: 'APOLLO_QUERY_INIT';
    queryString: string;
    query: SelectionSetWithRoot;
    minimizedQueryString: string;
    minimizedQuery: SelectionSetWithRoot;
    variables: Object;
    forceFetch: boolean;
    returnPartialData: boolean;
    queryId: string;
    requestId: number;
    fragmentMap: FragmentMap;
}
export function isQueryInitAction(action: ApolloAction): action is QueryInitAction;
export interface QueryResultClientAction {
    type: 'APOLLO_QUERY_RESULT_CLIENT';
    result: GraphQLResult;
    complete: boolean;
    queryId: string;
}
export function isQueryResultClientAction(action: ApolloAction): action is QueryResultClientAction;
export interface QueryStopAction {
    type: 'APOLLO_QUERY_STOP';
    queryId: string;
}
export function isQueryStopAction(action: ApolloAction): action is QueryStopAction;
export interface MutationInitAction {
    type: 'APOLLO_MUTATION_INIT';
    mutationString: string;
    mutation: SelectionSetWithRoot;
    variables: Object;
    mutationId: string;
    fragmentMap: FragmentMap;
    optimisticResponse: Object;
    resultBehaviors?: MutationBehavior[];
}
export function isMutationInitAction(action: ApolloAction): action is MutationInitAction;
export interface MutationResultAction {
    type: 'APOLLO_MUTATION_RESULT';
    result: GraphQLResult;
    mutationId: string;
    resultBehaviors?: MutationBehavior[];
}
export function isMutationResultAction(action: ApolloAction): action is MutationResultAction;
export interface MutationErrorAction {
    type: 'APOLLO_MUTATION_ERROR';
    error: Error;
    mutationId: string;
}
export function isMutationErrorAction(action: ApolloAction): action is MutationErrorAction;
export interface UpdateQueryResultAction {
    type: 'APOLLO_UPDATE_QUERY_RESULT';
    queryVariables: any;
    querySelectionSet: SelectionSet;
    queryFragments: FragmentDefinition[];
    newResult: Object;
}
export function isUpdateQueryResultAction(action: ApolloAction): action is UpdateQueryResultAction;
export interface StoreResetAction {
    type: 'APOLLO_STORE_RESET';
    observableQueryIds: string[];
}
export function isStoreResetAction(action: ApolloAction): action is StoreResetAction;
export type ApolloAction = QueryResultAction | QueryErrorAction | QueryInitAction | QueryResultClientAction | QueryStopAction | MutationInitAction | MutationResultAction | MutationErrorAction | UpdateQueryResultAction | StoreResetAction;
}
declare module 'amandas-dummy-package/actions' {
export * from '~amandas-dummy-package/actions';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/store.d.ts
declare module '~amandas-dummy-package/store' {
import { NormalizedCache } from '~amandas-dummy-package/data/store';
import { QueryStore } from '~amandas-dummy-package/queries/store';
import { MutationStore } from '~amandas-dummy-package/mutations/store';
import { OptimisticStore } from '~amandas-dummy-package/optimistic-data/store';
import { ApolloAction } from '~amandas-dummy-package/actions';
import { IdGetter } from '~amandas-dummy-package/data/extensions';
import { MutationBehaviorReducerMap } from '~amandas-dummy-package/data/mutationResults';
export interface Store {
    data: NormalizedCache;
    queries: QueryStore;
    mutations: MutationStore;
    optimistic: OptimisticStore;
}
export interface ApolloStore {
    dispatch: (action: ApolloAction) => void;
    getState: () => any;
}
export function createApolloReducer(config: ApolloReducerConfig): Function;
export function createApolloStore({reduxRootKey, initialState, config, reportCrashes}?: {
    reduxRootKey?: string;
    initialState?: any;
    config?: ApolloReducerConfig;
    reportCrashes?: boolean;
}): ApolloStore;
export interface ApolloReducerConfig {
    dataIdFromObject?: IdGetter;
    mutationBehaviorReducers?: MutationBehaviorReducerMap;
}
export function getDataWithOptimisticResults(store: Store): NormalizedCache;
}
declare module 'amandas-dummy-package/store' {
export * from '~amandas-dummy-package/store';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/scheduler.d.ts
declare module '~amandas-dummy-package/scheduler' {
import { QueryManager, QueryListener } from '~amandas-dummy-package/QueryManager';
import { ObservableQuery } from '~amandas-dummy-package/ObservableQuery';
import { WatchQueryOptions } from '~amandas-dummy-package/watchQueryOptions';
export class QueryScheduler {
    inFlightQueries: {
        [queryId: string]: WatchQueryOptions;
    };
    registeredQueries: {
        [queryId: string]: WatchQueryOptions;
    };
    intervalQueries: {
        [interval: number]: string[];
    };
    queryManager: QueryManager;
    private pollingTimers;
    constructor({queryManager}: {
        queryManager: QueryManager;
    });
    checkInFlight(queryId: string): boolean;
    fetchQuery(queryId: string, options: WatchQueryOptions): Promise<{}>;
    startPollingQuery(options: WatchQueryOptions, queryId?: string, firstFetch?: boolean, listener?: QueryListener): string;
    stopPollingQuery(queryId: string): void;
    fetchQueriesOnInterval(interval: number): void;
    addQueryOnInterval(queryId: string, queryOptions: WatchQueryOptions): void;
    registerPollingQuery(queryOptions: WatchQueryOptions): ObservableQuery;
    private addInFlight(queryId, options);
    private removeInFlight(queryId);
}
}
declare module 'amandas-dummy-package/scheduler' {
export * from '~amandas-dummy-package/scheduler';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/util/Observable.d.ts
declare module '~amandas-dummy-package/util/Observable' {
export type CleanupFunction = () => void;
export type SubscriberFunction<T> = (observer: Observer<T>) => (Subscription | CleanupFunction);
export class Observable<T> {
    private subscriberFunction;
    constructor(subscriberFunction: SubscriberFunction<T>);
    subscribe(observer: Observer<T>): Subscription;
}
export interface Observer<T> {
    next?: (value: T) => void;
    error?: (error: Error) => void;
    complete?: () => void;
}
export interface Subscription {
    unsubscribe: CleanupFunction;
}
}
declare module 'amandas-dummy-package/util/Observable' {
export * from '~amandas-dummy-package/util/Observable';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/QueryManager.d.ts
declare module '~amandas-dummy-package/QueryManager' {
import { NetworkInterface } from '~amandas-dummy-package/networkInterface';
import { ApolloStore, Store } from '~amandas-dummy-package/store';
import { QueryStoreValue } from '~amandas-dummy-package/queries/store';
import { QueryTransformer } from '~amandas-dummy-package/queries/queryTransform';
import { NormalizedCache } from '~amandas-dummy-package/data/store';
import { Document, FragmentDefinition, SelectionSet } from 'graphql';
import { MutationBehavior, MutationQueryReducersMap } from '~amandas-dummy-package/data/mutationResults';
import { QueryScheduler } from '~amandas-dummy-package/scheduler';
import { ApolloQueryResult } from '~amandas-dummy-package/index';
import { Observer, Subscription } from '~amandas-dummy-package/util/Observable';
import { WatchQueryOptions, SubscriptionOptions } from '~amandas-dummy-package/watchQueryOptions';
import { ObservableQuery } from '~amandas-dummy-package/ObservableQuery';
export type QueryListener = (queryStoreValue: QueryStoreValue) => void;
export class QueryManager {
    pollingTimers: {
        [queryId: string]: NodeJS.Timer | any;
    };
    scheduler: QueryScheduler;
    store: ApolloStore;
    private networkInterface;
    private reduxRootKey;
    private queryTransformer;
    private queryListeners;
    private queryResults;
    private idCounter;
    private batcher;
    private batchInterval;
    private fetchQueryPromises;
    private observableQueries;
    private queryIdsByName;
    constructor({networkInterface, store, reduxRootKey, queryTransformer, shouldBatch, batchInterval, wsClient}: {
        networkInterface: NetworkInterface;
        store: ApolloStore;
        reduxRootKey: string;
        queryTransformer?: QueryTransformer;
        shouldBatch?: Boolean;
        batchInterval?: number;
        wsClient?: any;
    });
    broadcastNewStore(store: any): void;
    mutate({mutation, variables, resultBehaviors, fragments, optimisticResponse, updateQueries, refetchQueries}: {
        mutation: Document;
        variables?: Object;
        resultBehaviors?: MutationBehavior[];
        fragments?: FragmentDefinition[];
        optimisticResponse?: Object;
        updateQueries?: MutationQueryReducersMap;
        refetchQueries?: string[];
    }): Promise<ApolloQueryResult>;
    queryListenerForObserver(queryId: string, options: WatchQueryOptions, observer: Observer<ApolloQueryResult>): QueryListener;
    watchQuery(options: WatchQueryOptions, shouldSubscribe?: boolean, graphQLSubscription?: boolean): ObservableQuery;
    query(options: WatchQueryOptions): Promise<ApolloQueryResult>;
    fetchQuery(queryId: string, options: WatchQueryOptions): Promise<ApolloQueryResult>;
    generateQueryId(): string;
    stopQueryInStore(queryId: string): void;
    getApolloState(): Store;
    getDataWithOptimisticResults(): NormalizedCache;
    addQueryListener(queryId: string, listener: QueryListener): void;
    removeQueryListener(queryId: string): void;
    addFetchQueryPromise(requestId: number, promise: Promise<ApolloQueryResult>, resolve: (result: ApolloQueryResult) => void, reject: (error: Error) => void): void;
    removeFetchQueryPromise(requestId: number): void;
    addObservableQuery(queryId: string, observableQuery: ObservableQuery): void;
    addQuerySubscription(queryId: string, querySubscription: Subscription): void;
    removeObservableQuery(queryId: string): void;
    resetStore(): void;
    startQuery(queryId: string, options: WatchQueryOptions, listener: QueryListener): string;
    startSubscription(options: SubscriptionOptions): number;
    stopQuery(queryId: string): void;
    getQueryWithPreviousResult(queryId: string, isOptimistic?: boolean): {
        previousResult: Object;
        queryVariables: {
            [key: string]: any;
        };
        querySelectionSet: SelectionSet;
        queryFragments: FragmentDefinition[];
    };
    private collectResultBehaviorsFromUpdateQueries(updateQueries, mutationResult, isOptimistic?);
    private transformQueryDocument(options);
    private handleDiffQuery({queryDef, rootId, variables, fragmentMap, noFetch});
    private fetchRequest({requestId, queryId, query, querySS, options, fragmentMap, networkInterface});
    private fetchQueryOverInterface(queryId, options, networkInterface);
    private refetchQueryByName(queryName);
    private isDifferentResult(queryId, result);
    private broadcastQueries();
    private generateRequestId();
}
}
declare module 'amandas-dummy-package/QueryManager' {
export * from '~amandas-dummy-package/QueryManager';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/ObservableQuery.d.ts
declare module '~amandas-dummy-package/ObservableQuery' {
import { WatchQueryOptions, FetchMoreQueryOptions } from '~amandas-dummy-package/watchQueryOptions';
import { Observable } from '~amandas-dummy-package/util/Observable';
import { QueryScheduler } from '~amandas-dummy-package/scheduler';
import { ApolloQueryResult } from '~amandas-dummy-package/index';
export interface FetchMoreOptions {
    updateQuery: (previousQueryResult: Object, options: {
        fetchMoreResult: Object;
        queryVariables: Object;
    }) => Object;
}
export interface UpdateQueryOptions {
    queryVariables: Object;
}
export class ObservableQuery extends Observable<ApolloQueryResult> {
    refetch: (variables?: any) => Promise<ApolloQueryResult>;
    fetchMore: (options: FetchMoreQueryOptions & FetchMoreOptions) => Promise<any>;
    startGraphQLSubscription: () => number;
    updateQuery: (mapFn: (previousQueryResult: any, options: UpdateQueryOptions) => any) => void;
    stopPolling: () => void;
    startPolling: (p: number) => void;
    options: WatchQueryOptions;
    queryId: string;
    private scheduler;
    private queryManager;
    constructor({scheduler, options, shouldSubscribe, graphQLSubscription}: {
        scheduler: QueryScheduler;
        options: WatchQueryOptions;
        shouldSubscribe?: boolean;
        graphQLSubscription?: boolean;
    });
    result(): Promise<ApolloQueryResult>;
}
}
declare module 'amandas-dummy-package/ObservableQuery' {
export * from '~amandas-dummy-package/ObservableQuery';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/watchQueryOptions.d.ts
declare module '~amandas-dummy-package/watchQueryOptions' {
import { Document, FragmentDefinition } from 'graphql';
export interface WatchQueryOptions {
    query: Document;
    variables?: {
        [key: string]: any;
    };
    forceFetch?: boolean;
    returnPartialData?: boolean;
    noFetch?: boolean;
    pollInterval?: number;
    fragments?: FragmentDefinition[];
}
export interface FetchMoreQueryOptions {
    query?: Document;
    variables?: {
        [key: string]: any;
    };
}
export interface SubscriptionOptions {
    query: Document;
    variables?: {
        [key: string]: any;
    };
    fragments?: FragmentDefinition[];
    handler: (error, result) => void;
}
}
declare module 'amandas-dummy-package/watchQueryOptions' {
export * from '~amandas-dummy-package/watchQueryOptions';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/queries/getFromAST.d.ts
declare module '~amandas-dummy-package/queries/getFromAST' {
import { Document, OperationDefinition, FragmentDefinition } from 'graphql';
export function getMutationDefinition(doc: Document): OperationDefinition;
export function checkDocument(doc: Document): void;
export function getOperationName(doc: Document): string;
export function getFragmentDefinitions(doc: Document): FragmentDefinition[];
export function getQueryDefinition(doc: Document): OperationDefinition;
export function getFragmentDefinition(doc: Document): FragmentDefinition;
export interface FragmentMap {
    [fragmentName: string]: FragmentDefinition;
}
export function createFragmentMap(fragments?: FragmentDefinition[]): FragmentMap;
export function addFragmentsToDocument(queryDoc: Document, fragments: FragmentDefinition[]): Document;
}
declare module 'amandas-dummy-package/queries/getFromAST' {
export * from '~amandas-dummy-package/queries/getFromAST';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/data/readFromStore.d.ts
declare module '~amandas-dummy-package/data/readFromStore' {
import { SelectionSet, Document } from 'graphql';
import { FragmentMap } from '~amandas-dummy-package/queries/getFromAST';
import { NormalizedCache } from '~amandas-dummy-package/data/store';
export function readQueryFromStore({store, query, variables, returnPartialData, fragmentMap}: {
    store: NormalizedCache;
    query: Document;
    variables?: Object;
    returnPartialData?: boolean;
    fragmentMap?: FragmentMap;
}): Object;
export function readFragmentFromStore({store, fragment, rootId, variables, returnPartialData}: {
    store: NormalizedCache;
    fragment: Document;
    rootId: string;
    variables?: Object;
    returnPartialData?: boolean;
}): Object;
export function readSelectionSetFromStore({store, rootId, selectionSet, variables, returnPartialData, fragmentMap}: {
    store: NormalizedCache;
    rootId: string;
    selectionSet: SelectionSet;
    variables: Object;
    returnPartialData?: boolean;
    fragmentMap?: FragmentMap;
}): Object;
}
declare module 'amandas-dummy-package/data/readFromStore' {
export * from '~amandas-dummy-package/data/readFromStore';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/data/writeToStore.d.ts
declare module '~amandas-dummy-package/data/writeToStore' {
import { FragmentMap } from '~amandas-dummy-package/queries/getFromAST';
import { SelectionSet, Document } from 'graphql';
import { NormalizedCache } from '~amandas-dummy-package/data/store';
import { IdGetter } from '~amandas-dummy-package/data/extensions';
export function writeFragmentToStore({result, fragment, store, variables, dataIdFromObject}: {
    result: Object;
    fragment: Document;
    store?: NormalizedCache;
    variables?: Object;
    dataIdFromObject?: IdGetter;
}): NormalizedCache;
export function writeQueryToStore({result, query, store, variables, dataIdFromObject, fragmentMap}: {
    result: Object;
    query: Document;
    store?: NormalizedCache;
    variables?: Object;
    dataIdFromObject?: IdGetter;
    fragmentMap?: FragmentMap;
}): NormalizedCache;
export function writeSelectionSetToStore({result, dataId, selectionSet, store, variables, dataIdFromObject, fragmentMap}: {
    dataId: string;
    result: any;
    selectionSet: SelectionSet;
    store?: NormalizedCache;
    variables: Object;
    dataIdFromObject: IdGetter;
    fragmentMap?: FragmentMap;
}): NormalizedCache;
}
declare module 'amandas-dummy-package/data/writeToStore' {
export * from '~amandas-dummy-package/data/writeToStore';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/data/extensions.d.ts
declare module '~amandas-dummy-package/data/extensions' {
export type IdGetter = (value: Object) => string;
export const getIdField: (data: {
    id: any;
}) => any;
}
declare module 'amandas-dummy-package/data/extensions' {
export * from '~amandas-dummy-package/data/extensions';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/queries/queryTransform.d.ts
declare module '~amandas-dummy-package/queries/queryTransform' {
import { Document, SelectionSet } from 'graphql';
export type QueryTransformer = (selectionSet: SelectionSet) => void;
export function addFieldToSelectionSet(fieldName: string, selectionSet: SelectionSet): void;
export function addTypenameToSelectionSet(selectionSet: SelectionSet): void;
export function applyTransformers(doc: Document, queryTransformers: QueryTransformer[]): Document;
}
declare module 'amandas-dummy-package/queries/queryTransform' {
export * from '~amandas-dummy-package/queries/queryTransform';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/data/scopeQuery.d.ts
declare module '~amandas-dummy-package/data/scopeQuery' {
import { FragmentMap } from '~amandas-dummy-package/queries/getFromAST';
import { SelectionSet } from 'graphql';
export type StorePath = (string | number)[];
export function scopeJSONToResultPath({json, path}: {
    json: any;
    path: StorePath;
}): any;
export function scopeSelectionSetToResultPath({selectionSet, fragmentMap, path}: {
    selectionSet: SelectionSet;
    fragmentMap?: FragmentMap;
    path: StorePath;
}): SelectionSet;
}
declare module 'amandas-dummy-package/data/scopeQuery' {
export * from '~amandas-dummy-package/data/scopeQuery';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/data/mutationResults.d.ts
declare module '~amandas-dummy-package/data/mutationResults' {
import { NormalizedCache } from '~amandas-dummy-package/data/store';
import { GraphQLResult, SelectionSet, FragmentDefinition } from 'graphql';
import { FragmentMap } from '~amandas-dummy-package/queries/getFromAST';
import { StorePath } from '~amandas-dummy-package/data/scopeQuery';
import { ApolloReducerConfig } from '~amandas-dummy-package/store';
export type MutationBehavior = MutationArrayInsertBehavior | MutationArrayDeleteBehavior | MutationDeleteBehavior | MutationQueryResultBehavior;
export type MutationArrayInsertBehavior = {
    type: 'ARRAY_INSERT';
    resultPath: StorePath;
    storePath: StorePath;
    where: ArrayInsertWhere;
};
export type MutationDeleteBehavior = {
    type: 'DELETE';
    dataId: string;
};
export type MutationArrayDeleteBehavior = {
    type: 'ARRAY_DELETE';
    storePath: StorePath;
    dataId: string;
};
export type MutationQueryResultBehavior = {
    type: 'QUERY_RESULT';
    queryVariables: any;
    querySelectionSet: SelectionSet;
    queryFragments: FragmentDefinition[];
    newResult: Object;
};
export type ArrayInsertWhere = 'PREPEND' | 'APPEND';
export type MutationBehaviorReducerArgs = {
    behavior: MutationBehavior;
    result: GraphQLResult;
    variables: any;
    fragmentMap: FragmentMap;
    selectionSet: SelectionSet;
    config: ApolloReducerConfig;
};
export type MutationBehaviorReducerMap = {
    [type: string]: MutationBehaviorReducer;
};
export type MutationBehaviorReducer = (state: NormalizedCache, args: MutationBehaviorReducerArgs) => NormalizedCache;
export function cleanArray(originalArray: any, dataId: any): any;
export function mutationResultQueryResultReducer(state: NormalizedCache, {behavior, config}: MutationBehaviorReducerArgs): NormalizedCache;
export type MutationQueryReducer = (previousResult: Object, options: {
    mutationResult: Object;
    queryName: Object;
    queryVariables: Object;
}) => Object;
export type MutationQueryReducersMap = {
    [queryName: string]: MutationQueryReducer;
};
export const defaultMutationBehaviorReducers: {
    [type: string]: MutationBehaviorReducer;
};
}
declare module 'amandas-dummy-package/data/mutationResults' {
export * from '~amandas-dummy-package/data/mutationResults';
}

// Generated by typings
// Source: node_modules/amandas-dummy-package/index.d.ts
declare module '~amandas-dummy-package/index' {
import { NetworkInterface, createNetworkInterface, addQueryMerging, addGraphQLSubscriptions } from '~amandas-dummy-package/networkInterface';
import { Document, FragmentDefinition, SelectionSet } from 'graphql';
import { print } from 'graphql-tag/printer';
import { createApolloStore, ApolloStore, createApolloReducer, ApolloReducerConfig } from '~amandas-dummy-package/store';
import { QueryManager } from '~amandas-dummy-package/QueryManager';
import { ObservableQuery } from '~amandas-dummy-package/ObservableQuery';
import { WatchQueryOptions } from '~amandas-dummy-package/watchQueryOptions';
import { readQueryFromStore, readFragmentFromStore } from '~amandas-dummy-package/data/readFromStore';
import { writeQueryToStore, writeFragmentToStore } from '~amandas-dummy-package/data/writeToStore';
import { IdGetter } from '~amandas-dummy-package/data/extensions';
import { QueryTransformer, addTypenameToSelectionSet } from '~amandas-dummy-package/queries/queryTransform';
import { MutationBehaviorReducerMap } from '~amandas-dummy-package/data/mutationResults';
export { createNetworkInterface, addQueryMerging, addGraphQLSubscriptions, createApolloStore, createApolloReducer, readQueryFromStore, readFragmentFromStore, addTypenameToSelectionSet as addTypename, writeQueryToStore, writeFragmentToStore, print as printAST };
export type ApolloQueryResult = {
    data: any;
    loading: boolean;
};
export let fragmentDefinitionsMap: {
    [fragmentName: string]: FragmentDefinition[];
};
export function createFragment(doc: Document, fragments?: (FragmentDefinition[] | FragmentDefinition[][])): FragmentDefinition[];
export function disableFragmentWarnings(): void;
export function enableFragmentWarnings(): void;
export function clearFragmentDefinitions(): void;
export default class ApolloClient {
    networkInterface: NetworkInterface;
    store: ApolloStore;
    reduxRootKey: string;
    initialState: any;
    queryManager: QueryManager;
    reducerConfig: ApolloReducerConfig;
    queryTransformer: QueryTransformer;
    shouldBatch: boolean;
    shouldForceFetch: boolean;
    dataId: IdGetter;
    fieldWithArgs: (fieldName: string, args?: Object) => string;
    batchInterval: number;
    wsClient: any;
    constructor({networkInterface, reduxRootKey, initialState, dataIdFromObject, queryTransformer, shouldBatch, ssrMode, ssrForceFetchDelay, mutationBehaviorReducers, batchInterval, wsClient}?: {
        networkInterface?: NetworkInterface;
        reduxRootKey?: string;
        initialState?: any;
        dataIdFromObject?: IdGetter;
        queryTransformer?: QueryTransformer;
        shouldBatch?: boolean;
        ssrMode?: boolean;
        ssrForceFetchDelay?: number;
        mutationBehaviorReducers?: MutationBehaviorReducerMap;
        batchInterval?: number;
        wsClient?: any;
    });
    watchQuery: (options: WatchQueryOptions, graphQLSubscription?: boolean) => ObservableQuery;
    query: (options: WatchQueryOptions) => Promise<{
        data: any;
        loading: boolean;
    }>;
    mutate: (options: {
        mutation: Document;
        variables?: Object;
        resultBehaviors?: ({
            type: "ARRAY_INSERT";
            resultPath: (string | number)[];
            storePath: (string | number)[];
            where: "PREPEND" | "APPEND";
        } | {
            type: "ARRAY_DELETE";
            storePath: (string | number)[];
            dataId: string;
        } | {
            type: "DELETE";
            dataId: string;
        } | {
            type: "QUERY_RESULT";
            queryVariables: any;
            querySelectionSet: SelectionSet;
            queryFragments: FragmentDefinition[];
            newResult: Object;
        })[];
        fragments?: FragmentDefinition[];
        optimisticResponse?: Object;
        updateQueries?: {
            [queryName: string]: (previousResult: Object, options: {
                mutationResult: Object;
                queryName: Object;
                queryVariables: Object;
            }) => Object;
        };
        refetchQueries?: string[];
    }) => Promise<{
        data: any;
        loading: boolean;
    }>;
    reducer(): Function;
    middleware: () => (store: ApolloStore) => (next: any) => (action: any) => any;
    initStore(): void;
    private setStore;
}
}
declare module 'amandas-dummy-package/index' {
export * from '~amandas-dummy-package/index';
export { default } from '~amandas-dummy-package/index';
}
declare module 'amandas-dummy-package' {
export * from '~amandas-dummy-package/index';
export { default } from '~amandas-dummy-package/index';
}