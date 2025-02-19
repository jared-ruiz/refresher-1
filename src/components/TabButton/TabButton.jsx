import '../TabButton/TabButton.css';

//adding event listener as prop
export default function TabButton({children, onSelect}) {

    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}