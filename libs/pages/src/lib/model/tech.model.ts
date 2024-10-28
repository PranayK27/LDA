import {Blog} from "./blog-type";
import {Sources} from "./source-type";

export interface Tech {
  showTechDesc: boolean;
  loading: boolean;
  errorMessage: string;
  blogs: Blog[];
  sources: Sources[];
}
