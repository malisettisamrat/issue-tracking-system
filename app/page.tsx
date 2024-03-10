import { Flex, Grid } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import prisma from "@/prisma/client";

export default async function Home() {
  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex align="center" gap="5" direction="column">
        <IssueChart
          open={openIssues}
          closed={closedIssues}
          inProgress={inProgressIssues}
        />
        <IssueSummary
          open={openIssues}
          inProgress={closedIssues}
          closed={inProgressIssues}
        />
      </Flex>
      <LatestIssues />
    </Grid>
    //
  );
}
