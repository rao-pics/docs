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
        <div style={{ paddingTop: "4rem" }}>
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
        <div style={{ flex: 1, position: "relative", bottom: "-8px" }}>
          <img
            src="/img/preview.gif"
            style={{ width: "80%", boxShadow: "0 0 6px #000000" }}
          />
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
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
