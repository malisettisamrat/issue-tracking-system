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
    // <IssueSummary
    //   open={openIssues}
    //   inProgress={closedIssues}
    //   closed={inProgressIssues}
    // />
    <IssueChart
      open={openIssues}
      closed={closedIssues}
      inProgress={inProgressIssues}
    />
  );
}
