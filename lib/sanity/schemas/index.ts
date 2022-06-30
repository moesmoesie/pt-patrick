import * as pages from "./pages";
// import * as components from "./components";
import * as blocks from "./blocks";

export const pageSchemaTypes = Object.values(pages);
// export const componentSchemaTypes = Object.values(components);
export const blockSchemaTypes = Object.values(blocks);

export const schemaTypes = [...pageSchemaTypes, ...blockSchemaTypes];
