# rolldown-vite native plugins causes defined globals to disappear

1. Run `pnpm i` and `pnpm dev`
2. Open `http://localhost:5173`
3. Observe that the `MY_GLOBAL` variable (defined in `vite.config.ts`) has its value displayed on the page.
4. Enable `experimental.enableNativePlugins` in `vite.config.ts`.
5. Refresh the page.
6. Observe the SSR error saying that `MY_GLOBAL is undefined`.
