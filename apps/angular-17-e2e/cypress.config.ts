import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run angular-17:serve:development',
        production: 'nx run angular-17:serve:production',
      },
      ciWebServerCommand: 'nx run angular-17:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
