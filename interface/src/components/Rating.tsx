import StarIcon from './StarIcon'

interface RatingProps {
    score: number,
    id: string
}
const Rating = (props: RatingProps) => {
    const getColoredPart = (score: number, offset: number): number => {
        const diff = score - offset;
        return Math.max(0, Math.min(diff * 100, 100));
    };
    
    const scaledScore = props.score * 5;

  return (
      <div className='d-flex'>
        <div className='d-flex align-items-center'>
          {[0, 1, 2, 3, 4].map((offset) => (
              <StarIcon
              key={offset}
              offset={offset}
              coloredPart={getColoredPart(scaledScore, offset)}
              id={props.id}  
              
              />
          ))}
        </div>    
        <div className='ms-2' style={{ fontFamily: 'Avenir Book', fontSize: "14px" }}>{Number(scaledScore).toFixed(1)}/5</div>

      </div>


  )
}

export default Rating;