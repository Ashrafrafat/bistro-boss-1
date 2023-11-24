import React, { useState, useEffect } from 'react';
import useMenu from '../../hooks/useMenu';
import Cart from '../../Components/SectionTitle/cart/cart';
import MenuItem from '../../Shared/Menuitem/Menuitem';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const ItemSearch = () => {
    const [menu] = useMenu();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [recommendedItems, setRecommendedItems] = useState([]);
  
    useEffect(() => {
      // Filter items based on the search term
      const results = menu.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
  
      // Call the recommendation algorithm here and set the recommended items
      const recommended = recommendItems(searchTerm);
      setRecommendedItems(recommended);
    }, [searchTerm]);
  
    // Recommendation algorithm based on lowest price and name
    const recommendItems = (query) => {
      // Filter items based on name similarity to the search query
      const nameFilteredItems = menu.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
  
      // Sort the filtered items by price in ascending order
      const sortedItems = [...nameFilteredItems].sort((a, b) => a.price - b.price);
  
      // Return the top N items from the sorted list (e.g., top 3)
      const topRecommendedItems = sortedItems.slice(0, 3);
  
      return topRecommendedItems;
    };
  
    return (
      <div>
        <div className='flex-auto' >
        <input className="input input-bordered input-warning w-full max-w-xs"
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        <div>
        <SectionTitle  heading={"Search Result"}
            subHeading={"Search your prferred item"}>
</SectionTitle>
        </div>
        
<div className='grid md:grid-cols-3 gap-10'>
{ 
filteredItems.map(item => <Cart key={item._id}
item={item}>
</Cart>)
}


</div>
<SectionTitle  heading={"***Recommendation***"}
            subHeading={"You can also buy it"}>
</SectionTitle>
<div className='grid md:grid-cols-3 gap-10'>
{ 
recommendedItems.map(item => <MenuItem key={item._id}
item={item}>
</MenuItem>)
} 
</div>
      </div>
    );
  };
  
  export default ItemSearch;