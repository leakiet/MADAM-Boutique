import React from 'react'
import CompareItem from './CompareItem';

function Comparation({ compares , deleteCompare }) {
    return (
        <div>
            <h1>Compare Products</h1>
            <table>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {compares.map(c => (
                        <CompareItem key={c.id} product={c} deleteCompare={deleteCompare} />
                    ))}
                </table>
            </table>
        </div>
    );
}

export default Comparation;
