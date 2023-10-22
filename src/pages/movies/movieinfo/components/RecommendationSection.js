import Section from "../../../../components/Section";
import { horizontalStyling } from "../../../../styles/styles";

export default function RecommendationSection({ recommendationData }) {
  return (
    <section className="mt-24">
      <h3 className="text-2xl font-bold">Recommendation</h3>
      <div style={horizontalStyling}>
        {recommendationData.length !== 0 ? (
          <Section dataName={recommendationData} />
        ) : (
          <p className="my-5">No recommendation found at the moment</p>
        )}
      </div>
    </section>
  );
}
