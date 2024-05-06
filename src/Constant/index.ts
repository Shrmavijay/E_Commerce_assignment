export interface EnvironmentInterface {
    user: string;
    products: string;
  }
  
  const environment: EnvironmentInterface = {
    user: import.meta.env.VITE_USER_URL,
    products: import.meta.env.VITE_PRODUCTS_URL

  };
  
  export default environment;