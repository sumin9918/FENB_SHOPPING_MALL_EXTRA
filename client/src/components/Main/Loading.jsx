import { Loader } from '@mantine/core';

import { useObserver } from 'hooks';
import { usePageProducts } from 'hooks/products';

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
