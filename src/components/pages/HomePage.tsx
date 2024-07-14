'use client'

import styled from 'styled-components'

import Button from '../Button'
import { Post } from '@/types/post'
import Link from 'next/link'

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`

const Terminal = styled.div`
  background: var(--black);
  border-radius: 0.5rem;
  border: 1px solid var(--gray-light);
  box-shadow: 0px 0px 6px 1px rgba(58, 58, 58, 1);
  width: 700px;
  height: 400px;

  @media (max-width: 700px) {
    width: 100%;
  }
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
  padding: 10px;
  color: var(--white);
  background: var(--black);
  margin: 0;
  font-family: 'Fira Code', monospace;
`

export default function HomePage({ posts }: { posts: Post[] }) {
  return (
    <Main>
      <Terminal>
        <TerminalHeader>
          <TerminalLeft>
            <Button
              round={true}
              style={{
                height: '12px',
                width: '12px',
                border: 'none',
                background: '#FF494A',
              }}
            />
            <Button
              round={true}
              style={{
                height: '12px',
                width: '12px',
                border: 'none',
                background: '#FFC219',
              }}
            />
            <Button
              round={true}
              style={{
                height: '12px',
                width: '12px',
                border: 'none',
                background: '#19B356',
              }}
            />
          </TerminalLeft>
        </TerminalHeader>
        <TerminalBody>
          Hello world!! Blog Posts:
          <ol>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </li>
              )
            })}
          </ol>
        </TerminalBody>
      </Terminal>
    </Main>
  )
}
