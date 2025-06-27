import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {},
  define: {
    MY_GLOBAL: 'true',
  },
  // enabling this causes the global variable defined above to not appear on the server
  // experimental: {
  //   enableNativePlugin: true,
  // },
});
