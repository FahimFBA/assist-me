import { Link } from "react-router-dom";

const SidebarLink = ({
  link,
  icon,
  label,
  onClick,
}: {
  link: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <li onClick={onClick}>
      <Link to={link} className="waves-effect">
        <div className="d-inline-block icons-sm mr-1">{icon}</div>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default SidebarLink;
