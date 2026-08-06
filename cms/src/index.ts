import type { Core } from '@strapi/strapi';
import { seedReferences } from './seed/references';

// The website reads references anonymously, so grant the public role read
// access here instead of clicking it in the admin. A fresh deploy against an
// empty database then serves the API without manual setup.
const PUBLIC_ACTIONS = [
  'api::reference.reference.find',
  'api::reference.reference.findOne',
];

async function grantPublicReadAccess(strapi: Core.Strapi) {
  const publicRole = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) {
    strapi.log.warn('[bootstrap] public role not found, skipping permissions');
    return;
  }

  for (const action of PUBLIC_ACTIONS) {
    const existing = await strapi.db
      .query('plugin::users-permissions.permission')
      .findOne({ where: { action, role: publicRole.id } });

    if (existing) continue;

    await strapi.db.query('plugin::users-permissions.permission').create({
      data: { action, role: publicRole.id },
    });
    strapi.log.info(`[bootstrap] granted public access to ${action}`);
  }
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await grantPublicReadAccess(strapi);
    await seedReferences(strapi);
  },
};
