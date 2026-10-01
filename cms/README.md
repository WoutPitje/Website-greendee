# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

---

## MCP-endpoint

Strapi serveert een Model Context Protocol-endpoint op `/mcp`, waarmee een
AI-client content kan lezen en schrijven. Het staat achter `MCP_ENABLED`
(`config/server.ts`) en is standaard uit; op de productie-CMS staat de variabele
in Coolify op `true`.

Controleren of het leeft, zonder token:

```bash
curl -X POST https://cms.greendee.nl/mcp \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
# {"jsonrpc":"2.0","error":{"code":-32000,"message":"Authentication required"},"id":null}
```

Verbinden kost een **admintoken** — niet een Content-API-token en niet het
Coolify-token. Aanmaken kan alleen in het adminpaneel, want de REST-route
erachter vraagt om een ingelogde admin: Settings → Admin tokens → Create new
admin token. Het token erft de rechten van de admin waaraan het hangt, dus geef
het een rol die niet meer mag dan nodig is.

Daarna, met het token (en niet in de repo — `claude mcp add` zet het in je eigen
configuratie):

```bash
claude mcp add strapi --transport http https://cms.greendee.nl/mcp \
  -H "Authorization: Bearer <admintoken>"
```

Let op de Strapi-versie. Tot en met 5.52 beschrijft het endpoint zijn tools in
JSON Schema draft-07; clients die dat niet accepteren laten de tools stilletjes
weg, wat zich voordoet als een rechtenprobleem terwijl de server niets logt.
Vanaf 5.53 is dat opgelost en vanaf 5.54 zijn er ook Media Library-tools. Komt de
verbinding op met nul tools, dan is upgraden de oplossing en niet sleutelen aan
de rechten van het token.
