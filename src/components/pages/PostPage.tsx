'use client'

import styled from 'styled-components'

const Content = styled.div`
  color: var(--white);
`

export default function PostPage({ content }: { content: string }) {
  return (
    <main>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  )
}
