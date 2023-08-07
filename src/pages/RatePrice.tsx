import React from 'react'
import Banner from '../components/Banner'
import bannerRateprice from '../assets/images/bannerRateprice.png'
import TablePrice from '../components/TablePrice'
import { table1 } from '../class/ConstRatePrice'
import { table2 } from '../class/ConstRatePrice'
import { table3 } from '../class/ConstRatePrice'


type Props = {}

export const RatePrice = (props: Props) => {

  return (
    <div className='container mx-auto  mb-5'> 
      <div className='flex flex-col flex-wrap'>
        <Banner image={bannerRateprice} title='อัตราค่าน้ำประปาส่วนภูมิภาค' detail='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, quisquam!'/>
        <TablePrice headtitle={table1.headtitle} title={table1.title} unit={table1.unit} priceperunit1={table1.priceperunit1} priceperunit2={table1.priceperunit2} priceperunit3={table1.priceperunit3} minimum_water_bill={table1.minimum_water_bill}/>
        <TablePrice headtitle={table2.headtitle} title={table2.title} unit={table2.unit} priceperunit1={table2.priceperunit1} priceperunit2={table2.priceperunit2} priceperunit3={table2.priceperunit3} minimum_water_bill={table2.minimum_water_bill}/>
        <TablePrice headtitle={table3.headtitle} title={table3.title} unit={table3.unit} priceperunit1={table3.priceperunit1} priceperunit2={table3.priceperunit2} priceperunit3={table3.priceperunit3} minimum_water_bill={table3.minimum_water_bill}/>
      </div>
     </div>
  )
}