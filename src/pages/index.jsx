import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MDXContent from "@theme/MDXContent";
import IndexMdx from "./_index.mdx";
import SupportMdx from "./_support.mdx";
import IntroduceMdx from "./_introduce.mdx";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";

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
            <Link className="button button--secondary button--lg" to="#使用">
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <HomepageHeader />

      <main className={clsx(styles.main_wrapper)}>
        <HomepageFeatures />
      </main>

      <div
        className="hero hero--dark"
        style={{ padding: "2rem 0", overflow: "hidden" }}
      >
        <div className="container">
          <h1 className="hero__title">
            <Link to="https://github.com/rao-pics/rua">Rua</Link>{" "}
          </h1>
          <p className="hero__subtitle">
            Rao.Pics 默认主题，支持 Ipad、暗黑模式、使用 nextjs 开发。
          </p>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            style={{ padding: "0 5rem" }}
          >
            {[1, 2, 6, 4, 5, 3].map((item) => (
              <SwiperSlide key={item}>
                <img
                  src={`./img/rua/preview${item}.jpg`}
                  style={{ borderRadius: 10 }}
                  alt={"rua theme preview " + item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="col col--8 " style={{ margin: "auto", padding: "2rem" }}>
        <MDXContent>
          <IntroduceMdx />
          {/* <SupportMdx /> */}
          <IndexMdx />
        </MDXContent>
      </div>
    </Layout>
  );
}
