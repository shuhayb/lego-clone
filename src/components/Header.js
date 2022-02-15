export const Header = () => {
  return (
    <>
      <div className="whiteHeader">
        <button>Play zone</button>
        <p>
          Free delivery on all orders above £50! <a href="/">learn more</a>
        </p>
        <button>Account</button>
        <button>VIP</button>
      </div>
      <div className="header">
        <img src="../../public/images/lego-logo.svg" alt="logo" />
        <ul className="navBar">
          <li>SHOP</li>
          <li>DISCOVER</li>
          <li>HELP</li>
        </ul>
      </div>
    </>
  );
};
