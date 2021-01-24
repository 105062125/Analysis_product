import React, {  useEffect, useState} from 'react';


function Name() {
  const [currentName, setCurrentName] = useState('none')

  

  const getName = () => {
    const payload = {'sentence':"this sentence is setting from react"}
    
    fetch('/testpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
       }).then(res => res.text())
      .then((data) => {
        data = JSON.parse(data);
        setCurrentName(data.content)
      })
    //   .catch((error) => {
    //     //這裡可以顯示一些訊息
    //     //console.error(error)
    //   })
  }

  useEffect(() => {
      getName()
  }, []);

  return (
      <div>
        <p>{currentName}.</p>
      </div>
  );
}


export default Name;