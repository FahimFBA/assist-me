import { NavLink } from "react-router-dom";

const CustomNavlink = ({ label, to }: { label: string; to: string }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
      }
      to={to}
    >
      {label}
    </NavLink>
  );
};

export default CustomNavlink;
