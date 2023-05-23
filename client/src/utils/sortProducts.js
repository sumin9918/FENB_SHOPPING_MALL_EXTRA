const sortProducts = (products, sortOption) => {
  switch (sortOption) {
    case 'favorite':
      return products.sort((a, b) => a.favorites - b.favorites);

    case 'new':
      return products.sort((a, b) => new Date(b.dateOfManufacture).getTime() - new Date(a.dateOfManufacture).getTime());

    case 'high':
      return products.sort((a, b) => b.price - a.price);

    case 'low':
      return products.sort((a, b) => a.price - b.price);

    default:
      return products;
  }
};

export default sortProducts;
