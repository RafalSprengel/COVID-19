import React from 'react';
import '../styles/OverallResults.css'

const OverallResults = () => {

    return (
        <><h2>GLOBAL</h2>
            <div id="overall-results-wrap">
                <table id='overall-results'>
                    <tbody>
                        <tr>
                            <th className='overall'>
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
                            <td className='confirmed'>
                                115864 <sup>+562</sup>
                            </td>
                            <td className='recovered'>
                                56555 <sup>+720</sup>
                            </td>
                            <td className='deaths'>
                                26550 <sup>+124</sup>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default OverallResults;
