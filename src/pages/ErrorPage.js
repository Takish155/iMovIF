import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main>
      <article className="mx-auto w-11/12 h-11/12 flex flex-col justify-center items-center mt-20">
        <h2 className="text-9xl font-bold uppercase">404</h2>
        <h3 className="text-4xl font-bold mb-5">Page not found</h3>
        <p className="text-2xl w-6/12 mb-10">
          Page that your trying to access doesn't exist. Please verify if the
          link is correct or try starting back to our home page
        </p>
        <Button variant="contained" onClick={() => navigate("/")}>
          Return to Home Page
        </Button>
      </article>
    </main>
  );
}
