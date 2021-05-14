const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <nav>
          <ul className="pagination center"> 
            {pageNumbers.map((number, index) => (
                <li key={index} className="page-item">
                    <button href="!#" onClick={() => paginate(number)} className="page-link">
                        {number}
                    </button>
                </li>
             ))}
          </ul>
        </nav>
    )
}

export default Pagination
