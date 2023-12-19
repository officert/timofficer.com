'use client'

import Button from '@/components/Button'
import styled, { css } from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`

const Terminal = styled.div`
  background: var(--white);
  border-radius: 0.5rem;
  border: 1px solid var(--gray-light);
  width: 700px;
  height: 400px;
`

const TerminalHeader = styled.div`
  background: var(--gray-dark);
  border-radius: 0.4rem 0.4rem 0 0;
  height: 2rem;
  border-bottom: 1px solid var(--gray-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`

const TerminalLeft = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

const TerminalBody = styled.pre`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 7.25rem auto 5rem;
  grid-template-areas: 'header header' 'main sidebar' 'footer footer';
  min-height: 100vh;
`

export default function Home() {
  return (
    <Main>
      <Terminal>
        <TerminalHeader>
          <TerminalLeft>
            <Button
              round
              style={{
                height: '12px',
                width: '12px',
                border: 'none',
                background: '#FF494A',
              }}
            ></Button>
            <Button
              round
              style={{
                height: '12px',
                width: '12px',
                border: 'none',
                background: '#FFC219',
              }}
            ></Button>
            <Button
              round
              style={{
                height: '12px',
                width: '12px',
                border: 'none',
                background: '#19B356',
              }}
            ></Button>
          </TerminalLeft>
        </TerminalHeader>
        <TerminalBody></TerminalBody>
      </Terminal>
    </Main>
  )
}
