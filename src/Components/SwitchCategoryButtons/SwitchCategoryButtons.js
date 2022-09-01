import './SwitchCategoryButtons.css';

const SwitchCategoryButtons = (props) => {
    const { categoriesList } = props;

    const categoryButtons = categoriesList.map((category, index) => {
        const { name } = category;
        return <button key={index} className="category_button"> {name}</button >
    });

    return (
        <div className="switch_category_buttons_container">
            {categoryButtons}
        </div>
    )
}

export default SwitchCategoryButtons;