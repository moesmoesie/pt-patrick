import * as pages from "./pages";
import * as blocks from "./blocks";
import * as singletons from "./singletons";

export const pageSchemaTypes = Object.values(pages);
export const singletonschemaTypes = Object.values(singletons);
export const blockSchemaTypes = Object.values(blocks);

export const schemaTypes = [
  ...pageSchemaTypes,
  ...blockSchemaTypes,
  ...singletonschemaTypes,
];
