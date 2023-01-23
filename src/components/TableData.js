import React, { Component } from 'react';

function TableData({ handleChange, tableData, visible, tax, netIncome, value }) {

    return (

        <div className={visible ? "visible" : "invisible"}>
            <div className='grid place-items-center'>
                <div className="bg-sky-100 w-auto p-6">
                    <div className="w-full mb-6">
                        <input
                            type="text"
                            defaultValue={netIncome || ''}
                            className="bg-blue-500 hover:bg-blue-700 text-white w-auto font-bold py-2 px-4 rounded"
                        />
                        <span className='ml-2'> Your net </span>
                        <select value={value} onChange={handleChange} className='ml-2'>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnigthly">Fortnigthly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annualy">Annualy</option>
                        </select>
                        <span className='ml-2'> - income </span>
                    </div>
                    <div>
                        <table className="divide-y divide-gray-200 bg-white table-auto" tabledata={tableData}>
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        FREQUENCY
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        GROSS INCOME
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        TAX
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        NET INCOME
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    tableData.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap border">
                                                    {data.incomePeriod}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap border">$ {data.totalIncome}</td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap border">$ {tax}</td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap border">$ {netIncome}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div >
            </div>
        </div>
    )
}
export default TableData;
