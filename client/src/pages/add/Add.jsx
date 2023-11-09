import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  // single file
  const [singleFile, setSingleFile] = useState(undefined);
  // multiple files
  const [files, setFiles] = useState([]);
  // track uploading state, when we startin uploading it is true
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    // after adding, made input string to an empty string
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      // because we need multiple async functions
      const images = await Promise.all(
        // cannot use map function to FileList, it must be js
        // basically, for each file we are going to get a url, promise is take those
        //urls and make an array
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      // { cover:cover, images:images }
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs");
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="cat_main">Main Category</label>
            <select name="cat_main" id="cat_main" onChange={handleChange}>
              <option value="awrudu">Awrudu Foods (අවුරුදු ආහාර)</option>
              <option value="general">General Foods (සාමාන්‍ය ආහාර)</option>
              <option value="rice">Local Rice (දේශීය සහල්)</option>
              <option value="spices">Spices (දේශීය කුළුබඩු)</option>
              <option value="curry">Local Curry (දේශීය ව්‍යංජන)</option>
              <option value="drinks">Local Drinks (දේශීය පාන)</option>
              <option value="sweets">Local Sweets (දේශීය රසකැවිලි)</option>
            </select>
            <label htmlFor="cat">Sub Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="kewm">Kewm (කැවුම්)</option>
              <option value="kokis">Kokis (කොකිස්)</option>
              <option value="kiribath">Kiribath (කිරිබත්)</option>
              <option value="aluwa">Aluwaa (අලුවා)</option>
              <option value="asmi">Aasmi (ආස්මි)</option>
              <option value="awrudu_other">awrudu_other</option>
              <option value="dodol">dodol (දොදොල්)</option>
              <option value="boondi">buundi (බූන්දි)</option>
              <option value="masket">masket (මස්කට්)</option>
              <option value="kiritofee">kiritoffee (කිරිටොෆී)</option>
              <option value="sweet_other">rasakewili_other (වෙනත් රසකැවිලි)</option>
              <option value="suwandel">suwandel (සුවදැල්)</option>
              <option value="heenati">heenati (හීනටි)</option>
              <option value="maa-wee">Maa-Wee (මා-වී)</option>
              <option value="kuruluthuda">Kuruluthuda (කුරුළුතුඩා)</option>
              <option value="rice_other">
                local_rice_other (දේශීය වෙනත් සහල් වර්ග)
              </option>
              <option value="hathmaaluwa">hathmaaluwa (හත්මාලුව)</option>
              <option value="achcharu">achcharu (අච්චාරු)</option>
              <option value="curry_other">
                local_curry_other (දේශීය වෙනත් ව්‍යංජන)
              </option>
              <option value="kenda">kenda (කැද වර්ග)</option>
              <option value="koopi">koopi (කෝපි)</option>
              <option value="tea">tea (තේ)</option>
              <option value="drinks_other">drinks_other (වෙනත් පාන වර්ග)</option>
              <option value="rotee">rotee (‍රොටී)</option>
              <option value="pittu">pittu (පිට්ටු)</option>
              <option value="idi_appa">idi appa (ඉදි ආප්ප)</option>
              <option value="aappa">aappa (ආප්ප)</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <br />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="phone">Phone Number (10 digits):</label>
            <input
              id="phone"
              type="number"
              name="phone"
              maxLength="10"
              placeholder="0758511300"
              onChange={handleChange}
              required
            ></input>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Short Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. Delicious kiribath"
              onChange={handleChange}
            />
            <label htmlFor="">Delevarable area and minimum order details</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="Around colombo district only"
              cols="30"
              rows="5"
            ></textarea>
            <label htmlFor="">
              Delivery Time (e.g. 3 days for minimum order)
            </label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Free Items</label>
            <input
              type="number"
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Special attributes</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. Superb taste" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    className="close_main"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <img src="./img/close.png" className="close" alt="" />
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Price for minimum order</label>
            <input type="number" onChange={handleChange} name="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
