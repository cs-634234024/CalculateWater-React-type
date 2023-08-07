import React from 'react'

type Props = {
    headtitle: string
    title: string[]
    unit: number[]
    priceperunit1: number[]
    priceperunit2: number[]
    priceperunit3: number[]
    minimum_water_bill: string[]
}

const TablePrice = ({ headtitle, minimum_water_bill, priceperunit1, priceperunit2, priceperunit3, title, unit }: Props) => {
    return (
        <div className='mt-7 mb-7'>

            <h1 className='mb-5 text-center font-bold text-lg'>{headtitle}</h1>

            <div className="relative overflow-x-auto">
                <table className="border-[1px] border-gray-300 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {title.map((val: string, index: number) => (
                                <th key={index} scope="col" className="px-6 py-3 text-center">
                                    {val}
                                </th>
                            ))}


                        </tr>
                    </thead>
                    <tbody>
                        {minimum_water_bill.map((val: any, index: number) => (

                            <tr key={index}>
                                <th scope="row" className="px-6 py-3 text-center">
                                {minimum_water_bill[index]}
                                </th>
                                <th scope="row" className="px-6 py-3 text-center">
                                {unit[index]}
                                </th>
                                <th scope="row" className="px-6 py-3 text-center">
                                    {priceperunit1[index]}
                                </th>
                                <th scope="row" className="px-6 py-3 text-center">
                                    {priceperunit2[index]}
                                </th>
                                <th scope="row" className="px-6 py-3 text-center">
                                    {priceperunit3[index]}
                                </th>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TablePrice