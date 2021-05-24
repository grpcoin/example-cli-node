/**
 * Copyright 2021 Kaan Karakaya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// package: grpcoin
// file: grpcoin.proto

/* tslint:disable */
/* eslint-disable */

// @ts-ignore
import * as jspb from "google-protobuf";
// @ts-ignore
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class QuoteTicker extends jspb.Message {
    getTicker(): string;
    setTicker(value: string): QuoteTicker;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteTicker.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteTicker): QuoteTicker.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuoteTicker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteTicker;
    static deserializeBinaryFromReader(message: QuoteTicker, reader: jspb.BinaryReader): QuoteTicker;
}

export namespace QuoteTicker {
    export type AsObject = {
        ticker: string,
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

    hasTicker(): boolean;
    clearTicker(): void;
    getTicker(): PortfolioPosition.Ticker | undefined;
    setTicker(value?: PortfolioPosition.Ticker): PortfolioPosition;

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
        ticker?: PortfolioPosition.Ticker.AsObject,
        amount?: Amount.AsObject,
    }


    export class Ticker extends jspb.Message {
        getTicker(): string;
        setTicker(value: string): Ticker;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Ticker.AsObject;
        static toObject(includeInstance: boolean, msg: Ticker): Ticker.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Ticker, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Ticker;
        static deserializeBinaryFromReader(message: Ticker, reader: jspb.BinaryReader): Ticker;
    }

    export namespace Ticker {
        export type AsObject = {
            ticker: string,
        }
    }

}

export class TradeRequest extends jspb.Message {
    getAction(): TradeAction;
    setAction(value: TradeAction): TradeRequest;

    hasTicker(): boolean;
    clearTicker(): void;
    getTicker(): TradeRequest.Ticker | undefined;
    setTicker(value?: TradeRequest.Ticker): TradeRequest;

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
        ticker?: TradeRequest.Ticker.AsObject,
        quantity?: Amount.AsObject,
    }


    export class Ticker extends jspb.Message {
        getTicker(): string;
        setTicker(value: string): Ticker;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Ticker.AsObject;
        static toObject(includeInstance: boolean, msg: Ticker): Ticker.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Ticker, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Ticker;
        static deserializeBinaryFromReader(message: Ticker, reader: jspb.BinaryReader): Ticker;
    }

    export namespace Ticker {
        export type AsObject = {
            ticker: string,
        }
    }

}

export class TradeResponse extends jspb.Message {

    hasT(): boolean;
    clearT(): void;
    getT(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setT(value?: google_protobuf_timestamp_pb.Timestamp): TradeResponse;
    getAction(): TradeAction;
    setAction(value: TradeAction): TradeResponse;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Amount | undefined;
    setQuantity(value?: Amount): TradeResponse;

    hasExecutedPrice(): boolean;
    clearExecutedPrice(): void;
    getExecutedPrice(): Amount | undefined;
    setExecutedPrice(value?: Amount): TradeResponse;

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
        quantity?: Amount.AsObject,
        executedPrice?: Amount.AsObject,
    }
}

export class Empty extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export enum TradeAction {
    UNDEFINED = 0,
    BUY = 1,
    SELL = 2,
}
