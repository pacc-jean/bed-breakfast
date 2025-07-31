import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ExploreHeroCarousel from "../components/explore/ExploreHeroCarousel";
import ShowCase from "../components/explore/ShowCase";

function ExplorePage() {
  const location = useLocation();

  useEffect(() => {
    // This will always trigger when ExplorePage mounts OR if the same route is hit again
    window.scrollTo({ top: 0, behavior: "auto" });

    // If you want to force state resets in ShowCase or other stuff, dispatch a signal or reset context here
  }, [location.key]);

  return (
    <main className="w-full min-h-screen">
      <ExploreHeroCarousel />
      <ShowCase />
    </main>
  );
}

export default ExplorePage;
