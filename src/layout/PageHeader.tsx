import logo from "../assets/Logo.png";

function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gp-4 items-center flex-shrink-0">
        <button></button>
        <a href="/">
          <img src={logo} alt="" className="h-6" />
        </a>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export default PageHeader;
