import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { AuthService } from "../../modules/auth/auth.service";

const HomePageAds = () => {
  const [rows, setRows] = useState([]);

  const [data, setData] = useState({
    row: null,
    desktop: "",
    mobile: "",
    desktopSize: "",
    mobileSize: "",
  });
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(null);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (edit && index != null) {
      rows[index][e.target.name] = e.target.value;
    }
  };

  const onClick = () => {
    let array = [];
    if (edit) {
      array = rows;
    } else {
      array = rows;
      array.push(data);
    }

    AuthService.addHomePageAds(array)
      .then((res) => {
        if (res.data.statusCode == 200) {
          swal({ title: "Request Successfull!", timer: 2500, icon: "success" });
        } else {
          swal({ title: "Something went wrong!", timer: 2500, icon: "error" });
        }
      })
      .catch((e) => console.log(e));

    setData({
      row: null,
      desktop: "",
      mobile: "",
      desktopSize: "",
      mobileSize: "",
    });
  };

  const onClickUpdate = (data, index) => {
    setEdit(true);
    setIndex(index);
    setData({ ...data });
  };

  const onClickRemove = (data, index) => {
    let array = rows.filter((f) => data.row != f.row);
    setRows(array);
    AuthService.addHomePageAds(array)
      .then((res) => {
        if (res.data.statusCode == 200) {
          swal({ title: "Remove Successfull!", timer: 2500, icon: "success" });
        } else {
          swal({ title: "Something went wrong!", timer: 2500, icon: "error" });
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    AuthService.getHomePageAdsDetail()
      .then((res) => {
        if (res.data.responseCode == 1) {
          setRows(res.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 bord pt-2">
          <div className="row">
            <div className="col-12">
              <div className="title mb-5">
                {" "}
                <h3>Home page ads</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Enter row</label>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={data.row}
                  onChange={onChange}
                  name="row"
                  placeholder="Enter row"
                />
                <small className="form-text text-muted">
                  Row after which ad will display
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>AdUnit desktop</label>
                <input
                  type="text"
                  className="form-control"
                  value={data.desktop}
                  onChange={onChange}
                  name="desktop"
                  aria-describedby="emailHelp"
                  placeholder="Enter AdUnit"
                />
                <small className="form-text text-muted">
                  Ad unit for desktop view
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>AdUnit mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="onVideo"
                  aria-describedby="emailHelp"
                  value={data.mobile}
                  onChange={onChange}
                  name="mobile"
                  placeholder="Enter AdUnit"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Ad unit for mobile view
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Desktop ad size</label>
                <input
                  type="text"
                  value={data.desktopSize}
                  name="desktopSize"
                  onChange={onChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Size"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Ad size for desktop e.g: 720,320
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Mobile ad size</label>
                <input
                  type="text"
                  className="form-control"
                  value={data.mobileSize}
                  name="mobileSize"
                  onChange={onChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter Size"
                />
                <small className="form-text text-muted">
                  Ad size for desktop e.g: 320,100
                </small>
              </div>
            </div>
            <div className="col-12 col-xm-12">
              <div className="form-group">
                <button className="btn btn-success" onClick={onClick}>
                  {edit ? "UPDATE" : "ADD"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="row mt-5">
        <div className="table-responsive">
          <table className="table table-striped table-dark tm_btng_tble">
            <thead className="thead-light">
              <tr>
                <th>Row</th>
                <th>AdUnit Desktop</th>
                <th>AdUnit Mobile</th>
                <th>Desktop Ad Size</th>
                <th>Mobile Ad Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.length
                ? rows.map((m, i) => (
                  <tr key={i}>
                    <td>{m.row}</td>
                    <td>{m.desktop.slice(0, 25)}</td>
                    <td>{m.mobile.slice(0, 25)}</td>
                    <td>{m.desktopSize.slice(0, 25)}</td>
                    <td>{m.mobileSize.slice(0, 25)}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => onClickUpdate(m, i)}
                      >
                        Update
                        </button>
                      <button
                        className="btn btn-red"
                        onClick={() => onClickRemove(m, i)}
                      >
                        Remove
                        </button>
                    </td>
                  </tr>
                ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}

export default HomePageAds;
