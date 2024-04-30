import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Section1 from '../../HomeScreen/Section1';
import  "./ProductCard.css";

export default function ProductCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3003/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=''>
      <div className="container-fluid">
        {loading && (
          <div className="text-center w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        {!loading && !error && (
          <div>
            <div className='pt-5'>
              <Section1 />
            </div>
            {data.map((categoryData) => (
              <div key={categoryData.category}> 
                <hr className='text-info' />
                <h2 className="py-4 text-center text-primary">{categoryData.category}</h2>
                <hr className='text-info' />
                <div className="row justify-content-center px-4">
                  {categoryData.product.map((product) => (

                     <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 p-3 ">
                     <div className="rounded-0 shadow product-card" style={{ maxWidth: '18rem', minHeight: '30rem', overflow: 'hidden'}}>
                       <img src={product.thumbnail} className="card-img-top rounded-0" alt={product.title} style={{ width: '100%', height: '16rem', objectFit: 'cover' }} />
                       <div className="card-body mt-3 mb-3" style={{ height: '5.5rem' }}>
                         <div className="row">
                           <div className="col-10">
                             <h4 className="card-title">{product.title}</h4>
                             <p className="card-text">
                               <i className="bi bi-star-fill text-warning" />
                               <i className="bi bi-star-fill text-warning" />
                               <i className="bi bi-star-fill text-warning" />
                               <i className="bi bi-star-fill text-warning" />
                             </p>
                           </div>
                           <div className="col-2">
                             <i className="bi bi-bookmark-plus fs-2" />
                           </div>
                         </div>
                       </div>
                       <div className="row align-items-center text-center g-0">
                         <div className="col-4">
                           <h5>${product.price}</h5>
                         </div>
                         <div className="col-8">
                           <Link to={`/product/${product.id}`} className="btn btn-dark w-100 p-3 rounded-0 view-detail">
                             View Detail
                           </Link>
                         </div>
                       </div>
                     </div>
                   </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
