import React from "react";

const studentres = () => {
  return (
    <div>
      <div className="stuform">
        <h1>Student Registraion Form</h1>
        <div className="stubox">
          <form action="">
            <div className="forml1">
            <div class="inputBox">
              <input required="" type="text" placeholder="Write here..." required/>
              <span>Name :</span>
            </div>
             <div class="inputBox">
              <input required="" type="text" placeholder="Write here..." required/>
              <span>Age :</span>
            </div>
             <div class="inputBox">
              <input required="" type="text" placeholder="Write here..." required/>
              <span>DOB :</span>
            </div>
          </div>
          <div className="forml1">
            <div class="inputBox">
              <input required="" type="text" placeholder="Write here..." required/>
              <span>Subject :</span>
            </div>
             <div class="inputBox">
              <input required="" type="text" placeholder="Write here as Student ..." required/>
              <span>Role :</span>
            </div>
             <div class="inputBox">
              <input required="" type="text" placeholder="Write here..." required/>
              <span>Email :</span>
            </div>
          </div>
          <div className="forml1">
             <div class="inputBox">
              <input required="" type="password" placeholder="Write here..." required/>
              <span>Password :</span>
            </div>
            <button>
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text" type="submit"> Submit
              </span>
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default studentres;
