import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Link from 'next/link'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hello
            <span className="fancy">.</span>
            It's Sour Cream
            <span className="fancy">.</span>
          </h1>
          <span className="handle">
            Mobile & web application development studio which runs  by
            <a href="https://twitter.com/mehmetkose" target="_blank">@mehmetkose</a>.
            <br />
            The company focused on building things fast, so we know only a few thing.
            <br />
            But we know very well, such like:
            <strong>React</strong>, 
            <strong>Next.js</strong>, 
            <strong>Firebase</strong>.
            <br />
            I collaborate with other <strong>contract</strong> developers if the project is needed.</span>
          <p>contact at <a href={`mailto:info@sourcream.uk`}>info@sourcream.uk</a></p>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.5rem;
          font-size: 1.6rem
        }
        h1 {
          font-size: 2rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 600;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 6rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
