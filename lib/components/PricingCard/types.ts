export interface PricingCardProps {
  color: "dark" | "light";
  tag: string;
  price: string;
  priceTagline: string;
  body: string;
  bulletPoints: string[];
  callToAction: string;
}
