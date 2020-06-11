// import React from 'react';
// //@ts-ignore
// import styles from './products.css';
//
// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>Page products</h1>
//     </div>
//   );
// }

import { connect } from 'umi';
import ProductList from '@/components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  console.log('1111',dispatch);
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);
