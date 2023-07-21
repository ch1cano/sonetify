import { Fira_Sans_Extra_Condensed, Open_Sans } from "next/font/google";

export const firaSans = Fira_Sans_Extra_Condensed({
  weight: ["400", "700", "800"],
  subsets: ["cyrillic", "latin"],
});

export const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic", "latin"],
});
