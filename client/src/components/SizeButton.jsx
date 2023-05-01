import { Button } from '@mantine/core';
import styled from '@emotion/styled';

const SizeButton = styled(Button)`
  height: 4rem;
  font-size: 1.6rem;

  border: ${props => props.selected && '1px solid #228BE6'};
`;

export default SizeButton;
