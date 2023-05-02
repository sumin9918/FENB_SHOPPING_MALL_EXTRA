import { Loader } from '@mantine/core';
import { usePageProducts } from '../../hooks/products';
import useObserver from '../../hooks/useObserver';

const Loading = () => {
  const { fetchNextPage, hasNextPage } = usePageProducts();
  const observerRef = useObserver(fetchNextPage);

  return (
    hasNextPage && (
      <div ref={observerRef}>
        <Loader />
      </div>
    )
  );
};

export default Loading;
