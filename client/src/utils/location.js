export const getDecodeSearch = search => {
  const decodeSearch = decodeURI(search);
  const searchParams = new URLSearchParams(decodeSearch);
  const searchValue = searchParams.get('search') ?? searchParams.get('category');

  return {
    search: decodeSearch,
    searchValue,
  };
};
