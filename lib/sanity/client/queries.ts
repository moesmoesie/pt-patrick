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

const homeCoreInfoModule = `{
  title,
  corePillars[]{
    value,
    title,
    body,
    keywords
  }
}`;

const homeAboutmeModule = `{
  title,
  name,
  body
}`;

const homeWorkoutsModule = `{
  title,
  workouts[]{
    name,
    description
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
        _type == 'homeLandingModule' => ${homeLandingModule},
        _type == 'homeCoreInfoModule' => ${homeCoreInfoModule},
        _type == 'homeAboutMeModule' => ${homeAboutmeModule},
        _type == 'homeWorkoutsModule' => ${homeWorkoutsModule}
    }
  }
`;

// END PAGES
