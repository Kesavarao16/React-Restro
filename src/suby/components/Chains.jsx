import React,{useState,useEffect} from 'react'
import { API_URL } from '../api'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { InfinitySpin } from 'react-loader-spinner'

const Chains = () => {
  const [vendorData,setVensorData]=useState([])
  const [scrollPosition,setScrollPosition]=useState(0);

  const [loading,setLoading]=useState(true)

  const vendorFirmHandler = async()=>{
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`)
      const newData= await response.json()
      setVensorData(newData);
      console.log("this is api Data", newData);
      setLoading(false)
    }catch(error){
      alert("failed to fetch Data");
      console.log("failed to fetch Data");
      setLoading(true)

    }

  }

  useEffect(()=>{
    vendorFirmHandler()
  },[])

const handleScroll=(direction)=>{
      const gallery = document.getElementById("chainGallery");
      const scrollAmount=500;

      if(direction=== "left"){
        gallery.scrollTo({
          left:gallery.scrollLeft - scrollAmount,
          behavior: 'smooth'
        })
      }else if(direction=== "right"){
        gallery.scrollTo({
          left:gallery.scrollLeft + scrollAmount,
          behavior: 'smooth'
        })
      }
}
  

  return (
 <div className='mediaChinSection'>
 <div className="loaderSection">
 {loading &&  <>
  <div className='loader'> Your 🍕🍔🍟🍿🍰🍩 is  Loading </div>
 <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
 </>}
 </div>
 <div className="btnsection">
  <button onClick={()=>handleScroll("left")}><FaRegArrowAltCircleLeft className='btnIcons'/></button>
  <button onClick={()=>handleScroll("right")}><FaRegArrowAltCircleRight className='btnIcons' /></button>
 </div>
  <h3>Top Restaurant Chains In The City</h3>
 
  <div className="chainSection" id="chainGallery" onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
   
    {vendorData.vendors && vendorData.vendors.map((vendor)=>{
return(
  <>
  <div className="vendorBox">
  {vendor.firm.map((item)=>{
    return(
     <>
      <div>
        {/* {item.firmName} */}
        
      </div>
      <div className="firmImage">
        <img src= {`${API_URL}/uploads/${item.image}`} />
      </div>
     </>
    )
      
    
  })}
</div>
  </>
)
    })}
  </div>
 </div>
  )
}

export default Chains