import React ,{Component} from "react"

class newPhoto extends Component{
 
  HandelSubmit= (event) => {
    event.preventDefault();
    const photoLink = event.target.elements.Link.value;
    const photoDesc = event.target.elements.Description.value;
    const post ={
      id:Number(new Date()),
      description:photoDesc,
      imageLink:photoLink
    }
    if(photoLink && photoDesc ){
      this.props.onSubmit(post)
    }

  }
  render(){
        return (
            <div>
              <h1>PhotoWall</h1>
              <form className="form" onSubmit={this.HandelSubmit}>
                <input type="text" placeholder="Link" name="Link"/>
                <input type="text" placeholder="Description" name="Description"/>
                <button>Submit</button>
              </form>
            </div>
          )
    }
}
export default newPhoto;