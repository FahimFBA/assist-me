import { RootState, useActivityLogsQuery } from "@/store";
import { useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { iActivityLogData } from "@/types/interface";
import dayjs from "dayjs";

const ActivityLogs = () => {
  const uid = useSelector((state: RootState) => state.user.uid);
  const { data, isLoading, isError, isFetching } = useActivityLogsQuery({
    uid,
  });

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const sortedData = data
    ? [...data]?.sort(
        (a: iActivityLogData, b: iActivityLogData) =>
          b.time.seconds - a.time.seconds,
      )
    : [];

  return (
    <div>
      <Table className="w-full rounded-md border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Time</TableHead>
            <TableHead className="w-[150px]">Platform</TableHead>
            <TableHead className="w-[350px]">SDK Client Version</TableHead>
            <TableHead className="col-span-9">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData?.map((log: iActivityLogData) => {
            return (
              <TableRow key={log?.id}>
                <TableCell>
                  {log?.time
                    ? // @ts-ignore
                      dayjs(log?.time?.seconds * 1000).format(
                        "dddd, MMMM D, YYYY",
                      )
                    : "No Deadline"}
                </TableCell>
                <TableCell>{log?.clientPlatform}</TableCell>
                <TableCell>{log?.sdkClientVersion}</TableCell>
                <TableCell>{log?.action}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActivityLogs;
