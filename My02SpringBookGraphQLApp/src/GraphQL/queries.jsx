import { gql } from '@apollo/client';

// Query Mapping

//books is as same as the BACKEND.
export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;

//myFirstQuery is as same as the BACKEND.
export const HELLO_WORLD = gql`
  query MyFirstHelloWolrdQuery {
    myFirstQuery 
  }
`;

//When you have to use multiple queries at once
export const My_BOOKS_Query = gql`
  query GetBooks {

    books {
      id
      title
      author
    }

     myFirstQuery 

  }
`;

//Mutation Mapping

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;
