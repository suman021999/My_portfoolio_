"use client";
import GitHubCalendar from "react-github-calendar";

export default function GitHubGraph() {


  return (
    <div className="p-6 bg-black mx-auto text-white rounded-lg">
      {/* Contribution Graph */}
      <GitHubCalendar
        username="suman021999"
        blockSize={15}
        blockMargin={3}
        fontSize={14}
        colorScheme="dark"
      />
    </div>
  );
}


