import styled from 'styled-components'

export const Admire = styled.div`
  display: flex;
  padding: 1.25rem;

  & + & {
    margin-top: 1rem;
    border-top: 1px solid #ccc;
  }
`

export const Inner = styled.div`
  background-color: #fff;
  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.12);
`

export const Name = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.188rem;
    margin-right: 0.625rem;
    border: 0.063rem solid #ccc;
  }

  p {
    font-size: 0.875rem;
  }
`