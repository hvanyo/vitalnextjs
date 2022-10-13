import { as } from '@bodiless/fclasses';
import {
  CardCleanNonEditable, vitalCardCore, asExternalHeroCard
} from '@bodiless/vital-card-core';

export const Hero = (props) => {

  // Get External Data and compose into a variation
  const WithExtHeroSrc = asExternalHeroCard({
    Title: props.heading,
    Description: props.body,
    CTALink: props.button_url,
    CTAText: props.button_label,
    Image: {
      src: props.imageSrc,
      alt: props.heading,
      title: props.heading,
    },
  });

  const HeroExternalCard = as(
    vitalCardCore.HeroBase,
    vitalCardCore.WithHorizontalContentCentered,
    vitalCardCore.WithHorizontalLeftOrientation,
    vitalCardCore.WithPrimaryButton,
    WithExtHeroSrc,
  )(CardCleanNonEditable);

  return (
    <HeroExternalCard />
  )
}