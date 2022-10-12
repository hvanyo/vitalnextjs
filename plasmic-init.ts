import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from './src/components/HelloWorld';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "gUerCY99xpRAU1nRfPNn6Q",  // ID of a project you are using
      token: "3aI2VL99eaKZ3JtyN5cVuwRTiBMhTMaPYt5os83r5TcnvJmJwTKIfVxA4GcVeawx4dcxsADkuUXkniaYEjQQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});