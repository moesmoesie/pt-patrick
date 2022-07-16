import { defineType } from "sanity";
export default defineType({
  title: "Home Workouts Module",
  name: "homeWorkoutsModule",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "editor-highlighter",
    },
    {
      name: "workouts",
      title: "Workouts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "image",
              title: "Image",
              type: "richImage",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "description",
              image: "image",
            },
            prepare(value, viewOptions?) {
              const { title, subtitle, image } = value as any;
              return {
                title,
                subtitle,
                media: image,
              };
            },
          },
        },
      ],
    },
  ],
});
