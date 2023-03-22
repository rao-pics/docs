import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero", styles.heroBanner)}
      style={{ paddingBottom: 0 }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={clsx(styles.container_left)}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p
            className="hero__subtitle"
            dangerouslySetInnerHTML={{ __html: siteConfig.tagline }}
          />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              快速开始 🚀
            </Link>
          </div>
        </div>
        <div className={clsx(styles.container_right)}>
          <img src="/img/preview.gif" />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={clsx(styles.main_wrapper)}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
