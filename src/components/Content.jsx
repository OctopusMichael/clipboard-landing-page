import React, { useState } from "react";
import contentOne from "../images/image-computer.png";
import contentTwo from "../images/image-devices.png";
import data from "../json/data.json";
import company from "../json/company.json";

const Content = () => {
  const [datos, setDatos] = useState(data);
  console.log(datos);
  return (
    <>
      <section className="content-one">
        <h1>Keep track of your snippets</h1>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </section>
      <section className="content-two">
        <div className="content-left">
          <img src={contentOne} alt="contentOne" />
        </div>
        <div className="content-right">
          <h1>Quick Search</h1>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
          <h1> iCloud Sync</h1>
          <p>Instantly saves and syncs snippets across all your devices.</p>
          <h1>Complete History</h1>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </section>
      <section className="content-three">
        <h1>Access Clipboard anywhere</h1>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img src={contentTwo} alt="" />
      </section>
      <section className="content-four">
        <h1> Supercharge your workflow</h1>
        <p>We’ve got the tools to boost your productivity.</p>
      </section>

      <section className="content-five">
        {datos &&
          datos.map((element) => {
            return (
              <div key={element.id}  className="content-five-box">
                <div className={element.img} />
                <h1>{element.title}</h1>
                <p>{element.ph}</p>
              </div>
            );
          })}
      </section>
      <section className="content-six">
        {company &&
          company.map((element) => {
            return <div className={element.img} key={element.id} />;
          })}
      </section>
      <section className="content-seven">
        <h1>Clipboard for iOS and Mac OS</h1>
        <p>
          {" "}
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <div className="buttons">
            <button className="btn-ios">
              Download for iOS
            </button>
            <button className="btn-mac">
              Download for Mac
            </button>
          </div>
      </section>
    </>
  );
};

export default Content;
