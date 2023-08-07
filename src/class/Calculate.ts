export class Calculate {

     value :any 
     valservice : any

    condition = (type: any, service: any , water:any): any => {

        if (service === 'ทั่วไป (ยกเว้น พื้นที่พิเศษ)' && type === 'ที่อยู่อาศัยและอื่นๆ') {
            this.value =  this.function1(water)
        } else if (service === 'ทั่วไป (ยกเว้น พื้นที่พิเศษ)' && type === 'ราชการและธุรกิจขนาดเล็ก') {
            this.value =  this.function2(water)
        } else if (service === 'ทั่วไป (ยกเว้น พื้นที่พิเศษ)' && type === 'ราชการและธุรกิจขนาดใหญ่') {
            this.value =  this.function3(water)
        } else if (service === 'กปภ.สาขาภูเก็ต เกาะสมุย และเกาะพงัน' && type === 'ที่อยู่อาศัยและอื่นๆ') {
            this.value =  this.function4(water)
        } else if (service === 'กปภ.สาขาภูเก็ต เกาะสมุย และเกาะพงัน' && type === 'ราชการและธุรกิจขนาดเล็ก') {
            this.value =  this.function5(water)
        } else if (service === 'กปภ.สาขาภูเก็ต เกาะสมุย และเกาะพงัน' && type === 'ราชการและธุรกิจขนาดใหญ่') {
            this.value =  this.function6(water)
        }
        else if (service === 'เอกชนร่วมลงทุน และพื้นที่จังหวัดชลบุรี' && type === 'ที่อยู่อาศัยและอื่นๆ') {
            this.value =  this.function7(water)
        }
        else if (service === 'เอกชนร่วมลงทุน และพื้นที่จังหวัดชลบุรี' && type === 'ราชการและธุรกิจขนาดเล็ก') {
            this.value =  this.function8(water)
        }
        else {
            this.value =  this.function9(water)
        }
        return this.value
    }

    sizeService = (size : any) => {
        if(size === '1/2') {
            this.valservice = 30
        }else if (size === '3/4'){
            this.valservice = 50
        }else if (size === '1'){
            this.valservice = 60
        }else if (size === '1 ½'){
            this.valservice = 90
        }else if (size === '2'){
            this.valservice = 350
        }else if (size === '3'){
            this.valservice = 450
        }else if (size === '4'){
            this.valservice = 550
        }else if (size === '6'){
            this.valservice = 950
        }else {
            this.valservice = 1200
        }
        return this.valservice
    }
    

    function1 = (water:any) => {
        let price: number[] = [10.20 , 16 , 19 , 21.20 , 21.60, 21.65, 21.70 , 21.75 , 21.80 , 21.85 , 21.90]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }

    function2 = (water:any) => {
        let price: number[] = [16 , 19 , 20 , 21.50 , 21.60, 21.65, 21.70 , 21.75 , 21.80 , 21.85 , 21.90]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }

    function3 = (water:any) => {
        let price: number[] = [18 , 21 , 24 , 27.00 , 29.00, 29.25, 29.50 , 29.75 , 29.50 , 29.25 , 29.00]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }
    function4 = (water:any) => {
        let price: number[] = [ 10.20 , 16.00 , 19.00 , 21.20 , 24.00 , 26.00, 30.25 , 30.25 , 30.25 , 30.25 , 30.25 ]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }
    function5 = (water:any) => {
        let price: number[] = [18.0, 21.0 , 22.00 , 23.00 , 24.00 , 26.00, 30.25 , 30.25 , 30.25 , 30.25 , 30.25]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }
    function6 = (water:any) => {
        let price: number[] = [18.5, 22.0 , 26.00 , 29.00 , 31.50 , 32.50, 33.50 , 34.75 , 34.75 , 34.75 , 34.75]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }
    function7 = (water:any) => {
        let price: number[] = [10.20 , 16.00 , 19.00 , 21.20 , 23.00 , 24.00, 27.40 , 27.50 , 27.60 , 27.80 , 28.00]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }
    function8 = (water:any) => {
        let price: number[] = [17.00 , 20.00 , 21.00 , 22.00 , 23.00 , 24.00, 27.40 , 27.50 , 27.60 , 27.80 , 28.00]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }
    function9 = (water:any) => {
        let price: number[] = [18.25 , 21.50 , 25.50 , 28.00 , 31.00 , 31.25, 31.50 , 31.75 , 32.00 , 32.25 , 32.50]
        let value: number[] = []
        const number = this.calWater(water , price , value)
        return number
    }

    calWater = (water:any , price : number[] , value:number[]) =>{
        
        let count:number [] =  [] ;
        if(water > 3000){
            count[10] =  water - 3000 ;
            value[10] = count[10] * price[10] 
            water = 3000 ;
        } if (water > 2000 && water <=3000) {
            count[9] = water - 2000 ;
            value[9] = count[9] * price[9]
            water = 2000 ;
        } if (water > 1000 && water <=2000) {
            count[8] = water - 1000 ;
            value[8] = count[8] * price[8]
            water = 1000 ;
        } if(water > 700 && water <=1000){
            count[7] = water - 300 ;
            value[7] = count[7] * price[7]  
            water = 700 ;
        } if(water > 200 && water <=700){
            count[6] = water - 500 ;
            value[6] = count[6] * price[6]
            water = 100 ;
        } if(water > 80 && water <=200){
            count[5] = water - 80 ;
            value[5] = count[5] * price[5]
            water = 80 ;
        } if(water > 50 && water <=100){
            count[4] = water - 50 ;
            value[4] = count[4] * price[4]
            water = 50 ;
        } if(water > 30 && water <=50){
            count[3] = water - 30 ;
            value[3] = count[3] * price[3]
            water = 30 ;
        } if(water > 20 && water <=30){
            count[2] = water - 20 ;
            value[2] = count[2] * price[2]
            water = 20 ;
        } if(water > 10 && water <=20){
            count[1] = water - 10 ;
            value[1] = count[1] * price[1]
            water = 10 ;
        }if(water > 0 && water <=10){
            count[0] = water  ;
            value[0] = count[0] * price[0]

        } 



        let sum = 0
        for (let i = 0 ; i < value.length ; i++){
             sum += value[i]
        }

        interface allValue{
            count : any
            value : any 
            price : any
            sum : any 
            tax : any

        }


        let keepvalue: allValue = {
            count : count ,
            value : value ,
            price : price ,
            sum : sum ,
            tax : (sum+this.valservice)*7/100 ,
            
            

        }
        

        return keepvalue
    }
}





