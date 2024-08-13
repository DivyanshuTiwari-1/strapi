 'use client'


 import { useEffect, useState } from "react"


export default function Page() {
    type Attributes = {
        title: string;
        description: string;
        slug: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        cover:{
            data:{
                attributes:{
                    formats:{
                        large:{
                            url:string
                        }
                    }
                }
            }
        }
      };
      
      type DataItem = {
        id: number;
        attributes: Attributes;
        
      };
      const[Data,setData] =useState([]);
      const [massage,setMassage]=useState('');
      const[title,setTitle]=useState('');
      const[imurl,setImurl]=useState(');
      
      async function fetchData(): Promise<DataItem[]> {
        const response = await fetch('https://gorgeous-agreement-c4bde3ef88.strapiapp.com/api/articles?populate=*');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
      }
      
      function getDescriptionByTitle(data: DataItem[], title: string,): string {
        const item = data.find(element => element.attributes.title === title);
        return item ? item.attributes.description : 'Title not found';
      }
      
      const handleOnclick= async ()=>{
         const res=await fetchData();
        //  const imgres=await fetch('https://gorgeous-agreement-c4bde3ef88.strapiapp.com/api/articles?populate=cover')
        //  const imgdata=await imgres.json();
        //  const imgobj = imgdata.find((element: DataItem) => element.attributes.cover.data.attributes.formats.large !== undefined);
           
        //  console.log(imgobj);
         setData(Data);
         const des=getDescriptionByTitle(res,title);
        const item = res.find(element => element.attributes.title === title);
        const imgUrl= item?.attributes.cover.data.attributes.formats.large.url;
        
         setMassage(des);
         
          setImurl(imgUrl!);
      }
       
            
        

       
       
       

    return (
        <div className="container mx-auto p-6">
        {/* <!-- Title Section --> */}
        <div className="text-center mb-8">
            <h2 className="text-pink-600 font-semibold">WHY CHOOSE US</h2>
            <h1 className="text-4xl font-bold">We Different From Others</h1>
            <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex flex-row justify-between">
        {/* <!-- Content Section --> */}
        <div className="flex flex-row md:flex-row items-center md:justify-between">
            {/* <!-- Left Section --> */}
                <div className="bg-pink-600 h-64 w-64 text-white p-8 rounded-full items-center relative z-10 md: mr-4">
                    <h3 className="text-xl font-bold mb-4 px-4">{title}</h3>
                    <p className="px-4">{massage}</p>
                </div>
                
         
            {/* <!-- Right Section --> */}
            <div className="flex-1 relative ">
                <img src={imurl} alt="Industry Experts" className="w-64 h-64 rounded-full"/>
            </div>
        </div>
        {/* <!-- Navigation Section --> */}
        <div className="mt-8 flex flex-col space-y-4">
            <button className="py-2 px-4 text-left hover:bg-pink-600 bg-gray-200 text-white rounded-full" onClick={()=>{
                setTitle("Industry Experts")
                handleOnclick();
            }}>
                Industry Experts
            </button>
            <button className="py-2 px-4 text-left hover:bg-pink-600 bg-gray-200 text-gray-900 rounded-full" onClick={()=>{
                setTitle("Dedicated Team")
                handleOnclick();
            }}>
                Dedicated Team
            </button>
            <button className="py-2 px-4 text-left hover:bg-pink-600 bg-gray-200 text-gray-900 rounded-full" onClick={()=>{
                setTitle("Outcome Focused")
                handleOnclick();
            }}>
                Outcome Focused
            </button>
            <button className="py-2 px-4 text-left hover:bg-pink-600 bg-gray-200 text-gray-900 rounded-full" onClick={()=>{
                setTitle("High Quality Service")
                handleOnclick();
            }}>
                High Quality Service
            </button>
            <button className="py-2 px-4 text-left hover:bg-pink-600 bg-gray-200 text-gray-900 rounded-full" onClick={()=>{
                setTitle("Cyber Security Expert")
                handleOnclick();
            }}>
                Cyber Security Expert
            </button>
        </div>
        </div>
    </div>
    )
  }
