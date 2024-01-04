import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import * as Styles from "../components/styles";

const IndexPage = () => {
  return (
    <Layout pageTitle="Projects">
      <h2>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h2>
      <Link to="/resume">My Resume!</Link>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
