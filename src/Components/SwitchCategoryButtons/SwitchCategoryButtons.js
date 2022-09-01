import './SwitchCategoryButtons.css';

const SwitchCategoryButtons = (props) => {
    const { categoriesList, clickHandler } = props;

    const categoryButtons = categoriesList.map((category, index) => {
        const { name } = category;
        return (
            <button
                key={index}
                className="category_button"
                onClick={() => clickHandler(category)}
            >
                {name}
            </button>
        );
    });

    return (
        <div className="switch_category_buttons_container">
            {categoryButtons}
        </div>
    )
}

export default SwitchCategoryButtons;