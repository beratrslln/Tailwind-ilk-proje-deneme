import React from 'react'
import Sidebar from './Sidebar'


function Main() {
  return (



<div className='flex'>
    <Sidebar></Sidebar>

    {/* içerik alanı */}
    <main className="container mx-auto p-6" >

        <h4 className='text-gray text-3xl font-bold'>Paylaşımlar</h4>
        {/* aşağıdaki kartlar divine grid özelliği verdik öncelikli olarak 1 kolonlu yaptık mobil için diğer ekran boyutları için de çeşitlendirdik. */}
        <div id='cards' className='py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>


            {/* kartlar */}



            <div className='rounded-lg shadow-lg overflow-hidden'>
                <div alt="" className='bg-gray-300 h-48'/>
                <div className='p-2'>
                    <h2 className='text-2xl font-mono font-bold text-blue-900'>Post</h2>
                    <h2 className='rounded-sm p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est excepturi iusto nobis recusandae ipsum quaerat nemo illo perspiciatis exercitationem culpa delectus.</h2>
                    <div className='flex items-center justify-end gap-2'>
                    <i class="bi bi-suit-heart-fill  text-red-600 text-xl cursor-pointer"></i>
                    <i class="bi bi-chat-left-dots-fill text-blue-500 text-xl cursor-pointer"></i>
                    <i class="bi bi-share-fill"></i>
                    </div>
                </div>
            </div>


            <div className='rounded-lg shadow-lg overflow-hidden'>
                <div alt="" className='bg-gray-300 h-48'/>
                <div className='p-2'>
                    <h2 className='text-2xl font-mono font-bold text-blue-900'>Post</h2>
                    <h2 className='rounded-sm p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est excepturi iusto nobis recusandae ipsum quaerat nemo illo perspiciatis exercitationem culpa delectus.</h2>
                    <div className='flex items-center justify-end gap-2'>
                    <i class="bi bi-suit-heart-fill  text-red-600 text-xl cursor-pointer"></i>
                    <i class="bi bi-chat-left-dots-fill text-blue-500 text-xl cursor-pointer"></i>
                    <i class="bi bi-share-fill"></i>
                    </div>
                </div>
            </div>


            <div className='rounded-lg shadow-lg overflow-hidden'>
                <div alt="" className='bg-gray-300 h-48'/>
                <div className='p-2'>
                    <h2 className='text-2xl font-mono font-bold text-blue-900'>Post</h2>
                    <h2 className='rounded-sm p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est excepturi iusto nobis recusandae ipsum quaerat nemo illo perspiciatis exercitationem culpa delectus.</h2>
                    <div className='flex items-center justify-end gap-2'>
                    <i class="bi bi-suit-heart-fill  text-red-600 text-xl cursor-pointer"></i>
                    <i class="bi bi-chat-left-dots-fill text-blue-500 text-xl cursor-pointer"></i>
                    <i class="bi bi-share-fill"></i>
                    </div>
                </div>
            </div>

            <div className='rounded-lg shadow-lg overflow-hidden'>
                <div alt="" className='bg-gray-300 h-48'/>
                <div className='p-2'>
                    <h2 className='text-2xl font-mono font-bold text-blue-900'>Post</h2>
                    <h2 className='rounded-sm p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est excepturi iusto nobis recusandae ipsum quaerat nemo illo perspiciatis exercitationem culpa delectus.</h2>
                    <div className='flex items-center justify-end gap-2'>
                    <i class="bi bi-suit-heart-fill  text-red-600 text-xl cursor-pointer"></i>
                    <i class="bi bi-chat-left-dots-fill text-blue-500 text-xl cursor-pointer"></i>
                    <i class="bi bi-share-fill "></i>
        
                    </div>
                </div>
            </div>

            <div className='rounded-lg shadow-lg overflow-hidden'>
                <div alt="" className='bg-gray-300 h-48'/>
                <div className='p-2'>
                    <h2 className='text-2xl font-mono font-bold text-blue-900'>Post</h2>
                    <h2 className='rounded-sm p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est excepturi iusto nobis recusandae ipsum quaerat nemo illo perspiciatis exercitationem culpa delectus.</h2>
                    <div className='flex items-center justify-end gap-2'>
                    <i class="bi bi-suit-heart-fill  text-red-600 text-xl cursor-pointer"></i>
                    <i class="bi bi-chat-left-dots-fill text-blue-500 text-xl cursor-pointer"></i>
                    <i class="bi bi-share-fill"></i>
                    </div>
                </div>
            </div>

        </div>

    </main>

{/* <main class="container mx-auto py-8 ml-6"> 
  <h2 class="text-3xl font-bold mb-6">Son Postlar</h2>

  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">   
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="h-48 bg-gray-200"></div> 
      
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Post Başlığı</h3>
        <p class="text-gray-600">Bu, kart içeriğinin kısa bir açıklamasıdır. Tasarımda yer tutması için eklenmiştir.</p>
        <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</a>
      </div>
    </div>
    
    </div>
</main> */}



    </div>

    
  )
}

export default Main