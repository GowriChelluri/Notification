const Notification = (props) => {
  const { className, imageUrl, text } = props;
  return (
    <div className={className}>
      <img className="icon" src={imageUrl} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="notification-container">
      <Notification
        text="Information Message"
        className="info-button"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        text="Success Message"
        className="success-button"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        text="Error Message"
        className="error-button"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        text="Warning Message"
        className="warning-button"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
