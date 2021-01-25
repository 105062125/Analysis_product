import React, { useEffect, useState } from 'react';


function GetDbUser() {

  const [currentUserList, setUserList] = useState('Loading...')

  const getUser = () => {
    
    fetch('/get_all_user').then(res => res.text())
      .then((data) => {
        data = JSON.parse(data);
        // console.log(data)
        const UserList = data['user_list'].map((data) =>
          <li>{'Name:'+data[0]+', Email:'+data[1]}</li>
        );
        setUserList(UserList)
        // console.log("hi")
      })
  }

  useEffect(() => {
     getUser()
  }, []);

  return (
      <div>
        <ul>Name List in Database: {currentUserList}</ul>
      </div>
  );
}

export default GetDbUser;