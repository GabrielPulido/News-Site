const TitleLink = (props) => {
    const { link, title } = props;

    return (
        <h3>
            <a
                href={link}
                target="_blank"
                rel='noreferrer'
                className='article_link'
            >
                {title}
            </a>
        </h3>
    )
};

export default TitleLink;