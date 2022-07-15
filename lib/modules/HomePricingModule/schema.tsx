import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defineType } from "sanity";

export default defineType({
  title: "Home Pricing Module",
  name: "homePricingModule",
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
      name: "pricingList",
      title: "Pricing List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "price",
              title: "Price",
              type: "string",
            },
            {
              name: "priceSubtitle",
              title: "Price Subtitle",
              type: "string",
            },
            {
              name: "body",
              title: "Body",
              type: "text",
            },
            {
              name: "bulletPoints",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "callToAction",
              title: "Call To Action",
              type: "string",
            },
          ],
          validation: (rule) => rule.min(3).max(3),
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
