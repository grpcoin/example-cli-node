// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 Ahmet Alp Balkan
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var grpcoin_pb = require('./grpcoin_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_grpcoin_ListSupportedCurrenciesRequest(arg) {
  if (!(arg instanceof grpcoin_pb.ListSupportedCurrenciesRequest)) {
    throw new Error('Expected argument of type grpcoin.ListSupportedCurrenciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_ListSupportedCurrenciesRequest(buffer_arg) {
  return grpcoin_pb.ListSupportedCurrenciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_ListSupportedCurrenciesResponse(arg) {
  if (!(arg instanceof grpcoin_pb.ListSupportedCurrenciesResponse)) {
    throw new Error('Expected argument of type grpcoin.ListSupportedCurrenciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_ListSupportedCurrenciesResponse(buffer_arg) {
  return grpcoin_pb.ListSupportedCurrenciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_PortfolioRequest(arg) {
  if (!(arg instanceof grpcoin_pb.PortfolioRequest)) {
    throw new Error('Expected argument of type grpcoin.PortfolioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_PortfolioRequest(buffer_arg) {
  return grpcoin_pb.PortfolioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_PortfolioResponse(arg) {
  if (!(arg instanceof grpcoin_pb.PortfolioResponse)) {
    throw new Error('Expected argument of type grpcoin.PortfolioResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_PortfolioResponse(buffer_arg) {
  return grpcoin_pb.PortfolioResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_Quote(arg) {
  if (!(arg instanceof grpcoin_pb.Quote)) {
    throw new Error('Expected argument of type grpcoin.Quote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_Quote(buffer_arg) {
  return grpcoin_pb.Quote.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_TestAuthRequest(arg) {
  if (!(arg instanceof grpcoin_pb.TestAuthRequest)) {
    throw new Error('Expected argument of type grpcoin.TestAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_TestAuthRequest(buffer_arg) {
  return grpcoin_pb.TestAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_TestAuthResponse(arg) {
  if (!(arg instanceof grpcoin_pb.TestAuthResponse)) {
    throw new Error('Expected argument of type grpcoin.TestAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_TestAuthResponse(buffer_arg) {
  return grpcoin_pb.TestAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_TickerWatchRequest(arg) {
  if (!(arg instanceof grpcoin_pb.TickerWatchRequest)) {
    throw new Error('Expected argument of type grpcoin.TickerWatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_TickerWatchRequest(buffer_arg) {
  return grpcoin_pb.TickerWatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_TradeRequest(arg) {
  if (!(arg instanceof grpcoin_pb.TradeRequest)) {
    throw new Error('Expected argument of type grpcoin.TradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_TradeRequest(buffer_arg) {
  return grpcoin_pb.TradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcoin_TradeResponse(arg) {
  if (!(arg instanceof grpcoin_pb.TradeResponse)) {
    throw new Error('Expected argument of type grpcoin.TradeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcoin_TradeResponse(buffer_arg) {
  return grpcoin_pb.TradeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TickerInfoService = exports.TickerInfoService = {
  // Watch returns real-time quotes of the ticker.
// The only supported tickers are "BTC", "ETH", "DOGE", "DOT".
//
// This stream terminates after 15 minutes, so expect being
// abruptly disconnected and need to reconnect.
//
// No authentication required.
watch: {
    path: '/grpcoin.TickerInfo/Watch',
    requestStream: false,
    responseStream: true,
    requestType: grpcoin_pb.TickerWatchRequest,
    responseType: grpcoin_pb.Quote,
    requestSerialize: serialize_grpcoin_TickerWatchRequest,
    requestDeserialize: deserialize_grpcoin_TickerWatchRequest,
    responseSerialize: serialize_grpcoin_Quote,
    responseDeserialize: deserialize_grpcoin_Quote,
  },
};

exports.TickerInfoClient = grpc.makeGenericClientConstructor(TickerInfoService);
var PaperTradeService = exports.PaperTradeService = {
  // Returns authenticated user's portfolio.
portfolio: {
    path: '/grpcoin.PaperTrade/Portfolio',
    requestStream: false,
    responseStream: false,
    requestType: grpcoin_pb.PortfolioRequest,
    responseType: grpcoin_pb.PortfolioResponse,
    requestSerialize: serialize_grpcoin_PortfolioRequest,
    requestDeserialize: deserialize_grpcoin_PortfolioRequest,
    responseSerialize: serialize_grpcoin_PortfolioResponse,
    responseDeserialize: deserialize_grpcoin_PortfolioResponse,
  },
  // Executes a trade in authenticated user's portfolio.
// All trades are executed immediately with the real-time market
// price provided on TickerInfo.Watch endpoint.
trade: {
    path: '/grpcoin.PaperTrade/Trade',
    requestStream: false,
    responseStream: false,
    requestType: grpcoin_pb.TradeRequest,
    responseType: grpcoin_pb.TradeResponse,
    requestSerialize: serialize_grpcoin_TradeRequest,
    requestDeserialize: deserialize_grpcoin_TradeRequest,
    responseSerialize: serialize_grpcoin_TradeResponse,
    responseDeserialize: deserialize_grpcoin_TradeResponse,
  },
  // Returns symbols supported by Trade or Watch methods.
listSupportedCurrencies: {
    path: '/grpcoin.PaperTrade/ListSupportedCurrencies',
    requestStream: false,
    responseStream: false,
    requestType: grpcoin_pb.ListSupportedCurrenciesRequest,
    responseType: grpcoin_pb.ListSupportedCurrenciesResponse,
    requestSerialize: serialize_grpcoin_ListSupportedCurrenciesRequest,
    requestDeserialize: deserialize_grpcoin_ListSupportedCurrenciesRequest,
    responseSerialize: serialize_grpcoin_ListSupportedCurrenciesResponse,
    responseDeserialize: deserialize_grpcoin_ListSupportedCurrenciesResponse,
  },
};

exports.PaperTradeClient = grpc.makeGenericClientConstructor(PaperTradeService);
var AccountService = exports.AccountService = {
  // Tests if your token works.
//
// Send a header (gRPC metadata) named "Authorization"
// with value "Bearer XXX" where XXX is a GitHub Personal Access token
// from https://github.com/settings/tokens (no permissions needed).
testAuth: {
    path: '/grpcoin.Account/TestAuth',
    requestStream: false,
    responseStream: false,
    requestType: grpcoin_pb.TestAuthRequest,
    responseType: grpcoin_pb.TestAuthResponse,
    requestSerialize: serialize_grpcoin_TestAuthRequest,
    requestDeserialize: deserialize_grpcoin_TestAuthRequest,
    responseSerialize: serialize_grpcoin_TestAuthResponse,
    responseDeserialize: deserialize_grpcoin_TestAuthResponse,
  },
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);
