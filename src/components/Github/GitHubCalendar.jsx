"use client";
import GitHubCalendar from "react-github-calendar";

export default function GitHubGraph() {
  return (
    <div className="p-6  mx-auto text-white rounded-lg">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-[700px]"> 
          <GitHubCalendar
            username="suman021999"
            blockSize={15}
            blockMargin={3}
            fontSize={14}
            colorScheme="dark"
          />
        </div>
      </div>
    </div>
  );
}


