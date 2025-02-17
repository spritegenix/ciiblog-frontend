import { query } from '@/lib/apollo-client';
import { ApolloError, gql } from '@apollo/client';

export const GET_ALL_CATEGORIES = gql`
  query AllCategories {
    allCategories {
      id
      name
      slug
      description
      categoryImage
      groupName {
        id
        name
      }
    }
  }
`;

export const fetchCategoriesSSR = async () => {
    try {
      const { data } = await query({
        query: GET_ALL_CATEGORIES,
      });
  

      if (!data || !data.allCategories) {
        console.warn('No categories found.');
        return null;
      }

      return data;
    } catch (error) {
      if (error instanceof ApolloError) {
        console.error('Error while fetching categories:', error.message);
        return null;
      }
      throw error;
    }
  };