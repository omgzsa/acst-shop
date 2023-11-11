import { defaultConfig } from '@formkit/vue';
import {
  createMultiStepPlugin,
  createAutoAnimatePlugin,
} from '@formkit/addons';

const config = defaultConfig({
  plugins: [createMultiStepPlugin(), createAutoAnimatePlugin()],
  theme: 'genesis',
});

export default config;
