const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <nav>
          <ul className="pagination center"> 
            {pageNumbers.map(number => (
                <li key="number" className="page-item">
                    <a href="https://jacqueline-walsh.github.io/Breaking-Bad/!#" onClick={() => paginate(number)} className="page-link">
                        {number}
                    </a>
                </li>
             ))}
          </ul>
        </nav>
    )
}

export default Pagination
