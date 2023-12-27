let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    let input = document.querySelectorAll("input")
    let select = document.querySelectorAll("select")
    
    let valid = true
    for(let i = 0; i < input.length; i++){
        console.log(input[i].value)
        if(input[i].value.trim() === ""){
            valid = false
        }
    }
   
    if(!valid){
        e.preventDefault()
    }
    // else{
    //     // let inputNum = Array.from(input).map((el)=>{
    //     //     return parseInt(el.value)
    //     // })
    //     let inputForm = []
    //     inputForm.push(input[0].value)
    //     inputForm.push( transformTransmission(select[0].value))
        
    //     console.log(inputNum)
    // }
    
})

function transformTransmission(txt){
    if(txt === "Automatic"){
        return "0"
    }else if(txt === "Semi-Auto"){
        return "2"
    }else{
        return "1"
    }
}

function transformFuelType(txt){
    if(txt === "Petrol"){
        return "4"
    }else if(txt === "Diesel"){
        return "0"
    }else if(txt === "Hybrid"){
        return "2"
    }else if(txt === "Electric"){
        return "1"
    }else{
        return "3"
    }
}