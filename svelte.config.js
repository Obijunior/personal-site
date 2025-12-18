import { vitePreprocess } from '@astrojs/svelte';

export default {
    preprocess: vitePreprocess(),
    compilerOptions: {
        dev: true,
        experimental: {
            async: true
        }
    }
};
