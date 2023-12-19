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
  width: 50vw;
  height: 50vh;
`

const TerminalHeader = styled.div`
  background: var(--gray-dark);
  border-radius: 0.4rem 0.4rem 0 0;
  height: 2rem;
  border-bottom: 1px solid var(--gray-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
`

const TerminalLeft = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TerminalBody = styled.pre`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 7.25rem auto 5rem;
  grid-template-areas: "header header" "main sidebar" "footer footer";
  min-height: 100vh;
`

export default function Home() {
  return (
    <Main>
      <Terminal>
        <TerminalHeader>
          <TerminalLeft>
            <Button round></Button>
          </TerminalLeft>
        </TerminalHeader>
        <TerminalBody>
                       /\  \                 /\  \        /\__\     /\__\               /\__\        /\__\        /\  \    
      ___   ___       |::\  \               /::\  \      /:/ _/_   /:/ _/_   ___       /:/  /       /:/ _/_      /::\  \   
     /\__\ /\__\      |:|:\  \             /:/\:\  \    /:/ /\__\ /:/ /\__\ /\__\     /:/  /       /:/ /\__\    /:/\:\__\  
    /:/  //:/__/    __|:|\:\  \           /:/  \:\  \  /:/ /:/  //:/ /:/  //:/__/    /:/  /  ___  /:/ /:/ _/_  /:/ /:/  /  
   /:/__//::\  \   /::::|_\:\__\         /:/__/ \:\__\/:/_/:/  //:/_/:/  //::\  \   /:/__/  /\__\/:/_/:/ /\__\/:/_/:/__/___
  /::\  \\/\:\  \__\:\~~\  \/__/         \:\  \ /:/  /\:\/:/  / \:\/:/  / \/\:\  \__\:\  \ /:/  /\:\/:/ /:/  /\:\/:::::/  /
 /:/\:\  \~~\:\/\__\\:\  \                \:\  /:/  /  \::/__/   \::/__/   ~~\:\/\__\\:\  /:/  /  \::/_/:/  /  \::/~~/~~~~ 
 \/__\:\  \  \::/  / \:\  \                \:\/:/  /    \:\  \    \:\  \      \::/  / \:\/:/  /    \:\/:/  /    \:\~~\     
      \:\__\ /:/  /   \:\__\                \::/  /      \:\__\    \:\__\     /:/  /   \::/  /      \::/  /      \:\__\    
       \/__/ \/__/     \/__/                 \/__/        \/__/     \/__/     \/__/     \/__/        \/__/        \/__/    

        </TerminalBody>
      </Terminal>
    </Main>
  )
}
