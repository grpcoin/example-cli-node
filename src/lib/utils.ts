import { Amount } from "../proto/grpcoin_pb";

export function Parse(p: String): Amount {
  // Split the string on a decimal point, if present
  let pa = p.split(".");
  let units = pa[0];

  // If we had something after the decimal point, add enough 0s to
  // make sure it represents nanos, then turn it into a number
  // by parsing it as a base-10 integer.
  let nanos = 0;
  if (pa.length > 1) {
    let ns = pa[1] + "000000000";
    ns = ns.substring(0, 9);
    nanos = parseInt(ns, 10);
  }
  return new Amount().setUnits(parseInt(units)).setNanos(nanos);
}
