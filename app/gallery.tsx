'use client'
import { useState } from 'react'

export default function GalleryComponent(props){
    
    var[pos,setTheAnswer] = useState(0)
    return(
    <div>
        <button onClick={() => setTheAnswer(nextImage(pos))}> |next image| </button>
        <button onClick={() => setTheAnswer(prevImage(pos))}> |previous image| </button>
        <img src={props.urlList[pos]} alt="" />
        
    </div>
    )
}

function nextImage(x){
    x+=1
    if (x>2){
        return 0
    }
    return x
}
function prevImage(x){
    x-=1
    if (x<0){
        return 2
    }
    return x
}
