import { Drawer, Button, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BiFilter } from 'react-icons/bi';

import { Filters } from 'components/Category';
import { useMediaQuery } from 'hooks';
import { MEDIAQUERY_WIDTH } from 'constants';

const FiltersContainer = ({ filters, handleResetFiltersClick, handleCheckFiltersClick }) => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  const [opened, { open, close }] = useDisclosure(false);

  return matches ? (
    <Container
      h="65rem"
      m="0"
      maw="26rem"
      miw="26rem"
      mr="2rem"
      pos="sticky"
      top="6.8rem"
      sx={{
        overflowY: 'auto',
        '::-webkit-scrollbar': { width: '0.5rem' },
        ':hover': { '::-webkit-scrollbar-thumb': { borderRadius: '5rem', backgroundColor: '#7b7676' } },
      }}>
      <Filters
        filters={filters}
        handleCheckFiltersClick={handleCheckFiltersClick}
        handleResetFiltersClick={handleResetFiltersClick}
      />
    </Container>
  ) : (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header m="1rem 0 0 1rem" />
          <Drawer.Body>
            <Filters
              filters={filters}
              handleCheckFiltersClick={handleCheckFiltersClick}
              handleResetFiltersClick={handleResetFiltersClick}
            />
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button fz="1.6rem" h="4rem" mt="1rem" radius="md" variant="default" onClick={open}>
        필터
        <BiFilter size="2.5rem" />
      </Button>
    </>
  );
};

export default FiltersContainer;
