import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroImageUrl from '@site/static/img/hero.png';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div className="">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading> 
          <p className="hero__subtitle">
            <Translate id="theme.tagline">{siteConfig.tagline}</Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/install-ai-unlimited">
                <Translate id="theme.button">Get Started - 5min ⏱️</Translate>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage} >
            <img src={HeroImageUrl} />
            <div className={styles.heroBlur} ></div> 
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
