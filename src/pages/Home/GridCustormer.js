import React from 'react'

const GridCustormer = () => {
    const data = [
        {
            id: "01",
            heading: "PRODUCT",
            desc: "10,0000+"
        },
        {
            id: "02",
            heading: "LIKES",
            desc: "45600"
        },
        {
            id: "03",
            heading: "SALE",
            desc: "576864" 
        },
        {
            id: "04",
            heading: "CUSTOMERS",
            desc: "947444" 
        }
    ]
  return (
    <section className='GridCustomer'>
        <div className='container grid'>
            {data.map((value) => {
                return ( 
                    <div className='box flex'>
                        <div className='para'>
                            <h2 className='inter 500'>{value.heading}</h2>
                            <span className='roboto'>{value.desc}</span>
                        </div>                   
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default GridCustormer