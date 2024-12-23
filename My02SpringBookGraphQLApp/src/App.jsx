import './App.css'
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

// import {GET_BOOKS, HELLO_WORLD} from './GraphQL/queries'; 

import {My_BOOKS_Query} from './GraphQL/queries';

function App() {

  // const { loading, error, data } = useQuery(GET_BOOKS);
  // const { loading: loadingHello, error: errorHello, data: dataHello } = useQuery(HELLO_WORLD);

  // if (loading || loadingHello) return <p>Data Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // if (errorHello) return <p>Error: {errorHello.message}</p>;

  //USING COMBINED QUERY::

  const {loading, error, data } = useQuery(My_BOOKS_Query);

    if (loading) return <p>Data is Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Books {data.myFirstQuery} </h2>

      {/* Bootstrap Table*/}

      <table className="table table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
    </tr>
  </thead>
  <tbody>
        
          {data.books.map(book => (
                <tr key={book.id}>

                  <td> {book.id} </td>
                  <td><strong>{book.title}</strong></td>
                  <td> {book.author} </td>

                </tr>
              ))}
          
  </tbody>
</table>
    </div>
  );
};

export default App;



//JSON Behind the SCENES

/*

<1> For "myFirstQuery"

{
    "data": {
        "myFirstQuery": "Hello-World"
    }
}

<2> For "books"

{
    "data": {
        "books": [
            {
                "id": "1",
                "title": "The 5AM Morning Club",
                "author": "Robin Sharma"
            },
            {
                "id": "2",
                "title": "The Power Of The Subconcious Mind",
                "author": "Joseph Morphy"
            },
            {
                "id": "3",
                "title": "Think And Grow Rich",
                "author": "Napolean Hill"
            }
        ]
    }
}

*/
