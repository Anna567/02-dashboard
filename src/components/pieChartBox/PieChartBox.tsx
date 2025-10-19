import "./pieChartBox.scss";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088fe" },
  { name: "Desktop", value: 300, color: "#00c49f" },
  { name: "Laptop", value: 300, color: "#ffbb28" },
  { name: "Tablet", value: 200, color: "#ff8042" },
];

const PieChartBox = () => {

const bogusData = (data as unknown as number[])[0];
  console.log(bogusData.toFixed(2)); // Type Assertion. TypeError. ToFixed ist undefined

const bogus=const bogus = (data[0] as unknown as { label: string }).label.toLowerCase(); //Property "label" existiert nicht; Zugriff auf ein nichtexistierende Eigenschaft
  console.log('label:', bogus);  
  
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "6px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
