// change this Component to a class!
class Category extends React.Component {
    constructor() {
        super()
    }
    // get data from props and use map to build an array of <li>
    // ... code goes here
    render() {
        const navibar = this.props.icons.map((result, index) => (
            <li className="cat-link left valign-wrapper" >
                <i className="material-icons">{result.icon}</i>
                {result.title}
            </li>
        ))

        return(
                /* Your Code Here */
            <div className="row">
                <ul className="cat-nav center-align">
                    {navibar}
                </ul>   
            </div>
        )
    }
}



// let navibar = data.map((result, index) => {
//     console.log(result)
//     return(
//       <Category key={index} data={result} />
//   )})
  
//   ReactDOM.render(
//       <div className="row">
//         {navibar}
//       </div>,
//     document.getElementById('root')
//   );
  