/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly TIME_API_URL: string;
  // more vars...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}