import React from 'react';
import { Builder } from '@builder.io/react';
import { Hero } from './hero';

/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/

/* 
  This is an example of registering a custom component to be used in Builder.io. 
  You would typically do this in the file where the component is defined.
*/

Builder.registerComponent(Hero, {
  name: 'VitalHero',
  inputs: [
    { name: 'heading', type: 'string', defaultValue: 'Vital Hero Heading' },
    { name: 'body', type: 'string', defaultValue: 'Vital Hero Body' },
    { name: 'button_label', type: 'string', defaultValue: 'Button Label' },
    { name: 'button_url', type: 'string', defaultValue: 'Button URL' },
    {
      name: 'imageSrc',
      friendlyName: 'Hero Image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue: 'https://picsum.photos/400',
    },
  ],
});

// Register a custom insert menu to organize your custom componnets
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register('insertMenu', {
  name: 'Vital Components',
  items: [
    { item: 'VitalHero', name: 'Vital Hero' },
  ],
});
