const SwitchCategoryButtons = (props) => {
    const { categoriesList } = props;

    const categoryButtons = categoriesList.map((category, index) => {
        const { name } = category;
        return <button key={index}>{name}</button>
    });

    return (
        <div>
            {categoryButtons}
        </div>
    )
}

export default SwitchCategoryButtons;