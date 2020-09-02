import React, {useState, useEffect} from "react";
import "./style.css";

export function Grid(props) {
  const [getPictures, setGetPictures] = useState([]);

  useEffect(() => {
    fetch("https://drive.google.com/uc?export=view&id=1BtyBaDynFn4Ss46AkxgA2vOWa9XhE43X")
    .then(res => res.json())
    .then(result => console.log(result))
  })

  return (
    <div className="grid-row">
      <div className="grid-column">
        <img src="https://drive.google.com/uc?export=view&id=15MZVOV-DnMZ5oRpsOxTcor_rVUV-f5G9" alt="img1"/>
        <img src="https://drive.google.com/uc?export=view&id=1W-Qn5m7uWXORFczZMhdO2H_6vAXxR4k9" alt="img2"/>
        <img src="https://drive.google.com/uc?export=view&id=1UKD-79fMgMcxz83Vvg4jaWSLOeL5z0PQ" alt="img3"/>
        <img src="https://drive.google.com/uc?export=view&id=150Ju1spRPBejnxyhNtU8q48uT3PFU-So" alt="img3"/>
        <img src="https://drive.google.com/uc?export=view&id=18nArgJbaNeSSFHEUSK7TkDaLp_01N4f5" alt="img4"/>
        <img src="https://drive.google.com/uc?export=view&id=1E5fIHFWozAVcVi_8YbKqCUL5YHp68L_2" alt="img4"/>
        <img src="https://drive.google.com/uc?export=view&id=1awSHdY4jVEsEC7PsQBMTeDa-fsEbUqvI" alt="img5"/>
        <img src="https://drive.google.com/uc?export=view&id=14qEaWO4NmxB7IK2AkQvywjDxfTFqGy_w" alt="img6"/>
        <img src="https://drive.google.com/uc?export=view&id=1cGy8ABdTTD5a0itR8ZOjZ_XkScwbxPVk" alt="img7"/>
      </div>
      <div className="grid-column">
      <img src="https://drive.google.com/uc?export=view&id=1wSOZTXkFNmaN57uPMGo3sFlBcALjaG1A" alt="img1"/>
        <img src="https://drive.google.com/uc?export=view&id=1hNC3d1yJdan-SZOuXuzs4CCzt-JnPAdk" alt="img2"/>
        <img src="https://drive.google.com/uc?export=view&id=1ds7SpVhoOY7ekwqNAf7N4Ppr088ooG0r" alt="img2"/>
        <img src="https://drive.google.com/uc?export=view&id=1_z2_4Z_ey0mAb5fFlOnD5iyQQodEs2cG" alt="img3"/>
        <img src="https://drive.google.com/uc?export=view&id=1PCAkNCcuYe36e_0DLkk5wCoIM4VdlGRp" alt="img4"/>
        <img src="https://drive.google.com/uc?export=view&id=1dnyGboe8tNruC4Hqee2qcYA4fJIj-cPF" alt="img5"/>
        <img src="https://drive.google.com/uc?export=view&id=1ccxpGYV5XtfrTZEBYRTA_bHE0MY4Sa9J" alt="img6"/>
        <img src="https://drive.google.com/uc?export=view&id=1dah9WJi63Wj7VEq9Qpu-6fO3TBbWkSMt" alt="img7"/>
        <img src="https://drive.google.com/uc?export=view&id=1u83bsRgu9A99h43KyvVkHIPEW7SUMlHS" alt="img7"/>
      </div>
      <div className="grid-column">
      <img src="https://drive.google.com/uc?export=view&id=1W8xm3ZtRFVV8VPfB-k0d_G_6zJTaLegd" alt="img1"/>
        <img src="https://drive.google.com/uc?export=view&id=1xen_I1EA6HwVm3NTUPRJUUWz78xa81cw" alt="img2"/>
        <img src="https://drive.google.com/uc?export=view&id=1R5zILyT7uvM0JhjKYMgE2HmVvbq5_Zqj" alt="img3"/>
        <img src="https://drive.google.com/uc?export=view&id=1PtLHuV9HxVWTYGVprQDOEISAV8FUAT7L" alt="img4"/>
        <img src="https://drive.google.com/uc?export=view&id=1_gyh3gMj1_O7L055y3UTy55o6KZfDnsE" alt="img5"/>
        <img src="https://drive.google.com/uc?export=view&id=15TsHVwQUYYF7iE0ShXEUykRk4MOrEVwH" alt="img6"/>
        <img src="https://drive.google.com/uc?export=view&id=1hn-n3IOvSQ0GWX9wmCLd9sQAYvuMWCBM" alt="img7"/>
        <img src="https://drive.google.com/uc?export=view&id=1ASq2hQFMpofwGTWuGhR_6Zas12310BIG" alt="img7"/>
        <img src="https://drive.google.com/uc?export=view&id=1_l6G6DTOVE-z3xIVsKzQ4DTxzp6nVKbE" alt="img7"/>
      </div>
      <div className="grid-column">
      <img src="https://drive.google.com/uc?export=view&id=1sHG_-q_Vl6PUOq3emQJQ90tEpJ_jIJxL" alt="img1"/>
        <img src="https://drive.google.com/uc?export=view&id=1kslzXnQ3mx4m2krYfN9cyvnkfeVEpL2S" alt="img3"/>
        <img src="https://drive.google.com/uc?export=view&id=1MW3KLHaotsWmsZDKzTIfw-reyVZr36yv" alt="img2"/>
        <img src="https://drive.google.com/uc?export=view&id=1jhrU-pJcS7MCMSpsqiIFec43xqTG_kAX" alt="img2"/>
        <img src="https://drive.google.com/uc?export=view&id=10PiCJ2kb_hpC-JH1cfodTgjL3aJ3hOdi" alt="img4"/>
        <img src="https://drive.google.com/uc?export=view&id=14f4dbu1XvhxYJPq82L1FddvqnHyGy9Zg" alt="img5"/>
        <img src="https://drive.google.com/uc?export=view&id=17uk23XjTdQ1Lanx0HUVyRGRtjKwcUQZH" alt="img6"/>
        <img src="https://drive.google.com/uc?export=view&id=1X2AWn0BRbkTS4E_jeo7g487SdjIlmlqQ" alt="img6"/>
        <img src="https://drive.google.com/uc?export=view&id=1baE0P0x2h1PXFxUxS2Zz8Vsh9ThW6vrZ" alt="img7"/>
        <img src="https://drive.google.com/uc?export=view&id=1khg_gbfUeJfG3txAAKySY1q8h6h4kiD1" alt="img7"/>
      </div>
    </div>
  );
}

