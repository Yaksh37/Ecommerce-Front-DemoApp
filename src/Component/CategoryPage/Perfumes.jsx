import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Perfumes() {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container-fluid'>
    <div className='pt-5'>
      </div>
      <hr />
      {data.length > 0 && (
        <>
          <h2 className="py-4 text-center text-info">{data[2].category}</h2>
          <hr />
          <div className="row justify-content-center px-4">
            {data[2].product.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 p-3"
                style={{ maxWidth: '25rem', minHeight: '30rem', overflow: 'hidden'}}
              >
                <div className="card rounded-0 shadow" style={{ maxWidth: '18rem', height: '30rem', overflow: 'hidden'}}>
                  <img src={product.thumbnail} className="card-img-top rounded-0" alt="..." style={{ width: '18rem', height: '18rem' }} />
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
                      <Link to={`/product/${product.id}`} className="btn btn-dark w-100 p-3 rounded-0 text-warning">
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
        
    </div>
  );
}
