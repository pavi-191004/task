
import React from 'react'

export const Errorhandling = () => {
    const user = {
  name: "Pavithra",
  address: {
    city: "Chennai"
  },
  profile: {
    email: "pavi@gmail.com"
  }
};
const email = user.profile?.email ?? "Email not available";
const phone = user.profile?.phone ?? "Phone not available";
return(
    <>
    {user.address?.city}
{user.address?.pincode}
{email}
{phone}
    </>
  

)

}



