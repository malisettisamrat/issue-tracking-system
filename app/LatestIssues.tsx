import React from "react";
import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import NextLink from "next/link";
import { IssueStatusBadge } from "./components";

const LatestIssues = async () => {
  const latestIssues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading size="4" mb="3">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {latestIssues.map((latestIssue) => (
            <Table.Row key={latestIssue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" gap="2" align="start">
                    <NextLink href={`/issues/${latestIssue.id}`}>
                      {latestIssue.title}
                    </NextLink>
                    <IssueStatusBadge status={latestIssue.status} />
                  </Flex>
                  {latestIssue.assignedToUserId && (
                    <Avatar
                      src={latestIssue.assignedToUser?.image!}
                      fallback="?"
                      size="2"
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
