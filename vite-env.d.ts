/// <reference types="vite/client" />

// Allow process.env usage in TypeScript
declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    readonly VITE_API_KEY: string;
  }
}
