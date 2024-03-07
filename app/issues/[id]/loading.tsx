import { Flex, Card, Box } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const IssueDetailsLoadingPage = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Flex gap="3" my="2">
        <Skeleton width='4rem' />
        <Skeleton width='8rem' />
      </Flex>
      <Card className='prose' mt="4">
        <Skeleton count={2} />
      </Card>
    </Box>
  )
}

export default IssueDetailsLoadingPage