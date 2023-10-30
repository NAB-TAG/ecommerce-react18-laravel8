const Breadcrumb = ({ links }) => {
    return (
        <nav aria-label="breadcrumb" className="bg-light-subtle p-2">
            <ol className="breadcrumb m-0">
                {links.map((link, index) => (
                    <li className="breadcrumb-item" key={index}>
                        {index === links.length - 1 ? (
                            <span className="active">{link.name}</span>
                        ) : (
                            <a href={link.href}>{link.name}</a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
