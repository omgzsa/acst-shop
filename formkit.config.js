import { defaultConfig } from '@formkit/vue';
import {
  createMultiStepPlugin,
  createAutoAnimatePlugin,
} from '@formkit/addons';
import { generateClasses } from '@formkit/themes';
import theme from './assets/acst.js';
import '@formkit/addons/css/multistep';

const config = defaultConfig({
  plugins: [createMultiStepPlugin(), createAutoAnimatePlugin()],
  // theme: 'genesis',
  config: {
    classes: generateClasses(theme),
  },
});

export default config;
