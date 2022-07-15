import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defineType } from "sanity";
import React from "react";

export default defineType({
  title: "Home Landing Module",
  name: "homeLandingModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
    },
    {
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Hero Title",
          type: "text",
        },
        {
          name: "body",
          title: "Hero Body",
          type: "text",
        },
        {
          name: "image",
          title: "image",
          type: "richImage",
        },
        {
          name: "callToAction",
          title: "Hero Call to Action",
          type: "string",
        },
      ],
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      validation: (rule) => rule.min(3).max(3),
      of: [
        {
          title: "Card",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "icon",
            },
            {
              name: "body",
              title: "Body",
              type: "text",
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "body",
              icon: "icon",
            },
            prepare(value, viewOptions?) {
              const { title, subtitle, icon } = value as any;
              return {
                title,
                subtitle,
                media: (
                  <FontAwesomeIcon icon={[icon?.package, icon?.name ?? ""]} />
                ),
              };
            },
          },
        },
      ],
    },
  ],
});
