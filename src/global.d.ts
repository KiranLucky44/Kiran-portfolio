// Type declarations for importing JS/JSX/asset files in a TS project
declare module '*.jsx'
declare module '*.js'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module 'react/jsx-runtime'

// allow imports like import X from './components/Header' to match any file in components
declare module './components/*'

// Fallback JSX intrinsic elements to avoid TS errors for custom elements
import * as React from 'react'
declare global {
  namespace JSX {
    // minimal element types to satisfy JSX.Element references
    type Element = any
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export {}
