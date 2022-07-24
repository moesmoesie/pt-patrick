import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defineType } from "sanity";
import { Rule } from "sanity";

const highlightRender = (props: any) => (
  <span className="text-amethyst">{props.children}</span>
);

export const EditorHighlighter = defineType({
  name: "editor-highlighter",
  type: "array",
  of: [
    {
      type: "block",
      options: {
        spellCheck: false,
      },
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {
            title: "Amethyst",
            value: "amethyst",
            blockEditor: {
              icon: () => (
                <FontAwesomeIcon
                  size="2x"
                  className="text-amethyst"
                  icon="droplet"
                />
              ),
              render: highlightRender,
            },
          },
        ],
        annotations: [],
      },
    },
  ],
});

export const EditorValidation: any = () => {
  return (Rule: Rule) =>
    Rule.custom((fields: any) => {
      if (fields === undefined) {
        return "Cannot be empty";
      }
      return true;
    });
};
