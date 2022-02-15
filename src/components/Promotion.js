import "../../src/App.css";

export const Promotion = () => {
  return (
    <div className="promotion">
      <a href="/" title="/">
        <img
          className="starWarsLogo"
          src={require("../images/star-wars-logo.png")}
          alt="jsnf"
        />
        <img
          className="starImage"
          src={require("../images/Star-Wars.png")}
          alt="start"
        ></img>
      </a>
      <p className="promotionTitle">Feel the force</p>
    </div>
  );
};
