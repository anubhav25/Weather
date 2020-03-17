import React from "react";
import Navbar from "./NavBar";
import countries from "../assets/data";
import Card from "./Card";
import Sidebar from "./Sidebar";
import loadingImg from "../assets/loading.gif";
const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=1e329c143266cb535e76449e33a8d2a3&units=metric&q=";

function Main() {
  let [selected, updateSelected] = React.useState("");
  let [loading, updateloading] = React.useState(false);
  let [data, updatedata] = React.useState([]);
  let [filteredData, updatefilteredData] = React.useState([]);
  let [query, updatequery] = React.useState("");
  let setquery = e => {
    let q = e.target.value;
    updatequery(q);
    if (data) {
      updatefilteredData(
        data.filter(x => x.name.toLowerCase().includes(q.toLowerCase()))
      );
    }
  };
  let changeCountry = c => e => {
    e.preventDefault();
    updateSelected(c);
  };
  React.useEffect(() => {
    (async () => {
      if (selected && countries[selected]) {
        updateloading(true);
        let arr = [];
        for (let i of countries[selected]) {
          try {
            let a = await fetch(url + i);
            a = await a.json();
            a.name = i;
            arr.push(a);
          } catch {
            console.log("err", i);
          }
        }
        console.log("data loaded");
        console.log(arr);
        updatedata(arr);
        updatequery("");
        updatefilteredData(arr);
        updateloading(false);
      } else {
        updatedata([]);
        updatequery("");
        updatefilteredData([]);
        updateSelected("");
      }
    })();
  }, [selected]);

  return (
    <>
      <Navbar setquery={setquery} query={query} />
      <div className="h-100 d-flex">
        <Sidebar
          list={Object.keys(countries)}
          changeCountry={changeCountry}
          selected={selected}
        />
        <section className="container-fluid maincontainer">
          {loading ? (
            <div className="loader">
              <img src={loadingImg} alt="Loading" />
            </div>
          ) : (
            <div className="row">
              {filteredData &&
                filteredData.length > 0 &&
                filteredData.map(
                  x =>
                    x.main.temp &&
                    x.name && (
                      <span
                        key={x.id}
                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                      >
                        <Card name={x.name} temp={x.main.temp} />
                      </span>
                    )
                )}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Main;
