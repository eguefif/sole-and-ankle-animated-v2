import { styled } from 'styled-components';
import { QUERIES, WEIGHTS } from '../../constants';

export default function NavLink({link, label}) {
  return (
    <NavLinkWrapper>
      <NavLinkContent href={link}>{label}</NavLinkContent>
      <NavLinkHidden href={link}>{label}</NavLinkHidden>
    </NavLinkWrapper>
  );
}

const NavLinkWrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  cursor: pointer;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;


const NavLinkHidden = styled.span`
  position: absolute;
  top: 50%;
  margin: auto;
  opacity: 0;
  transition: transform 200ms;
  font-weight: ${WEIGHTS.bold};

  ${NavLinkWrapper}:hover & {
    transform: translateY(-14px);
    transition: transform 200ms;
    opacity: 1;
  }
`;

const NavLinkContent = styled.div`
    transition: transform 200ms;
  ${NavLinkWrapper}:hover & {
    transform: translateY(-50px);
    transition: transform 200ms;
  }
`;

