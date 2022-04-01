import React from 'react'


// r =(centerY -strokeWidth /2)
// center -eyeOffsetX

const App = () => {
    //height and width adalah tinggi dan lebar garis lingkaran dari pusat
   //cx = centerX --->adalah variabel pusat utkX diingkat cx
   //cy = centerY --->adalah variabel pusat utkY diingkat cy

   const width = 960
   const height = 500
   const centerX = width / 2
   const centerY = height / 2
   const strokeWidth = 20
   const eyeoffsetX = 90
   const eyeoffsetY = 50
   const radiusWidth = 35
  return (
    <>
     <svg width={width} height={height}>
         <circle cx={centerX}
           cy={centerY }
           r={centerY - strokeWidth/2}
           fill={"yellow"}
           stroke={"black"}
           strokeWidth ={strokeWidth}
         
         />
             
         <circle 
            cx={centerX -eyeoffsetX}
            cy ={centerY - eyeoffsetY}
            r={radiusWidth}
         />
         <circle 
            cx={centerX + eyeoffsetX}
            cy ={centerY - eyeoffsetY}
            r={radiusWidth}
         />



     </svg>
      
    </>
  )
}

export default App

/*
sumbu x dan y dimulai dari tepi atas kiri  (0,0) pada layar browser/body


*/