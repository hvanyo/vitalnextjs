import { as, withDesign, addProps, flowIf } from '@bodiless/fclasses';
import {
  CardCleanNonEditable, vitalCardCore, asExternalHeroCard
} from '@bodiless/vital-card-core';

export const Hero = (props) => {

  // Get External Data and compose into a variation
  const WithExtHeroSrc = asExternalHeroCard({
    Title: props.heading,
    Description: props.body,
    CTALink: props.button.url,
    CTAText: props.button.label,
    Image: {
      src: props.image.src,
      alt: props.image.alt,
      title: props.image.title,
    },
  });

  // Grab props.theme & setup three flowIf() tokens for each.
  const isImgLeft = () => props.theme === 'imgLeft';
  const isImgRight = () => props.theme === 'imgRight';
  const isVertical = () => props.theme === 'vertical';

  const withImageLeft = flowIf(isImgLeft)(as(
    vitalCardCore.WithHorizontalContentCentered,
    vitalCardCore.WithHorizontalLeftOrientation,
    withDesign({
      Wrapper: addProps({ 'orientation': 'HorizontalImgLeft'}),
    }),
  ));
  const withImageRight = flowIf(isImgRight)(as(
    vitalCardCore.WithHorizontalContentCentered,
    vitalCardCore.WithHorizontalRightOrientation,
    withDesign({
      Wrapper: addProps({ 'orientation': 'HorizontalImgRight'}),
    }),
  ));
  const withVertical = flowIf(isVertical)(as(
    vitalCardCore.WithVerticalOrientation,
    withDesign({
      Wrapper: addProps({ 'orientation': 'Vertical'}),
    }),
  ));

  const HeroExternalCard = as(
    vitalCardCore.HeroBase,
    vitalCardCore.WithPrimaryButton,
    WithExtHeroSrc,
    // Put inline stackbit on title & body
    withDesign({
      Wrapper: addProps({ 'data-sb-object-id': props.id}), 
      TitleWrapper: addProps({ 'data-sb-field-path': "heading" }),
      DescriptionWrapper: addProps({ 'data-sb-field-path': "body" }),
    }),
    // Set theme for the card in stackbit
    withImageLeft,
    withImageRight,
    withVertical,
  )(CardCleanNonEditable);

  return (
    <HeroExternalCard />
  )
}
