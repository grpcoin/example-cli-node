// package: grpcoin
// file: grpcoin.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as grpcoin_pb from "./grpcoin_pb";
// @ts-ignore
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ITickerInfoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    watch: ITickerInfoService_IWatch;
}

interface ITickerInfoService_IWatch extends grpc.MethodDefinition<grpcoin_pb.QuoteTicker, grpcoin_pb.Quote> {
    path: "/grpcoin.TickerInfo/Watch";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<grpcoin_pb.QuoteTicker>;
    requestDeserialize: grpc.deserialize<grpcoin_pb.QuoteTicker>;
    responseSerialize: grpc.serialize<grpcoin_pb.Quote>;
    responseDeserialize: grpc.deserialize<grpcoin_pb.Quote>;
}

export const TickerInfoService: ITickerInfoService;

export interface ITickerInfoServer {
    watch: grpc.handleServerStreamingCall<grpcoin_pb.QuoteTicker, grpcoin_pb.Quote>;
}

export interface ITickerInfoClient {
    watch(request: grpcoin_pb.QuoteTicker, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<grpcoin_pb.Quote>;
    watch(request: grpcoin_pb.QuoteTicker, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<grpcoin_pb.Quote>;
}

export class TickerInfoClient extends grpc.Client implements ITickerInfoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public watch(request: grpcoin_pb.QuoteTicker, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<grpcoin_pb.Quote>;
    public watch(request: grpcoin_pb.QuoteTicker, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<grpcoin_pb.Quote>;
}

interface IAccountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    testAuth: IAccountService_ITestAuth;
}

interface IAccountService_ITestAuth extends grpc.MethodDefinition<grpcoin_pb.TestAuthRequest, grpcoin_pb.TestAuthResponse> {
    path: "/grpcoin.Account/TestAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpcoin_pb.TestAuthRequest>;
    requestDeserialize: grpc.deserialize<grpcoin_pb.TestAuthRequest>;
    responseSerialize: grpc.serialize<grpcoin_pb.TestAuthResponse>;
    responseDeserialize: grpc.deserialize<grpcoin_pb.TestAuthResponse>;
}

export const AccountService: IAccountService;

export interface IAccountServer {
    testAuth: grpc.handleUnaryCall<grpcoin_pb.TestAuthRequest, grpcoin_pb.TestAuthResponse>;
}

export interface IAccountClient {
    testAuth(request: grpcoin_pb.TestAuthRequest, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TestAuthResponse) => void): grpc.ClientUnaryCall;
    testAuth(request: grpcoin_pb.TestAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TestAuthResponse) => void): grpc.ClientUnaryCall;
    testAuth(request: grpcoin_pb.TestAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TestAuthResponse) => void): grpc.ClientUnaryCall;
}

export class AccountClient extends grpc.Client implements IAccountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public testAuth(request: grpcoin_pb.TestAuthRequest, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TestAuthResponse) => void): grpc.ClientUnaryCall;
    public testAuth(request: grpcoin_pb.TestAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TestAuthResponse) => void): grpc.ClientUnaryCall;
    public testAuth(request: grpcoin_pb.TestAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TestAuthResponse) => void): grpc.ClientUnaryCall;
}

interface IPaperTradeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    portfolio: IPaperTradeService_IPortfolio;
    trade: IPaperTradeService_ITrade;
}

interface IPaperTradeService_IPortfolio extends grpc.MethodDefinition<grpcoin_pb.PortfolioRequest, grpcoin_pb.PortfolioResponse> {
    path: "/grpcoin.PaperTrade/Portfolio";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpcoin_pb.PortfolioRequest>;
    requestDeserialize: grpc.deserialize<grpcoin_pb.PortfolioRequest>;
    responseSerialize: grpc.serialize<grpcoin_pb.PortfolioResponse>;
    responseDeserialize: grpc.deserialize<grpcoin_pb.PortfolioResponse>;
}
interface IPaperTradeService_ITrade extends grpc.MethodDefinition<grpcoin_pb.TradeRequest, grpcoin_pb.TradeResponse> {
    path: "/grpcoin.PaperTrade/Trade";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpcoin_pb.TradeRequest>;
    requestDeserialize: grpc.deserialize<grpcoin_pb.TradeRequest>;
    responseSerialize: grpc.serialize<grpcoin_pb.TradeResponse>;
    responseDeserialize: grpc.deserialize<grpcoin_pb.TradeResponse>;
}

export const PaperTradeService: IPaperTradeService;

export interface IPaperTradeServer {
    portfolio: grpc.handleUnaryCall<grpcoin_pb.PortfolioRequest, grpcoin_pb.PortfolioResponse>;
    trade: grpc.handleUnaryCall<grpcoin_pb.TradeRequest, grpcoin_pb.TradeResponse>;
}

export interface IPaperTradeClient {
    portfolio(request: grpcoin_pb.PortfolioRequest, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    portfolio(request: grpcoin_pb.PortfolioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    portfolio(request: grpcoin_pb.PortfolioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    trade(request: grpcoin_pb.TradeRequest, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TradeResponse) => void): grpc.ClientUnaryCall;
    trade(request: grpcoin_pb.TradeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TradeResponse) => void): grpc.ClientUnaryCall;
    trade(request: grpcoin_pb.TradeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TradeResponse) => void): grpc.ClientUnaryCall;
}

export class PaperTradeClient extends grpc.Client implements IPaperTradeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public portfolio(request: grpcoin_pb.PortfolioRequest, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public portfolio(request: grpcoin_pb.PortfolioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public portfolio(request: grpcoin_pb.PortfolioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public trade(request: grpcoin_pb.TradeRequest, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TradeResponse) => void): grpc.ClientUnaryCall;
    public trade(request: grpcoin_pb.TradeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TradeResponse) => void): grpc.ClientUnaryCall;
    public trade(request: grpcoin_pb.TradeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcoin_pb.TradeResponse) => void): grpc.ClientUnaryCall;
}
