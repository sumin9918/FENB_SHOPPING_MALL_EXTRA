import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const CustomLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  font-weight: 700;

  :hover {
    color: #228be6;
  }
`;

export default CustomLink;
