import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "使用简单",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>只需要2步骤，就能快速上手、使用。</>,
  },
  {
    title: "实时同步",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>捕获App中的任何操作，实时同步到网页上。</>,
  },
  {
    title: "UI 复刻",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>采用Eagle App布局方案，无缝接入使用。</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
