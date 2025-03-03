import Card from "../components/card";

export default function hinkelpad() {
    return (
      <div className="h-full gap-5 mr-3 mt-3 grid grid-rows-2 grid-cols-3">
        <div>
          <Card title="Stap 1: CV Maken" text=""></Card>
        </div>
        <div>
          <Card title="Stap 2: Solliciteren + Motivatiebrief" text=""></Card>
        </div>
        <div>
          <Card title="Stap 3: Intakegesprek" text=""></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
      </div>
    )
  }