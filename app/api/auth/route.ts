import { auth } from "../../../index";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return auth(request);
}
