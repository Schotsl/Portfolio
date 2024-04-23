import { callback } from "../../../index";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return callback(request);
}
