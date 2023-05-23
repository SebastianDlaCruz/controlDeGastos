import { Skeleton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { UseGetSpent } from "../hook/index.hook";
const TodoList = () => {
  const { bills, isPending } = UseGetSpent();
  return (
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Monto</Th>
            <Th >Servicio</Th>
            <Th >Descripción</Th>
            <Th >Fecha</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            bills.length === 0 ? (<>
              <Tr>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
              </Tr>
              <Tr>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
              </Tr>
              <Tr>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
                <Td><Skeleton height={"40px"} w={"100%"} fadeDuration={1} isLoaded={isPending} /></Td>
              </Tr>

            </>) : (<>
              {

                bills.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.name}</Td>
                    <Td>{item.amount}</Td>
                    <Td>{item.services}</Td>
                    <Td>{item.description || 'sin descripción'}</Td>
                    <Td>{item.date}</Td>
                  </Tr>
                ))
              }
            </>)
          }

        </Tbody>

      </Table>
    </TableContainer>
  )
}

export default TodoList