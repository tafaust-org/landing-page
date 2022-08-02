import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Product"
    description={"BuildinX thrives to become the markt leader in the handling of component-oriented processes, data and information. Our platform integrates every step of the entire value chain and lifecycle of a component."}
  >
    <VerticalFeatureRow
      title="Auto-ID"
      description="Components are assigned a marker with an unique ID which is auto-generated by the platform and can be attached to the component on the construction site."
      image="/assets/images/feature.svg"
      imageAlt="Auto-ID"
    />
    <VerticalFeatureRow
      title="Building Information Modelling (BIM)"
      description="We leverage the current and future-proof standard BIM which aims to digitize the construction site and create digital twins of objects and resources."
      image="/assets/images/feature2.svg"
      imageAlt="BIM"
      reverse
    />
    <VerticalFeatureRow
      title="Lean"
      description="User-centric implementation yields overall lean processes."
      image="/assets/images/feature.svg"
      imageAlt="Lean"
    />
    <VerticalFeatureRow
      title="Lifecycle"
      description="Project-agnostic lifecycle management of components."
      image="/assets/images/feature2.svg"
      imageAlt="Lifecycle"
      reverse
    />
    <VerticalFeatureRow
      title="Logistics"
      description="Digital component-twins aid to identify and solve logistic gaps."
      image="/assets/images/feature.svg"
      imageAlt="Logistics"
    />
    <VerticalFeatureRow
      title="Tracking"
      description="Near-time component state information on demand."
      image="/assets/images/feature2.svg"
      imageAlt="Tracking"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
