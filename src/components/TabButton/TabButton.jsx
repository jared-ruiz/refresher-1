import '../TabButton/TabButton.css';

//adding event listener as prop
export default function TabButton({children}) {
    function handleClick() {
        console.log("Hello World!")
    }

    return(
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}