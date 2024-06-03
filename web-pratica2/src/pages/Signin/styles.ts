import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`

export const FormContainer = styled.main`
  width: 35rem;
  height: 40rem;
  padding: 4rem 2rem 2rem 2rem;
  box-sizing: border-box;
  background-color: var(--secondary-background-contrast);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Title = styled.h1`
  text-decoration: underline;
  margin-bottom: 5rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
