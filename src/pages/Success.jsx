export default function Success() {
  const trackingId = localStorage.getItem("trackingId");
  const name = localStorage.getItem("applicantName");

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">
        Application Submitted 🎉
      </h1>

      <p className="mt-4">
        Name: <b>{name}</b>
      </p>

      <p>
        Tracking ID: <b>{trackingId}</b>
      </p>
    </div>
  );
}