import { defineType } from "sanity";
export default defineType({
  title: "Home Workouts Module",
  name: "homeWorkoutsModule",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
          ],
        },
      ],
    },
  ],
});
