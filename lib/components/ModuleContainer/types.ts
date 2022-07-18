import { SizeGroupZod } from "../../modules/types";
import { z } from "zod";

interface ModuleContainerProps {
  children: JSX.Element | JSX.Element[];
  color?: string | null;
  paddingBottom?: z.infer<typeof SizeGroupZod> | null;
  paddingTop?: z.infer<typeof SizeGroupZod> | null;
  hasSeperator?: boolean | null;
  id?: string;
}

export default ModuleContainerProps;
