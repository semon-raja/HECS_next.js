interface TopBarProps {
  extraClass?: string;
}

export default function TopBar({ extraClass = "" }: TopBarProps) {
  return (
    <div className={`top-bar${extraClass ? " " + extraClass : ""}`}>
      <div className="top-bar-left">
        <span className="top-phone">
          <i className="fa-solid fa-phone"></i>
          044-35391255
        </span>

        <span className="top-divider"></span>

        <div className="top-socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>

      <div className="top-bar-right">
        <span className="top-email">
          <i className="fa-solid fa-envelope"></i>
          marketing@hecs.in
        </span>
      </div>
    </div>
  );
}