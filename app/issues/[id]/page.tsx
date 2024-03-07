import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { Box, Grid } from '@radix-ui/themes'
import EditIssueButton from './edit/EditIssueButton'
import IssueDetails from './edit/IssueDetails'

const IssueDetailsPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!issue)
    notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="3">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issue={issue} />
      </Box>
    </Grid>
  )
}

export default IssueDetailsPage