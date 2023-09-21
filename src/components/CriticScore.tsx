import { Badge } from "./ui/badge";


interface Props{
    score:number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 7.5 ? "bg-green-500" : score > 6.0 ? "bg-yellow-500" : "";
    return (
        <Badge className={`${color}`}>
          {score}
        </Badge>
      );
    };
  
  export default CriticScore;