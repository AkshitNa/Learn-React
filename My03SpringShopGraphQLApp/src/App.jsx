import './App.css'
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

// import {GET_BOOKS, HELLO_WORLD} from './GraphQL/queries'; 

import {My_USER_BOOK_Query} from './GraphQL/queries';

function App() {

  // const { loading, error, data } = useQuery(GET_BOOKS);
  // const { loading: loadingHello, error: errorHello, data: dataHello } = useQuery(HELLO_WORLD);

  // if (loading || loadingHello) return <p>Data Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // if (errorHello) return <p>Error: {errorHello.message}</p>;

  //USING COMBINED QUERY::

  const {loading, error, data } = useQuery(My_USER_BOOK_Query);

    if (loading) return <p> Fetching Data! Please wait for a while....</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
     <h1 className="mb-5 text-black bg-warning p-3">User-Order List</h1>

      {/* Bootstrap Table*/}

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Order</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        <tbody>

          {data.getUsers.map((user,index) => (

            <tr key={user.userId}>
              <td>{index + 1}</td>
              <td><strong>{user.name}</strong></td>
              <td>{user.email}</td>
              <td>{user.phone}</td>

              <td>
                {user.orders.map(order => (

                  <div key={order.orderDetails}>
                    <strong>{order.orderDetails}</strong>
                  </div>))}
              </td>

              <td>
                {user.orders.map(order => (

                  <div key={order.price}>
                    <strong>{order.price}</strong>
                  </div>))}
              </td>

            </tr> ))}

        </tbody>
      </table>
    </div>
  );
};

export default App;


//Note::

/* 

You're accessing orders within your GraphQL query result. Since getUsers returns
an array of users and each user may have multiple orders, you need to iterate over
the orders array within each user to display orderDetails and price correctly.

*/


//JSON Behind the SCENES

/*

{
    "data": {
        "getUsers": [
            {
                "name": "Akshit",
                "email": "Akshit@123",
                "phone": "9897307409",
                "orders": [
                    {
                        "orderDetails": "Latino Pizza",
                        "price": 526
                    }
                ]
            },
            {
                "name": "Ravi",
                "email": "Mittal@123",
                "phone": "123456789",
                "orders": []
            },
            {
                "name": "Robin ",
                "email": "Rawat@123",
                "phone": "1335614",
                "orders": [
                    {
                        "orderDetails": "Dal-Chawal",
                        "price": 50
                    }
                ]
            }
        ]
    }
}

*/
