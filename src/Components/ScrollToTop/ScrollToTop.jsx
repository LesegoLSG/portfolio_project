import React,{useState,useEffect} from 'react';
import { AiFillCaretUp } from "react-icons/ai";


const ScrollToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100){
                setBackToTop(true);
            }else{
                setBackToTop(false);
            }
        })
    },[backToTop])

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div>
        {backToTop && (
            <button style={{
                position:"fixed",
                bottom:"50px",
                right:"5px",
                height:"50px",
                width:"50px",
                fontSize:"50px",
            }}
            onClick={scrollUp}
            ><AiFillCaretUp size={30} /></button>
        )

        }
    </div>
  )
}

export default ScrollToTop