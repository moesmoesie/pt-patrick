import { defineType } from "sanity";

export default defineType({
  title: "Home Reviews Module",
  name: "homeReviewsModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          name: "review",
          title: "Review",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "body",
              title: "Body",
              type: "text",
            },
            {
              name: "image",
              title: "Image",
              type: "richImage",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "title",
              image: "image",
            },
            prepare(value, viewOptions?) {
              const { title, subtitle, image } = value as any;
              return { title, subtitle, media: image };
            },
          },
        },
      ],
    },
  ],
});
