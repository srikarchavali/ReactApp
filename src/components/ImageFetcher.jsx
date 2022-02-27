import { useState } from "react";
export const ImageFetcher = async () => {
  const [img, setImg] = useState([])
    const res = await fetch("https://picsum.photos/v2/list");
      let images = await res.json();
      setImg(img)
      console.log(images)  
 

return(
    <div>
      {images.map(url=>{
        return(
          <img src={images.map(url=>url.download_url)} alt="random images" />
          )
        })}
      </div>
)
}