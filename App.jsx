import "./index.css"
import Canvas from "./canvas.jsx"
import data from "./data.js"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect , useState , useRef} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Option from "./option.jsx";

function App(){
  const [canvas, setcanvas] = useState(false);
  const headingref = useRef(null);
  const growingRef = useRef(null);

  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();
  } , [])
  useEffect(()=>{

     const handleClick = (e)=>{
      setcanvas((prevShowCanvas)=>{
        if(!prevShowCanvas){
        console.log(e.clientX, e.clientY);

      gsap.set(growingRef.current,{
        top:e.clientY,
        left:e.clientX,
      })
      gsap.to("body",{
        color: "#000",
        duration: 2,
        backgroundColor: "#fd2c2a",   
      })
      gsap.to(growingRef.current, {
          scale:1000,
          duration: 2,
          ease: "Power4.inOut",
          onComplete: () => {
            gsap.set(growingRef.current, {
              scale: 0,
              clearProps: "all"
            });
          },
      });
      }
      else{
        gsap.to("body",{
          color: "#fff",
          ease: "Power2.inOut", 
          duration: 0.5,
          backgroundColor: "#000",
        })
      }
      return !prevShowCanvas;
      });
      
    }
    const headingElem = headingref.current;
    headingElem.addEventListener('mouseenter',headingElem)
    headingref.current.addEventListener("click",handleClick)
    return ()=>{
      headingElem.removeEventListener('click',handleClick);
    }
  },[])
  return <>
  <span ref={growingRef} className="growing fixed block rounded-full top-[-20px] left-[-20px] w-5 h-5"></span>
  <div className=" w-full min-h-screen relative ">

      {canvas && data[0].map((canvasdets, index)=>{
        return <Canvas key={index} details={canvasdets} />
      })}
      <div className=" w-full min-h-screen font-'Helvetica_Now_Display'  relative">
        <nav className=" top-0 left-0 p-8 w-full flex justify-between z-50 font-medium">
          <div className="brand text-2xl font-regular">thirtysixstudios</div>
          <div className="links flex gap-10 ">
            {["home", "about", "projects", "contact"].map((link, index) => (
              <a key={index} href={`#${link}`} className=" text-md hover:text-gray-300">
                {link}
              </a>
            ))}
          </div>

        </nav>
        <div className="textcon w-full  px-[20%]">
          <div className=" text w-[50%]">
            <h3 className="text-5xl leading-[1.5] w-[70%]">At Thirtysixstudio , we build immersive digital experiences for brands with a purpose.</h3>
             <p className="text-lg w-[60%] mt-10 font-normal">
                We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
              </p>
              <p className="text-medium mt-10 pb-4">scroll</p>
          </div>
        </div>
          <div className="overflow-x-hidden w-full">
           
          </div>
        </div>

     </div>
      <div className=" bg w-full h-screen relative  mt-[2rem] px-10">
       {canvas && data[1].map((canvasdets, index)=>{
        return <Canvas key={index} details={canvasdets} />
      })}
      <div className="relative z-[1]">
         <div className="w-full absolute left-0 ">
            <h1 ref={headingref} className="text-[18rem] font-normal tracking-tight leading-none ">Thirtysixstudio</h1>
          </div>
        <div className=" absolute mt-[37vh]">
           <h1 className="text-8xl tracking-tighter  ">about the brand</h1>
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light ">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>
        <div className=" w-full h-[40vh] mt-3 absolute py-2.5 pb-5">
           {canvas && data[2].map((canvasdets, index)=>{
        return <Canvas key={index} details={canvasdets} />
      })}
          <Option index={0}/>
          <Option index={1}/>
          <Option index={2}/>
          <Option index={3}/>
          <div className=" h-[40%]">
        
      </div>
       </div>
      
        </div>

      </div>
           
      </div>
  </>
}
export default App