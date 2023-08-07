
import { Calculate } from '../class/Calculate'
import { useState } from 'react'
import Banner from '../components/Banner'
import banner from '../assets/images/banner.png'


import { Link } from 'react-router-dom'


type Props = {}

const Home = (props: Props) => {


    interface SelectSize {
        val1: string
        val2: string
        val3: string
        val4: string
        val5: string
        val6: string
        val7: string
        val8: string
        val9: string
        val10: string
    }

    interface SelectValue {
        val1: string
        val2: string
        val3: string
    };

    let service: SelectValue = {

        val1: 'ทั่วไป (ยกเว้น พื้นที่พิเศษ)',
        val2: 'กปภ.สาขาภูเก็ต เกาะสมุย และเกาะพงัน',
        val3: 'เอกชนร่วมลงทุน และพื้นที่จังหวัดชลบุรี'
    }
    let type: SelectValue = {

        val1: 'ที่อยู่อาศัยและอื่นๆ',
        val2: 'ราชการและธุรกิจขนาดเล็ก',
        val3: 'ราชการและธุรกิจขนาดใหญ่'
    }

    let size: SelectSize = {
        val1: '1/2',
        val2: '3/4',
        val3: '1',
        val4: '1 ½',
        val5: '2',
        val6: '2 ½',
        val7: '3',
        val8: '4',
        val9: '6',
        val10: '>6'
    }
   
    let water;

    const calculate = new Calculate()
    const [valservice, setValueService] = useState<any>()
    const [valtype, setValueType] = useState<any>()
    const [valsize, setValueSize] = useState<any>()
    const [valwater, setValueWater] = useState<any>()
    const [sizeservice , setSizeService] = useState<number>()
    const [value, setValue] = useState<any>()
    const [sum , setSum] =useState<number>()
    const [tax , setTax] = useState<number>()

    const handleSelect = (event: any) => {

    }

    const calculateValue = () => {

        let servicesize = calculate.sizeService(size = valsize)
        let val = calculate.condition(type = valtype, service = valservice, water = parseFloat(valwater))
        
        setTax(tax)
        setValue(val)
        setSizeService(servicesize)



        // Debug
        console.log(tax);
        console.log(valtype);
        console.log(valservice);
        console.log(valsize);
        console.log(sizeservice);
        console.log(val);


    }

    return (
        <div className='pb-11'>
            <Banner image={banner} title='โปรแกรมคำนวณค่าน้ำประปา การประปาส่วนภูมิภาค' detail='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, quisquam!'/>
            <div className='container mx-auto flex justify-center mt-10 mb-5 '>
                
                <div className='w-[50%] border-[1px] border-gray-200 p-10 rounded-lg'>
                    <h1 className='mb-5 text-blue-500 font-bold  text-xl'>โปรแกรมคำนวณค่าน้ำประปา การประปาส่วนภูมิภาค</h1>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            
                            <label form="countries" className="block mb-2 text-sm  text-gray-900 dark:text-white font-bold">ประปาที่ใช้บริการ</label>
                            <select onChange={(e) => handleSelect(
                                setValueService(e.target.value)
                            )} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected disabled>--- กรุณาเลือก ---</option>
                                <option value={service.val1}>{service.val1}</option>
                                <option value={service.val2}>{service.val2}</option>
                                <option value={service.val3}>{service.val3}</option>
                            </select>

                        </div>
                        <div>
                            <label form="countries" className="block mb-2 text-sm  text-gray-900 dark:text-white font-bold">ประเภทผู้ใช้</label>
                            <select onChange={(e) => handleSelect(
                                setValueType(e.target.value)
                            )} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected disabled>--- กรุณาเลือก ---</option>
                                <option value={type.val1}>{type.val1}</option>
                                <option value={type.val2}>{type.val2}</option>
                                <option value={type.val3}>{type.val3}</option>
                            </select>

                        </div>
                    </div>

                    <div className='mb-5'>
                        <label form="countries" className="block mb-2 text-sm  text-gray-900 dark:text-white font-bold">ขนาดมาตรวัดนํ้า </label>
                        <select onChange={(e) => handleSelect(
                            setValueSize(e.target.value)
                        )} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected disabled>--- กรุณาเลือก ---</option>
                            <option value={size.val1}>{size.val1}</option>
                            <option value={size.val2}>{size.val2}</option>
                            <option value={size.val3}>{size.val3}</option>
                            <option value={size.val4}>{size.val4}</option>
                            <option value={size.val5}>{size.val5}</option>
                            <option value={size.val6}>{size.val7}</option>
                            <option value={size.val8}>{size.val8}</option>
                            <option value={size.val9}>{size.val9}</option>
                            <option value={size.val10}>{size.val10}</option>
                        </select>

                    </div>
                    <div className='mb-5'>
                        <label form="countries" className="block mb-2 text-sm  text-gray-900 dark:text-white font-bold">ปริมาณการใช้น้ำ</label>

                        <input onChange={(e) => handleSelect(
                            setValueWater(e.target.value)
                        )} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="หน่วย" required></input>

                    </div>

                    <div className='flex flex-wrap'> 
                    <h1 className='mb-5'>หมายเหตุ : โปรแกรมคำนวณค่าน้ำประปานี้ เป็นเพียงการคำนวณเบื้องต้นเท่านั้น</h1> <span className='px-5 cursor-pointer text-blue-400 hover:text-blue-600'> <Link to={'/rateprice'} onClick={()=>{ window.scrollTo({ top: 0, left: 0}) }}> อัตราค่าน้ำ </Link> </span>
                    </div>
                     <div className='flex justify-center'>
                     <button onClick={()=> {

                        if(valtype && valservice && valsize &&valwater){
                            calculateValue()
                        }else {
                            return true ;
                        }


                     }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> คำนวณ </button>
                        </div>       
                    
                </div>
            </div>
            <div className='container mx-auto mt-7 mb-10'>

                {(!value) ? <div></div> : <>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left border-[1px] border-gray-300  text-gray-500 dark:text-gray-400">
                            <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        ราคาต่อหน่วย (บาท)
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        คูณ
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        หน่วยนํ้าที่ใช้(ลบ.ม)
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        เป็นเงินทั้งสิ้น(บาท)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {value.value.map((val: any, index: number) => (

                                    <tr key={index}>
                                        <th scope="row" className="px-6 py-3 text-center">
                                            {value.price[index]}
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-center">
                                            *
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-center">
                                            {value.count[index]}
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-center">
                                            {value.value[index]}
                                        </th>
                                    </tr>
                                ))}
                                <tr className=' border-b border-gray-300 border-[1px]'>
                                    <th className='text-center px-6 py-3 text-md'>รวมค่านํ้า</th>
                                    <th></th>
                                    <th></th>
                                    <th className='text-center px-6 py-3 text-md '> {value.sum} (บาท)</th>
                                </tr>
                                <tr className=' border-b border-gray-300 border-[1px]'>
                                    <th className='text-center px-6 py-3 text-md'> ค่าบริการทั่วไป </th>
                                    <th></th>
                                    <th></th>
                                    <th className='text-center px-6 py-3 text-md '> {sizeservice} (บาท)</th>
                                </tr>
                                <tr className=' border-b border-gray-300 border-[1px]'>
                                    <th className='text-center px-6 py-3 text-md'>ภาษีมูลค่าเพิ่ม (7%) </th>
                                    <th></th>
                                    <th></th>
                                    <th className='text-center px-6 py-3 text-md '> {value.tax} (บาท)</th>
                                </tr>
                                
                                <tr className=' border-b border-gray-300 border-[1px]'>
                                    <th className='text-center px-6 py-3 text-md'> รวมเป็นเงินทั้งสิ้น </th>
                                    <th></th>
                                    <th></th>
                                    <th className='text-center px-6 py-3 text-md '> {value.sum+sizeservice+value.tax} (บาท)</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Home