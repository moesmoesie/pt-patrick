import { StructureResolver, StructureBuilder } from "sanity/desk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { moduleData, componentData } from "./schemas/utils";

const getPage = (S: StructureBuilder, page: string) => {
  return S.document().documentId(page).schemaType(page);
};

const stucture: StructureResolver = (S, content) => {
  const PagesItem = S.listItem()
    .title("Pages")
    .icon(() => <FontAwesomeIcon icon={"note-sticky"} />)
    .child(
      S.list()
        .title("Pages")
        .items([
          // Home Page
          S.listItem()
            .title("Home")
            .icon(() => <FontAwesomeIcon icon="home" />)
            .child(getPage(S, "homePage")),
        ])
    );

  const ModulesItem = S.listItem()
    .title("Modules")
    .icon(() => <FontAwesomeIcon icon={"cubes"} />)
    .child(
      S.list()
        .title("Modules")
        .items(
          moduleData.map((module) => {
            return S.listItem()
              .title(module.title)
              .icon(() => module.icon)
              .child(S.documentTypeList(module.type).title(module.title));
          })
        )
    );

  const ComponentsItem = S.listItem()
    .title("Components")
    .icon(() => <FontAwesomeIcon icon={"cube"} />)
    .child(
      S.list()
        .title("Components")
        .items(
          componentData.map((component) => {
            return S.listItem()
              .title(component.title)
              .icon(() => component.icon)
              .child(S.documentTypeList(component.type).title(component.title));
          })
        )
    );

  const SettingsItem = S.listItem()
    .title("Settings")
    .icon(() => <FontAwesomeIcon icon={"gear"} />)
    .child(
      S.document()
        .documentId("settings")
        .schemaType("settings")
        .title("Settings")
    );

  return S.list()
    .title("Content")
    .items([PagesItem, ModulesItem, ComponentsItem, S.divider(), SettingsItem]);
};

export default stucture;
