import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defineType } from "sanity";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";

export default defineType({
  title: "Home Pricing Module",
  name: "homePricingModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "editor-highlighter",
      // @ts-ignore
      validation: EditorValidation,
    },
    {
      name: "pricingList",
      title: "Pricing List",
      type: "array",
      validation: (rule) => rule.min(3).max(3),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "price",
              title: "Price",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "priceSubtitle",
              title: "Price Subtitle",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "body",
              title: "Body",
              type: "text",
              validation: (rule) => rule.required(),
            },
            {
              name: "bulletPoints",
              title: "Bullet Points",
              type: "array",
              validation: (rule) => rule.min(3).max(3),
              of: [{ type: "string" }],
            },
            {
              name: "callToAction",
              title: "Call To Action",
              type: "string",
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: "caption",
              subtitle: "price",
            },
            prepare(value, viewOptions?) {
              const { title, subtitle } = value as any;
              return {
                title,
                subtitle: `€${subtitle}`,
                media: <FontAwesomeIcon icon="euro" />,
              };
            },
          },
        },
      ],
    },
  ],
});
