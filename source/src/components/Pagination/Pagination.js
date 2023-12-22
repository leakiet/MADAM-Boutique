import './Pagination.css'

function Pagination({productPerPage, totalProducts, paginate, currentPage}){
    const pageNumbers =[];

    for(let i=1 ; i<= Math.ceil(totalProducts / productPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className='paginationCenter'>
            <div className="pagination">
                {pageNumbers.map(number => (
                    <div key={number} className={`pagination-number ${currentPage === number ? 'active' : ''}`}>
                        <div onClick={() => paginate(number)}>
                            {number}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pagination;