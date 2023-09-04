import React from "react";

export default function FAQSection() {
  return (
    <div className="container my-24 mx-auto md:px-6 xl:px-24">
      <section className="mb-32">
        <h2 className="mb-6 pl-6 text-3xl font-bold">
          Frequently asked questions
        </h2>

        <div id="collapse">
          {questionCell()}
          {questionCell()}
          {questionCell()}
        </div>
      </section>
    </div>
  );
}

function questionCell() {
  return (
    <div className="collapse collapse-arrow">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
}
