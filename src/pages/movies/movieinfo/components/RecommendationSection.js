import Section from "../../../../components/Section";
import { horizontalStyling } from "../../../../styles/styles";

export default function RecommendationSection({ recommendationData }) {
  return (
    <section className="mt-24">
      {recommendationData.length !== 0 ? (
        <>
          <h3 className="text-2xl font-bold">Recommendation</h3>
          <div style={horizontalStyling}>
            <Section dataName={recommendationData} />
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
