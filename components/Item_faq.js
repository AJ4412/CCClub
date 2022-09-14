import React, { useState } from "react";

export default function Item_faq({ title, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingOne">
        <h4 className="panel-title">
          <a
            role="button"
            data-toggle="collapse"
            data-parent="#faqCollapse"
            // href="#collapseOne"
            aria-expanded={open ? "true" : "false"}
            aria-controls="collapseOne"
            className={open ? "" : "collapsed"}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {title}
            <span
              className="glyphicon glyphicon-menu-up"
              aria-hidden="true"
            ></span>
          </a>
        </h4>
      </div>
      <div
        id="collapseOne"
        className={
          open ? "panel-collapse collapse in" : "panel-collapse collapse"
        }
        role="tabpanel"
        aria-labelledby="headingOne"
        aria-expanded={open ? "true" : "false"}
      >
        <div className="panel-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
