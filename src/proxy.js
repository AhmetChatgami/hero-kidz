import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
 
const privateRoute=["/dashboard", "/cart", "/checkout"]
export async function proxy(req) {
//   return NextResponse.redirect(new URL('/', request.url))
const token = await getToken({req})
console.log(token)
return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ["/dashboard/:path*", "/cart/:path*", "/checkout/:path*"],
}