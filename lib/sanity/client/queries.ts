import { groq } from "next-sanity";

// START COMPONENTS

const image = `{
    asset {
      'crop': ^.crop,
      'hotspot' : ^.hotspot,
      ...,
    },
    'alt' : alternative,
    caption,
    'lqip' : asset->metadata.lqip
  }`;

// END COMPONENTS

// START MODULES
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
    image${image},
    keywords
  }
}`;

const homeAboutmeModule = `{
  title,
  name,
  body,
  image${image}
}`;

const homeWorkoutsModule = `{
  title,
  workouts[]{
    name,
    description,
    image${image}
  }
}`;

const homeHighlightModule = `{
  title,
  body
}`;

const homeReviewsModule = `{
  title,
}`;

const homePricingModule = `{
  title,
}`;

const homeFaqModule = `{
  title,
}`;

const contactModule = `{
  title,
}`;

// END MODULES

// START PAGES

export const homeQuery = /* groq */ `
  *[_type == 'homePage']{
    _id,
    title,
    description,
    keywords,

    modules[] {
        paddingTop,
        paddingBottom,
        backgroundColor,
        hasSeperator,
      ...module -> {
        "type" : _type,
        "key" : _id,
        _type == 'homeLandingModule' => ${homeLandingModule},
        _type == 'homeCoreInfoModule' => ${homeCoreInfoModule},
        _type == 'homeAboutMeModule' => ${homeAboutmeModule},
        _type == 'homeWorkoutsModule' => ${homeWorkoutsModule},
        _type == 'homeHighlightModule' => ${homeHighlightModule},
        _type == 'homeReviewsModule' => ${homeReviewsModule},
        _type == 'homePricingModule' => ${homePricingModule},
        _type =='homeFaqModule' => ${homeFaqModule},
        _type == 'contactModule' => ${contactModule}
      } 
    }
  }
`;

// END PAGES
