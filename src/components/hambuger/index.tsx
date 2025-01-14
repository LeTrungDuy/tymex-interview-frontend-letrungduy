import './index.css';

interface IHambuger {
  active?: boolean;
  onClick?: () => void;
}

const Hambuger = ({ active, onClick }: IHambuger) => {
  return (
    <div className="hambuger" onClick={onClick}>
      <svg
        width="45"
        height="45"
        viewBox="0 0 32 42"
        xmlns="http://www.w3.org/2000/svg"
        className={active ? 'active' : ''}
      >
        <g transform="matrix(1,0,0,1,-389.5,-264.004)">
          <g id="arrow_left2">
            <g transform="matrix(1,0,0,1,0,5)">
              <path
                id="top"
                d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
              />
            </g>
            <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
              <path
                id="bottom"
                d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
              />
            </g>
            <path id="middle" d="M390,284.967L420,284.967" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Hambuger;
