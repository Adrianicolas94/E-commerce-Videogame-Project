import React, { useState } from 'react';
import {PRODUCTS} from '../../product';
import { Product } from './product';
import './shop.css';
import ps4 from '../../assets/ps4.png';
import seriesX from '../../assets/seriesX.png';
import one from '../../assets/one.png';
import nintendo from '../../assets/switch.png';
import ps5 from '../../assets/ps5.png';






export const Shop = () => {

  const [platformFilter, setPlatformFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = (platform) => {
    if (platform === 'PlayStation 5') {
      setPlatformFilter('PlayStation 5');
    } else {
      setPlatformFilter(platform);
    }
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowAll = () => {
    setPlatformFilter('');
  };

  let filteredProducts = PRODUCTS;


  if (platformFilter !== '') {
    filteredProducts = filteredProducts.filter(
      product =>
        product.platform === platformFilter ||
        (platformFilter === 'PlayStation 5' && product.platform.includes('PlayStation 5'))
    );
  }

  if (searchQuery !== '') {
    filteredProducts = filteredProducts.filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()));
  }


 
  return (

// buttons for filter the products by platform
        
          <div  className='productPage'>
                  
                    <div className="searchButtons">
                   <button className='btn btn-ps5' onClick={() => handleFilter('PlayStation 5')}><img src={ps5} width={'120px'}/></button>
                   <button className='btn btn-ps4' onClick={() => handleFilter('PlayStation 4')}><img src={ps4} width={'120px'}/></button>
                    <button className='btn btn-xbox'  onClick={() => handleFilter('Xbox one')}><img src={one} width={'120px'}/></button>
                    <button className='btn btn-xbox'  onClick={() => handleFilter('Xbox Series X')}><img src={seriesX} width={'90px'}/></button>
                    <button className='btn btn-nintendo' onClick={() => handleFilter('Nintendo Switch')}><img src={nintendo} width={'90px'}/></button>
                    <button className='btn btn-all' onClick={handleShowAll}>All platforms</button>
                </div>

{/* searchBar  */}
                <div className="searchBar">
                          <input className='inputBar' type="text" placeholder="Search games by name" onChange={handleSearch} />
                      </div>
                
                
 {/* filteredProducts = PRODUCTS, i make this to map through each element and display the data(id, price, img...) */}             
          
                <div className="gamesGrid">

                    {filteredProducts.map((product) => <Product data={product} />)}
                </div>
          </div>
  )
}
