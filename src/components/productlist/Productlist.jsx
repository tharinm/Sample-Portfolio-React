import React from 'react'
import { Product } from '../product/Product'
import "./productlist.css";
import { products } from '../../data.js';

export const Productlist = () => {
  return (
    <div className='pl'>
        <div className='pl-text'>
            <h1 className='pl-title'>Create & Inspire</h1>
            <p className='pl-desc'>
                Deserunt dolore velit consectetur laborum et aliqua occaecat occaecat consequat occaecat Lorem. Elit ex exercitation tempor ea anim eu officia nisi eu ea officia. Esse tempor laboris magna nostrud consectetur ipsum magna laborum qui commodo ad culpa tempor. Ad excepteur duis adipisicing aliqua ea reprehenderit ut magna elit dolor in nostrud. Enim ut nulla proident magna laboris. Mollit adipisicing ullamco laboris do exercitation labore.
            </p>
        </div>
        <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
        </div>
    </div>
  )
}
