import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useToast } from "../../context/ToastContext";


function UrlList({ urls, loading, onDelete }) {

  const [copiedCode, setCopiedCode] = useState(null);

  const { showToast } = useToast();

  const navigate = useNavigate();



  const handleCopy = async (shortCode) => {

    try {

      const shortUrl = `${window.location.origin}/${shortCode}`;


      await navigator.clipboard.writeText(shortUrl);


      setCopiedCode(shortCode);


      showToast(
        "Link copied successfully"
      );


      setTimeout(() => {

        setCopiedCode(null);

      }, 2000);


    } catch (error) {

      console.error(
        "Failed to copy:",
        error
      );


      showToast(
        "Failed to copy link.",
        "error"
      );

    }

  };




  const handleAnalytics = (shortCode) => {

    navigate(`/stats/${shortCode}`);

  };





  if (loading) {

    return (

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

        Loading your links...

      </div>

    );

  }





  if (urls.length === 0) {

    return (

      <div
        className="
          rounded-3xl
          border
          border-[#E6E3DB]
          bg-[#FAFAF8]
          p-8
        "
      >

        <h3
          className="
            text-xl
            font-semibold
            text-[#22262A]
          "
        >

          No links yet

        </h3>


        <p
          className="
            mt-2
            text-[#6F757B]
          "
        >

          Create your first shortened URL above.

        </p>


      </div>

    );

  }





  return (

    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-[#E6E3DB]
        bg-[#FAFAF8]
      "
    >


      {/* Header */}


      <div
        className="
          border-b
          border-[#E6E3DB]
          p-8
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            text-[#22262A]
          "
        >

          My Links

        </h2>


        <p
          className="
            mt-2
            text-[#6F757B]
          "
        >

          Manage and track all your shortened URLs.

        </p>


      </div>





      {/* Table */}


      <div className="overflow-x-auto">


        <table
          className="
            w-full
            text-left
          "
        >


          <thead>

            <tr
              className="
                border-b
                border-[#E6E3DB]
                text-sm
                text-[#6F757B]
              "
            >

              <th className="px-8 py-4 font-medium">
                Original URL
              </th>


              <th className="px-8 py-4 font-medium">
                Short Link
              </th>


              <th className="px-8 py-4 font-medium">
                Clicks
              </th>


              <th className="px-8 py-4 font-medium">
                Expires
              </th>


              <th className="px-8 py-4 font-medium">
                Actions
              </th>


            </tr>

          </thead>





          <tbody>


            {urls.map((url) => (


              <tr
                key={url.short_code}
                className="
                  border-b
                  border-[#E6E3DB]
                  last:border-none
                  hover:bg-[#F7F5F0]
                "
              >



                <td
                  className="
                    max-w-xs
                    truncate
                    px-8
                    py-5
                    text-[#22262A]
                  "
                >

                  {url.original_url}

                </td>





                <td
                  className="
                    px-8
                    py-5
                  "
                >

                  <a
                    href={`${window.location.origin}/${url.short_code}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      font-medium
                      text-[#639922]
                      hover:underline
                    "
                  >

                    /{url.short_code}

                  </a>

                </td>





                <td
                  className="
                    px-8
                    py-5
                    text-[#22262A]
                  "
                >

                  {url.clicks}

                </td>





                <td
                  className="
                    px-8
                    py-5
                    text-[#6F757B]
                  "
                >

                  {url.expires_at
                    ? new Date(
                        url.expires_at
                      ).toLocaleDateString()
                    : "Never"
                  }

                </td>





                <td
                  className="
                    px-8
                    py-5
                  "
                >


                  <div className="flex flex-wrap gap-3">



                    {/* Copy */}


                    <button
                      onClick={() =>
                        handleCopy(url.short_code)
                      }
                      className="
                        rounded-lg
                        border
                        border-[#E6E3DB]
                        bg-white
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-[#22262A]
                        transition
                        hover:bg-[#F7F5F0]
                      "
                    >

                      {copiedCode === url.short_code
                        ? "Copied ✓"
                        : "Copy"
                      }

                    </button>





                    {/* Analytics */}


                    <button
                      onClick={() =>
                        handleAnalytics(
                          url.short_code
                        )
                      }
                      className="
                        rounded-lg
                        bg-[#A5CF83]
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-[#173404]
                        transition
                        hover:bg-[#96C873]
                      "
                    >

                      Analytics

                    </button>





                    {/* Delete */}


                    <button
                      onClick={() =>
                        onDelete(
                          url.short_code
                        )
                      }
                      className="
                        rounded-lg
                        bg-red-50
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-red-600
                        transition
                        hover:bg-red-100
                      "
                    >

                      Delete

                    </button>



                  </div>


                </td>


              </tr>


            ))}


          </tbody>


        </table>


      </div>


    </div>

  );

}


export default UrlList;