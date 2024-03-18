import React from 'react'

function Category({categories,filterItems,role,filterRole}) {
  return (
    <div className='filterContainer bg-white p-6 translate-y-2 shadow-md  shadow-bg-color flex      items-center justify-center text-center mx-3'>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-3'>
          {categories.map((category,index)=>{
                return <button key={index} type='button' className='filterBtn'
                onClick={()=> filterItems(category)}>
                  {category}
                </button>
            })}
        </div>
        <div className='flex gap-3'>
        {role.map((category,index)=>{
              return <button key={index} type='button' className='filterBtn'
              onClick={()=> filterRole(category)}>
                {category}
              </button>
          })}
        </div>
        
        
      </div>
        
      
    </div>
  )
}

export default Category