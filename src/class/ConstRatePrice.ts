const minimunwaterbill = ['0 - 10' ,'11 - 20' ,'21 - 30' ,'31 - 50','51 - 80','81 - 100','101 - 300','301 -1,000','1001 - 2,000','2,001 - 3,000','> 3,000'] ;
const title = [ ' ช่วงการใช้น้ำ(ลบ.ม. / เดือน) ','จำนวนหน่วย','1. ที่อยู่อาศัย','2. ราชการและธุรกิจขนาดเล็ก','3. รัฐวิสาหกิจ / อุตฯ / ธุรกิจขนาดใหญ่'];
const headtitle = ['ตารางหมายเลข 3 อัตราค่าน้ำประปาพื้นที่ กปภ.สาขาอื่น (ทั่วประเทศ)','ตารางหมายเลข 2 อัตราค่าน้ำประปาพื้นที่ กปภ.สาขาภูเก็ต เกาะสมุย และเกาะพะงัน','ตารางหมายเลข 1 อัตราค่าน้ำประปาพื้นทีเอกชนร่วมลงทุน']
const unit = [10,10,10,20,30,20,200,700,1000,1000]

interface RatePrice{
    headtitle : string 
    title : string[]
    unit : number[]  
    priceperunit1 : number[]
    priceperunit2 : number[]
    priceperunit3 : number[]
    minimum_water_bill : string[]

 }
 
 
export const table1 : RatePrice = {
    headtitle: headtitle[2],
    title: title ,
    unit: unit,
    priceperunit1: [10.20 , 16.00 , 19.00 , 21.20 , 21.60, 21.65, 21.70 , 21.75 , 21.80 , 21.85 , 21.90],
    priceperunit2: [16.00 , 19.00 , 20.00 , 21.50 , 21.60, 21.65, 21.70 , 21.75 , 21.80 , 21.85 , 21.90],
    priceperunit3: [18.00 , 21.00 , 24.00 , 27.00 , 29.00, 29.25, 29.50 , 29.75 , 29.50 , 29.25 , 29.00],
    minimum_water_bill: minimunwaterbill
}
export const table2 : RatePrice = {
    headtitle: headtitle[1],
    title: title ,
    unit: unit,
    priceperunit1: [10.20 , 16.00 , 19.00 , 21.20 , 21.60, 21.65, 21.70 , 21.75 , 21.80 , 21.85 , 21.90],
    priceperunit2: [16.00 , 19.00 , 20.00 , 21.50 , 21.60, 21.65, 21.70 , 21.75 , 21.80 , 21.85 , 21.90],
    priceperunit3: [18.00 , 21.00 , 24.00 , 27.00 , 29.00, 29.25, 29.50 , 29.75 , 29.50 , 29.25 , 29.00],
    minimum_water_bill: minimunwaterbill
}
export const table3 : RatePrice = {
    headtitle: headtitle[0],
    title: title ,
    unit: unit,
    priceperunit1: [10.20 , 16.00 , 19.00 , 21.20 , 21.60, 21.65, 21.70 , 21.75 , 21.80 , 21.85 , 21.90],
    priceperunit2: [16.00 , 19.00 , 20.00 , 21.50 , 21.60, 21.65, 21.70 , 21.75 , 21.80 , 21.85 , 21.90],
    priceperunit3: [18.00 , 21.00 , 24.00 , 27.00 , 29.00, 29.25, 29.50 , 29.75 , 29.50 , 29.25 , 29.00],
    minimum_water_bill: minimunwaterbill
}