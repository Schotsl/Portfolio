import { callback } from "../../../index";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return callback(request);
}
