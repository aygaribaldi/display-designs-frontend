import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
{
  /* <div>
        <div className="ui modal">
          <i className="close icon"></i>
          <div className="header">Profile Picture</div>
          <div className="image content">
            <div className="ui medium image">
              <img src="/images/avatar/large/chris.jpg" />
            </div>
            <div className="description">
              <div className="ui header">
                We've auto-chosen a profile image for you.
              </div>
              <p>
                We've grabbed the following image from the{" "}
                <a href="https://www.gravatar.com" target="_blank">
                  gravatar
                </a>
                image associated with your registered e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div className="actions">
            <div className="ui black deny button">Nope</div>
            <div className="ui positive right labeled icon button">
              Yep, that's me
              <i className="checkmark icon"></i>
            </div>
          </div>
        </div>
      </div> */
}
