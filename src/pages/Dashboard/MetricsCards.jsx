function MetricsCards({ urls }) {

  const totalLinks = urls.length;


  const totalClicks = urls.reduce(
    (sum, url) => sum + url.clicks,
    0
  );


  const activeLinks = urls.filter((url) => {

    if (!url.expires_at) {
      return true;
    }

    return new Date(url.expires_at) > new Date();

  }).length;



  const cards = [
    {
      title: "Total Links",
      value: totalLinks,
      description: "Links created",
      icon: "🔗",
    },
    {
      title: "Total Clicks",
      value: totalClicks,
      description: "Total visits",
      icon: "📈",
    },
    {
      title: "Active Links",
      value: activeLinks,
      description: "Currently available",
      icon: "✅",
    },
  ];



  return (

    <div
      className="
        grid
        gap-6
        md:grid-cols-3
      "
    >

      {cards.map((card) => (

        <div
          key={card.title}
          className="
            group
            rounded-3xl
            border
            border-[#E6E3DB]
            bg-[#FAFAF8]
            p-6
            transition
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          {/* Icon */}

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#EAF5DD]
              text-2xl
            "
          >
            {card.icon}
          </div>



          {/* Content */}

          <div className="mt-6">

            <p
              className="
                text-sm
                font-medium
                text-[#6F757B]
              "
            >
              {card.title}
            </p>


            <h3
              className="
                mt-3
                text-4xl
                font-bold
                text-[#22262A]
              "
            >
              {card.value}
            </h3>


            <p
              className="
                mt-2
                text-sm
                text-[#9AA0A6]
              "
            >
              {card.description}
            </p>


          </div>


        </div>

      ))}


    </div>

  );
}


export default MetricsCards;