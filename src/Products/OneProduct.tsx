import { useNavigate, useParams} from 'react-router-dom'
import ava from "../images/temp.png"
import { Suspense, useEffect, useState } from 'react'
import { useDeleteProductByIdMutation, useGetProductByIdQuery } from '../features/apiProductSlice';
import { Category, Product, ProductCreate, ProductItem } from '../types';
import { useGetCategoryByIdQuery } from '../features/apiCategorySlice';
import { ProductIdRequest } from '../types';
import { useDispatch } from 'react-redux';

import '../index.css'
import {ModalDelete} from './ModalDelete';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

export const OneProduct=()=> {

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let idRequest:ProductIdRequest = {id:params.productId!};

  let {data,isSuccess,isLoading,error}:{data:ProductItem,isSuccess:Boolean,isLoading:Boolean,error:any} = useGetProductByIdQuery(idRequest);
  let {data:category,isSuccess:categoryIsSuccess}:{data:Category,isSuccess:Boolean}= useGetCategoryByIdQuery({id: isSuccess ? data.category_id : null});
  
  const [mainImage, setMainImage] = useState<String>("");

  const [deleteProduct,{}] = useDeleteProductByIdMutation();


  useEffect(() => {
    if (isSuccess) {
      setMainImage(data.images[0]);
    }
  }, [isSuccess]);


  // const product = {
  //       id: 1,
  //       name: 'MacBook Pro',
  //       company: 'Apple',
  //       platform: 'Mac',
  //       market: 'Professional',
  //       price: 1999.99,
  //       imageUrl: 'https://via.placeholder.com/500x500.png?text=MacBook+Pro',
  //       description:
  //         'The MacBook Pro is a high-performance laptop with advanced graphics, blazing-fast storage, and more. It is the ultimate tool for professional users.',
  //       images: [
  //         'https://via.placeholder.com/500x500.png?text=MacBook+Pro+1',
  //         'https://via.placeholder.com/500x500.png?text=MacBook+Pro+2',
  //         'https://via.placeholder.com/500x500.png?text=MacBook+Pro+3',
  //       ],
  //     };


  const handleImageClick = (index: Number) => {
    setSelectedThumb(index);

    var indexForImage:any = index;

    setMainImage(data.images[indexForImage]);
  };

  const [selectedThumb, setSelectedThumb] = useState<Number>(0);
  const [count, setCount] = useState(1);

  const handleDelete=()=>{
    deleteProduct(idRequest);
    navigate("/products");
  }

  const handleChangeSwiperImg=(it:number)=>{
    var img = document.getElementById(it.toString());
    var mainImg:any = document.getElementById("mainImg")
    mainImg.style.backgroundImage = img?.style.backgroundImage;

  }

  if (isLoading) return <div >Loading...</div>;
  if (error) return <div>Empty or can`t connect to server</div>;

  
  

    return (
      <>
        <div>
          <div className='m-auto flex justify-center border-2 '>
          
          
          </div>
          
            <div className="flex ">
              
              <div className="flex flex-col items-center justify-center w-2/5 p-4 ">
                

              
              

              {isSuccess ?
              <Swiper
               spaceBetween={50}
               slidesPerView={1}
               className='flex justify-center items-center w-full h-full'
               onSlideChange={(sw)=>console.log(setSelectedThumb(sw.realIndex+1))}
              >

              {data.images.map((img:any,it:number=0) => (
                
                <SwiperSlide key={it++} virtualIndex={it-1} className='flex justify-center items-center rounded-xl'>
                  <div className=' h-full rounded-xl' id='mainImg' style={{backgroundImage: `url(${'data:image/gif;base64,'+ img})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
              :""
              }
                  <div className="flex flex-row justify-center items-center mt-2">
                    {isSuccess ? data.images.map((thumb, index) => (
                    <img
                      key={index}
                      src={"data:image/jpeg;base64,"+ thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-12 h-12 rounded-lg mr-2 border cursor-pointer ${
                        index === selectedThumb ? "border-red-600" : "border-gray-300"
                      }`}
                      onClick={() => handleImageClick(index)}
                    />
                  )) :""}

                </div>

                

              
                
              </div>
              <div className="flex flex-col justify-between p-4 w-3/5">
                <div className="flex flex-col">
                  <h2 className="text-5xl font-bold mb-2">{isSuccess ? data.name : ""}</h2>
                  <span className="text-gray-500 text-sm mb-2">{categoryIsSuccess ? category.name: ""}</span>
                  <div className="text-2xl font-bold text-red-500 mb-2">${isSuccess ? data.price : ""}</div>
                    
                  <div className="text-sm mb-4"  dangerouslySetInnerHTML={{ __html: isSuccess ?  data.descriprion :""}}  >
                  </div>
                  {/* <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Specifications</h3>
                    <ul className="list-disc ml-6">
                      <li>13.3-inch Retina display</li>
                      <li>1.4GHz quad-core 8th-generation Intel Core i5 processor</li>
                      <li>8GB 2133MHz LPDDR3 memory</li>
                      <li>128GB SSD storage</li>
                      <li>Intel Iris Plus Graphics 645</li>
                      <li>Touch Bar and Touch ID</li>
                      <li>Force Touch trackpad</li>
                      <li>Two Thunderbolt 3 ports</li>
                      <li>Backlit Keyboard - US English</li>
                    </ul></div> */}

                    
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">Company Information</h3>

                
                  
                <img
                    src={categoryIsSuccess ? "data:image/jpeg;base64,"+ category.photo_name :""}
                    alt="Company Logo"
                    className="w-8 h-8 rounded-lg mr-2"
                  />
                  <div className="text-sm">
                    <div className="font-bold">{categoryIsSuccess ? category.name : ""}</div>
                    <div className="text-gray-500">{categoryIsSuccess ? category.description : ""}</div>
                  </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-200 rounded-lg px-4 py-2 text-sm font-semibold"
                  onClick={() => setCount(count - 1)}
                  disabled={count === 1}
                >
                  -
                </button>
                <div className="mx-4 text-2xl font-bold">{count}</div>
                <button
                  className="bg-gray-200 rounded-lg px-4 py-2 text-sm font-semibold"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <div>
                
                <ModalDelete id={1} title="Delete" text="Are you sure, that you want to delete this Product?" deleteFunc={handleDelete} />

                <button className="bg-green-500 ml-3 text-white rounded-lg px-4 py-2 font-semibold">
                  Add to Cart
                </button>
              </div>
                  
            </div>
          </div>
        </div>
      </div>
      
        </>
      
    )
  }