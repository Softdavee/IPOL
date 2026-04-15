import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Types that should only ever have a single document (no "New" button)
const SINGLETON_TYPES = new Set(['homepageSettings'])

export default defineConfig({
  name: 'ipol-studio',
  title: 'IPO Labs Studio',

  projectId: '7a9s8ki1',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ── Singleton: Homepage Settings ──
            S.listItem()
              .title('Homepage Settings')
              .id('homepageSettings')
              .child(
                S.document()
                  .schemaType('homepageSettings')
                  .documentId('homepageSettings'), // fixed document ID keeps it a singleton
              ),

            S.divider(),

            // ── All other document types (excluding singletons) ──
            ...S.documentTypeListItems().filter(
              (item) => item.getId() && !SINGLETON_TYPES.has(item.getId()!),
            ),
          ]),
    }),

    // GROQ query playground (useful for debugging)
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Remove singleton types from the global "New document" menu
    templates: (templates) =>
      templates.filter(({schemaType}) => !SINGLETON_TYPES.has(schemaType)),
  },
})
