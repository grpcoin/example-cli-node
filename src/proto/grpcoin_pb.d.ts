// package: grpcoin
// file: grpcoin.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Currency extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): Currency;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Currency.AsObject;
    static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Currency;
    static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
    export type AsObject = {
        symbol: string,
    }
}

export class Amount extends jspb.Message { 
    getUnits(): number;
    setUnits(value: number): Amount;
    getNanos(): number;
    setNanos(value: number): Amount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Amount.AsObject;
    static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Amount;
    static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
}

export namespace Amount {
    export type AsObject = {
        units: number,
        nanos: number,
    }
}

export class TickerWatchRequest extends jspb.Message { 

    hasCurrency(): boolean;
    clearCurrency(): void;
    getCurrency(): Currency | undefined;
    setCurrency(value?: Currency): TickerWatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TickerWatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TickerWatchRequest): TickerWatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TickerWatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TickerWatchRequest;
    static deserializeBinaryFromReader(message: TickerWatchRequest, reader: jspb.BinaryReader): TickerWatchRequest;
}

export namespace TickerWatchRequest {
    export type AsObject = {
        currency?: Currency.AsObject,
    }
}

export class Quote extends jspb.Message { 

    hasT(): boolean;
    clearT(): void;
    getT(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setT(value?: google_protobuf_timestamp_pb.Timestamp): Quote;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): Amount | undefined;
    setPrice(value?: Amount): Quote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quote.AsObject;
    static toObject(includeInstance: boolean, msg: Quote): Quote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quote;
    static deserializeBinaryFromReader(message: Quote, reader: jspb.BinaryReader): Quote;
}

export namespace Quote {
    export type AsObject = {
        t?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        price?: Amount.AsObject,
    }
}

export class TestAuthRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestAuthRequest): TestAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestAuthRequest;
    static deserializeBinaryFromReader(message: TestAuthRequest, reader: jspb.BinaryReader): TestAuthRequest;
}

export namespace TestAuthRequest {
    export type AsObject = {
    }
}

export class TestAuthResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): TestAuthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestAuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TestAuthResponse): TestAuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestAuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestAuthResponse;
    static deserializeBinaryFromReader(message: TestAuthResponse, reader: jspb.BinaryReader): TestAuthResponse;
}

export namespace TestAuthResponse {
    export type AsObject = {
        userId: string,
    }
}

export class PortfolioRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioRequest): PortfolioRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioRequest;
    static deserializeBinaryFromReader(message: PortfolioRequest, reader: jspb.BinaryReader): PortfolioRequest;
}

export namespace PortfolioRequest {
    export type AsObject = {
    }
}

export class PortfolioResponse extends jspb.Message { 

    hasCashUsd(): boolean;
    clearCashUsd(): void;
    getCashUsd(): Amount | undefined;
    setCashUsd(value?: Amount): PortfolioResponse;
    clearPositionsList(): void;
    getPositionsList(): Array<PortfolioPosition>;
    setPositionsList(value: Array<PortfolioPosition>): PortfolioResponse;
    addPositions(value?: PortfolioPosition, index?: number): PortfolioPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioResponse): PortfolioResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioResponse;
    static deserializeBinaryFromReader(message: PortfolioResponse, reader: jspb.BinaryReader): PortfolioResponse;
}

export namespace PortfolioResponse {
    export type AsObject = {
        cashUsd?: Amount.AsObject,
        positionsList: Array<PortfolioPosition.AsObject>,
    }
}

export class PortfolioPosition extends jspb.Message { 

    hasCurrency(): boolean;
    clearCurrency(): void;
    getCurrency(): Currency | undefined;
    setCurrency(value?: Currency): PortfolioPosition;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): Amount | undefined;
    setAmount(value?: Amount): PortfolioPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioPosition.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioPosition): PortfolioPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioPosition;
    static deserializeBinaryFromReader(message: PortfolioPosition, reader: jspb.BinaryReader): PortfolioPosition;
}

export namespace PortfolioPosition {
    export type AsObject = {
        currency?: Currency.AsObject,
        amount?: Amount.AsObject,
    }
}

export class TradeRequest extends jspb.Message { 
    getAction(): TradeAction;
    setAction(value: TradeAction): TradeRequest;

