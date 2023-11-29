function Pagination({productPerPage, totalProducts, paginate}){
    const pageNumbers =[];

    for(let i=1 ; i<= Math.ceil(totalProducts / productPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link" href="#">
                            {number}
                        </a>
                    </li>
                ))}
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            </ul>
        </nav>
    )

}

export default Pagination;