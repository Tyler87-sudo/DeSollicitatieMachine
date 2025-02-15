import Card from "../components/card"

export default function tippendoos() {
    return (
      <div className="grid grid-cols-3 gap-1" >
        <div>
        <Card text="inhoud" title="Tip 1" className="ml-2 mr-5 mb-5 mt-1"></Card>
        <Card text="inhoud" title="Tip 2" className="ml-2 mr-5 mb-5 mt-5"></Card>
        <Card text="inhoud" title="Tip 3" className="ml-2 mr-5 mb-5 mt-5"></Card>
        </div>
        <div>
        <Card text="inhoud" title="Tip 4" className="ml-2 mr-5 mb-5 mt-1"></Card>
        <Card text="inhoud" title="Tip 5" className="ml-2 mr-5 mb-5 mt-5"></Card>
        <Card text="inhoud" title="Tip 6" className="ml-2 mr-5 mb-5 mt-5"></Card>
        </div>
        <div>
        <Card text="inhoud" title="Tip 7" className="ml-2 mr-5 mb-5 mt-1"></Card>
        <Card text="inhoud" title="Tip 8" className="ml-2 mr-5 mb-5 mt-5"></Card>
        <Card text="inhoud" title="Tip 9" className="ml-2 mr-5 mb-5 mt-5"></Card>
        </div>
      </div>
    )
  }