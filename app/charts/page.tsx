import Image from "next/image";
import Card from "../components/card";
import LineGraph from "../components/linegraph"

export default function charts() {
  
  return (
    
    <div className="h-full grid grid-rows-3 grid-cols-2">
        <Card className="row-start-2 ml-2 mr-5 mb-5 mt-1"></Card>
        <div className="self-center row-start-1 col-start-2 row-span-3">
          <LineGraph string={["Tip 1", "Tip 2", "Tip 3", "Tip 4", "Tip 5", "Tip 6", "Tip 7"]} variable={[5,5,10,15,20, 25, 30]}></LineGraph>
        </div>
        <Card className="ml-2 mr-5 mb-5 mt-1"></Card>
        <Card className="row-start-3 ml-2 mr-5 mb-5 mt-1 "></Card>
    </div>
  
  )
}