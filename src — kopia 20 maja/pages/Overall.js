import React from 'react';
import '../styles/OverallResults.css'

const OverallResults = () => {

    return (
        <>
            <table id='overall-results'>
                <tbody>
                    <tr>
                        <th className='overall-confirmed'>
                            Confirmed
                 </th>
                        <th className='overall-recovered'>
                            Recovered
                    </th>
                        <th className='overall-deaths'>
                            Deaths
                    </th>
                    </tr>
                    <tr>
                        <td className='overall-confirmed-td'>
                            1158640
                        </td>
                        <td className='overall-recovered-td'>
                            565552
                        </td>
                        <td className='overall-deaths-td'>
                            26550
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default OverallResults;
