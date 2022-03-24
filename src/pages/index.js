import React from "react";
import FeatherIcon from "feather-icons-react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import "../css/override.css";
import Coder from "../../static/img/coder.png";
import Head from "@docusaurus/Head";

const features = [
  {
    title: "Web Development",
    imageUrl: "img/web.png",
    description: (
      <>
        You will be introduced to the basics of web development followed with
        intermediate and advance learning.
      </>
    ),
    path: "docs/",
  },
  {
    title: "UI/UX",
    imageUrl: "img/ui.png",
    description: (
      <>
        Interest in design goes beyond mixing of colours but considering User
        experience. UI/UX covers your needs on this.
      </>
    ),
    path: "docs/ui/ui-overview/interface",
  },
  {
    title: "Mobile App Development",
    imageUrl: "img/android.png",
    description: (
      <>
        Are you amazed on how mobile applications are built but dont know how to
        get started? Worry less, we get you covered.
      </>
    ),
    path: "docs/android/overview",
  },
];

const benefits = [
  {
    item: "Access to great contents that can easily guide you to grasp better understanding of a topic",
  },
  {
    item: "Access to great contents that can easily guide you to grasp better understanding of a topic",
  },
  {
    item: "Access to great contents that can easily guide you to grasp better understanding of a topic",
  },
  {
    item: "Access to great contents that can easily guide you to grasp better understanding of a topic",
  },
  {
    item: "Access to great contents that can easily guide you to grasp better understanding of a topic",
  },
  {
    item: "Access to great contents that can easily guide you to grasp better understanding of a topic",
  },
];

function Feature({ imageUrl, title, description, path }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("", styles.feature)}>
      <div className={clsx(styles.feature_content)}>
        {imgUrl && (
          <div className={clsx("text--center", styles.featureImage)}>
            <img src={imgUrl} alt={title} />
          </div>
        )}
        <div className="p-2">
          <h3 className="hack">{title}</h3>
          <p className="small">{description}</p>
          <Link className={clsx("button button-sm")} to={path}>
            See Outline
          </Link>
        </div>
      </div>
    </div>
  );
}

const Benefits = ({ data }) => {
  return (
    <p className="check-list d-flex hack">
      <span className="check-box mt-1">
        <FeatherIcon icon="check" className="" size={20} strokeWidth={5} />
      </span>
      {data}
    </p>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="A platform with curated learning resources for GDSC KWASU Members">
      <Head>
        <meta name="theme-color" content="#000" />
        <meta property="og:title" content="Learn | GDSC KWASU" key="ogtitle" />
        <meta
          property="og:description"
          content="A platform with curated learning resources for GDSC KWASU Members"
          key="ogdesc"
        />
        {/* <meta
          name="twitter:image"
          content="https://learn.gdsckwasu.club/static/img/ogimage.png"
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="e-learn" />
        <meta
          name="twitter:description"
          content="A platform with curated learning resources for GDSC KWASU Members"
        />
        <meta
          name="twitter:image"
          content="https://learn.gdsckwasu.club/img/ogimage.png"
        />
        <meta
          property="og:image"
          content="https://learn.gdsckwasu.club/img/ogimage.png"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="https://learn.gdsckwasu.club"
          key="ogsitename"
        />
      </Head>
      <header className={clsx("", styles.heroBanner)}>
        <div className="container text-left p-0">
          <div className="row-md align-items-center">
            <div className="col-md-6">
              <h1 className="hack">{siteConfig.title}</h1>
              <h6 className="hack">Learn and train</h6>
              <p>{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link className={clsx("button mr-3")} to={useBaseUrl("docs/")}>
                  Get Started
                </Link>
                <a
                  className={clsx("button mr-3")}
                  href="../../static/incubation.pdf"
                  download="training-schedule"
                >
                  Get Training Schedule
                </a>
              </div>
            </div>
            <div className="col-md-6 justify-content-center d-none d-md-flex">
              <img src={Coder} alt="coder" className="coder__avatar" />
            </div>
          </div>
        </div>
      </header>
      <main className="pb-5">
        <div className="container">
          <h3 className="hack pl-1">Learning Categories</h3>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <main className="pb-5 pl-1">
        <div className="container check-container">
          <h3 className="hack">Learning Expectations &amp; Benefits</h3>
          {benefits.map((data, idx) => (
            <Benefits data={data.item} key={idx} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Home;
