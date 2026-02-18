import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only protect admin routes (except /admin/login if you had one)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const auth = request.headers.get('authorization')
    
    if (!auth || !auth.startsWith('Basic ')) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="JMF Admin"',
        },
      })
    }
    
    const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString()
    const [username, password] = credentials.split(':')
    
    const validUsername = process.env.ADMIN_USERNAME || 'admin'
    const validPassword = process.env.ADMIN_PASSWORD || 'jmf-admin-2026'
    
    if (username !== validUsername || password !== validPassword) {
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="JMF Admin"',
        },
      })
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
