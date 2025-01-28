function bmi()
{
    const h=document.getElementById('height').value;
    const w=document.getElementById('weight').value;
    
    if(h=='' ||w=='')
    {
        document.getElementById('error').innerHTML=`please enter your data` ;
    }
    else{
        const bmi=w/(h/100*h/100);
        const total=bmi.toFixed(2);
    document.getElementById('result').innerHTML=`Your BMI is ${total}`;
    }
    
}