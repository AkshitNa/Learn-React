import { gql } from '@apollo/client';

// Query Mapping

//When you have to use multiple queries at once
export const My_USER_BOOK_Query = gql`

query GetUsers {
    getUsers {
        userId
        name
        email
        phone
        orders {
            orderDetails
            price
        }
    }
}
`;

//Mutation Mapping
