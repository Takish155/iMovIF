import { useMediaQuery } from "@mui/material";

export default function TrailerSection({
  trailer,
  trailerData,
  movieData,
  currentTrailer,
  setCurrentTrailer,
}) {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      {trailer.length > 0 || trailerData.length > 0 ? (
        <>
          <iframe
            title={`Movie trailer of ${movieData.title}`}
            className="mb-5"
            style={{
              width: "100%",
              height: matches ? "20%" : "35%",
              minHeight: "15rem",
            }}
            src={`https://www.youtube.com/embed/${
              currentTrailer === "" ? trailer : currentTrailer
            }`}
            allowFullScreen
          ></iframe>
          <section>
            <h3 className="mb-3 text-2xl">Trailers</h3>
            <div className="flex gap-5 mb-10 overflow-scroll flex-nowrap pb-5">
              {trailerData.map((element) => {
                return (
                  <img
                    src={`https://img.youtube.com/vi/${element.key}/maxresdefault.jpg`}
                    alt={`Thumbnail of the trailer of ${element.title}`}
                    style={{ width: matches ? "50%" : "25%" }}
                    className={
                      (trailer === element.key && currentTrailer === "") ||
                      currentTrailer === element.key
                        ? "selected"
                        : "trailer-thumbnail"
                    }
                    onClick={() => setCurrentTrailer(element.key)}
                  />
                );
              })}
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
}
