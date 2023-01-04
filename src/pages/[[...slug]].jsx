import Layout from '../components/layout';
import { Hero } from '../components/Hero.jsx';
import { getPageFromSlug, getPagePaths } from '../utils/content.js';

export async function getStaticPaths() {
  const paths = await getPagePaths();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = '/' + (params?.slug ?? ['']).join('/');
  const page = await getPageFromSlug(slug);
  return { props: { page } };
}

const componentMap = {
  hero: Hero,
};

export default function ComposablePage({ page }) {
  return (
    <Layout>
        <div className="container flex items-center p-4 mx-auto justify-center my-16">
          <h1 className="font-mono text-xl code pr-4">
            Welcome to demo of: 
          </h1>
          <ul>
            <li className="text-purple-700">Nextjs</li>
            <li className="text-indigo-700">TailwindCSS</li>
            <li className="text-red-700">VitalDS</li>
            <li className="text-orange-700">Contentful CMS</li>
            <li className="text-green-700">Stackbit</li>
            <li className="text-pink-700">TypeScript</li>
          </ul>
      </div>

      <div data-sb-object-id={page.id}>
        {(page.sections || []).map((section, idx) => {
          const Component = componentMap[section.type];
          return <Component key={idx} {...section} />;
        })}
      </div>
    </Layout>
  );
}
