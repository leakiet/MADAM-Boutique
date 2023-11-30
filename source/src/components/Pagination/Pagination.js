import './Pagination.css'

function Pagination({productPerPage, totalProducts, paginate}){
    const pageNumbers =[];

    for(let i=1 ; i<= Math.ceil(totalProducts / productPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className='paginationCenter'>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;