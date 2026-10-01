import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS')!,
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Model Context Protocol-endpoint op /mcp, waarmee een AI-client content kan
  // lezen en schrijven. Wat die client mag, hangt volledig af van de rechten van
  // het admin-token waarmee hij verbindt.
  //
  // Achter een omgevingsvariabele en standaard uit: dit endpoint kan content
  // aanmaken, wijzigen, publiceren en verwijderen, dus het hoort per omgeving
  // bewust aangezet te worden. Uitzetten kan zonder nieuwe deploy.
  mcp: {
    enabled: env.bool('MCP_ENABLED', false),
  },
});

export default config;
