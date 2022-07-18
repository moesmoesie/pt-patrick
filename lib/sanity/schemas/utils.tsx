import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const moduleData = [
  {
    title: "About Me",
    type: "homeAboutMeModule",
    icon: <FontAwesomeIcon icon="person" />,
  },
  {
    title: "Core Info",
    type: "homeCoreInfoModule",
    icon: <FontAwesomeIcon icon="person-running" />,
  },
  {
    title: "Home Landing",
    type: "homeLandingModule",
    icon: <FontAwesomeIcon icon="rocket" />,
  },
  {
    title: "Workouts",
    type: "homeWorkoutsModule",
    icon: <FontAwesomeIcon icon="dumbbell" />,
  },
  {
    title: "Highlight",
    type: "homeHighlightModule",
    icon: <FontAwesomeIcon icon="highlighter" />,
  },
  {
    title: "Reviews",
    type: "homeReviewsModule",
    icon: <FontAwesomeIcon icon="star" />,
  },
  {
    title: "Pricing",
    type: "homePricingModule",
    icon: <FontAwesomeIcon icon="euro-sign" />,
  },
  {
    title: "Frequently Asked Questions",
    type: "homeFaqModule",
    icon: <FontAwesomeIcon icon="circle-question" />,
  },
  {
    title: "Contact",
    type: "contactModule",
    icon: <FontAwesomeIcon icon="phone-flip" />,
  },
];

export const componentData = [
  {
    title: "Header",
    type: "header",
    icon: <FontAwesomeIcon icon="header" />,
  },
];

export const findComponent = (type: string) => {
  return (
    componentData.find((e) => {
      return e.type === type;
    }) ?? null
  );
};

export const findModule = (type: string) => {
  return (
    moduleData.find((e) => {
      return e.type === type;
    }) ?? null
  );
};

export const findModuleIcon = (type: string) => {
  return (
    moduleData.find((e) => {
      return e.type === type;
    })?.icon ?? null
  );
};

export const modulesTypes = moduleData.map((el) => {
  return { type: el.type };
});
