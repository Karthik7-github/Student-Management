import React from 'react'

const teacherres = () => {
   return (
    <div>
      <div className="stuform teach">
        <h1>Lecturer (Adimin) Registraion Form</h1>
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
}

export default teacherres