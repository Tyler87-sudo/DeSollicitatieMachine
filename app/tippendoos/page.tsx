import Card from "../components/card"

export default function tippendoos() {
    return (
      <div className="grid grid-cols-3 gap-1" >
        <div className="mt-3">
        <Card text="Iemand anders het laten controleren (bij voorkeur bij iemand die iets weet over de desbetreffende onderwerpen)" title="Tip 1" className="ml-2 mr-5 mb-5 mt-1"></Card>
        <Card text="Probeer contacten te leggen door naar events te gaan in het onderwerp waar je interesse in hebt" title="Netwerken" className="ml-2 mr-5 mb-5 mt-5"></Card>
        <Card text="Verdiep je in het bedrijf" title="Tip 3" className="ml-2 mr-5 mb-5 mt-5"></Card>
        </div>
        <div className="mt-3">
        <Card text="Bereid je eigen verhaal goed voor" title="Tip 4" className="ml-2 mr-5 mb-5 mt-1"></Card>
        <Card text="Weet waar je goed in bent" title="Tip 5" className="ml-2 mr-5 mb-5 mt-5"></Card>
        <Card text="Kies goeie kleding voor bij het eerste gesprek" title="Tip 6" className="ml-2 mr-5 mb-5 mt-5"></Card>
        </div>
        <div className="mt-3"> 
        <Card text="Bereid je voor op op lastige vragen" title="Tip 7" className="ml-2 mr-5 mb-5 mt-1"></Card>
        <Card text="Stel zelf ook vragen" title="Tip 8" className="ml-2 mr-5 mb-5 mt-5"></Card>
        <Card text="Neem een goeie houding aan bij het sollicitatiegesprek" title="Tip 9" className="ml-2 mr-5 mb-5 mt-5"></Card>
        </div>
      </div>
    )
  }