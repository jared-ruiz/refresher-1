import '../TabButton/TabButton.css';

export default function TabButton({children}) {
    return(
        <li>
            <button>{children}</button>
        </li>
    )
}