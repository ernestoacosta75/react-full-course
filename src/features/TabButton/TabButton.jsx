function TabButton({onSelect, isSelected, children}) {
    return (
    <li>
        <button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button>
    </li>
    );
}

export default TabButton;