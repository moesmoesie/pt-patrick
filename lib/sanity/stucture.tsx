import { createStructureBuilder } from "sanity/lib/dts/src/desk/structureBuilder";
import { StructureResolver, StructureBuilder } from "sanity/desk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { moduleData } from "./schemas/utils";

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
    .icon(() => <FontAwesomeIcon icon={"puzzle-piece"} />)
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

  return S.list().title("Content").items([PagesItem, ModulesItem]);
};

export default stucture;
