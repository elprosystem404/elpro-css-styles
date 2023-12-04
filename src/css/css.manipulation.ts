import { getValue } from "../utils";


const cssManipulation = (key: string) => {
  const value = getValue();
  return `.${key}${value}`;
};

export { cssManipulation };
