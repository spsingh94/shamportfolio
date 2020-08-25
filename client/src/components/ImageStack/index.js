import React from "react";
import "./style.css";

export function MCLAStack() {
  return (
    <div class="image-stack">
      <div class="image-stack__item image-stack__item--top">
        <img
          className="stack-image"
          src="https://drive.google.com/uc?export=view&id=1pAdO_rLxBdq3etw5N_G1BrG7xnxzLPOH"
          style={{ height: "450px" }}
          alt="A portrait of a girl under hanging flowers."
        />
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img
          className="stack-image"
          style={{ height: "400px", width: "300px" }}
          src="https://drive.google.com/uc?export=view&id=1QpLWkhVUzz0co64LZ1QOTvta5FTX0Lgo"
          alt="pic2"
        />
      </div>
    </div>
  );
}

export function FitStack() {
  return (
    <div class="image-stack">
      <div class="image-stack__item image-stack__item--top">
        <img
          className="stack-image"
          src="https://drive.google.com/uc?export=view&id=1aS0uqwRiQvnKwRSeSAKu9XAGtbQnaEqh"
          alt="A portrait of a girl under hanging flowers."
        />
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img
          className="stack-image"
          src="https://drive.google.com/uc?export=view&id=19DqlzSkk2mmmkIM91EH4DKr88NkJBDZD"
          alt=""
        />
      </div>
    </div>
  );
}

export function BooksStack() {
  return (
    <div class="image-stack">
      <div class="image-stack__item image-stack__item--top">
        <img
        style={{ height: "450px", width:"265px"}}
          src="https://drive.google.com/uc?export=view&id=1I2F-cFb6RgDx2EaxC2oq5NVCyWbE4P_d"
          className="stack-image"
          alt="A portrait of a girl under hanging flowers."
          />
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img
        style={{ height: "400px", width:"300px" }}
          className="stack-image"
          src="https://drive.google.com/uc?export=view&id=1_tB_fEr7MrfTx99d_zsO655HmT3QosDF"
          alt=""
        />
      </div>
    </div>
  );
}
