import React from "react";

const faqCard = (props) => {
  return (
    <div className="content-container">
      <button className="faq-header btn faq-btn">
        <h4>{props.title}</h4>
        <span
          className=" close active fa fa-sharp fa-solid fa-angle-up
                            btn icon-background shape-round"
        ></span>
        <span
          className="open fa fa-sharp fa-solid fa-angle-down
                        btn icon-background shape-round"
        ></span>
      </button>
      <div className="content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default faqCard;
