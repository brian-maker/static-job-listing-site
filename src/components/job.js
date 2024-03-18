import React from 'react'

function Job({data,categories}) {
  return (
    <>
    {data.map((job) =>{
        const {id,company,logo,New,featured,position,role,level,postedAt,contract,location,languages,tools} = job;
        return <div className='mx-3'>
            <section className={`article ${New && featured ? 'colored-border' : ''}` } >
            <article key={id} className='bg-white mb-20 shadow-2xl shadow-shadowColor p-10 relative flex flex-col rounded-md md:flex-row md:items-center md:justify-between md:align-top lg:gap-10'>
            <img src={logo} alt={company} className='absolute -top-6 md:relative md:mr-2 lg:mr-0 md:mt-10' />
            <section>
            <div className='flex gap-3 items-center md:mb-2'>
                <h2 className='text-bg-color font-bold mr-10 md:mr-0'>{company}</h2>
                <div className='flex gap-3'>
                    <div className='bg-cyan'>
                        {New ? <button className='bg-bg-color text-white font-medium text-sm new pt-1'>NEW!</button> : null}
                    </div>
                    <div>{featured ?<button className='bg-dark featured uppercase text-white font-medium text-sm'>featured</button> : null}</div>
                </div>
            
            </div>
            <h3 className='text-position font-bold mt-1 hover:cursor-pointer hover:text-bg-color'>{position}</h3>
            <div className='flex items-center my-2'>
                <p className='text-textGray font-medium'>{postedAt}</p>
                <div className="dot"></div>
                <p className='text-textGray font-medium'>{contract}</p>
                <div className="dot"></div>
                <p className='text-textGray font-medium'>{location}</p>
            </div>
            </section>
            
            <div className="underline"></div>
            <div className='mt-3 flex flex-wrap gap-3 md:mt-0 md:justify-end md:w-1/2 md:align-top'>
                <button className='btn font-bold hover:bg-bg-color hover:text-white'>{role}</button>
                <button className="btn font-bold hover:bg-bg-color hover:text-white">
                    {level}
                </button>
                <button className="font-bold flex flex-wrap gap-3 ">
                    {languages.map((language, index)=>{
                         return <button className='btn hover:bg-bg-color hover:text-white' key={index}>{language}</button>
                    })}
                </button>
                <button className='font-bold flex flex-wrap gap-3'>
                    {tools.map((tool, index)=>{
                        return <button className='btn hover:bg-bg-color hover:text-white' key={index}>
                            {tool}
                        </button>
                    })}
                </button>
                
            </div>

            </article>
            </section>
            

        </div> 
    })}
    </>
  )
}

export default Job