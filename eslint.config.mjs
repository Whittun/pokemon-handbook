import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslint from '@eslint/js';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime']
);
