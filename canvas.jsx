import React from 'react'
import {useEffect , useRef , useState} from 'react'
import image from './image.js'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Canvas({ details }) {
    const { startIndex, numImages , duration , size , top , left , zIndex } = details;
  const canvasRef = useRef(null);
  const [index , setindex] = useState({value : startIndex});
    useGSAP(()=>{
        gsap.to(index , {
            value : startIndex+numImages -1,
            duration : duration,
            repeat:-1,
            ease: "linear",
            onUpdate : () => {
                setindex({value : Math.round(index.value)});
            }
        });
        gsap.from(canvasRef.current, {
            opacity: 0,
            scale: 0.3,
            duration: 1,
            ease: "Power2.inOut",
        });
    })
  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image[index.value];
    img.onload = () => {
        canvas.width = canvas.offsetWidth * scale;
        canvas.height = canvas.offsetHeight * scale;
        canvas.style.width = canvas.offsetWidth + 'px';
        canvas.style.height = canvas.offsetHeight + 'px';
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0 , canvas.offsetWidth, canvas.offsetHeight);
    };
  },[index]);
  return <canvas id = "canvas" data-scroll-speed ={Math.random().toFixed(1)} ref={canvasRef} className='absolute' style={{ width: `${size * 1.3}px`, height: `${size * 1.3}px`, top: `${top}%`, left: `${left}%`, zIndex: zIndex }}></canvas>
}

export default Canvas