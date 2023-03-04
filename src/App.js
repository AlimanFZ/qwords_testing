import React from 'react';
import Header from './views/header/component';
import Carousell from './views/carousell/component';
import Product from './views/product/component';
import Features from './views/features/component';
import Testimonials from './views/testimonials/component';
import Footers from './views/footers/component';

function App() {
  return (
    <div>
      <Header></Header>
      <Carousell></Carousell>
      <Product></Product>
      <Features></Features>
      <Testimonials></Testimonials>
      <Footers></Footers>
    </div>
  );
}

export default App;
