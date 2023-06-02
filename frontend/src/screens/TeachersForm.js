import React from 'react'

const TeachersForm = () => {
  return (
    <div class="container">
        <h1>Register Yourself As a teacher</h1>
        <p className='text-danger'>Note: Your information will be transferred to Admin</p>
        <p className='text-info'>We will contact you as soon as possible.!!</p>

    <form action="https://getform.io/f/f72151a5-7195-4efc-8364-5d55faee6dd4" method="POST" enctype="multipart/form-data">
      
      <div class="form-group">
      <div class="form-group">
        <label for="file">Profile Picture</label>
        <input type="file" class="form-control-file" name="profilePicture" id="file"/>
      </div>
        <label for="full-name">Your Name</label>
        <input type="text" class="form-control" name="full-name" id="full-name" placeholder="Your name"/>
      </div>
      <div class="form-group">
        <label for="number">Email</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email"/>
      </div>
      <div class="form-group">
        <label for="text">Education</label>
        <input type="text" class="form-control" name="Education" id="Education" placeholder="Enter your Education"/>
      </div>
      <div class="form-group">
        <label for="number">Working Hours</label>
        <input type="number" class="form-control" name="Working Hours" id="Working Hours" placeholder="Enter your Working Hours"/>
      </div>
      <div class="form-group">
        <label for="text">Major</label>
        <input type="text" class="form-control" name="Major" id="Major" placeholder="Enter your Major"/>
      </div>
      <div class="form-group">
        <label for="text">Description</label>
        <input type="text" class="form-control" name="Description" id="Description" placeholder="Enter your Description"/>
      </div>
      <div class="form-group">
        <label for="number">Price</label>
        <input type="number" class="form-control" name="Price" id="Price" placeholder="Enter your Price"/>
      </div>
      <div class="form-group">
        <label for="work-experience">Work Experience</label>
        <select class="form-control" name="work-experience" id="work-experience">
          <option value="one-year">0-1 years</option>
          <option value="one-two-years">1-2 years</option>
          <option value="two-four-years">2-4 years</option>
          <option value="four-six-years">4-6 years</option>
          <option value="six+-years">6+ years</option>
        </select>
      </div>
      <div class="form-group">
        <label for="file">Upload CV</label>
        <input type="file" class="form-control-file" name="file" id="file"/>
      </div>
      <input type="hidden" name="_gotcha"/>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
  
  )
}

export default TeachersForm
