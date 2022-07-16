import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const moduleData = [
  { type: "homeAboutMeModule", icon: <FontAwesomeIcon icon="person" /> },
  {
    type: "homeCoreInfoModule",
    icon: <FontAwesomeIcon icon="person-running" />,
  },
  { type: "homeLandingModule", icon: <FontAwesomeIcon icon="rocket" /> },
  { type: "homeWorkoutsModule", icon: <FontAwesomeIcon icon="dumbbell" /> },
  { type: "homeHighlightModule", icon: <FontAwesomeIcon icon="highlighter" /> },
  { type: "homeReviewsModule", icon: <FontAwesomeIcon icon="star" /> },
  { type: "homePricingModule", icon: <FontAwesomeIcon icon="euro-sign" /> },
  { type: "homeFaqModule", icon: <FontAwesomeIcon icon="circle-question" /> },
  { type: "contactModule", icon: <FontAwesomeIcon icon="phone-flip" /> },
];

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
