import { NavLink } from "react-router-dom";

const CustomNavlink = ({
  label,
  to,
  onClick,
}: {
  label: string;
  to: string;
  onClick?: () => void;
}) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
      }
      to={to}
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
};

export default CustomNavlink;
