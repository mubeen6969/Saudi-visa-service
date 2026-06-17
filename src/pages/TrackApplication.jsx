import { useState } from "react";
import axios from "axios";

export default function TrackApplication() {
  const [trackingId, setTrackingId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    try {
      setError("");

      const res = await axios.get(
        `http://127.0.0.1:5000/api/applications/track/${trackingId}`
      );

      setData(res.data);
    } catch (err) {
      setData(null);
      setError("Application not found");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">Track Application</h1>

      <input
        className="border p-2 mt-4"
        placeholder="Enter Tracking ID (e.g SVS-ABC123)"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />

      <button
        onClick={handleTrack}
        className="bg-blue-600 text-white px-4 py-2 ml-2"
      >
        Track
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {data && (
        <div className="mt-5 border p-4">
          <p><b>Name:</b> {data.fullName}</p>
          <p><b>Tracking ID:</b> {data.trackingId}</p>
          <p><b>Status:</b> {data.status}</p>
        </div>
      )}
    </div>
  );
}