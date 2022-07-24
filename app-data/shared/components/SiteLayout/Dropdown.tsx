import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import { ArrowDown, colors } from '../../design';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { useOnClickOutside } from '../../hooks';

type DropdownProps = {
  title: string;
  children: ReactNode;
};

type DropdownItemProps = {
  title: string;
  url: string;
};

export const Dropdown = (props: DropdownProps) => {
  const { title, children } = props;
  const ref = useRef();
  const [isToggled, setToggle] = useState(false);
  useOnClickOutside(ref, () => setToggle(false));

  const menuAppear = useSpring({
    transform: isToggled ? 'translate3D(0,0,0)' : 'translate3D(0,-40px,0)',
    opacity: isToggled ? 1 : 0,
  });

  return (
    <div ref={ref}>
      <ButtonWrapper onClick={() => setToggle(!isToggled)}>
        <Button>{title}</Button>
        <ArrowHolder isOpen={isToggled}>
          <ArrowDown color={isToggled ? colors.primary : colors.text} />
        </ArrowHolder>
      </ButtonWrapper>
      <animated.div style={menuAppear}>
        {isToggled ? <Items>{children}</Items> : null}
      </animated.div>
    </div>
  );
};

export const DropdownItem = (props: DropdownItemProps) => {
  const { title, url } = props;
  return (
    <DropdownItemWrapper>
      <Link href={url}>
        <DropdownLink>{title}</DropdownLink>
      </Link>
    </DropdownItemWrapper>
  );
};

const DropdownItemWrapper = styled.div`
  padding: 8px 0;
  border-bottom: solid 1px rgba(255, 255, 255, 0.16);
  &:last-child {
    border: none;
  }
`;

const Items = styled.div`
  position: absolute;
  width: 247px;
  background-color: ${colors.primary};
  border: 1px solid white;
  border-radius: 10px;
  top: 40px;
  transform: translateX(calc(-50% + 53px));
  padding: 16px;
`;

const ButtonWrapper = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 1rem;
  &:hover {
    a {
      color: ${colors.primary};
      font-weight: bold;
    }
    svg {
      path {
        fill: ${colors.primary};
      }
    }
  }
`;

const Button = styled.a`
  font-size: 0.875rem;
  color: ${colors.text};
  font-weight: 400;
`;

type ArrowProps = {
  isOpen: boolean;
};

const ArrowHolder = styled.div<ArrowProps>`
  display: flex;
  margin-left: 4px;
  transition: transform 0.3s ease-out;
  transform: ${({ isOpen }) => (isOpen ? 'rotateX(0)' : 'rotateX(180deg)')};
`;

export const DropdownLink = styled.a`
  position: relative;
  font-size: 0.875rem;
  color: ${colors.textInverted};
  cursor: pointer;
  font-weight: 400;
  &:hover {
    color: white;
  }
`;
