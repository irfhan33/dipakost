import React from "react";
import styled from "styled-components";

function NavItem({ Icon, title, active, expand, onClick }) {
  return (
    <Container active={active} expand={expand} onClick={onClick}>
      <li>
        <Icon className="navmenu-icon" />

        {expand && <span>{title}</span>}
      </li>
    </Container>
  );
}

export default NavItem;

const Container = styled.div`
  li {
    list-style: none;
    /* background: red; */
    flex: 1;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    border-radius: 10px;
    gap: 10px;
    margin-bottom: 4px;
    cursor: pointer;
    white-space: nowrap;
    background: ${({ active }) =>
      active ? "rgba(0, 171, 85, 0.08)" : "transparent"};

    &:hover {
      background-color: rgba(0, 171, 85, 0.08);
      color: rgb(0, 171, 85);
    }
  }

  .navmenu-icon {
    color: ${({ active }) => (active ? "rgb(0, 171, 85)" : "#637381")};
  }

  span {
    color: #637381;
    line-height: 1.57143;
    font-size: 0.875rem;
    text-transform: capitalize;
    color: ${({ active }) =>
      active ? "rgb(0, 171, 85)" : "rgb(99, 115, 129)"};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  }
`;
