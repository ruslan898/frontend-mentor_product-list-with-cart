import './carbonNeutralInfo.scss';

import carbonNeutralIcon from '/src/assets/images/icon-carbon-neutral.svg';

export default function CarbonNeutralInfo() {
  return (
    <div className="carbon-neutral-info">
      <img src={carbonNeutralIcon} alt="An icon of a green tree" />
      <p className="carbon-neutral-info-text">
        This is a <span>carbon-neutral</span> delivery
      </p>
    </div>
  );
}
