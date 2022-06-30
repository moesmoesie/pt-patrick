import { groq } from "next-sanity";

// START MODULES

// END MODULES

const homeLandingModule = `{
    cards[]{
        "key" : _key,
        body,
        icon,
        title
    },
    hero{
      title,
      body,
      callToAction
    }
}`;

// START PAGES

export const homeQuery = /* groq */ `
  *[_type == 'homePage']{
    _id,
    title,
    description,
    keywords,
    modules[]-> {
        "key" : _id,
        "type" : _type,
        _type == 'homeLandingModule' => ${homeLandingModule}
    }
  }
`;

// END PAGES
