import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  illustration: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Powerful Search Capabilities',
    illustration: 'img/analytics.png',
    description: (
      <>
        Learn how to leverage MongoDB Search to create powerful and flexible search functionality for your applications.
      </>
    ),
  },
  {
    title: 'Interactive Playground Environment',
    illustration: 'img/database.png',
    description: (
      <>
        Experiment with search queries in real-time using the MongoDB Search Playground, without the need to set up your own cluster.
      </>
    ),
  },
  {
    title: 'Hands-on Challenges',
    illustration: 'img/app-services.png',
    description: (
      <>
        Test your skills with practical search challenges, complete with hints and solutions to guide your learning.
      </>
    ),
  },
];

function Feature({illustration, title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={illustration} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
