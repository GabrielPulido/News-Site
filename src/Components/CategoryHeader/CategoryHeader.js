import './CategoryHeader.css';

const CategoryHeader = (props) => {
    const category = props.category;
    return (
        <div className="category_header_container">
            <img src={category.img} alt="business_logo" width="50px" height="50px" />
            <h2 className='category_header'>{category.name}</h2>
        </div>
    );
}

export default CategoryHeader;