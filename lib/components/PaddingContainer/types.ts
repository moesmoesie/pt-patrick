import { SizeGroupZod } from "../../modules/types";
import { z } from "zod";

interface PaddingContainerProps {
  children: JSX.Element | JSX.Element[];
  color?: string | null;
  paddingBottom?: z.infer<typeof SizeGroupZod> | null;
  paddingTop?: z.infer<typeof SizeGroupZod> | null;
  hasSeperator?: boolean;
}

export default PaddingContainerProps;
