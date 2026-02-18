import { NextRequest, NextResponse } from 'next/server'

// Simple HTTP Basic Auth middleware
export function withAuth(handler: Function) {
  return async (request: NextRequest, ...args: any[]) => {
    const auth = request.headers.get('authorization')
    
    if (!auth || !auth.startsWith('Basic ')) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Panel"',
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
          'WWW-Authenticate': 'Basic realm="Admin Panel"',
        },
      })
    }
    
    return handler(request, ...args)
  }
}

// Check auth for page components (server-side)
export function checkAuth(request: Request): boolean {
  const auth = request.headers.get('authorization')
  
  if (!auth || !auth.startsWith('Basic ')) {
    return false
  }
  
  const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString()
  const [username, password] = credentials.split(':')
  
  const validUsername = process.env.ADMIN_USERNAME || 'admin'
  const validPassword = process.env.ADMIN_PASSWORD || 'jmf-admin-2026'
  
  return username === validUsername && password === validPassword
}
