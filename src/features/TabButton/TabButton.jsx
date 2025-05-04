function TabButton({ isSelected, children, ...props }) {
    return (
    <li>
        <button className={isSelected ? "active" : ""} {...props}>{children}</button>
    </li>
    );
}

export default TabButton;