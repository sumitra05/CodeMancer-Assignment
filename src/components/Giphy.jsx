import React from 'react'
import { useState } from 'react';

export const Gif = (props) => {

    let [search,setSearch] = useState("");
    let [gifs,setGifs] = useState([]);


    const searchGif=()=>{

            if(search.length>0){

                console.log(search)

                fetch(`https://api.giphy.com/v1/gifs/search?api_key=9dZnFe8OJcBERhd0ES4r6DavcoAzuJaF&q=${search}&limit=5&offset=0&rating=g&lang=en`)

                .then((res)=>{

                   return res.json();
                })
                .then((res)=>{

                    
                    setGifs(res.data.map((gif)=>{
                        return gif.images.fixed_height.url;
                    }))
                })
                .catch((err)=> {

                    alert("something went wrong")
                })
            }
    }

    const handleGifClick=(url)=>{

        // props.setSendToBox(url);

        props.sendGifToContainer(url);
    }

  return (
    <>
        <div className='header'>

            <input type="text" placeholder='Search gifs' value={search}

                onChange={(e)=>setSearch(e.currentTarget.value)}

            />
            <button onClick={searchGif}>Search</button>    

        </div>
        <div className='result'>
            <div className='list'>

                {
                    gifs.map((gif)=>{

                        return (
                            <div className='item' onClick={()=>handleGifClick(gif)}>

                                <img src={gif}/>
                            </div>

                        )
                    })
                }
            </div>


        </div>
    </>
  )
}