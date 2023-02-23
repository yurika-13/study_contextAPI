/*I need to create FIRST! */

/*1) import component "createContext" */
import { createContext } from "react";

/*2) declare "LanguageContext" as "Context{ lang:"en-US"}" */
const LanguageContext = createContext(/*the first value */{ lang:"en-US"});
/*LanguageContext
  lang:"en-US" */

/*3) declare "LanguagePrivider" as LanguageContext's "Provider" */
const LanguageProvider = LanguageContext.Provider;

export {LanguageContext, LanguageProvider};

