'use client'

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";



interface UserData {
  id:number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null >(null)

  useEffect(() => {

    if (WebApp.initDataUnsafe.user){
      setUserData(WebApp.initDataUnsafe.user as UserData)

    }


  },[])






  return (
    <main className="p-4">
      {userData ? (
        <div>
          <h1>Welcome, {userData.first_name}!</h1>
          <p>Username: {userData.username || "N/A"}</p>
          <p>Language: {userData.language_code}</p>
          {userData.is_premium && <p>Premium User</p>}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
