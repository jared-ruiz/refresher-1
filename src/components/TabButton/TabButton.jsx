import "../TabButton/TabButton.css";

//adding event listener as prop
export default function TabButton({ children, isSelected, ...props }) {
  
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
