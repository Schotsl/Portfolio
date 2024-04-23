import { randomBytes } from "crypto";
import { AuthorizationCode } from "simple-oauth2";
import { NextRequest, NextResponse } from "next/server";

export const oauthConfig = {
  client: {
    id: process.env.OAUTH_CLIENT_ID!,
    secret: process.env.OAUTH_CLIENT_SECRET!,
  },
  auth: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize",
  },
};

/** An endpoint to start an OAuth2 authentication */
export async function GET(req: NextRequest) {
  const host = req.headers.get("host");
  const code = new AuthorizationCode(oauthConfig);

  const stateBytes = randomBytes(6);
  const stateHex = stateBytes.toString("hex");

  const url = code.authorizeURL({
    redirect_uri: `https://${host}/api/callback`,
    scope: `repo,user`,
    state: stateHex,
  });

  return NextResponse.redirect(url);
}
