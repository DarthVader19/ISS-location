

function Number(){
    function shownum(data){
        // console.log(data);
        const {text }=data;
        

        document.querySelector(".para").innerHTML=` ${text};`;
      }

    const trivia=()=>{

        const num=document.querySelector(".input").value||(Math.floor(Math.random()*500));
        // console.log(num);
        fetch(`http://numbersapi.com/${num}/trivia?json`).then(res=>res.json()).then(data=>shownum(data));

        }

    return (
        <div>
            <h1>Still Bored!</h1>
            <h2> Try some MATH Trivia...</h2>
        <div className="trivia-d">
        <span>Enter a number to know fun fact</span>
        <div>
            <input className="input " type="number" placeholder="Enter a number" /> 
            <button onClick={trivia} 
            className='btn btn-secondary m-3 ' type="submit"> send</button> 
            </div>
            <p className="para fst-italic badge bg-secondary fs-3 text-wrap">
                Trivi
            </p>

     </div>
           <span></span> 
        </div>
    )
};

export default Number;