    hasCurrency(): boolean;
    clearCurrency(): void;
    getCurrency(): Currency | undefined;
    setCurrency(value?: Currency): TradeRequest;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Amount | undefined;
    setQuantity(value?: Amount): TradeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradeRequest): TradeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeRequest;
    static deserializeBinaryFromReader(message: TradeRequest, reader: jspb.BinaryReader): TradeRequest;
}

export namespace TradeRequest {
    export type AsObject = {
        action: TradeAction,
        currency?: Currency.AsObject,
        quantity?: Amount.AsObject,
    }
}

export class TradeResponse extends jspb.Message { 

    hasT(): boolean;
    clearT(): void;
    getT(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setT(value?: google_protobuf_timestamp_pb.Timestamp): TradeResponse;
    getAction(): TradeAction;
    setAction(value: TradeAction): TradeResponse;

    hasCurrency(): boolean;
    clearCurrency(): void;
    getCurrency(): Currency | undefined;
    setCurrency(value?: Currency): TradeResponse;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Amount | undefined;
    setQuantity(value?: Amount): TradeResponse;

    hasExecutedPrice(): boolean;
    clearExecutedPrice(): void;
    getExecutedPrice(): Amount | undefined;
    setExecutedPrice(value?: Amount): TradeResponse;

    hasResultingPortfolio(): boolean;
    clearResultingPortfolio(): void;
    getResultingPortfolio(): TradeResponse.Portfolio | undefined;
    setResultingPortfolio(value?: TradeResponse.Portfolio): TradeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradeResponse): TradeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeResponse;
    static deserializeBinaryFromReader(message: TradeResponse, reader: jspb.BinaryReader): TradeResponse;
}

export namespace TradeResponse {
    export type AsObject = {
        t?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        action: TradeAction,
        currency?: Currency.AsObject,
        quantity?: Amount.AsObject,
        executedPrice?: Amount.AsObject,
        resultingPortfolio?: TradeResponse.Portfolio.AsObject,
    }


    export class Portfolio extends jspb.Message { 

        hasRemainingCash(): boolean;
        clearRemainingCash(): void;
        getRemainingCash(): Amount | undefined;
        setRemainingCash(value?: Amount): Portfolio;
        clearPositionsList(): void;
        getPositionsList(): Array<PortfolioPosition>;
        setPositionsList(value: Array<PortfolioPosition>): Portfolio;
        addPositions(value?: PortfolioPosition, index?: number): PortfolioPosition;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Portfolio.AsObject;
        static toObject(includeInstance: boolean, msg: Portfolio): Portfolio.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Portfolio, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Portfolio;
        static deserializeBinaryFromReader(message: Portfolio, reader: jspb.BinaryReader): Portfolio;
    }

    export namespace Portfolio {
        export type AsObject = {
            remainingCash?: Amount.AsObject,
            positionsList: Array<PortfolioPosition.AsObject>,
        }
    }

}

export class ListSupportedCurrenciesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSupportedCurrenciesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSupportedCurrenciesRequest): ListSupportedCurrenciesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSupportedCurrenciesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSupportedCurrenciesRequest;
    static deserializeBinaryFromReader(message: ListSupportedCurrenciesRequest, reader: jspb.BinaryReader): ListSupportedCurrenciesRequest;
}

export namespace ListSupportedCurrenciesRequest {
    export type AsObject = {
    }
}

export class ListSupportedCurrenciesResponse extends jspb.Message { 
    clearSupportedCurrenciesList(): void;
    getSupportedCurrenciesList(): Array<Currency>;
    setSupportedCurrenciesList(value: Array<Currency>): ListSupportedCurrenciesResponse;
    addSupportedCurrencies(value?: Currency, index?: number): Currency;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSupportedCurrenciesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSupportedCurrenciesResponse): ListSupportedCurrenciesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSupportedCurrenciesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSupportedCurrenciesResponse;
    static deserializeBinaryFromReader(message: ListSupportedCurrenciesResponse, reader: jspb.BinaryReader): ListSupportedCurrenciesResponse;
}

export namespace ListSupportedCurrenciesResponse {
    export type AsObject = {
        supportedCurrenciesList: Array<Currency.AsObject>,
    }
}

export enum TradeAction {
    UNDEFINED = 0,
    BUY = 1,
    SELL = 2,
}
