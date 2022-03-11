import { Fragment } from 'react'
import styled from 'styled-components'
import Typography from '~/components/Typography'

const Card = styled.div`
  position: relative;
  width: 800px;
  margin: 100px auto 0;
  border-radius: 50px;
`

const CardHeader = styled.div`
  text-align: center;
  background-color: red;
  padding: 10px 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`

const CardHeaderTopText = styled(Typography)`
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`

const CardHeaderBottomText = styled(Typography)`
  font-size: 26px;
  margin-top: --10px;
  color: white;
`

const CardBodyText = styled(Typography)`
  text-align: center;
  font-size: 180px;
  padding: 30px 0;
`

const CardFooter = styled.div`
  height: 35px;
  background: red;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`

export default function Index() {
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardHeaderTopText>Hello</CardHeaderTopText>
          <CardHeaderBottomText>my name is</CardHeaderBottomText>
        </CardHeader>
        <CardBodyText variant="cursive">Tim</CardBodyText>
        <CardFooter></CardFooter>
      </Card>
    </Fragment>
  )
}
