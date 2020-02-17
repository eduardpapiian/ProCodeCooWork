import React, {Component} from 'react';

class Landing extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('will mount!!')
  }
  componentDidMount() {
    console.log('did mount!!')
  }
  render(){
    return(
      <div className="landing">
        {this.props.children}
      </div>
    )
  }
}


export default Landing;
