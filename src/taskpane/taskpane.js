/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

// The initialize function must be run each time a new page is loaded
Office.onReady(() => {
  document.getElementById("sideload-msg").style.display = "none";
  document.getElementById("app-body").style.display = "flex";
  document.getElementById("run").onclick = run;
});

export async function run() {
  try {
    console.log("SAVING");
    localStorage.setItem('freeai-aimodel', document.getElementById("modelname").value);
    localStorage.setItem('freeai-aibaseurl', document.getElementById("apiurl").value);
    localStorage.setItem('freeai-aiapikey', document.getElementById('apikey').value);
    document.getElementById("item-subject").innerHTML = "Saved!";
    setTimeout(() => document.getElementById("item-subject").innerHTML = "", 3000);
    
    /*await Excel.run(async (context) => {
      *
       * Insert your Excel code here
       
      const range = context.workbook.getSelectedRange();

      // Read the range address
      range.load("address");

      // Update the fill color
      range.format.fill.color = "yellow";

      await context.sync();
      console.log(`The range address was ${range.address}.`);
    });*/
  } catch (error) {
    console.error(error);
  }
}
