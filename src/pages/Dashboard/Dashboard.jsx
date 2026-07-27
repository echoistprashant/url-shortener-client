import { useCallback, useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import ShortenUrlForm from "../../components/ShortenUrlForm/ShortenUrlForm";
import UrlList from "../../components/UrlList/UrlList";
import DeleteModal from "../../components/modals/DeleteModal";

import MetricsCards from "./MetricsCards";

import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";

import {
  getMyUrls,
  deleteShortUrl,
} from "../../services/urlService";


function Dashboard() {

  const { user, token } = useAuth();
  const { showToast } = useToast();


  const [urls, setUrls] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");


  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedShortCode, setSelectedShortCode] = useState(null);



  const fetchUrls = useCallback(async () => {

    try {

      setLoading(true);


      const data = await getMyUrls(
        token,
        search
      );


      setUrls(data.urls);


    } catch (error) {

      console.error(
        "Failed to fetch URLs:",
        error
      );


      showToast(
        "Failed to load links.",
        "error"
      );


    } finally {

      setLoading(false);

    }

  }, [search, showToast, token]);




  const handleDelete = (shortCode) => {

    setSelectedShortCode(shortCode);

    setShowDeleteModal(true);

  };





  const confirmDelete = async () => {

    try {


      await deleteShortUrl(
        selectedShortCode,
        token
      );


      await fetchUrls();


      showToast(
        "URL deleted successfully"
      );


    } catch (error) {


      console.error(
        "Failed to delete URL:",
        error
      );


      showToast(
        "Failed to delete URL.",
        "error"
      );


    } finally {


      setShowDeleteModal(false);

      setSelectedShortCode(null);


    }

  };





  useEffect(() => {

    fetchUrls();

  }, [fetchUrls]);





  return (

    <DashboardLayout>

      <div className="space-y-8">



        {/* Welcome Section */}


        <div
          className="
            rounded-3xl
            border
            border-[#E6E3DB]
            bg-[#FAFAF8]
            p-8
          "
        >


          <h1
            className="
              text-3xl
              font-bold
              text-[#22262A]
            "
          >

            Welcome back, {user?.username} 👋

          </h1>



          <p
            className="
              mt-2
              text-[#6F757B]
            "
          >

            Manage, shorten and track all your links from one place.

          </p>




          <div
            className="
              mt-8
              grid
              gap-6
              md:grid-cols-2
            "
          >


            <div
              className="
                rounded-2xl
                border
                border-[#E6E3DB]
                bg-white
                p-5
              "
            >

              <p
                className="
                  text-sm
                  text-[#6F757B]
                "
              >
                Email
              </p>


              <p
                className="
                  mt-2
                  font-medium
                  text-[#22262A]
                "
              >
                {user?.email}
              </p>


            </div>




            <div
              className="
                rounded-2xl
                border
                border-[#E6E3DB]
                bg-white
                p-5
              "
            >

              <p
                className="
                  text-sm
                  text-[#6F757B]
                "
              >
                User ID
              </p>


              <p
                className="
                  mt-2
                  font-medium
                  text-[#22262A]
                "
              >
                {user?.id}
              </p>


            </div>


          </div>


        </div>





        {/* Metrics */}


        <MetricsCards
          urls={urls}
        />





        {/* Create Link */}


        <ShortenUrlForm
          onUrlCreated={fetchUrls}
        />





        {/* Search */}


        <div>


          <input

            type="text"

            placeholder="Search links..."

            value={search}

            onChange={(event) =>
              setSearch(event.target.value)
            }


            className="
              w-full
              rounded-2xl
              border
              border-[#E6E3DB]
              bg-white
              px-5
              py-4
              text-[#22262A]
              placeholder:text-[#9AA0A6]
              outline-none
              transition
              focus:border-[#A5CF83]
              focus:ring-2
              focus:ring-[#D8E9C8]
            "

          />


        </div>





        {/* URL List */}


        <UrlList

          urls={urls}

          loading={loading}

          onDelete={handleDelete}

        />





        {/* Delete Modal */}


        <DeleteModal

          isOpen={showDeleteModal}

          onClose={() => {

            setShowDeleteModal(false);

            setSelectedShortCode(null);

          }}

          onConfirm={confirmDelete}

        />



      </div>


    </DashboardLayout>

  );

}


export default Dashboard;
