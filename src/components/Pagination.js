import React, { useState } from 'react';
import '../styles/Pagination.css'

const Pagination = ({ prevPage, nextPage, changeCurrPage, resultsLength, currPage, setCurrPage, pageMax, perPage }) => {
    const Block = ({ active, page }) => <li onClick={() => changeCurrPage({ page })} className={active ? 'active' : null} >{(page + 1)} </li>
    let blocks = []
    const [start, setStart] = useState(0)
    let end = start + 5;
    for (let i = start; (i < resultsLength) && i < end; i++) {
        blocks.push(<Block active={currPage === i ? true : false} page={i} key={i} />)
    }
    //console.log('currPage to : ', currPage)
    //console.log(currPage + ' < ' + Math.ceil(resultsLength / perPage))
    return (
        <ul className="pagination">
            <li onClick={() => {
                if (currPage > 0) {
                    setCurrPage((prevStat) => prevStat - 1)
                    console.log('currPage+1: ' + currPage + ' , start: ' + start)
                    if (currPage === start) {

                        setStart((prevState) => prevState - 1)
                    }
                }
            }}

            >&laquo;</li>
            {blocks}
            <li onClick={() => {
                if ((currPage + 1) < Math.ceil(resultsLength / perPage)) {
                    setCurrPage((prevStat) => prevStat + 1)
                    if ((currPage + 1) === end) setStart((prevState) => prevState + 1)
                }
            }}>&raquo;</li>
        </ul >
    )
}

export default Pagination;