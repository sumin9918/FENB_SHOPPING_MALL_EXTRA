import { TextInput } from '@mantine/core';
import styled from '@emotion/styled';

const CustomFormInput = styled(TextInput)`
  width: 40rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  input {
    background-color: transparent;
    height: 3.5rem;
  }

  .mantine-InputWrapper-description {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export default CustomFormInput;
