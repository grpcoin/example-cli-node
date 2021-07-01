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

import {Amount} from '../proto/grpcoin_pb'
import * as grpc from 'grpc'

const Parse = (p: string): Amount => {
  // Split the string on a decimal point, if present
  const pa = p.split('.')
  const units = pa[0]

  // If we had something after the decimal point, add enough 0s to
  // make sure it represents nanos, then turn it into a number
  // by parsing it as a base-10 integer.
  let nanos = 0
  if (pa.length > 1) {
    let ns = pa[1] + '000000000'
    ns = ns.substring(0, 9)
    nanos = parseInt(ns, 10)
  }
  return new Amount().setUnits(parseInt(units, 10)).setNanos(nanos)
}

const server = process.env.LOCAL ? 'localhost:8080' : 'api.grpco.in:443'
const grpcCreds = process.env.LOCAL ? grpc.credentials.createInsecure() : grpc.credentials.createSsl()

export {Parse, server, grpcCreds}
