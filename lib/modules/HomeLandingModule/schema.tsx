import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defineType } from "sanity";
import React from "react";
import { RichImageValidation } from "../../sanity/schemas/blocks/RichImage";
import { IconValidation } from "../../sanity/schemas/blocks/Icon";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";

export default defineType({
  title: "Home Landing Module",
  name: "homeLandingModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "hero",
      title: "Hero",
      type: "object",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "title",
          title: "Title",
          type: "editor-highlighter",
          // @ts-ignore
          validation: EditorValidation,
        },
        {
          name: "body",
          title: "Hero Body",
          type: "text",
          validation: (rule) => rule.required(),
        },
        {
          name: "image",
          title: "image",
          type: "richImage",
          //@ts-ignore
          validation: RichImageValidation,
        },
        {
          name: "callToAction",
          title: "Hero Call to Action",
          type: "string",
          validation: (Rule) => Rule.required(),
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
              validation: (rule) => rule.required(),
            },
            {
              name: "icon",
              title: "Icon",
              type: "icon",
              //@ts-ignore
              validation: IconValidation,
            },
            {
              name: "body",
              title: "Body",
              type: "text",
              validation: (rule) => rule.required(),
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
