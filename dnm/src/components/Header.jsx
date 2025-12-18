import React from 'react'

function Header() {
  return (

<div>
    {/* <header className='bg-black py-12 text-white font-serif uppercase'  >
        <div className='container flex items-center justify-between space-x-16'>

            <a className='text-4xl font-bold text-gray-200' href="#">ARSLAN</a>

            <nav className='flex justify-between flex-1'>
                <div className='flex items-center text-lg space-x-8'>
                    <a className='hover:text-amber-300 transition duration-300' href="#">Movies</a>
                    <a className='hover:text-amber-300 transition duration-300' href="#">Movies</a>
                    <a className='hover:text-amber-300 transition duration-300' href="#">Movies</a>
                    <a className='hover:text-amber-300 transition duration-300' href="#">Movies</a>
                    <a className='hover:text-amber-300 transition duration-300' href="#">Movies</a>
                </div>

                <div className='flex items-center space-x-8'>
                    <form>
                        <div>
                            <input type="text" />
                            <button>Ara ?</button>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    </header> */}

<header class="bg-gray-800 p-4">
  <div class="container mx-auto flex items-center">

    <a href="#" class="text-white text-2xl font-bold mr-8">
      Marka Adı
    </a>

    <nav class="hidden md:flex space-x-6">
      <a href="#" class="text-gray-300 hover:text-white transition duration-150">Hizmetler</a>
      <a href="#" class="text-gray-300 hover:text-white transition duration-150">Blog</a>
      <a href="#" class="text-gray-300 hover:text-white transition duration-150">Fiyatlandırma</a>
    </nav>

    <div class="ml-auto flex items-center space-x-4">
      <button class="text-gray-300 hover:text-white hidden sm:block">Giriş Yap (Login)</button>
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-150">
        Kayıt Ol (Sign Up)
      </button>
      
      <button class="md:hidden text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </div>

  </div>
</header>


<main class="container mx-auto py-8">
  
  <h2 class="text-3xl font-bold mb-6">Son Postlar</h2>

  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
    {/* <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="h-48 bg-gray-200"></div> 
      
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Post Başlığı</h3>
        <p class="text-gray-600">Bu, kart içeriğinin kısa bir açıklamasıdır. Tasarımda yer tutması için eklenmiştir.</p>
        <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</a>
      </div>
    </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="h-48 bg-gray-200"></div> 
      
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Post Başlığı</h3>
        <p class="text-gray-600">Bu, kart içeriğinin kısa bir açıklamasıdır. Tasarımda yer tutması için eklenmiştir.</p>
        <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</a>
      </div>
    </div> */}

{/* 
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="h-48 bg-gray-200"></div> 
      
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Post Başlığı</h3>
        <p class="text-gray-600">Bu, kart içeriğinin kısa bir açıklamasıdır. Tasarımda yer tutması için eklenmiştir.</p>
        <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</a>
      </div>
    </div>


        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="h-48 bg-gray-200"></div> 
      
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Post Başlığı</h3>
        <p class="text-gray-600">Bu, kart içeriğinin kısa bir açıklamasıdır. Tasarımda yer tutması için eklenmiştir.</p>
        <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</a>
      </div>
    </div> */}


        {/* <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="h-48 bg-gray-200"></div> 
      
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Post Başlığı</h3>
        <p class="text-gray-600">Bu, kart içeriğinin kısa bir açıklamasıdır. Tasarımda yer tutması için eklenmiştir.</p>
        <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</a>
      </div>
    </div>



        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="h-48 bg-gray-200"></div> 
      
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Post Başlığı</h3>
        <p class="text-gray-600">Bu, kart içeriğinin kısa bir açıklamasıdır. Tasarımda yer tutması için eklenmiştir.</p>
        <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</a>
      </div>
    </div> */}
    
    </div>
</main>
</div>
  )
}

export default Header