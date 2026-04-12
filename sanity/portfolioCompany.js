export default {
  name: 'portfolioCompany',
  title: 'Portfolio Company',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Miami, Florida',
      validation: Rule => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Year the company was founded or partnered',
      validation: Rule => Rule.required().integer().min(2000).max(2100),
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      title: 'Details Link',
      type: 'url',
      description: 'URL for the "View full details" button',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
      media: 'logo',
    },
  },
}
