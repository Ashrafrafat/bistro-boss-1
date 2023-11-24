import { useActionData } from 'react-router-dom';
import orderCover from '../../../src/images/order1.jpg'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import Cart from '../../Components/SectionTitle/cart/cart';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const shirt = menu.filter (item => item.category === 'shirt');
    const pant = menu.filter (item => item.category ==='pant');
    const sleeve = menu.filter (item => item.category ==='sleeve');

    return (
<div>
<SectionTitle heading={"Order Now"}
            subHeading={"Exclusive for Fall 2023"}>
</SectionTitle>

<div>
<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Jeans</Tab>
    <Tab>Shirt</Tab>
    <Tab>Long Sleeve</Tab>
  </TabList>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-10'>
  {
pant.map(item => <Cart key={item._id}
    item={item}></Cart>)
}
</div>
  </TabPanel>
  <TabPanel>
 <div className='grid md:grid-cols-3 gap-10'>
  { 
shirt.map(item => <Cart key={item._id}
item={item}>
</Cart>)
}
</div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-10'>
  { 
sleeve.map(item => <Cart key={item._id}
item={item}>
</Cart>)
}
</div>
  </TabPanel>
</Tabs>
</div>


</div>

    );
};

export default Order;