import { as } from '@bodiless/fclasses';
import Layout from '../components/layout';
import { asExternalBaseButton, ButtonClean, vitalButtonsCore } from '@bodiless/vital-buttons-core';

const CardButton = as(
  vitalButtonsCore.Default,
  vitalButtonsCore.WithPrimary,
  asExternalBaseButton({
    Text: 'Card Styleguide',
    Link: '/styleguide/card/',
  }),
  'w-60 m-10',
)(ButtonClean);

export default function Home() {
  return (
    <Layout>
      <div className="container flex items-center p-4 mx-auto justify-center my-16">
        <main>
          <h1 className="font-mono text-xl code">
            Welcome to&nbsp;
            <span className="text-purple-700">Nextjs</span>,
            <span className="text-indigo-700">TailwindCSS</span>,
            <span className="text-red-700">VitalDS</span>
            &nbsp;and&nbsp;
            <span className="text-pink-700">TypeScript</span>
            &nbsp;DEMO
          </h1>
          <div className="my-16">
            <h2>Visit here to see examples of Vital Cards:</h2>
            <CardButton />
          </div>
        </main>
      </div>
    </Layout>      
  )
}
