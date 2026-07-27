import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";

import AnalyticsHeader from "../../components/analytics/AnalyticsHeader";
import AnalyticsCards from "../../components/analytics/AnalyticsCards";
import UrlDetailsCard from "../../components/analytics/UrlDetailsCard";
import ActionButtons from "../../components/analytics/ActionButtons";

import { getUrlStats } from "../../services/urlService";
import { useAuth } from "../../context/AuthContext";

function Stats() {
  const { shortCode } = useParams();

  const { token } = useAuth();

  const [stats, setStats] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getUrlStats(shortCode, token);

        setStats(data);
      } catch (err) {
        console.error(err);

        if (err.response) {
          setError(err.response.data.detail);
        } else if (err.request) {
          setError("No response received from the server.");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [shortCode, token]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {loading ? (
          <div
            className="
              rounded-3xl
              border
              border-[#E6E3DB]
              bg-[#FAFAF8]
              p-8
              text-[#6F757B]
            "
          >
            Loading analytics...
          </div>
        ) : error ? (
          <div
            className="
              rounded-3xl
              border
              border-red-200
              bg-red-50
              p-8
              text-red-600
            "
          >
            {error}
          </div>
        ) : (
          <>
            <AnalyticsHeader />

            <AnalyticsCards stats={stats} />

            <UrlDetailsCard stats={stats} />

            <ActionButtons stats={stats} />
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Stats;