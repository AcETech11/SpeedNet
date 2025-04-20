import {CommentIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

export const commentType = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'clientName',
      title: "Client Name",
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'clientName',
      },
    }),
    defineField({
      name: 'clientTitle',
      title: 'Client Title',
      type: 'string',
      description: 'Client Company name / Position',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          { title: 'No Rating', value: 'No' },
          { title: '1 Star', value: '1' },
          { title: '2 Stars', value: '2' },
          { title: '3 Stars', value: '3' },
          { title: '4 Stars', value: '4' },
          { title: '5 Stars', value: '5' },
        ],
        layout: 'dropdown', // Optional: explicitly sets the layout to dropdown
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'Comment',
        title: 'Comment',
        description: 'What the client said',
        type: 'text',
        validation: Rule => Rule.required(),
      }),
  ],
  preview: {
    select: {
      title: 'clientName',
      clientTitle: 'clientTitle',
      media: 'mainImage',
      rating: 'rating',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})