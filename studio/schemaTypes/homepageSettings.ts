import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageSettings',
  title: 'Homepage Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredCompanies',
      title: 'Featured Companies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      validation: (Rule) =>
        Rule.max(3).error('You can feature a maximum of 3 companies on the homepage.'),
      description:
        'Pick up to 3 companies to show on the homepage. Drag to reorder — top item appears first.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Homepage Settings'}
    },
  },
})
