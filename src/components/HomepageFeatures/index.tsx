import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: {
    alt: string;
    src: string;
  };  
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: {
      alt: 'Première image',
      src: 'img/SkySaver3.png',
    },
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SkySaver is easy to use, you will find the best prices for your next trip in a few clicks.
      </>
    ),
  },
  {
    title: 'Find the best prices',
    image: {
      alt: 'Deuxième image',
      src: 'img/SkySaver3.png',
    },
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Find the best prices for your next trip.
      </>
    ),
  },
  {
    title: 'Activate notifications',
    image: {
      alt: 'Troisième image',
      src: 'img/SkySaver3.png',
    },
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Activate notifications to be informed of the best prices.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image.src} alt={image.alt} />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
