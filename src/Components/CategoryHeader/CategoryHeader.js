const CategoryHeader = (props) => {
    const category = props;
    return (
        <div>
            <img src={category.img} alt="business_logo" width="56px" height="56px" />
            <h2>{category.name}</h2>
        </div>
    );
}

export default CategoryHeader;