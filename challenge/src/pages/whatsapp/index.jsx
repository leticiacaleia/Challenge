import React, { useState } from "react";


export default function WhatsApp() {
  const [phone , setPhone] = useState('')

  return (
    <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate">
          <label for="icon_telephone">Telephone</label>
        </div> 
  )
}

