import React, { useEffect, useState } from 'react'
import Job from './components/job'
import Data from './data'
import Category from './components/category';


const allLevels =['all',...new Set(Data.map((item) => item.level))];

const allRoles =[...new Set(Data.map((item) => item.role))];



function App() {
  const [data,setData] = useState(Data)
  const [categories, setCategories] = useState(allLevels) 
  const [role, setRoles] = useState(allRoles)

  const filterItems = (category) =>{
    if(category === 'all' ){
      setData(Data)
      return;
    }
    const newItems = Data.filter((item) => item.level === category )
    setData(newItems)
  }

  const filterRole = (category) =>{
    const newRoles = Data.filter((item) => item.role === category )
    setData(newRoles)
  }

  return (
    <main>
      <div className="header bg-bg-color flex justify-center items-center">

      <Category
       categories={categories} filterItems = {filterItems} 
       role={role} filterRole={filterRole} />
      </div>
      <div className="container pt-24">
        <article className='min-h-full'>
          
          <Job data={data} />
        </article>
      </div>
    
    </main>
  )
}

export default App