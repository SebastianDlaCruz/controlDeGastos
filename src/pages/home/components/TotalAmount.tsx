import { Card, CardBody, Text } from "@chakra-ui/react"
const TotalAmount = () => {
  return (
    <Card w={"200px"} h={"100px"}>
      <CardBody>
        <Text as="h1">Balance</Text>
        <Text>$2000</Text>
      </CardBody>
    </Card>
  )
}

export default TotalAmount