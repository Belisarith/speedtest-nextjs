import useSWR from "swr";

export default function Speedo() {
  const { data, error } = useSWR("/api/getspeed", async (...args) =>
    (await fetch(...args)).json()
  );

  if (error) return <div>Something went wrong</div>;

  console.log(data);

  return (
    <div
      href="https://nextjs.org/docs"
      className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">
        {!data ? "Please wait" : "Speedtest results"}
      </h3>
      {data ? (
        <div>
          <p className="mt-4 text-xl">
            Upload: {parseInt(data.uploadMBit)} Mbit/s
          </p>
          <p className="mt-4 text-xl">
            Download: {parseInt(data.downloadMBit)} Mbit/s
          </p>
        </div>
      ) : (
        <div>
          <div class="grid grid-cols-2 gap-4 justify-between">
            <div>Processing</div>
            <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
}
