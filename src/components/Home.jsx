import "./Home.css";
import ListGroup from "react-bootstrap/ListGroup";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import {
  Search,
  HeartPulse,
  Trash,
  Clipboard2PulseFill,
  PencilSquare,
  Bandaid,
  FileEarmarkWordFill,
} from "react-bootstrap-icons";

export const Home = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [val, setVal] = useState("");
  const [search, setSearch] = useState("");
  // const [transferfer,settransferfer] = useState("")
  const [list, setList] = useState([]);
  const [prev, setPrev] = useState({});
  const [alpha, setAlpha] = useState("");

  data.sort((a, b) => a.title.localeCompare(b.title));
  // console.log(data);

  const transfer = (e) => {
    // event.preventDefault()
    //  console.log(e);
    const updateList = [];
    newData.forEach((ele) => {
      if (ele.id !== e.id) {
        updateList.push(ele);
      }
    });
    let medId = e.id;
    setData(updateList);
    setPrev({ ...prev, medId });
    setList([...list, e]);
  };

  const deletComp = (e) => {
    const newPrev = {};
    const newList = [];
    list.forEach((ele) => {
      if (e.id !== ele.id) {
        newPrev[ele.id] = true;
        newList.push(ele);
      }
    });
    setPrev(newPrev);
    setList(newList);
    const updateList = [];
    newData.forEach((ele) => {
      if (!prev[ele.id]) {
        updateList.push(ele);
      }
    });
    setData(updateList);
  };

  useEffect(() => {
    fetch("https://i2e-databasejson.herokuapp.com/medicine")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setNewData(res);
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="main">
        <div className="left">
          <h2>Medicines </h2>
          <div className="">
            <div className="input-group">
              <InputGroup className="mb-3 form-control">
                <FormControl
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for Medicines . . ."
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>

              <span className="input-group-btn"></span>
            </div>
            <h5>Filter By Categories :</h5>
            <div className="categoryButtons">
              <span>
                {" "}
                <Button
                  id="filter_btns"
                  title="All"
                  variant="light"
                  onClick={() => setVal("")}
                >
                  ALL
                </Button>
              </span>
              <span>
                <Button
                  id="filter_btns"
                  title="Syrup"
                  variant="light"
                  onClick={() => setVal("SYR")}
                >
                  SYP
                </Button>
              </span>
              <span>
                <Button
                  id="filter_btns"
                  title="Tablets"
                  variant="light"
                  onClick={() => setVal("TAB")}
                >
                  {" "}
                  TAB
                </Button>
              </span>
              <span>
                <Button
                  id="filter_btns"
                  title="Drops"
                  variant="light"
                  onClick={() => setVal("DRP")}
                >
                  DRP
                </Button>
              </span>
              <span>
                <Button
                  id="filter_btns"
                  title="Res"
                  variant="light"
                  onClick={() => setVal("RES")}
                >
                  RES
                </Button>
              </span>
              <span>
                <Button
                  id="filter_btns"
                  title="Powder"
                  variant="light"
                  onClick={() => setVal("POW")}
                >
                  {" "}
                  POW
                </Button>
              </span>
              <span>
                <Button
                  id="filter_btns"
                  title="Creams"
                  variant="light"
                  onClick={() => setVal("CRM")}
                >
                  CRM
                </Button>
              </span>
              <span>
                <Button
                  id="filter_btns"
                  title="Lotion"
                  variant="light"
                  onClick={() => setVal("LOT")}
                >
                  LOT
                </Button>
              </span>
              <span>
                <Button
                  id="filter_btns"
                  title="Gel"
                  variant="light"
                  onClick={() => setVal("GEL")}
                >
                  GEL
                </Button>
              </span>
            </div>
            <div className="left-1">
              <div className="map_data">
                {data
                  .filter((a) => {
                    if (a.category === val) {
                      return a.category === val;
                    } else if (val === "") {
                      return a;
                    }
                  })
                  .filter((a) => {
                    if (search === "") {
                      return a;
                    } else {
                      return a.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    }
                  })

                  // .filter((z) => {
                  //   if(true) {
                  //     return z.title[0] === alpha
                  //   } else {
                  //     return z.title
                  //   }
                    
                  // })

                  .map((e) => {
                    return (
                      <ListGroup as="ul" className="listGroup" key={e.id}>
                        <ListGroup.Item as="li">
                          <Button id="category_span">{e.category}</Button>
                          <span className="span_title">{e.title} </span>{" "}
                          <span>
                            <Button
                              onClick={() => {
                                transfer(e);
                              }}
                              variant="success"
                              className="button_add"
                            >
                              {" "}
                              <b>+</b>{" "}
                            </Button>
                          </span>
                        </ListGroup.Item>
                      </ListGroup>
                    );
                  })}
              </div>
              <div className="alphabets">
                <div>
                  <button onClick={() => setAlpha("A")}>A</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("B")}>B</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("C")}>C</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("D")}>D</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("E")}>E</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("F")}>F</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("G")}>G</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("H")}>H</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("I")}>I</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("J")}>J</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("K")}>K</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("L")}>L</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("M")}>M</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("N")}>N</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("O")}>O</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("P")}>P</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("Q")}>Q</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("R")}>R</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("S")}>S</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("T")}>T</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("U")}>U</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("V")}>V</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("W")}>W</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("X")}>X</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("Y")}>Y</button>
                </div>
                <div>
                  <button onClick={() => setAlpha("Z")}>Z</button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="right">
          <h2>Previews </h2>
          <div>
            <div>
              <h5>
                {" "}
                <HeartPulse /> Investigation
              </h5>
            </div>

            <div>
              {" "}
              <h5>
                <FileEarmarkWordFill /> Instructions
              </h5>
            </div>
            <div>
              <h5>
                {" "}
                <Bandaid /> Medicines
              </h5>
            </div>

            <div>
              {" "}
              {list.map((e) => {
                return (
                  <ListGroup as="ul" className="listGroup" key={e.id}>
                    <ListGroup.Item as="li">
                      <Button id="category_span">{e.category}</Button> {e.title}{" "}
                      <span>
                        <Button
                          onClick={() => {
                            deletComp(e);
                          }}
                          variant="success"
                          className="button_add btn btn-danger"
                        >
                          {" "}
                          <Trash />
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}{" "}
            </div>

            <div>
              <h5>
                {" "}
                <PencilSquare /> Diagnosis{" "}
              </h5>
            </div>
            <div>
              <h5>
                <Search /> Findings
              </h5>
            </div>
            <div>
              <h5>
                {" "}
                <Clipboard2PulseFill /> Symptoms
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
