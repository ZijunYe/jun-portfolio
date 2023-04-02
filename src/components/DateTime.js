import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    const d = new Date();
    let day = weekday[d.getDay()];

    return(
        <p className='navTime'>{day} {date.toLocaleTimeString()}</p>
    )
}

export default DateTime