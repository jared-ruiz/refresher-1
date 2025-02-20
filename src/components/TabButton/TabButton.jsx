import '../TabButton/TabButton.css';

//adding event listener as prop
export default function TabButton({children, onSelect, isSelected}) {

    return(
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}